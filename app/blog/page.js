import { Sparkles } from "lucide-react";
import { listPosts, assetUrl } from "@/lib/db";
import { SITE_URL, SITE_NAME, DEFAULT_OG_IMAGE } from "@/lib/seo";
import { SectionHeader, FadeIn } from "@/components/Section";
import CTASection from "@/components/CTASection";
import BlogCard from "@/components/BlogCard";
import JsonLdScript from "@/components/JsonLdScript";

export const revalidate = 60;

export const metadata = {
  title: "Blog — Insights on Web Development, AI & B2B Growth",
  description:
    "Practical articles on web development, AI automation, SEO, and B2B growth from the GroovyMark WebX team — frameworks, stack choices, and lessons we learned shipping production software.",
  keywords: [
    "web development blog",
    "AI automation blog",
    "B2B SaaS blog",
    "Next.js blog",
    "agency blog",
    "GroovyMark WebX",
  ],
  alternates: { canonical: `${SITE_URL}/blog` },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/blog`,
    siteName: SITE_NAME,
    title: "Blog — GroovyMark WebX",
    description:
      "Practical articles on web development, AI automation, SEO, and B2B growth.",
    images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", title: "GroovyMark WebX Blog" },
  robots: { index: true, follow: true },
};

export default async function BlogIndex() {
  const posts = await listPosts({ take: 60 });

  // JSON-LD: Blog + ItemList for stronger sitelinks signals.
  const ld = [
    {
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
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
      ],
    },
  ];

  return (
    <>
      <JsonLdScript data={ld} />

      {/* Hero */}
      <section className="relative pt-32 pb-12 lg:pt-44 lg:pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-grid bg-grid-fade opacity-50" />
        <div className="blob bg-brand-300 w-[34rem] h-[34rem] -top-32 -left-16 animate-blob" />
        <div className="container-x relative">
          <FadeIn className="max-w-3xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-brand-100 text-brand-700 text-xs font-semibold uppercase tracking-wider shadow-sm">
              <Sparkles className="w-3.5 h-3.5" /> Insights & playbooks
            </span>
            <h1 className="mt-5 font-display font-extrabold text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.05] text-slate-900">
              Practical notes on web, AI, and B2B growth.
            </h1>
            <p className="mt-6 text-slate-600 text-lg leading-relaxed max-w-2xl mx-auto">
              Frameworks we use, mistakes we made, and decisions we'd make again —
              written by the engineers shipping the work.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Posts grid */}
      <section className="section pt-6 pb-10">
        <div className="container-x">
          <SectionHeader
            align="left"
            className="mx-0"
            eyebrow="Latest articles"
            title="From the engineering desk"
            description="Long-form thinking on the same topics we ship for clients every week."
          />

          {posts.length === 0 ? (
            <div className="mt-12 rounded-3xl border border-dashed border-slate-200 bg-white p-16 text-center">
              <p className="text-slate-500">
                No posts yet — the first batch is on the way.
              </p>
            </div>
          ) : (
            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((p, i) => (
                <FadeIn key={p.id} delay={Math.min(i, 6) * 0.05}>
                  <BlogCard post={p} />
                </FadeIn>
              ))}
            </div>
          )}
        </div>
      </section>

      <CTASection
        eyebrow="Let's ship together"
        title="Want this kind of clarity — built into your product?"
        description="Tell us what you're shipping. We'll come back within one business day with a rough scope and a clear next step."
      />
    </>
  );
}
