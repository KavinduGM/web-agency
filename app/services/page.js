import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Sparkles, Code2, Brain, Check } from "lucide-react";
import { SectionHeader, FadeIn } from "@/components/Section";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import CTASection from "@/components/CTASection";
import { SERVICES, CATEGORIES, getServicesByCategory } from "@/lib/services";
import { TESTIMONIALS } from "@/lib/testimonials";
import { CASE_STUDIES } from "@/lib/caseStudies";
import {
  BreadcrumbJsonLd,
  CollectionPageJsonLd,
} from "@/components/JsonLd";

export const metadata = {
  title: "Services — 24 Web Development & AI Automation Services",
  description:
    "Browse our 24 services across two practices — Web Development (14 services) and AI & Automation (10 services). Custom websites, eCommerce, web applications, AI agents, workflow automation, and more.",
  keywords: [
    "web development services",
    "AI automation services",
    "custom web development",
    "AI agent development",
    "B2B web services",
    "eCommerce development services",
    "workflow automation services",
    "API development services",
  ],
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Services — Web Development & AI Automation",
    description:
      "24 custom services across web development and AI automation. Built around outcomes, not templates.",
    url: "/services",
    type: "website",
  },
};

const CATEGORY_CARDS = [
  {
    slug: "web-development",
    Icon: Code2,
    sampleSize: 6,
    accentChip: "bg-brand-50 text-brand-700 border-brand-100",
  },
  {
    slug: "ai-automation",
    Icon: Brain,
    sampleSize: 5,
    accentChip: "bg-cyan-50 text-cyan-700 border-cyan-100",
  },
];

