import { ALL_SERVICE_SLUGS } from "@/lib/services";
import { ALL_CASE_STUDY_SLUGS } from "@/lib/caseStudies";
import { listAllSlugs } from "@/lib/db";

const SITE = "https://webx.groovymark.com";

/**
 * Sitemap routes are tuned by SEO weight:
 *  - priority 1.0  → home
 *  - priority 0.9  → primary sales pages (services hub, /contact, /quote)
 *  - priority 0.8  → category pages, portfolio hub, about, blog/resources hubs
 *  - priority 0.7  → service detail pages, case studies, blog posts, resources
 *  - priority 0.6  → automation-published landing pages
 *  - priority 0.4  → legal pages
 */
export default async function sitemap() {
  const now = new Date();

  const high = [
    { path: "", priority: 1.0, changeFrequency: "weekly" },
    { path: "/services", priority: 0.9, changeFrequency: "weekly" },
    { path: "/contact", priority: 0.9, changeFrequency: "monthly" },
    { path: "/quote", priority: 0.9, changeFrequency: "monthly" },
  ];

  const medium = [
    { path: "/about", priority: 0.8, changeFrequency: "monthly" },
    { path: "/portfolio", priority: 0.8, changeFrequency: "weekly" },
    { path: "/blog", priority: 0.8, changeFrequency: "daily" },
    { path: "/resources", priority: 0.8, changeFrequency: "weekly" },
    { path: "/services/web-development", priority: 0.8, changeFrequency: "monthly" },
    { path: "/services/ai-automation", priority: 0.8, changeFrequency: "monthly" },
  ];

  const legal = [
    { path: "/privacy-policy", priority: 0.4, changeFrequency: "yearly" },
    { path: "/cookie-policy", priority: 0.4, changeFrequency: "yearly" },
    { path: "/terms-and-conditions", priority: 0.4, changeFrequency: "yearly" },
  ];

  const staticRoutes = [...high, ...medium, ...legal].map(({ path, priority, changeFrequency }) => ({
    url: `${SITE}${path}`,
    lastModified: now,
    changeFrequency,
    priority,
  }));

  const serviceRoutes = ALL_SERVICE_SLUGS.map((slug) => ({
    url: `${SITE}/services/${slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const caseStudyRoutes = ALL_CASE_STUDY_SLUGS.map((slug) => ({
    url: `${SITE}/portfolio/${slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  // Automation-published content (degrades gracefully if DB unavailable).
  let automation = { posts: [], caseStudies: [], resources: [], landingPages: [] };
  try { automation = await listAllSlugs(); } catch { /* offline-friendly */ }

  const blog = automation.posts.map((p) => ({
    url: `${SITE}/blog/${p.slug}`, lastModified: p.publishedAt, changeFrequency: "weekly", priority: 0.7,
  }));
  const cs = automation.caseStudies.map((c) => ({
    url: `${SITE}/case-studies/${c.slug}`, lastModified: c.publishedAt, changeFrequency: "monthly", priority: 0.7,
  }));
  const res = automation.resources.map((r) => ({
    url: `${SITE}/resources/${r.slug}`, lastModified: r.publishedAt, changeFrequency: "monthly", priority: 0.7,
  }));
  const lp = automation.landingPages.map((l) => ({
    url: `${SITE}/lp/${l.slug}`, lastModified: l.publishedAt, changeFrequency: "monthly", priority: 0.6,
  }));

  return [...staticRoutes, ...serviceRoutes, ...caseStudyRoutes, ...blog, ...cs, ...res, ...lp];
}
