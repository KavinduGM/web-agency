/**
 * JSON-LD structured data helpers.
 *
 * Each helper renders a single <script type="application/ld+json"> block.
 * Compose multiple helpers on a page to expose all relevant schemas:
 *   <OrganizationJsonLd />
 *   <WebSiteJsonLd />
 *   <BreadcrumbJsonLd items={...} />
 *   <ServiceJsonLd service={...} />
 *   <ArticleJsonLd article={...} />
 *   <FAQJsonLd questions={...} />
 *
 * Read about each schema:
 *   https://schema.org/Organization
 *   https://schema.org/WebSite
 *   https://schema.org/BreadcrumbList
 *   https://schema.org/Service
 *   https://schema.org/Article
 *   https://schema.org/FAQPage
 *   https://schema.org/ItemList
 */

const SITE_URL = "https://groovymarkwebx.com";

function Script({ data }) {
  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

/* ─────────────── Organization ─────────────── */

export function OrganizationJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}#organization`,
    name: "GroovyMark WebX",
    legalName: "GroovyMark PVT Ltd",
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/logo.png`,
      width: 1000,
      height: 500,
    },
    image: `${SITE_URL}/favicon.png`,
    description:
      "Web development and AI automation agency building digital products for global B2B clients — websites, eCommerce, custom systems, AI agents, and workflow automation.",
    foundingDate: "2019",
    slogan: "We build the digital products that move B2B businesses forward.",
    sameAs: [
      "https://www.linkedin.com/company/groovymark-webx",
      "https://twitter.com/groovymarkwebx",
      "https://youtube.com/@groovymarkwebx",
      "https://github.com/groovymarkwebx",
      "https://instagram.com/groovymarkwebx",
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "sales",
        email: "webx@groovymark.com",
        telephone: "+94-71-234-5222",
        areaServed: "Worldwide",
        availableLanguage: ["English"],
      },
      {
        "@type": "ContactPoint",
        contactType: "customer support",
        email: "webx@groovymark.com",
        areaServed: "Worldwide",
        availableLanguage: ["English"],
      },
    ],
    address: [
      {
        "@type": "PostalAddress",
        addressLocality: "Colombo",
        addressCountry: "LK",
        addressRegion: "Western Province",
      },
      {
        "@type": "PostalAddress",
        addressLocality: "Perth",
        addressRegion: "Western Australia",
        addressCountry: "AU",
      },
    ],
    areaServed: [
      { "@type": "Country", name: "United States" },
      { "@type": "Country", name: "United Kingdom" },
      { "@type": "Country", name: "Canada" },
      { "@type": "Country", name: "Australia" },
      { "@type": "Country", name: "New Zealand" },
      { "@type": "Country", name: "Sri Lanka" },
    ],
    knowsAbout: [
      "Web development",
      "AI automation",
      "Custom CRM development",
      "eCommerce platforms",
      "AI chatbots",
      "Workflow automation",
      "API development",
      "ERP integration",
      "Predictive analytics",
    ],
  };
  return <Script data={data} />;
}

/* ─────────────── WebSite (with sitelinks search box hint) ─────────────── */

export function WebSiteJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}#website`,
    url: SITE_URL,
    name: "GroovyMark WebX",
    description:
      "Web development and AI automation for global B2B teams.",
    publisher: { "@id": `${SITE_URL}#organization` },
    inLanguage: "en",
  };
  return <Script data={data} />;
}

/* ─────────────── Breadcrumb ─────────────── */

export function BreadcrumbJsonLd({ items }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: it.url.startsWith("http") ? it.url : `${SITE_URL}${it.url}`,
    })),
  };
  return <Script data={data} />;
}

/* ─────────────── Service ─────────────── */

export function ServiceJsonLd({ service }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.description,
    provider: { "@id": `${SITE_URL}#organization` },
    serviceType:
      service.category === "web-development"
        ? "Web Development"
        : "AI & Automation",
    url: `${SITE_URL}/services/${service.slug}`,
    image: service.image?.startsWith("http")
      ? service.image
      : `${SITE_URL}${service.image}`,
    areaServed: "Worldwide",
    audience: { "@type": "BusinessAudience", name: "B2B" },
  };
  return <Script data={data} />;
}

/* ─────────────── Article (for case studies + legal pages) ─────────────── */

export function ArticleJsonLd({ article }) {
  const {
    title,
    description,
    image,
    url,
    datePublished,
    dateModified,
    author = "GroovyMark WebX",
    section,
  } = article;
  const data = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    image: image
      ? image.startsWith("http")
        ? image
        : `${SITE_URL}${image}`
      : undefined,
    author: { "@type": "Organization", name: author },
    publisher: { "@id": `${SITE_URL}#organization` },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    url,
    datePublished,
    dateModified: dateModified || datePublished,
    articleSection: section,
  };
  return <Script data={data} />;
}

/* ─────────────── FAQ ─────────────── */

export function FAQJsonLd({ questions }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: questions.map((q) => ({
      "@type": "Question",
      name: q.q,
      acceptedAnswer: { "@type": "Answer", text: q.a },
    })),
  };
  return <Script data={data} />;
}

/* ─────────────── ItemList (used for the services hub and category pages) ─────────────── */

export function ItemListJsonLd({ name, items }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name,
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      url: it.url.startsWith("http") ? it.url : `${SITE_URL}${it.url}`,
    })),
  };
  return <Script data={data} />;
}

/* ─────────────── CollectionPage (for portfolio + services hub) ─────────────── */

export function CollectionPageJsonLd({ name, description, url, items }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name,
    description,
    url: url.startsWith("http") ? url : `${SITE_URL}${url}`,
    isPartOf: { "@id": `${SITE_URL}#website` },
    publisher: { "@id": `${SITE_URL}#organization` },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: items.map((it, i) => ({
        "@type": "ListItem",
        position: i + 1,
        url: it.url.startsWith("http") ? it.url : `${SITE_URL}${it.url}`,
        name: it.name,
      })),
    },
  };
  return <Script data={data} />;
}
