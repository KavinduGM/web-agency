import { notFound } from "next/navigation";
import { getLandingPage } from "@/lib/db";
import LandingPageRenderer from "@/components/LandingPageRenderer";
import { buildMetadata, faqPageLd, breadcrumbLd, SITE_URL } from "@/lib/seo";
import JsonLdScript from "@/components/JsonLdScript";

export const revalidate = 60;

export async function generateMetadata({ params }) {
  const lp = await getLandingPage(params.slug);
  if (!lp) return { title: "Not found", robots: { index: false } };
  return buildMetadata({
    row: lp,
    path: `/lp/${lp.slug}`,
    fallbackTitle: lp.title,
    type: "website",
  });
}

export default async function LP({ params }) {
  const lp = await getLandingPage(params.slug);
  if (!lp) notFound();

  // Pull the FAQ section out for rich-result FAQPage schema.
  const faqSection = Array.isArray(lp.sections)
    ? lp.sections.find((s) => s.kind === "faq")
    : null;
  const faqItems = faqSection?.props?.items ?? [];

  const ld = [
    faqPageLd(faqItems),
    breadcrumbLd([
      { name: "Home", url: SITE_URL },
      { name: lp.title, url: `/lp/${lp.slug}` },
    ]),
  ];

  return (
    <>
      <JsonLdScript data={ld} />
      <LandingPageRenderer sections={lp.sections} />
    </>
  );
}
