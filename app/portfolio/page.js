import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ArrowRight, Sparkles, BookOpen, Loader } from "lucide-react";
import { BreadcrumbJsonLd, CollectionPageJsonLd } from "@/components/JsonLd";
import { CASE_STUDIES } from "@/lib/caseStudies";
import { SectionHeader, FadeIn } from "@/components/Section";
import CTASection from "@/components/CTASection";
import Stats from "@/components/Stats";
import { PORTFOLIO, CLIENTS } from "@/lib/portfolio";

export const metadata = {
  title: "Portfolio & Case Studies — Web & AI Projects",
  description:
    "Selected case studies and clients we've shipped digital products for — across web development and AI automation. Real engagements, real outcomes: 5-tool consolidation platforms, AI CRMs, private analytics dashboards, and more.",
  keywords: [
    "web development portfolio",
    "AI automation case studies",
    "B2B web agency portfolio",
    "AI CRM case study",
    "web analytics platform case study",
    "private AI analytics",
    "YouTube automation case study",
    "self-hosted deployment platform",
  ],
  alternates: { canonical: "/portfolio" },
  openGraph: {
    type: "website",
    title: "Portfolio & Case Studies — Web & AI Projects | GroovyMark WebX",
    description:
      "Selected work and case studies — web and AI projects with measurable outcomes.",
    url: "/portfolio",
  },
};

const INDUSTRIES = [
  "SaaS", "Healthcare", "Retail & eCommerce", "Finance",
  "Manufacturing", "Media", "Travel & Hospitality", "Energy",
];

