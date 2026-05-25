// Centralized SEO helpers used by the dynamic content routes.
// Mirrors the fields the automation system writes to Post/CaseStudy/Resource/LandingPage.

import { assetUrl } from "./db";

export const SITE_URL = (process.env.SITE_URL ?? "https://webx.groovymark.com").replace(/\/$/, "");
export const SITE_NAME = "GroovyMark WebX";
export const TWITTER_HANDLE = "@groovymark";
export const DEFAULT_AUTHOR = { name: "GroovyMark WebX", url: SITE_URL };
export const DEFAULT_OG_IMAGE = `${SITE_URL}/og-default.png`; // create at /public/og-default.png

/** Build a Next.js `metadata` object from a published row + the current path. */
export function buildMetadata({ row, path, fallbackTitle, fallbackDescription, type = "article" }) {
  const title = row?.metaTitle || row?.title || fallbackTitle;
  const description = row?.metaDescription || row?.excerpt || fallbackDescription || "";
  const canonical = `${SITE_URL}${row?.canonicalPath || path}`;
  const ogImage = row?.ogImagePath ? assetUrl(row.ogImagePath) : DEFAULT_OG_IMAGE;
  const ogImageAlt = row?.ogImageAlt || title;

  return {
    title,
    description,
    keywords: row?.keywords?.length ? row.keywords.join(", ") : undefined,
    alternates: { canonical },
    openGraph: {
      type,
      url: canonical,
      title,
      description,
      siteName: SITE_NAME,
      images: [{ url: ogImage, width: 1200, height: 630, alt: ogImageAlt }],
      locale: "en_US",
      publishedTime: row?.publishedAt?.toISOString?.(),
      modifiedTime: row?.updatedAt?.toISOString?.(),
      authors: row?.authorName ? [row.authorName] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      site: TWITTER_HANDLE,
      title,
      description,
      images: [ogImage],
    },
    robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
    authors: row?.authorName ? [{ name: row.authorName, url: row.authorUrl ?? undefined }] : undefined,
  };
}

// ─────────────────────── JSON-LD builders ───────────────────────────────

export function blogPostingLd({ row, path }) {
  const url = `${SITE_URL}${row.canonicalPath || path}`;
  const image = row.ogImagePath ? assetUrl(row.ogImagePath) : DEFAULT_OG_IMAGE;
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    headline: row.metaTitle || row.title,
    description: row.metaDescription || row.excerpt || "",
    image: [image],
    datePublished: row.publishedAt?.toISOString?.(),
    dateModified: (row.updatedAt ?? row.publishedAt)?.toISOString?.(),
    author: {
      "@type": "Person",
      name: row.authorName || DEFAULT_AUTHOR.name,
      url: row.authorUrl || DEFAULT_AUTHOR.url,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
      logo: { "@type": "ImageObject", url: `${SITE_URL}/logo.png` },
    },
    keywords: (row.keywords ?? []).join(", "),
    articleSection: row.tags?.[0],
    wordCount: countWords(row.bodyMd),
    timeRequired: row.readingMinutes ? `PT${row.readingMinutes}M` : undefined,
  };
}

export function caseStudyLd({ row, path }) {
  const url = `${SITE_URL}${row.canonicalPath || path}`;
  const image = row.ogImagePath ? assetUrl(row.ogImagePath) : DEFAULT_OG_IMAGE;
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": url,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    headline: row.metaTitle || row.title,
    description: row.metaDescription || row.metric,
    image: [image],
    datePublished: row.publishedAt?.toISOString?.(),
    dateModified: (row.updatedAt ?? row.publishedAt)?.toISOString?.(),
    about: { "@type": "Organization", name: row.clientName },
    author: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
    publisher: { "@type": "Organization", name: SITE_NAME, url: SITE_URL, logo: { "@type": "ImageObject", url: `${SITE_URL}/logo.png` } },
    keywords: (row.keywords ?? []).join(", "),
    timeRequired: row.readingMinutes ? `PT${row.readingMinutes}M` : undefined,
  };
}

export function resourceLd({ row, path }) {
  const url = `${SITE_URL}${row.canonicalPath || path}`;
  const image = row.ogImagePath ? assetUrl(row.ogImagePath) : DEFAULT_OG_IMAGE;
  return {
    "@context": "https://schema.org",
    "@type": row.kind === "guide" ? "Article" : "CreativeWork",
    "@id": url,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    headline: row.metaTitle || row.title,
    description: row.metaDescription || "",
    image: [image],
    datePublished: row.publishedAt?.toISOString?.(),
    dateModified: (row.updatedAt ?? row.publishedAt)?.toISOString?.(),
    author: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
    publisher: { "@type": "Organization", name: SITE_NAME, url: SITE_URL, logo: { "@type": "ImageObject", url: `${SITE_URL}/logo.png` } },
    keywords: (row.keywords ?? []).join(", "),
  };
}

export function faqPageLd(items) {
  if (!Array.isArray(items) || items.length === 0) return null;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((it) => ({
      "@type": "Question",
      name: it.q,
      acceptedAnswer: { "@type": "Answer", text: it.a },
    })),
  };
}

export function breadcrumbLd(crumbs /* [{ name, url }] */) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: c.url.startsWith("http") ? c.url : `${SITE_URL}${c.url}`,
    })),
  };
}

function countWords(s) {
  if (!s) return 0;
  return (s.match(/\S+/g) ?? []).length;
}
