import { Brain } from "lucide-react";
import CategoryPage from "@/components/CategoryPage";
import { CATEGORIES, getServicesByCategory } from "@/lib/services";

export const metadata = {
  title: "AI & Automation Services — 10 Custom AI Solutions",
  description:
    "AI chatbots, lead qualification, customer support bots, document processing, workflow automation, demand forecasting, predictive analytics, AI HR recruitment, and custom AI agent development. 10 production-grade AI services from GroovyMark WebX.",
  keywords: [
    "AI automation services",
    "AI chatbot development",
    "AI lead qualification",
    "AI CRM automation",
    "AI customer support",
    "AI document processing",
    "business process automation",
    "AI inventory forecasting",
    "executive AI reporting",
    "predictive analytics",
    "AI HR recruitment",
    "custom AI agent development",
    "machine learning consulting",
    "LangGraph development",
    "RAG development",
  ],
  alternates: { canonical: "/services/ai-automation" },
  openGraph: {
    type: "website",
    title: "AI & Automation Services — 10 Custom AI Solutions | GroovyMark WebX",
    description:
      "AI agents, intelligent automations, and data products that compound productivity.",
    url: "/services/ai-automation",
  },
};

export default function AIAutomationCategoryPage() {
  const category = CATEGORIES["ai-automation"];
  const services = getServicesByCategory("ai-automation");
  const otherCategory = CATEGORIES["web-development"];
  return (
    <CategoryPage
      category={category}
      services={services}
      icon={Brain}
      otherCategory={otherCategory}
      otherCategorySlug="web-development"
    />
  );
}
