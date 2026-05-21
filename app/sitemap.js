import { ALL_SERVICE_SLUGS } from "@/lib/services";
import { ALL_CASE_STUDY_SLUGS } from "@/lib/caseStudies";

const SITE = "https://groovymarkwebx.com";

/**
 * Sitemap routes are tuned by SEO weight:
 *  - priority 1.0  → home
 *  - priority 0.9  → primary sales pages (services hub, /contact, /quote)
 *  - priority 0.8  → category pages, portfolio hub, about
 *  - priority 0.7  → service detail pages, case studies
 *  - priority 0.4  → legal pages
 */
export default function sitemap() {
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
    { path: "/services/web-development", priority: 0.8, changeFrequency: "monthly" },
    { path: "/services/ai-automation", priority: 0.8, changeFrequency: "monthly" },
  ];

  const legal = [
    { path: "/privacy-policy", priority: 0.4, changeFrequency: "yearly" },
    { path: "/cookie-policy", priority: 0.4, changeFrequency: "yearly" },
    { path: "/terms-and-conditions", priority: 0.4, changeFrequency: "yearly" },
  ];

  const staticRoutes = [...high, ...medium, ...legal].map(
    ({ path, priority, changeFrequency }) => ({
      url: `${SITE}${path}`,
      lastModified: now,
      changeFrequency,
      priority,
    })
  );

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

  return [...staticRoutes, ...serviceRoutes, ...caseStudyRoutes];
}
