import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import { getCaseStudy, listAllSlugs, assetUrl } from "@/lib/db";

export const revalidate = 60;

export async function generateStaticParams() {
  const { caseStudies } = await listAllSlugs();
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }) {
  const cs = await getCaseStudy(params.slug);
  if (!cs) return { title: "Not found" };
  return { title: `${cs.clientName} — ${cs.metric}`, description: cs.title };
}

export default async function CaseStudyPage({ params }) {
  const cs = await getCaseStudy(params.slug);
  if (!cs) notFound();
  return (
    <article className="mx-auto max-w-3xl px-4 py-16 prose prose-zinc">
      <div className="text-xs uppercase tracking-wide text-gray-500">Case study · {cs.clientName}</div>
      <h1>{cs.title}</h1>
      <p className="text-lg text-gray-700"><strong>Outcome:</strong> {cs.metric}</p>
      {cs.coverImagePath && <img src={assetUrl(cs.coverImagePath)} alt={cs.title} className="rounded-lg" />}
      <ReactMarkdown>{cs.bodyMd}</ReactMarkdown>
    </article>
  );
}
