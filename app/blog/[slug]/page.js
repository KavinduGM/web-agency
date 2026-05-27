import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, User, Sparkles } from "lucide-react";
import { getPost, listAllSlugs, assetUrl, listPosts } from "@/lib/db";
import {
  buildMetadata,
  blogPostingLd,
  breadcrumbLd,
  faqPageLd,
  SITE_URL,
  SITE_NAME,
} from "@/lib/seo";
import JsonLdScript from "@/components/JsonLdScript";
import BlogArticleBody from "@/components/BlogArticleBody";
import BlogFAQ from "@/components/BlogFAQ";
import CTASection from "@/components/CTASection";
import { FadeIn } from "@/components/Section";
import BlogCard from "@/components/BlogCard";

export const revalidate = 60;

export async function generateStaticParams() {
  const { posts } = await listAllSlugs();
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const post = await getPost(params.slug);
  if (!post) return { title: "Not found", robots: { index: false } };
  return buildMetadata({
    row: post,
    path: `/blog/${post.slug}`,
    fallbackTitle: post.title,
    type: "article",
  });
}

export default async function BlogPost({ params }) {
  const post = await getPost(params.slug);
  if (!post) notFound();

  const cover = post.coverImagePath ? assetUrl(post.coverImagePath) : null;
  const inlineImages = Array.isArray(post.inlineImages) ? post.inlineImages : [];
  const faq = Array.isArray(post.faq) ? post.faq : [];

  // Related posts — surface 3 sibling articles for engagement + internal linking.
  const all = await listPosts({ take: 12 });
  const related = all.filter((p) => p.slug !== post.slug).slice(0, 3);

  const ld = [
    blogPostingLd({ row: post, path: `/blog/${post.slug}` }),
    breadcrumbLd([
      { name: "Home", url: SITE_URL },
      { name: "Blog", url: "/blog" },
      { name: post.title, url: `/blog/${post.slug}` },
    ]),
    faqPageLd(faq),
  ];

  return (
    <>
      <JsonLdScript data={ld} />

      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-10 lg:pt-40 lg:pb-12 overflow-hidden">
        <div className="absolute inset-0 bg-grid bg-grid-fade opacity-50" />
        <div className="blob bg-brand-300 w-[30rem] h-[30rem] -top-28 -right-20 animate-blob" />

        <div className="container-x relative">
          <FadeIn className="max-w-3xl mx-auto text-center">
            <nav
              aria-label="Breadcrumb"
              className="flex items-center justify-center gap-1.5 text-xs text-slate-500 mb-6"
            >
              <Link href="/" className="hover:text-brand-600">Home</Link>
              <span>›</span>
              <Link href="/blog" className="hover:text-brand-600">Blog</Link>
              <span>›</span>
              <span className="text-slate-700 truncate max-w-[280px]" aria-current="page">
                {post.title}
              </span>
            </nav>

            {post.tags?.[0] && (
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-brand-100 text-brand-700 text-xs font-semibold uppercase tracking-wider shadow-sm">
                <Sparkles className="w-3.5 h-3.5" /> {post.tags[0]}
              </span>
            )}

            <h1 className="mt-5 font-display font-extrabold text-3xl md:text-5xl lg:text-6xl tracking-tight leading-[1.05] text-slate-900">
              {post.title}
            </h1>

            {(post.metaDescription || post.excerpt) && (
              <p className="mt-6 text-slate-600 text-lg leading-relaxed max-w-2xl mx-auto">
                {post.metaDescription || post.excerpt}
              </p>
            )}

            <div className="mt-7 flex flex-wrap items-center justify-center gap-4 text-sm text-slate-500">
              <span className="inline-flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-brand-600" />
                <time dateTime={new Date(post.publishedAt).toISOString()}>
                  {new Date(post.publishedAt).toLocaleDateString(undefined, {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
              </span>
              {post.readingMinutes ? (
                <>
                  <span className="text-slate-300">·</span>
                  <span className="inline-flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-brand-600" />
                    {post.readingMinutes} min read
                  </span>
                </>
              ) : null}
              {post.authorName ? (
                <>
                  <span className="text-slate-300">·</span>
                  <span className="inline-flex items-center gap-1.5">
                    <User className="w-4 h-4 text-brand-600" />
                    By {post.authorUrl ? (
                      <Link href={post.authorUrl} className="hover:text-brand-700 font-medium">
                        {post.authorName}
                      </Link>
                    ) : (
                      <span className="font-medium">{post.authorName}</span>
                    )}
                    {post.authorRole ? (
                      <span className="text-slate-500">, {post.authorRole}</span>
                    ) : null}
                  </span>
                </>
              ) : null}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Cover banner ─────────────────────────────────────────────── */}
      {/* aspect-[3/2] matches the gpt-image-1 source (1536×1024). Was
          aspect-[16/8] (2:1) which cropped the brand headline at the edges.
          object-contain preserves the safe-zone composition the automation
          tool builds covers around (white background blends seamlessly). */}
      {cover && (
        <section className="px-4">
          <FadeIn className="max-w-5xl mx-auto">
            <div className="relative aspect-[3/2] rounded-3xl overflow-hidden border border-slate-200 shadow-card bg-white">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={cover}
                alt={post.ogImageAlt || post.title}
                loading="eager"
                decoding="async"
                className="w-full h-full object-contain"
              />
            </div>
          </FadeIn>
        </section>
      )}

      {/* ── Article body ─────────────────────────────────────────────── */}
      <article className="section pt-12 lg:pt-16">
        <div className="container-x">
          <div className="max-w-3xl mx-auto">
            <BlogArticleBody bodyMd={post.bodyMd} inlineImages={inlineImages} />

            {/* Tags */}
            {post.tags?.length > 0 && (
              <div className="mt-12 flex flex-wrap gap-2 border-t border-slate-200 pt-8">
                {post.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-brand-50 px-3 py-1 text-xs font-medium text-brand-700 border border-brand-100"
                  >
                    #{t}
                  </span>
                ))}
              </div>
            )}

            {/* FAQ */}
            <BlogFAQ items={faq} />

            {/* Back link */}
            <div className="mt-12">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-sm font-semibold text-brand-700 hover:text-brand-800"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to all articles
              </Link>
            </div>
          </div>
        </div>
      </article>

      {/* ── Related articles ─────────────────────────────────────────── */}
      {related.length > 0 && (
        <section className="section pt-4 pb-8">
          <div className="container-x">
            <div className="max-w-6xl mx-auto">
              <h2 className="font-display font-extrabold text-2xl md:text-3xl text-slate-900 mb-8">
                Keep reading
              </h2>
              <div className="grid gap-6 md:grid-cols-3">
                {related.map((p) => <BlogCard key={p.id} post={p} />)}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── End CTA ──────────────────────────────────────────────────── */}
      <CTASection
        eyebrow={`Continue with ${SITE_NAME}`}
        title="Want this kind of clarity built into your product?"
        description="Tell us about your project — we'll come back within one business day with ideas, rough scope, and a clear next step."
      />
    </>
  );
}
