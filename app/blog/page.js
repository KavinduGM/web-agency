import Link from "next/link";
import { listPosts } from "@/lib/db";

export const revalidate = 60; // ISR: refresh once a minute

export const metadata = {
  title: "Blog",
  description: "Insights on web development, AI automation, and B2B growth from GroovyMark WebX.",
};

export default async function BlogIndex() {
  const posts = await listPosts({ take: 50 });
  return (
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
            <div className="text-xs text-gray-500 mb-1">{new Date(p.publishedAt).toLocaleDateString()}</div>
            <h2 className="font-semibold text-lg leading-snug mb-1">{p.title}</h2>
            {p.excerpt && <p className="text-sm text-gray-600 line-clamp-3">{p.excerpt}</p>}
          </Link>
        ))}
      </div>
    </main>
  );
}
