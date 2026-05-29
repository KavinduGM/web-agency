import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  ChevronRight,
  Sparkles,
  AlertTriangle,
  Layers,
  Wrench,
  Trophy,
  MapPin,
  Building2,
  Briefcase,
  Calendar,
  Quote,
  X,
} from "lucide-react";
import { FadeIn } from "@/components/Section";
import InlineCTABanner from "@/components/InlineCTABanner";
import { ArticleJsonLd, BreadcrumbJsonLd } from "@/components/JsonLd";
import { DEFAULT_SECTION_CTAS } from "@/lib/caseStudies";

/**
 * Shared case-study renderer. Both /portfolio/[slug] (hardcoded catalog)
 * and /case-studies/[slug] (DB-driven, written by the automation pipeline)
 * call this with the same `study` shape so visual output is identical.
 *
 * Props:
 *   study             — the case-study object (see /lib/caseStudies.js for shape)
 *   basePath          — "/portfolio" or "/case-studies"; used for breadcrumb + URL
 *   datePublished     — ISO date for JSON-LD (defaults to fallback)
 */
export default function CaseStudyArticle({ study, basePath = "/portfolio", datePublished = "2026-05-21" }) {
  const url = `https://webx.groovymark.com${basePath}/${study.slug}`;
  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: basePath === "/portfolio" ? "Portfolio" : "Case Studies", url: basePath },
    { name: study.client || study.title, url: `${basePath}/${study.slug}` },
  ];

  const facts = [
    { icon: Building2, label: "Industry", value: study.industry },
    { icon: MapPin, label: "Location", value: study.location },
    { icon: Briefcase, label: "Client type", value: study.clientType },
    { icon: Layers, label: "Project", value: study.projectType },
    { icon: Calendar, label: "Timeline", value: study.timeline },
  ];

  const ctas = study.sectionCTAs || DEFAULT_SECTION_CTAS;

  return (
    <article>
      <BreadcrumbJsonLd items={breadcrumbs} />
      <ArticleJsonLd
        article={{
          title: study.title,
          description: study.shortDescription || study.headline,
          image: study.cover,
          url,
          datePublished,
          section: study.category,
        }}
      />

      {/* ───── Hero ───── */}
      <section className="relative pt-28 pb-10 lg:pt-32 lg:pb-12 overflow-hidden">
        <div className="absolute inset-0 bg-grid bg-grid-fade opacity-40" />
        <div className="blob bg-brand-300 w-[32rem] h-[32rem] -top-32 -right-20 animate-blob" />

        <div className="container-x relative">
          <FadeIn>
            <nav className="flex items-center gap-1.5 text-sm text-slate-500 justify-center">
              <Link href="/" className="hover:text-brand-600">Home</Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <Link href={basePath} className="hover:text-brand-600">{basePath === "/portfolio" ? "Portfolio" : "Case Studies"}</Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <span className="text-slate-700 font-medium truncate max-w-[40ch]">Case Study</span>
            </nav>
          </FadeIn>

          {/* Cover image */}
          <FadeIn delay={0.06}>
            <div className="mt-8 max-w-4xl mx-auto">
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-card bg-slate-100">
                <div className="relative w-full aspect-video">
                  <Image
                    src={study.cover}
                    alt={study.title}
                    fill
                    sizes="(min-width: 1024px) 1024px, 100vw"
                    priority
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Title block */}
          <div className="mt-10 max-w-4xl mx-auto text-center">
            <FadeIn>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-brand-100 text-brand-700 text-xs font-semibold uppercase tracking-wider shadow-sm">
                <Sparkles className="w-3.5 h-3.5" />
                Case Study · {study.category}
              </span>
            </FadeIn>
            <FadeIn delay={0.05}>
              <h1 className="mt-5 font-display font-extrabold text-3xl md:text-4xl lg:text-5xl tracking-tight leading-[1.15] text-slate-900">
                {study.title}
              </h1>
            </FadeIn>
            {study.subtitle && (
              <FadeIn delay={0.1}>
                <p className="mt-4 font-display font-bold text-xl md:text-2xl tracking-tight text-gradient leading-snug">
                  {study.subtitle}
                </p>
              </FadeIn>
            )}
            <FadeIn delay={0.14}>
              <p className="mt-5 text-slate-600 text-base md:text-lg leading-relaxed max-w-4xl mx-auto text-justify hyphens-auto">
                {study.headline}
              </p>
            </FadeIn>
            <FadeIn delay={0.18}>
              <div className="mt-5 flex flex-wrap justify-center gap-2">
                {study.tags.map((t) => (
                  <span key={t} className="px-2.5 py-1 rounded-md text-xs font-medium bg-slate-100 text-slate-700">
                    {t}
                  </span>
                ))}
              </div>
            </FadeIn>
          </div>

          {/* Headline metrics */}
          <FadeIn delay={0.22}>
            <div className="mt-8 max-w-4xl mx-auto flex flex-wrap justify-center gap-3">
              {study.metrics.map((m) => (
                <div
                  key={m.label}
                  className="rounded-xl bg-gradient-to-br from-brand-50 to-white border border-brand-100 px-5 py-3 text-center min-w-[150px]"
                >
                  <div className="font-display font-extrabold text-xl text-gradient">{m.value}</div>
                  <div className="text-xs text-slate-600 mt-0.5">{m.label}</div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ───── Facts strip — 5 centered cards ───── */}
      <section className="py-6">
        <div className="container-x">
          <FadeIn>
            <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4">
              {facts.map((f) => (
                <div
                  key={f.label}
                  className="rounded-2xl bg-white border border-slate-200 px-3 py-4 text-center flex flex-col items-center"
                >
                  <div className="w-10 h-10 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center">
                    <f.icon className="w-4 h-4" />
                  </div>
                  <div className="mt-2.5 text-[10px] uppercase tracking-wider font-semibold text-slate-500">
                    {f.label}
                  </div>
                  <div className="mt-1 text-sm font-display font-bold text-slate-900 leading-snug">
                    {f.value}
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ───── The Problem ───── */}
      <section className="py-12 lg:py-16">
        <div className="container-x">
          <FadeIn className="max-w-4xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 border border-rose-100 text-rose-700 text-xs font-semibold uppercase tracking-wider">
              <AlertTriangle className="w-3.5 h-3.5" /> The Problem
            </span>
            <h2 className="mt-4 font-display font-extrabold text-3xl md:text-4xl tracking-tight leading-[1.15] text-slate-900">
              Why traditional tools were killing their productivity
            </h2>
            <p className="mt-5 text-slate-600 text-base md:text-lg leading-relaxed text-justify hyphens-auto">
              {study.problemIntro}
            </p>
          </FadeIn>

          {/* 5 problem boxes — flex wrap centered */}
          <div className="mt-10 max-w-4xl mx-auto flex flex-wrap justify-center gap-5">
            {study.problems.map((p, i) => (
              <FadeIn
                key={p.title}
                delay={(i % 3) * 0.05}
                className="w-full sm:w-[calc(50%-0.625rem)] lg:w-[calc(33.333%-0.834rem)] max-w-md"
              >
                <div className="h-full rounded-2xl bg-white border border-slate-200 p-6">
                  <div className="flex items-center gap-2 text-rose-600 font-display font-extrabold text-xs tracking-widest">
                    PROBLEM {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="mt-2 font-display font-bold text-lg text-slate-900">{p.title}</h3>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed text-justify hyphens-auto">{p.text}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.1}>
            <div className="mt-10 max-w-4xl mx-auto rounded-2xl border-l-4 border-brand-500 bg-brand-50/40 p-5 md:p-6">
              <p className="text-slate-700 leading-relaxed text-justify hyphens-auto">
                <span className="font-display font-bold text-brand-700">
                  {study.problemCallout}
                </span>
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ───── INLINE CTA 1 ───── */}
      {ctas[0] && <InlineCTABanner badge={ctas[0].badge} title={ctas[0].title} />}

      {/* ───── The Solution ───── */}
      <section className="py-12 lg:py-16 bg-slate-50/60 border-y border-slate-100">
        <div className="container-x">
          <FadeIn className="max-w-4xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-100 text-brand-700 text-xs font-semibold uppercase tracking-wider">
              <Wrench className="w-3.5 h-3.5" /> The Solution
            </span>
            <h2 className="mt-4 font-display font-extrabold text-3xl md:text-4xl tracking-tight leading-[1.15] text-slate-900">
              One system to monitor, track, and manage everything
            </h2>
            <p className="mt-5 text-slate-600 text-base md:text-lg leading-relaxed text-justify hyphens-auto">
              {study.solutionIntro}
            </p>
          </FadeIn>

          {/* Pillars */}
          <div className="mt-12 space-y-14 lg:space-y-20">
            {study.pillars.map((pillar, idx) => (
              <FadeIn key={pillar.title}>
                <section className="max-w-4xl mx-auto">
                  <div className="text-center max-w-4xl mx-auto">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-brand-100 text-brand-700 font-display font-extrabold text-xs tracking-widest">
                      PILLAR {String(idx + 1).padStart(2, "0")}
                    </div>
                    <h3 className="mt-4 font-display font-extrabold text-2xl md:text-3xl tracking-tight leading-tight text-slate-900">
                      {pillar.title}
                    </h3>
                    <p className="mt-4 text-slate-600 text-base md:text-lg leading-relaxed text-justify hyphens-auto">
                      {pillar.intro}
                    </p>
                  </div>

                  {pillar.features?.length > 0 && (
                    <div className="mt-7 max-w-4xl mx-auto rounded-2xl bg-white border border-slate-200 p-6 md:p-7">
                      {pillar.featuresLabel && (
                        <div className="text-xs uppercase tracking-wider font-semibold text-brand-700 text-center mb-4">
                          {pillar.featuresLabel}
                        </div>
                      )}
                      <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2.5">
                        {pillar.features.map((f) => (
                          <li key={f} className="flex items-start gap-2.5 text-sm text-slate-700 leading-relaxed">
                            <Check className="w-4 h-4 text-brand-600 flex-shrink-0 mt-0.5" />
                            <span>{f}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="mt-8 space-y-6">
                    {pillar.images.map((img) => (
                      <figure
                        key={img.src}
                        className="rounded-2xl bg-white border border-slate-200 overflow-hidden shadow-card max-w-4xl mx-auto"
                      >
                        <div className="relative w-full aspect-video bg-slate-100">
                          <Image
                            src={img.src}
                            alt={img.alt}
                            fill
                            sizes="(min-width: 1024px) 1024px, 100vw"
                            className="object-contain"
                          />
                        </div>
                        <figcaption className="px-5 md:px-6 py-4 text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/40 text-justify hyphens-auto">
                          {img.caption}
                        </figcaption>
                      </figure>
                    ))}
                  </div>

                  {pillar.outro && (
                    <p className="mt-6 max-w-4xl mx-auto text-justify hyphens-auto text-sm md:text-base text-slate-600 leading-relaxed italic border-l-2 border-brand-300 pl-4">
                      {pillar.outro}
                    </p>
                  )}
                </section>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ───── INLINE CTA 2 ───── */}
      {ctas[1] && <InlineCTABanner badge={ctas[1].badge} title={ctas[1].title} />}

      {/* ───── Results ───── */}
      <section className="py-12 lg:py-16">
        <div className="container-x">
          <FadeIn className="max-w-4xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-100 text-brand-700 text-xs font-semibold uppercase tracking-wider">
              <Trophy className="w-3.5 h-3.5" /> Key Results & Measurable Outcomes
            </span>
            <h2 className="mt-4 font-display font-extrabold text-3xl md:text-4xl tracking-tight leading-[1.15] text-slate-900">
              Measurable outcomes the team feels every day
            </h2>
          </FadeIn>

          <div className="mt-10 max-w-4xl mx-auto flex flex-wrap justify-center gap-4">
            {study.results.map((r, i) => (
              <FadeIn
                key={r.label}
                delay={(i % 4) * 0.04}
                className="w-full sm:w-[calc(50%-0.5rem)] lg:w-[calc(25%-0.75rem)] max-w-sm"
              >
                <div className="h-full rounded-2xl bg-gradient-to-br from-brand-50 to-white border border-brand-100 p-5 text-center">
                  <div className="w-10 h-10 mx-auto rounded-lg bg-brand-gradient text-white flex items-center justify-center">
                    <Check className="w-5 h-5" />
                  </div>
                  <div className="mt-3 font-display font-extrabold text-base text-slate-900 leading-tight">
                    {r.label}
                  </div>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">{r.text}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ───── Client Testimonial ───── */}
      {study.testimonial && (
        <section className="py-12 lg:py-16 bg-slate-50/60 border-y border-slate-100">
          <div className="container-x">
            <FadeIn className="max-w-4xl mx-auto">
              <div className="text-center mb-6">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-100 text-brand-700 text-xs font-semibold uppercase tracking-wider">
                  <Quote className="w-3.5 h-3.5" /> Client Voice
                </span>
              </div>
              <figure className="relative rounded-3xl bg-white border border-slate-200 p-8 md:p-12 shadow-card overflow-hidden">
                {/* Decorative gradient orb */}
                <div className="absolute -top-20 -right-20 w-56 h-56 bg-brand-100/40 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute -bottom-20 -left-20 w-56 h-56 bg-accent-100/30 rounded-full blur-3xl pointer-events-none" />

                {/* Big quote glyph */}
                <Quote className="absolute top-6 left-6 w-14 h-14 text-brand-100" />

                <div className="relative pl-2 md:pl-6">
                  <blockquote className="text-base md:text-lg text-slate-700 leading-relaxed text-justify hyphens-auto italic">
                    &ldquo;{study.testimonial.quote}&rdquo;
                  </blockquote>

                  <figcaption className="mt-7 flex items-center gap-4 pt-5 border-t border-slate-100">
                    <div className="w-12 h-12 rounded-full bg-brand-gradient text-white flex items-center justify-center font-display font-extrabold text-base shadow-glow flex-shrink-0">
                      {study.testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .slice(0, 2)
                        .join("")}
                    </div>
                    <div className="min-w-0">
                      <div className="font-display font-extrabold text-slate-900 flex items-center gap-2">
                        {study.testimonial.flag && (
                          <span className="text-lg leading-none">
                            {study.testimonial.flag}
                          </span>
                        )}
                        <span>{study.testimonial.name}</span>
                      </div>
                      {study.testimonial.role && (
                        <div className="text-sm text-brand-600 font-semibold mt-0.5">
                          {study.testimonial.role}
                        </div>
                      )}
                    </div>
                  </figcaption>
                </div>
              </figure>
            </FadeIn>
          </div>
        </section>
      )}

      {/* ───── Tech delivered ───── */}
      <section className="py-12 lg:py-16">
        <div className="container-x">
          <FadeIn className="max-w-4xl mx-auto">
            <div className="rounded-3xl bg-slate-900 text-white p-8 lg:p-10 relative overflow-hidden">
              <div className="absolute inset-0 bg-grid opacity-[0.05]" />
              <div className="blob bg-brand-500/30 w-72 h-72 -top-20 -right-20" />
              <div className="relative text-center">
                <h3 className="font-display font-extrabold text-2xl md:text-3xl">
                  Technologies & capabilities delivered
                </h3>
                <p className="mt-2 text-white/70 max-w-2xl mx-auto">
                  Everything we built into the platform — end to end.
                </p>
              </div>
              <ul className="mt-8 relative grid md:grid-cols-2 gap-x-8 gap-y-3 max-w-4xl mx-auto">
                {study.techDelivered.map((t) => (
                  <li key={t} className="flex items-start gap-3">
                    <span className="mt-1 w-5 h-5 rounded-full bg-brand-gradient flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-white" />
                    </span>
                    <span className="text-white/90 leading-relaxed text-sm">{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ───── INLINE CTA 3 ───── */}
      {ctas[2] && <InlineCTABanner badge={ctas[2].badge} title={ctas[2].title} />}

      {/* ───── What this means for your agency ───── */}
      <section className="py-12 lg:py-16 bg-slate-50/60 border-y border-slate-100">
        <div className="container-x">
          <FadeIn className="max-w-4xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-100 text-brand-700 text-xs font-semibold uppercase tracking-wider">
              What this means for your agency
            </span>
            <p className="mt-6 text-slate-600 text-base md:text-lg leading-relaxed text-justify hyphens-auto">
              {study.closing.lede}
            </p>
            <p className="mt-6 font-display font-extrabold text-2xl md:text-3xl text-slate-900 leading-tight">
              {study.closing.punchline}
            </p>
            <p className="mt-5 text-slate-600 text-base md:text-lg leading-relaxed text-justify hyphens-auto">
              {study.closing.cta}
            </p>
          </FadeIn>

          <FadeIn delay={0.08}>
            <div className="mt-8 max-w-4xl mx-auto rounded-2xl border-l-4 border-brand-500 bg-white p-5 md:p-6">
              <p className="text-slate-700 leading-relaxed text-justify hyphens-auto">{study.closing.callout}</p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ───── Final CTA ───── */}
      <section className="py-12 lg:py-16">
        <div className="container-x">
          <FadeIn className="max-w-4xl mx-auto text-center">
            <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight leading-[1.15] text-slate-900">
              {study.finalCta.heading}
            </h2>
            <p className="mt-5 text-slate-600 text-base md:text-lg leading-relaxed text-justify hyphens-auto">
              {study.finalCta.intro}
            </p>
            <p className="mt-6 text-slate-700 font-display font-bold">
              If your agency is managing multiple client websites and you're tired of:
            </p>
            <ul className="mt-4 inline-flex flex-col gap-2.5 text-left">
              {study.finalCta.tiredOf.map((t) => (
                <li key={t} className="flex items-start gap-3 text-slate-700">
                  <X className="w-5 h-5 text-rose-500 flex-shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{t}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-slate-700 text-lg font-display font-bold">
              {study.finalCta.tiredOfOutro}
            </p>
          </FadeIn>

          <FadeIn delay={0.08}>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link href="/quote" className="btn-primary">
                Start a similar project <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/contact" className="btn-secondary">
                Talk to us
              </Link>
            </div>
          </FadeIn>

          <FadeIn delay={0.12}>
            <div className="mt-10 max-w-4xl mx-auto rounded-2xl border-l-4 border-brand-500 bg-brand-50/40 p-5 md:p-6">
              <p className="text-slate-700 leading-relaxed text-justify hyphens-auto">
                <span className="font-display font-bold text-brand-700">
                  {study.finalCta.finalLine}
                </span>
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ───── About GroovyMark Web X ───── */}
      <section className="py-12 lg:py-16 bg-slate-50/60 border-y border-slate-100">
        <div className="container-x">
          <FadeIn className="max-w-4xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-100 text-brand-700 text-xs font-semibold uppercase tracking-wider">
              About GroovyMark Web X
            </span>
            <p className="mt-5 text-slate-600 text-base md:text-lg leading-relaxed text-justify hyphens-auto">
              {study.about.intro}
            </p>
          </FadeIn>

          <FadeIn delay={0.08}>
            <div className="mt-8 max-w-4xl mx-auto">
              <div className="text-xs uppercase tracking-wider font-semibold text-brand-700 text-center mb-4">
                Services
              </div>
              <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2.5">
                {study.about.services.map((s) => (
                  <li key={s} className="flex items-start gap-2.5 text-sm text-slate-700 leading-relaxed">
                    <Check className="w-4 h-4 text-brand-600 flex-shrink-0 mt-0.5" />
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          <FadeIn delay={0.14}>
            <div className="mt-10 flex justify-center">
              <Link
                href={basePath}
                className="inline-flex items-center gap-1.5 text-slate-600 hover:text-brand-600 font-medium text-sm"
              >
                <ArrowLeft className="w-4 h-4" /> All case studies
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </article>
  );
}
