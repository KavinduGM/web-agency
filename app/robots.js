const SITE = "https://groovymarkwebx.com";

export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // Don't waste crawl budget on the internal API routes or Next.js
        // optimisation endpoints.  Search engines never benefit from indexing them.
        disallow: ["/api/", "/_next/"],
      },
      // Optional explicit Googlebot rule (keeps Google's signal strong even
      // if a future "*" rule is tightened).
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
    ],
    sitemap: `${SITE}/sitemap.xml`,
    host: SITE,
  };
}
