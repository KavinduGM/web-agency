import { notFound } from "next/navigation";
import { getLandingPage } from "@/lib/db";
import LandingPageRenderer from "@/components/LandingPageRenderer";

export const revalidate = 60;

export async function generateMetadata({ params }) {
  const lp = await getLandingPage(params.slug);
  if (!lp) return { title: "Not found" };
  return { title: lp.metaTitle ?? lp.title, description: lp.metaDescription ?? undefined };
}

export default async function LP({ params }) {
  const lp = await getLandingPage(params.slug);
  if (!lp) notFound();
  return <LandingPageRenderer sections={lp.sections} />;
}
