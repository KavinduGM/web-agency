import Link from "next/link";
import { listPosts, assetUrl } from "@/lib/db";
import { SITE_URL, SITE_NAME, DEFAULT_OG_IMAGE } from "@/lib/seo";
import JsonLdScript from "@/components/JsonLdScript";

export const revalidate = 60;

export const metadata = {
  title: "Blog — Insights on Web Development & AI Automation",
  description: "Practical articles on web development, AI automation, SEO, and B2B growth from the GroovyMark WebX team.",
  alternates: { canonical: `${SITE_URL}/blog` },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/blog`,
    siteName: SITE_NAME,
    title: "Blog — GroovyMark WebX",
    description: "Practical articles on web development, AI automation, SEO, and B2B growth.",
    images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", title: "GroovyMark WebX Blog" },
  robots: { index: true, follow: true },
};

export default async function BlogIndex() {
  const posts = await listPosts({ take: 50 });

  // Blog (CollectionPage) → ItemList of BlogPosting summaries.
  const ld = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: `${SITE_NAME} Blog`,
    url: `${SITE_URL}/blog`,
    blogPost: posts.map((p) => ({
      "@type": "BlogPosting",
      headline: p.metaTitle || p.title,
      url: `${SITE_URL}/blog/${p.slug}`,
      datePublished: new Date(p.publishedAt).toISOString(),
      author: { "@type": "Person", name: p.authorName || SITE_NAME },
      image: p.ogImagePath ? assetUrl(p.ogImagePath) : undefined,
    })),
  };

  return (
    <>
      <JsonLdScript data={ld} />
      <main className="mx-auto max-w-5xl px-4 py-16">
        <h1 className="text-3xl font-bold mb-2">Blog</h1>
        <p className="text-gray-600 mb-8">Practical notes on web, automation, and growth.</p>
        {posts.length === 0 && (
          <div className="rounded border border-dashed p-8 text-sm text-gray-500">
            No posts yet. The automation system will publish here.
          </div>
        )}
        <div className="grid gap-6 md:grid-cols-2">
          {posts.map((p) => (
            <Link key={p.id} href={`/blog/${p.slug}`} className="block rounded-lg border p-5 hover:shadow-md transition">
              <div className="text-xs text-gray-500 mb-1">
                {new Date(p.publishedAt).toLocaleDateString()}
                {p.readingMinutes ? ` · ${p.readingMinutes} min` : ""}
              </div>
              <h2 className="font-semibold text-lg leading-snug mb-1">{p.metaTitle || p.title}</h2>
              {(p.metaDescription || p.excerpt) && (
                <p className="text-sm text-gray-600 line-clamp-3">{p.metaDescription || p.excerpt}</p>
              )}
            </Link>
          ))}
        </div>
      </main>
    </>
  );
}
