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

export async function listPosts({ take = 50 } = {}) {
  if (!ok()) return [];
  return prisma.post.findMany({
    where: { businessId: BUSINESS_ID },
    orderBy: { publishedAt: "desc" },
    take,
  });
}
export async function getPost(slug) {
  if (!ok()) return null;
  return prisma.post.findUnique({ where: { businessId_slug: { businessId: BUSINESS_ID, slug } } });
}

export async function listCaseStudies({ take = 50 } = {}) {
  if (!ok()) return [];
  return prisma.caseStudy.findMany({
    where: { businessId: BUSINESS_ID },
    orderBy: { publishedAt: "desc" },
    take,
  });
}
export async function getCaseStudy(slug) {
  if (!ok()) return null;
  return prisma.caseStudy.findUnique({ where: { businessId_slug: { businessId: BUSINESS_ID, slug } } });
}

export async function listResources({ take = 50 } = {}) {
  if (!ok()) return [];
  return prisma.resource.findMany({
    where: { businessId: BUSINESS_ID },
    orderBy: { publishedAt: "desc" },
    take,
  });
}
export async function getResource(slug) {
  if (!ok()) return null;
  return prisma.resource.findUnique({ where: { businessId_slug: { businessId: BUSINESS_ID, slug } } });
}

export async function getLandingPage(slug) {
  if (!ok()) return null;
  return prisma.landingPage.findUnique({ where: { businessId_slug: { businessId: BUSINESS_ID, slug } } });
}

export async function listAllSlugs() {
  if (!ok()) return { posts: [], caseStudies: [], resources: [], landingPages: [] };
  const [posts, caseStudies, resources, landingPages] = await Promise.all([
    prisma.post.findMany({         where: { businessId: BUSINESS_ID }, select: { slug: true, publishedAt: true } }),
    prisma.caseStudy.findMany({    where: { businessId: BUSINESS_ID }, select: { slug: true, publishedAt: true } }),
    prisma.resource.findMany({     where: { businessId: BUSINESS_ID }, select: { slug: true, publishedAt: true } }),
    prisma.landingPage.findMany({  where: { businessId: BUSINESS_ID }, select: { slug: true, publishedAt: true } }),
  ]);
  return { posts, caseStudies, resources, landingPages };
}