export default function ServicesIndexPage() {
  const latestCaseStudies = CASE_STUDIES.slice(0, 3);

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Services", url: "/services" },
        ]}
      />
      <CollectionPageJsonLd
        name="Services — GroovyMark WebX"
        description="Web Development and AI & Automation services across 24 production-grade offerings."
        url="/services"
        items={SERVICES.map((s) => ({
          name: s.title,
          url: `/services/${s.slug}`,
        }))}
      />

      {/* ───── Hero ───── */}
      <section className="relative pt-32 pb-12 lg:pt-44 lg:pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-grid bg-grid-fade opacity-50" />
        <div className="blob bg-brand-300 w-[36rem] h-[36rem] -top-32 -left-16 animate-blob" />
        <div className="blob bg-accent-400/30 w-[28rem] h-[28rem] top-20 right-0 animate-blob" style={{ animationDelay: "2s" }} />
        <div className="container-x relative">
          <FadeIn className="max-w-4xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-brand-100 text-brand-700 text-xs font-semibold uppercase tracking-wider shadow-sm">
              <Sparkles className="w-3.5 h-3.5" /> 24 Services · Two Practices
            </span>
            <h1 className="mt-5 font-display font-extrabold text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.05] text-slate-900">
              The full stack of services modern B2B teams need.
            </h1>
            <p className="mt-6 text-slate-600 text-lg leading-relaxed">
              From corporate websites that earn pipeline to AI agents that
              quietly run operations — every product we ship is custom-built
              for measurable outcomes.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ───── Two big category cards ───── */}
      <section className="pb-12 lg:pb-16">
        <div className="container-x">
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
            {CATEGORY_CARDS.map((cfg) => {
              const cat = CATEGORIES[cfg.slug];
              const allServices = getServicesByCategory(cfg.slug);
              const sample = allServices.slice(0, cfg.sampleSize);
              return (
                <FadeIn key={cfg.slug}>
                  <article className="h-full rounded-3xl bg-white border border-slate-200 overflow-hidden card-lift flex flex-col">
                    <div className="relative aspect-[16/9] overflow-hidden bg-slate-50">
                      <Image
                        src={cat.image}
                        alt={cat.title}
                        fill
                        sizes="(min-width: 1024px) 50vw, 100vw"
                        className="object-contain"
                      />
                    </div>

                    <div className="p-7 lg:p-8 flex flex-col flex-1">
                      <div className="flex items-center gap-2">
                        <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-[11px] font-bold uppercase tracking-wider ${cfg.accentChip}`}>
                          <cfg.Icon className="w-3.5 h-3.5" />
                          {allServices.length} services
                        </span>
                      </div>

                      <h3 className="mt-4 font-display font-extrabold text-2xl lg:text-3xl text-slate-900 leading-tight">
                        {cat.title}
                      </h3>
                      <p className="mt-3 text-slate-600 leading-relaxed text-[15px]">
                        {cat.tagline}
                      </p>

                      {/* Sample sub-services */}
                      <ul className="mt-6 space-y-2 flex-1">
                        {sample.map((s) => (
                          <li key={s.slug}>
                            <Link
                              href={`/services/${s.slug}`}
                              className="group/item flex items-center gap-2.5 text-sm text-slate-700 hover:text-brand-700 transition-colors"
                            >
                              <Check className="w-4 h-4 text-brand-600 flex-shrink-0" />
                              <span className="font-medium">{s.title}</span>
                              <ArrowRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all" />
                            </Link>
                          </li>
                        ))}
                        {allServices.length > cfg.sampleSize && (
                          <li className="text-xs text-slate-500 pl-6 pt-1">
                            + {allServices.length - cfg.sampleSize} more
                          </li>
                        )}
                      </ul>

                      {/* CTA */}
                      <Link
                        href={`/services/${cfg.slug}`}
                        className="btn-primary mt-7 self-start"
                      >
                        View all {cat.title.replace(" Services", "")} services <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </article>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* ───── Recent case studies (3 latest) ───── */}
      {latestCaseStudies.length > 0 && (
        <section className="section bg-slate-50/60 border-y border-slate-100">
          <div className="container-x">
            <SectionHeader
              eyebrow="Recent Work"
              title={
                <>
                  Three of the latest products
                  <br className="hidden sm:block" /> we've shipped.
                </>
              }
              description="Real engagements with real outcomes — the problem, the solution, and the metrics that moved."
              className="max-w-5xl"
            />

            <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {latestCaseStudies.map((c, i) => (
                <FadeIn key={c.slug} delay={i * 0.06}>
                  <Link
                    href={`/portfolio/${c.slug}`}
                    className="group block h-full rounded-2xl bg-white border border-slate-200 overflow-hidden card-lift"
                  >
                    <div className="relative aspect-video bg-slate-100 overflow-hidden">
                      <Image
                        src={c.cover}
                        alt={c.title}
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                        className="object-contain"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/90 backdrop-blur text-brand-700 border border-white/60">
                          {c.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-5 flex flex-col h-[calc(100%-56.25%)]">
                      <div className="text-[11px] uppercase tracking-widest font-bold text-brand-600">
                        {c.client}
                      </div>
                      <h3 className="mt-2 font-display font-bold text-base lg:text-lg text-slate-900 group-hover:text-brand-700 transition-colors leading-snug">
                        {c.title}
                      </h3>
                      <p className="mt-3 text-sm text-slate-600 leading-relaxed line-clamp-3">
                        {c.shortDescription || c.headline}
                      </p>
                      <span className="mt-4 inline-flex items-center gap-1.5 text-brand-600 font-semibold text-sm">
                        Read case study <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </Link>
                </FadeIn>
              ))}
            </div>

            <div className="mt-10 flex justify-center">
              <Link href="/portfolio" className="btn-secondary">
                View all case studies <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* ───── Customer reviews / testimonials ───── */}
      <section className="section">
        <div className="container-x">
          <SectionHeader
            eyebrow="Client Voices"
            title="What our clients say about working with us"
            description="Real reviews from real teams across five continents — the businesses we've helped move forward."
          />
          <div className="mt-12">
            <TestimonialsCarousel items={TESTIMONIALS} />
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="Custom scope, fixed clarity"
        title="Not sure which service fits? Tell us the goal."
        description="Send us the outcome you want — we'll suggest the right combination of services and a realistic plan."
      />
    </>
  );
}
