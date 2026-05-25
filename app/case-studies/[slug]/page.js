import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import { getCaseStudy, listAllSlugs, assetUrl } from "@/lib/db";
import { buildMetadata, caseStudyLd, breadcrumbLd, SITE_URL } from "@/lib/seo";
import JsonLdScript from "@/components/JsonLdScript";

export const revalidate = 60;

export async function generateStaticParams() {
  const { caseStudies } = await listAllSlugs();
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }) {
  const cs = await getCaseStudy(params.slug);
  if (!cs) return { title: "Not found", robots: { index: false } };
  return buildMetadata({
    row: cs,
    path: `/case-studies/${cs.slug}`,
    fallbackTitle: `${cs.clientName} — ${cs.metric}`,
    fallbackDescription: `How ${cs.clientName} achieved ${cs.metric} with GroovyMark WebX.`,
    type: "article",
  });
}

export default async function CaseStudyPage({ params }) {
  const cs = await getCaseStudy(params.slug);
  if (!cs) notFound();

  const ld = [
    caseStudyLd({ row: cs, path: `/case-studies/${cs.slug}` }),
    breadcrumbLd([
      { name: "Home", url: SITE_URL },
      { name: "Portfolio", url: "/portfolio" },
      { name: cs.title, url: `/case-studies/${cs.slug}` },
    ]),
  ];

  return (
    <>
      <JsonLdScript data={ld} />
      <article className="mx-auto max-w-3xl px-4 py-16 prose prose-zinc">
        <nav aria-label="Breadcrumb" className="not-prose text-xs text-gray-500 mb-4">
          <a href="/" className="hover:underline">Home</a> ›{" "}
          <a href="/portfolio" className="hover:underline">Portfolio</a> ›{" "}
          <span aria-current="page">{cs.title}</span>
        </nav>
        <div className="not-prose text-xs uppercase tracking-wide text-gray-500">Case study · {cs.clientName}</div>
        <h1>{cs.title}</h1>
        <p className="text-lg text-gray-700"><strong>Outcome:</strong> {cs.metric}</p>
        {cs.coverImagePath && (
          <img
            src={assetUrl(cs.coverImagePath)}
            alt={cs.ogImageAlt || `${cs.clientName} case study`}
            className="rounded-lg w-full h-auto"
            loading="eager"
            decoding="async"
          />
        )}
        <ReactMarkdown>{cs.bodyMd}</ReactMarkdown>
      </article>
    </>
  );
}
