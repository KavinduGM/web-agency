import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import { getPost, listAllSlugs, assetUrl } from "@/lib/db";
import { buildMetadata, blogPostingLd, breadcrumbLd, SITE_URL } from "@/lib/seo";
import JsonLdScript from "@/components/JsonLdScript";

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

  const ld = [
    blogPostingLd({ row: post, path: `/blog/${post.slug}` }),
    breadcrumbLd([
      { name: "Home", url: SITE_URL },
      { name: "Blog", url: "/blog" },
      { name: post.title, url: `/blog/${post.slug}` },
    ]),
  ];

  return (
    <>
      <JsonLdScript data={ld} />
      <article className="mx-auto max-w-3xl px-4 py-16 prose prose-zinc prose-headings:font-semibold">
        <nav aria-label="Breadcrumb" className="not-prose text-xs text-gray-500 mb-4">
          <a href="/" className="hover:underline">Home</a> ›{" "}
          <a href="/blog" className="hover:underline">Blog</a> ›{" "}
          <span aria-current="page">{post.title}</span>
        </nav>
        <header className="not-prose mb-6">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">{post.title}</h1>
          <div className="mt-2 text-sm text-gray-500 flex flex-wrap items-center gap-2">
            <time dateTime={new Date(post.publishedAt).toISOString()}>
              {new Date(post.publishedAt).toLocaleDateString(undefined, { year: "numeric", month: "long", day: "numeric" })}
            </time>
            {post.readingMinutes ? <><span>·</span><span>{post.readingMinutes} min read</span></> : null}
            {post.authorName ? <><span>·</span><span>By {post.authorName}</span></> : null}
          </div>
        </header>
        {post.coverImagePath && (
          <img
            src={assetUrl(post.coverImagePath)}
            alt={post.ogImageAlt || post.title}
            className="rounded-lg w-full h-auto"
            loading="eager"
            decoding="async"
          />
        )}
        <ReactMarkdown>{post.bodyMd}</ReactMarkdown>
        {post.tags?.length > 0 && (
          <div className="not-prose mt-8 flex flex-wrap gap-2">
            {post.tags.map((t) => (
              <span key={t} className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-700">#{t}</span>
            ))}
          </div>
        )}
      </article>
    </>
  );
}
