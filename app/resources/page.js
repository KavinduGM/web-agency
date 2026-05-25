import Link from "next/link";
import { listResources } from "@/lib/db";
import { SITE_URL, SITE_NAME, DEFAULT_OG_IMAGE } from "@/lib/seo";
import JsonLdScript from "@/components/JsonLdScript";

export const revalidate = 60;

export const metadata = {
  title: "Resources — Templates, Tools & Guides",
  description: "Free templates, tools, and in-depth guides on web development, AI automation, and B2B growth.",
  alternates: { canonical: `${SITE_URL}/resources` },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/resources`,
    siteName: SITE_NAME,
    title: "Resources — GroovyMark WebX",
    description: "Free templates, tools, and in-depth guides for web + AI teams.",
    images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

export default async function ResourcesIndex() {
  const list = await listResources({ take: 100 });

  const ld = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Resources",
    url: `${SITE_URL}/resources`,
    hasPart: list.map((r) => ({
      "@type": "CreativeWork",
      name: r.metaTitle || r.title,
      url: `${SITE_URL}/resources/${r.slug}`,
      genre: r.kind,
    })),
  };

  return (
    <>
      <JsonLdScript data={ld} />
      <main className="mx-auto max-w-5xl px-4 py-16">
        <h1 className="text-3xl font-bold mb-6">Resources</h1>
        {list.length === 0 && <div className="rounded border border-dashed p-8 text-sm text-gray-500">No resources yet.</div>}
        <div className="grid gap-4 md:grid-cols-2">
          {list.map((r) => (
            <Link key={r.id} href={`/resources/${r.slug}`} className="block rounded-lg border p-5 hover:shadow-md transition">
              <div className="text-xs uppercase tracking-wide text-gray-500 mb-1">{r.kind}</div>
              <h2 className="font-semibold text-lg">{r.metaTitle || r.title}</h2>
              {(r.metaDescription || r.excerpt) && (
                <p className="text-sm text-gray-600 mt-1 line-clamp-2">{r.metaDescription || r.excerpt}</p>
              )}
            </Link>
          ))}
        </div>
      </main>
    </>
  );
}
