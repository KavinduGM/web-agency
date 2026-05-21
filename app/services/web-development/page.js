import { Code2 } from "lucide-react";
import CategoryPage from "@/components/CategoryPage";
import { CATEGORIES, getServicesByCategory } from "@/lib/services";

export const metadata = {
  title: "Web Development Services — 14 Custom Web Solutions",
  description:
    "Custom websites, web applications, eCommerce platforms, booking systems, POS, ERP integrations, and IoT dashboards. 14 production-grade web development services from GroovyMark WebX — engineered to scale.",
  keywords: [
    "web development services",
    "custom website development",
    "web application development",
    "eCommerce development",
    "B2B eCommerce",
    "Next.js development",
    "Shopify development",
    "booking system development",
    "POS system development",
    "client portal development",
    "invoice billing system",
    "inventory management system",
    "ERP integration",
    "IoT dashboard development",
    "landing page development",
  ],
  alternates: { canonical: "/services/web-development" },
  openGraph: {
    type: "website",
    title: "Web Development Services — 14 Custom Web Solutions | GroovyMark WebX",
    description:
      "Custom websites, web applications, eCommerce, and operational systems — engineered to scale.",
    url: "/services/web-development",
  },
};

export default function WebDevelopmentCategoryPage() {
  const category = CATEGORIES["web-development"];
  const services = getServicesByCategory("web-development");
  const otherCategory = CATEGORIES["ai-automation"];
  return (
    <CategoryPage
      category={category}
      services={services}
      icon={Code2}
      otherCategory={otherCategory}
      otherCategorySlug="ai-automation"
    />
  );
}
