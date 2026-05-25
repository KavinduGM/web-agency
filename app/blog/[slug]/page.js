import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import { getPost, listAllSlugs, assetUrl } from "@/lib/db";

export const revalidate = 60;

export async function generateStaticParams() {
  const { posts } = await listAllSlugs();
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const post = await getPost(params.slug);
  if (!post) return { title: "Not found" };
  return { title: post.title, description: post.excerpt || undefined };
}

export default async function BlogPost({ params }) {
  const post = await getPost(params.slug);
  if (!post) notFound();
  return (
    <article className="mx-auto max-w-3xl px-4 py-16 prose prose-zinc prose-headings:font-semibold">
      <div className="text-xs text-gray-500 mb-1">{new Date(post.publishedAt).toLocaleDateString()}</div>
      <h1>{post.title}</h1>
      {post.coverImagePath && (
        // Served by Caddy from the shared assets volume (ASSETS_PUBLIC_URL).
        <img src={assetUrl(post.coverImagePath)} alt={post.title} className="rounded-lg" />
      )}
      <ReactMarkdown>{post.bodyMd}</ReactMarkdown>
    </article>
  );
}
