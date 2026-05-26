// On-demand ISR revalidation hook.
//
// The Content Automation system calls this on publish, rollback, unpublish,
// and delete so the `/blog` index + the individual `/blog/<slug>` page
// invalidate their cached HTML immediately. Without this, the index card
// can linger for up to 60s after a rollback — visitors clicking it land
// on a 404, which is exactly the SEO-poisoning gap we want to close.
//
// Auth model: shared secret in `REVALIDATE_SECRET`. Same value lives on the
// automation side. Header `x-revalidate-secret` is required; without it the
// route returns 401 so casual scanners can't trigger cache invalidation.

import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

const ALLOWED_PATHS = [
  "/",
  "/blog",
  "/case-studies",
  "/resources",
  /^\/blog\/[a-z0-9-]+$/,
  /^\/case-studies\/[a-z0-9-]+$/,
  /^\/resources\/[a-z0-9-]+$/,
  /^\/lp\/[a-z0-9-]+$/,
  "/sitemap.xml",
];

function pathAllowed(p) {
  if (typeof p !== "string" || !p.startsWith("/")) return false;
  return ALLOWED_PATHS.some((m) => (typeof m === "string" ? m === p : m.test(p)));
}

async function handle(req) {
  const secret = process.env.REVALIDATE_SECRET;
  if (!secret) return NextResponse.json({ error: "revalidate not configured" }, { status: 503 });

  const provided = req.headers.get("x-revalidate-secret");
  if (!provided || provided !== secret) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }

  // Accept either single ?path=/blog or comma-separated ?paths=/blog,/blog/foo,
  // OR a JSON body { paths: [...] } for POST. JSON makes it easy to revalidate
  // many slugs in one call from the automation worker.
  let paths = [];
  if (req.method === "POST") {
    try {
      const body = await req.json();
      if (Array.isArray(body?.paths)) paths = body.paths;
      else if (typeof body?.path === "string") paths = [body.path];
    } catch {
      /* fall through to query-string parsing */
    }
  }
  if (paths.length === 0) {
    const url = new URL(req.url);
    const p = url.searchParams.get("path");
    const ps = url.searchParams.get("paths");
    if (p) paths.push(p);
    if (ps) paths.push(...ps.split(",").map((s) => s.trim()).filter(Boolean));
  }

  const revalidated = [];
  const rejected = [];
  for (const p of paths) {
    if (!pathAllowed(p)) {
      rejected.push(p);
      continue;
    }
    try {
      revalidatePath(p);
      revalidated.push(p);
    } catch (err) {
      rejected.push(p);
    }
  }

  return NextResponse.json({
    revalidated,
    rejected,
    at: new Date().toISOString(),
  });
}

export async function POST(req) { return handle(req); }
export async function GET(req)  { return handle(req); }
