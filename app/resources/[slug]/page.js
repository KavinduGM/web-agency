import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import { getResource, listAllSlugs, assetUrl } from "@/lib/db";

export const revalidate = 60;

export async function generateStaticParams() {
  const { resources } = await listAllSlugs();
  return resources.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({ params }) {
  const r = await getResource(params.slug);
  if (!r) return { title: "Not found" };
  return { title: r.title };
}

export default async function ResourcePage({ params }) {
  const r = await getResource(params.slug);
  if (!r) notFound();
  return (
    <article className="mx-auto max-w-3xl px-4 py-16 prose prose-zinc">
      <div className="text-xs uppercase tracking-wide text-gray-500">{r.kind}</div>
      <h1>{r.title}</h1>
      <ReactMarkdown>{r.bodyMd}</ReactMarkdown>
      {r.downloadPath && (
        <p><a href={assetUrl(r.downloadPath)} className="btn-primary inline-block mt-4">Download</a></p>
      )}
    </article>
  );
}
