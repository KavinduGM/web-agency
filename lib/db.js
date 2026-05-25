// Singleton Prisma client for read access to the shared automation DB.
import { PrismaClient } from "../prisma/generated/client/index.js";

const g = globalThis;
export const prisma = g.__webxPrisma ?? new PrismaClient();
if (process.env.NODE_ENV !== "production") g.__webxPrisma = prisma;

// Every query is scoped by businessId — that's the multi-tenant boundary.
// Set BUSINESS_ID in .env.local. If unset, helpers below return empty arrays.
export const BUSINESS_ID = process.env.BUSINESS_ID ?? "";

// Where the automation assets are served from (set ASSETS_PUBLIC_URL in env).
// Falls back to /assets for local dev when Caddy proxies the volume directly.
const ASSETS_BASE = (process.env.ASSETS_PUBLIC_URL ?? "/assets").replace(/\/$/, "");
export function assetUrl(relPath) {
  if (!relPath) return null;
  if (/^https?:\/\//.test(relPath)) return relPath;
  // Stored paths look like "groovymark-webx/image/foo.png" OR are absolute
  // container paths like "/app/assets/groovymark-webx/image/foo.png".
  const cleaned = relPath.replace(/^\/app\/assets\//, "").replace(/^\/+/, "");
  return `${ASSETS_BASE}/${cleaned}`;
}

function ok() {
  if (!BUSINESS_ID) {
    if (process.env.NODE_ENV !== "production") {
      console.warn("[webx] BUSINESS_ID is not set — automation queries will return empty");
    }
    return false;
  }
  return true;
}

// Wraps a DB call so build-time / DB-down failures degrade to a sensible
// fallback instead of crashing the build or the page. Real read errors at
// runtime are still logged so we can see them in container logs.
async function safe(fn, fallback, label) {
  try {
    return await fn();
  } catch (err) {
    const msg = err?.message ?? String(err);
    // These are the failure modes we expect during `next build` (no DB) or
    // brief Postgres restarts — quiet them so the build log stays readable.
    const isConnectionFail =
      err?.code === "P1001" ||                       // can't reach server
      err?.code === "P1017" ||                       // server closed conn
      /Can't reach database server/i.test(msg) ||
      /ECONNREFUSED|ENOTFOUND|EAI_AGAIN/i.test(msg);
    if (!isConnectionFail) {
      console.error(`[webx db] ${label} failed:`, msg);
    } else if (process.env.NODE_ENV !== "production") {
      console.warn(`[webx db] ${label}: DB unreachable, returning fallback`);
    }
    return fallback;
  }
}

export async function listPosts({ take = 50 } = {}) {
  if (!ok()) return [];
  return safe(
    () => prisma.post.findMany({
      where: { businessId: BUSINESS_ID },
      orderBy: { publishedAt: "desc" },
      take,
    }),
    [],
    "listPosts",
  );
}
export async function getPost(slug) {
  if (!ok()) return null;
  return safe(
    () => prisma.post.findUnique({ where: { businessId_slug: { businessId: BUSINESS_ID, slug } } }),
    null,
    `getPost(${slug})`,
  );
}

export async function listCaseStudies({ take = 50 } = {}) {
  if (!ok()) return [];
  return safe(
    () => prisma.caseStudy.findMany({
      where: { businessId: BUSINESS_ID },
      orderBy: { publishedAt: "desc" },
      take,
    }),
    [],
    "listCaseStudies",
  );
}
export async function getCaseStudy(slug) {
  if (!ok()) return null;
  return safe(
    () => prisma.caseStudy.findUnique({ where: { businessId_slug: { businessId: BUSINESS_ID, slug } } }),
    null,
    `getCaseStudy(${slug})`,
  );
}

export async function listResources({ take = 50 } = {}) {
  if (!ok()) return [];
  return safe(
    () => prisma.resource.findMany({
      where: { businessId: BUSINESS_ID },
      orderBy: { publishedAt: "desc" },
      take,
    }),
    [],
    "listResources",
  );
}
export async function getResource(slug) {
  if (!ok()) return null;
  return safe(
    () => prisma.resource.findUnique({ where: { businessId_slug: { businessId: BUSINESS_ID, slug } } }),
    null,
    `getResource(${slug})`,
  );
}

export async function getLandingPage(slug) {
  if (!ok()) return null;
  return safe(
    () => prisma.landingPage.findUnique({ where: { businessId_slug: { businessId: BUSINESS_ID, slug } } }),
    null,
    `getLandingPage(${slug})`,
  );
}

export async function listAllSlugs() {
  const empty = { posts: [], caseStudies: [], resources: [], landingPages: [] };
  if (!ok()) return empty;
  return safe(
    async () => {
      const [posts, caseStudies, resources, landingPages] = await Promise.all([
        prisma.post.findMany({         where: { businessId: BUSINESS_ID }, select: { slug: true, publishedAt: true } }),
        prisma.caseStudy.findMany({    where: { businessId: BUSINESS_ID }, select: { slug: true, publishedAt: true } }),
        prisma.resource.findMany({     where: { businessId: BUSINESS_ID }, select: { slug: true, publishedAt: true } }),
        prisma.landingPage.findMany({  where: { businessId: BUSINESS_ID }, select: { slug: true, publishedAt: true } }),
      ]);
      return { posts, caseStudies, resources, landingPages };
    },
    empty,
    "listAllSlugs",
  );
}
