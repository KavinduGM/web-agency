import { notFound } from "next/navigation";
import CaseStudyArticle from "@/components/CaseStudyArticle";
import {
  ALL_CASE_STUDY_SLUGS,
  getCaseStudyBySlug,
} from "@/lib/caseStudies";

export const dynamicParams = false;

export function generateStaticParams() {
  return ALL_CASE_STUDY_SLUGS.map((slug) => ({ slug }));
}

export function generateMetadata({ params }) {
  const study = getCaseStudyBySlug(params.slug);
  if (!study) return {};
  const url = `/portfolio/${study.slug}`;
  const desc = study.shortDescription || study.headline;
  const descCapped = desc.length > 160 ? desc.slice(0, 157) + "…" : desc;

  return {
    title: study.title,
    description: descCapped,
    keywords: [
      ...(study.tags || []),
      study.client,
      study.industry,
      study.category,
      "case study",
      "GroovyMark WebX case study",
    ].filter(Boolean),
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      title: `${study.title} | GroovyMark WebX Case Study`,
      description: descCapped,
      url,
      images: [{ url: study.cover, width: 1200, height: 630, alt: study.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${study.title} | GroovyMark WebX Case Study`,
      description: descCapped,
    },
  };
}

export default function PortfolioCaseStudyPage({ params }) {
  const study = getCaseStudyBySlug(params.slug);
  if (!study) notFound();
  return <CaseStudyArticle study={study} basePath="/portfolio" />;
}
