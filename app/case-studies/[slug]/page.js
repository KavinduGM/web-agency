import { notFound } from "next/navigation";
import CaseStudyArticle from "@/components/CaseStudyArticle";
import { getCaseStudy, listAllSlugs, assetUrl } from "@/lib/db";
import { buildMetadata } from "@/lib/seo";

// DB-driven case study route. Reads from the CaseStudy table (written by
// the automation pipeline) and feeds the same shared CaseStudyArticle
// component the hardcoded /portfolio/[slug] route uses, so visual output
// is identical.
//
// Schema mapping (DB column → study shape consumed by CaseStudyArticle):
//   clientName     → client
//   coverImagePath → cover (resolved to absolute URL via assetUrl)
//   pillars  Json  → pillars    [{title, intro, featuresLabel, features[], images: [{src, alt, caption}]}]
//   problems / results / metrics / testimonial / closing / finalCta / about — pass through

export const revalidate = 60;

export async function generateStaticParams() {
  const { caseStudies } = await listAllSlugs();
  return caseStudies.map((cs) => ({ slug: cs.slug }));
}

export async function generateMetadata({ params }) {
  const cs = await getCaseStudy(params.slug);
  if (!cs) return {};
  return buildMetadata({
    row: cs,
    path: `/case-studies/${cs.slug}`,
    fallbackTitle: cs.title,
    fallbackDescription: cs.shortDescription || cs.metaDescription,
    type: "article",
  });
}

export default async function CaseStudyDbPage({ params }) {
  const cs = await getCaseStudy(params.slug);
  if (!cs) notFound();

  // pillars[].images carry RELATIVE asset paths in the DB — resolve to
  // public URLs that <Image src=...> can fetch through the assets host.
  const pillars = (cs.pillars ?? []).map((p) => ({
    ...p,
    images: (p.images ?? []).map((img) => ({
      ...img,
      src: typeof img.src === "string" ? (assetUrl(img.src) ?? img.src) : img.src,
    })),
  }));

  const study = {
    slug: cs.slug,
    title: cs.title,
    subtitle: cs.subtitle ?? "",
    headline: cs.headline ?? cs.shortDescription ?? cs.metaDescription ?? "",
    shortDescription: cs.shortDescription ?? cs.metaDescription ?? "",
    client: cs.clientName,
    clientType: cs.category ?? null,
    industry: cs.industry ?? "",
    location: cs.location ?? "",
    projectType: cs.projectType ?? "",
    timeline: cs.timeline ?? "",
    category: cs.category ?? "Case Study",
    cover: cs.coverImagePath ? (assetUrl(cs.coverImagePath) ?? cs.coverImagePath) : null,
    tags: cs.tags ?? [],
    metrics: cs.metrics ?? [],
    testimonial: cs.testimonial ?? null,
    problemIntro: cs.problemCallout ?? cs.shortDescription ?? "",
    problems: cs.problems ?? [],
    problemCallout: cs.problemCallout ?? "",
    solutionIntro: cs.solutionIntro ?? "",
    pillars,
    results: cs.results ?? [],
    techDelivered: cs.techDelivered ?? [],
    closing: cs.closing ?? null,
    finalCta: cs.finalCta ?? null,
    about: cs.about ?? null,
  };

  return (
    <CaseStudyArticle
      study={study}
      basePath="/case-studies"
      datePublished={cs.publishedAt?.toISOString?.() ?? undefined}
    />
  );
}
