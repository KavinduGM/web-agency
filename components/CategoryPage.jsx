import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowLeft, Sparkles, Code2, Brain, ChevronRight } from "lucide-react";
import { SectionHeader, FadeIn } from "@/components/Section";
import ServiceCard from "@/components/ServiceCard";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import CTASection from "@/components/CTASection";
import {
  BreadcrumbJsonLd,
  CollectionPageJsonLd,
} from "@/components/JsonLd";
import { TESTIMONIALS } from "@/lib/testimonials";
import { CASE_STUDIES } from "@/lib/caseStudies";

/**
 * Shared layout for the two category landing pages
 *  - /services/web-development
 *  - /services/ai-automation
 *
 * Props:
 *  - category: the CATEGORIES[slug] object (title, tagline, description, image)
 *  - services: array of all SERVICES belonging to this category
 *  - icon: the lucide icon to use in the hero badge (Code2 or Brain)
 *  - otherCategory: the opposite category object, used for cross-link CTA
 *  - otherCategorySlug: slug of the opposite category for the URL
 */
export default function CategoryPage({
  category,
  services,
  icon: Icon = Sparkles,
  otherCategory,
  otherCategorySlug,
}) {
  // Pick up to 3 most relevant case studies for this category
  const relatedCaseStudies = CASE_STUDIES.filter(
    (c) =>
      (category.slug === "web-development" && c.category === "Web Development") ||
      (category.slug === "ai-automation" && c.category === "AI & Automation")
  ).slice(0, 3);

  const url = `/services/${category.slug}`;
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Services", url: "/services" },
          { name: category.title, url },
        ]}
      />
      <CollectionPageJsonLd
        name={category.title}
        description={category.description}
        url={url}
        items={services.map((s) => ({
          name: s.title,
          url: `/services/${s.slug}`,
        }))}
      />

      {/* ───── Hero ───── */}
      <section className="relative pt-32 pb-12 lg:pt-44 lg:pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-grid bg-grid-fade opacity-50" />
        <div className="blob bg-brand-300 w-[34rem] h-[34rem] -top-32 -right-20 animate-blob" />
        <div className="container-x relative">
          {/* Breadcrumb */}
          <FadeIn>
            <nav className="flex items-center gap-1.5 text-sm text-slate-500 justify-center">
              <Link href="/" className="hover:text-brand-600">Home</Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <Link href="/services" className="hover:text-brand-600">Services</Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <span className="text-slate-700 font-medium">{category.title}</span>
            </nav>
          </FadeIn>

          <div className="mt-8 max-w-4xl mx-auto text-center">
            <FadeIn>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-brand-100 text-brand-700 text-xs font-semibold uppercase tracking-wider shadow-sm">
                <Icon className="w-3.5 h-3.5" /> {services.length} Services
              </span>
            </FadeIn>
            <FadeIn delay={0.05}>
              <h1 className="mt-5 font-display font-extrabold text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.05] text-slate-900">
                {category.title}
              </h1>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="mt-5 font-display font-bold text-xl md:text-2xl tracking-tight text-gradient leading-snug">
                {category.tagline}
              </p>
            </FadeIn>
            <FadeIn delay={0.16}>
              <p className="mt-6 text-slate-600 text-base md:text-lg leading-relaxed">
                {category.description}
              </p>
            </FadeIn>
            <FadeIn delay={0.22}>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Link href="/quote" className="btn-primary">
                  Request a Quote <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/contact" className="btn-secondary">
                  Talk to us
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ───── All services grid ───── */}
      <section className="section pt-4">
        <div className="container-x">
          <SectionHeader
            eyebrow={`All ${category.title}`}
            title={
              <>
                Every {category.title.toLowerCase().replace(" services", "")}
                <br className="hidden sm:block" /> capability we offer.
              </>
            }
            description="Click into any service to read the deliverables, process, timeline, and a real-world use case in detail."
            className="max-w-5xl"
          />

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <ServiceCard key={s.slug} service={s} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ───── Recent case studies for this category ───── */}
      {relatedCaseStudies.length > 0 && (
        <section className="section pt-0 bg-slate-50/60 border-y border-slate-100">
          <div className="container-x py-12 lg:py-16">
            <SectionHeader
              eyebrow="Real Work"
              title="Recent case studies in this practice"
              description="A few of the products we've shipped in this space — full write-ups with the problem, the solution, and the measurable outcomes."
            />

            <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedCaseStudies.map((c, i) => (
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
                    </div>
                    <div className="p-5">
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

      {/* ───── Testimonials ───── */}
      <section className="section">
        <div className="container-x">
          <SectionHeader
            eyebrow="Client Voices"
            title="What our clients say"
            description="Real reviews from teams that ship with us across the world."
          />
          <div className="mt-12">
            <TestimonialsCarousel items={TESTIMONIALS} />
          </div>
        </div>
      </section>

      {/* ───── Cross-link to the other practice ───── */}
      {otherCategory && (
        <section className="py-10 lg:py-14 bg-slate-50/60 border-y border-slate-100">
          <div className="container-x">
            <FadeIn>
              <div className="max-w-4xl mx-auto rounded-2xl bg-white border border-slate-200 p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-5 text-center md:text-left">
                <div>
                  <div className="text-xs uppercase tracking-widest font-bold text-brand-600">
                    Also explore
                  </div>
                  <h3 className="mt-1 font-display font-extrabold text-xl md:text-2xl text-slate-900">
                    {otherCategory.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600 max-w-xl">
                    {otherCategory.tagline}
                  </p>
                </div>
                <Link
                  href={`/services/${otherCategorySlug}`}
                  className="btn-primary flex-shrink-0"
                >
                  Explore {otherCategory.title.split(" ")[0]} services <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </FadeIn>
          </div>
        </section>
      )}

      <CTASection
        eyebrow={category.title}
        title={`Let's build your next ${category.slug === "web-development" ? "web product" : "AI workflow"}.`}
        description="Tell us the goal — we'll come back within one business day with sharper questions, a rough scope, and a clear next step."
      />

      <div className="container-x py-6">
        <Link href="/services" className="inline-flex items-center gap-1.5 text-slate-500 hover:text-brand-600 font-medium text-sm">
          <ArrowLeft className="w-4 h-4" /> Back to all services
        </Link>
      </div>
    </>
  );
}