export default function PortfolioPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Portfolio", url: "/portfolio" },
        ]}
      />
      <CollectionPageJsonLd
        name="Portfolio & Case Studies — GroovyMark WebX"
        description="Selected case studies across web development and AI automation."
        url="/portfolio"
        items={CASE_STUDIES.map((c) => ({
          name: c.title,
          url: `/portfolio/${c.slug}`,
        }))}
      />

      {/* Hero */}
      <section className="relative pt-32 pb-12 lg:pt-44 lg:pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-grid bg-grid-fade opacity-50" />
        <div className="blob bg-brand-300 w-[34rem] h-[34rem] -top-32 -left-16 animate-blob" />
        <div className="container-x relative">
          <FadeIn className="max-w-3xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-brand-100 text-brand-700 text-xs font-semibold uppercase tracking-wider shadow-sm">
              <Sparkles className="w-3.5 h-3.5" /> Selected work
            </span>
            <h1 className="mt-5 font-display font-extrabold text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.05] text-slate-900">
              Products we've shipped. Outcomes we own.
            </h1>
            <p className="mt-6 text-slate-600 text-lg leading-relaxed max-w-2xl mx-auto">
              A snapshot of recent engagements across web development and AI
              automation — with the kind of metrics our partners care about most.
            </p>
          </FadeIn>

          <FadeIn delay={0.15} className="mt-14">
            <Stats
              stats={[
                { value: "120+", label: "Projects shipped" },
                { value: "$2M+", label: "Revenue influenced" },
                { value: "8+", label: "Countries served" },
                { value: "98%", label: "Client retention" },
              ]}
            />
          </FadeIn>
        </div>
      </section>

      {/* Case study list */}
      <section className="section pt-10">
        <div className="container-x">
          <SectionHeader
            align="left"
            className="mx-0"
            eyebrow="Case Studies"
            title="A small selection of recent work"
            description="Each card is a real engagement — distilled to the work, the stack, and the outcome."
          />
          <div className="mt-12 grid gap-8">
            {PORTFOLIO.map((c, i) => (
              <FadeIn key={c.slug} delay={i * 0.05}>
                <article className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center group ${i % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""}`}>
                  <div className="relative rounded-3xl overflow-hidden border border-slate-200 card-lift bg-slate-100">
                    <div className="relative aspect-video">
                      <Image
                        src={c.image}
                        alt={c.title}
                        fill
                        sizes="(min-width: 1024px) 50vw, 100vw"
                        className="object-contain"
                      />
                      <div className="absolute top-4 left-4 z-10">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-white/90 backdrop-blur text-brand-700 border border-white/60 shadow-sm">
                          {c.category}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-brand-600">
                      {c.flag && (
                        <span className="text-base leading-none" aria-label={c.country || "country flag"}>
                          {c.flag}
                        </span>
                      )}
                      <span>{c.client}</span>
                    </div>
                    <h3 className="mt-3 font-display font-extrabold text-2xl md:text-3xl tracking-tight text-slate-900 leading-[1.15]">
                      {c.title}
                    </h3>
                    <p className="mt-4 text-slate-600 leading-relaxed">{c.description}</p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {c.tags.map((t) => (
                        <span key={t} className="px-2.5 py-1 rounded-md text-xs font-medium bg-slate-100 text-slate-700">
                          {t}
                        </span>
                      ))}
                    </div>
                    <div className="mt-6 grid grid-cols-3 gap-3">
                      {c.metrics.map((m) => (
                        <div key={m.label} className="rounded-xl bg-gradient-to-br from-brand-50 to-white border border-brand-100 p-4 text-center">
                          <div className="font-display font-extrabold text-xl text-gradient">{m.value}</div>
                          <div className="text-xs text-slate-600 mt-0.5">{m.label}</div>
                        </div>
                      ))}
                    </div>
                    {c.caseStudySlug ? (
                      <Link
                        href={`/portfolio/${c.caseStudySlug}`}
                        className="mt-6 inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-brand-gradient text-white font-semibold text-sm shadow-glow hover:shadow-card-hover hover:-translate-y-0.5 transition-all"
                      >
                        <BookOpen className="w-4 h-4" />
                        Read full case study
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    ) : (
                      <span className="mt-6 inline-flex items-center gap-1.5 text-slate-400 font-medium text-sm">
                        Full case study coming soon <ArrowUpRight className="w-4 h-4" />
                      </span>
                    )}
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Client list */}
      <section className="section bg-slate-50/60 border-y border-slate-100">
        <div className="container-x">
          <SectionHeader
            eyebrow="Our Clients"
            title="The teams we've shipped with"
            description="From early-stage product teams to enterprise IT — we partner with builders who want to ship excellent work."
          />
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4">
            {CLIENTS.map((c, i) => (
              <FadeIn key={c.src} delay={(i % 10) * 0.03}>
                <div className="group aspect-[3/2] rounded-xl bg-white border border-slate-200 hover:border-brand-300 hover:shadow-card transition-all flex items-center justify-center p-3 md:p-4">
                  <Image
                    src={c.src}
                    alt={c.alt}
                    width={240}
                    height={160}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </FadeIn>
            ))}

            {/* Ongoing project placeholders — fill the remaining slots in the last row */}
            {Array.from({ length: 5 }).map((_, i) => (
              <FadeIn key={`ongoing-${i}`} delay={(i + CLIENTS.length) * 0.03}>
                <div className="aspect-[3/2] rounded-xl bg-gradient-to-br from-brand-50 to-white border border-dashed border-brand-200 hover:border-brand-400 transition-all flex flex-col items-center justify-center p-3 md:p-4 text-center">
                  <div className="w-8 h-8 rounded-full bg-white border border-brand-200 flex items-center justify-center text-brand-600 shadow-sm">
                    <Loader className="w-4 h-4 animate-spin" style={{ animationDuration: "3s" }} />
                  </div>
                  <div className="mt-2 text-[10px] md:text-xs font-display font-extrabold uppercase tracking-wider text-brand-700">
                    Ongoing
                  </div>
                  <div className="text-[10px] md:text-xs font-display font-extrabold uppercase tracking-wider text-brand-700">
                    Project
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          <div className="mt-14">
            <h3 className="text-xs uppercase tracking-[0.2em] text-slate-500 font-semibold text-center">
              Industries we serve
            </h3>
            <div className="mt-5 flex flex-wrap justify-center gap-2.5">
              {INDUSTRIES.map((ind) => (
                <span key={ind} className="px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-sm font-medium text-slate-700">
                  {ind}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="Your project could be next"
        title="Have a project in mind? Let's talk."
        description="Tell us what you're trying to build or operate. We'll respond within one business day with a recommendation."
      />
    </>
  );
}
