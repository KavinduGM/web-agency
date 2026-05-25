import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import { getResource, listAllSlugs, assetUrl } from "@/lib/db";
import { buildMetadata, resourceLd, breadcrumbLd, SITE_URL } from "@/lib/seo";
import JsonLdScript from "@/components/JsonLdScript";

export const revalidate = 60;

export async function generateStaticParams() {
  const { resources } = await listAllSlugs();
  return resources.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({ params }) {
  const r = await getResource(params.slug);
  if (!r) return { title: "Not found", robots: { index: false } };
  return buildMetadata({
    row: r,
    path: `/resources/${r.slug}`,
    fallbackTitle: r.title,
    type: "article",
  });
}

export default async function ResourcePage({ params }) {
  const r = await getResource(params.slug);
  if (!r) notFound();

  const ld = [
    resourceLd({ row: r, path: `/resources/${r.slug}` }),
    breadcrumbLd([
      { name: "Home", url: SITE_URL },
      { name: "Resources", url: "/resources" },
      { name: r.title, url: `/resources/${r.slug}` },
    ]),
  ];

  return (
    <>
      <JsonLdScript data={ld} />
      <article className="mx-auto max-w-3xl px-4 py-16 prose prose-zinc">
        <nav aria-label="Breadcrumb" className="not-prose text-xs text-gray-500 mb-4">
          <a href="/" className="hover:underline">Home</a> ›{" "}
          <a href="/resources" className="hover:underline">Resources</a> ›{" "}
          <span aria-current="page">{r.title}</span>
        </nav>
        <div className="not-prose text-xs uppercase tracking-wide text-gray-500">{r.kind}</div>
        <h1>{r.title}</h1>
        {r.coverImagePath && (
          <img src={assetUrl(r.coverImagePath)} alt={r.ogImageAlt || r.title} className="rounded-lg w-full h-auto" />
        )}
        <ReactMarkdown>{r.bodyMd}</ReactMarkdown>
        {r.downloadPath && (
          <p><a href={assetUrl(r.downloadPath)} className="btn-primary inline-block mt-4">Download</a></p>
        )}
      </article>
    </>
  );
}
