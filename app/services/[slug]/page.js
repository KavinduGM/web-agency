import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import * as Icons from "lucide-react";
import {
  ArrowRight,
  ArrowLeft,
  Check,
  Clock,
  Sparkles,
  Layers,
  Target,
  Zap,
  ChevronRight,
} from "lucide-react";
import { FadeIn } from "@/components/Section";
import CTASection from "@/components/CTASection";
import { ServiceJsonLd, BreadcrumbJsonLd } from "@/components/JsonLd";
import {
  SERVICES,
  ALL_SERVICE_SLUGS,
  getServiceBySlug,
  CATEGORIES,
} from "@/lib/services";

export const dynamicParams = false;

export function generateStaticParams() {
  return ALL_SERVICE_SLUGS.map((slug) => ({ slug }));
}

export function generateMetadata({ params }) {
  const service = getServiceBySlug(params.slug);
  if (!service) return {};
  const category = CATEGORIES[service.category];
  const url = `/services/${service.slug}`;
  // Build a richer description capped at ~160 chars
  const desc = service.description.length > 160
    ? service.description.slice(0, 157) + "…"
    : service.description;

  // Per-service keywords derived from title + tech stack + use cases
  const keywords = [
    service.title,
    service.subtitle,
    `${service.title} development`,
    `${service.title} services`,
    `${service.title} agency`,
    ...(service.techStack || []),
    ...(service.useCases || []).slice(0, 3),
    category.title,
    "GroovyMark WebX",
  ].filter(Boolean);

  return {
    title: service.title,
    description: desc,
    keywords,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      title: `${service.title} | GroovyMark WebX`,
      description: desc,
      url,
      images: [{ url: service.image, width: 1200, height: 630, alt: service.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${service.title} | GroovyMark WebX`,
      description: desc,
    },
  };
}

export default function ServiceDetailPage({ params }) {
  const service = getServiceBySlug(params.slug);
  if (!service) notFound();
  const Icon = Icons[service.icon] || Icons.Sparkles;
  const category = CATEGORIES[service.category];

  const related = SERVICES.filter(
    (s) => s.category === service.category && s.slug !== service.slug
  ).slice(0, 3);

  const breadcrumb = [
    { name: "Home", url: "/" },
    { name: "Services", url: "/services" },
    { name: category.title, url: `/services/${category.slug}` },
    { name: service.title, url: `/services/${service.slug}` },
  ];

  return (
    <>
      <ServiceJsonLd service={service} />
      <BreadcrumbJsonLd items={breadcrumb} />

      {/* Hero */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid bg-grid-fade opacity-40" />
        <div className="blob bg-brand-300 w-[36rem] h-[36rem] -top-32 -right-20 animate-blob" />
        <div className="container-x relative">
          {/* Breadcrumb */}
          <FadeIn>
            <nav className="flex items-center gap-1.5 text-sm text-slate-500">
              <Link href="/" className="hover:text-brand-600">Home</Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <Link href="/services" className="hover:text-brand-600">Services</Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <Link href={`/services#${category.slug}`} className="hover:text-brand-600">
                {category.title.replace(" Services", "")}
              </Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <span className="text-slate-700 font-medium">{service.title}</span>
            </nav>
          </FadeIn>

          <div className="mt-8 grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <div className="lg:col-span-7">
              <FadeIn>
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-brand-100 text-brand-700 text-xs font-semibold uppercase tracking-wider shadow-sm">
                  <Icon className="w-3.5 h-3.5" />
                  {category.title.replace(" Services", "")}
                </span>
              </FadeIn>
              <FadeIn delay={0.06}>
                <h1 className="mt-5 font-display font-extrabold text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.05] text-slate-900">
                  {service.title}
                </h1>
                <p className="mt-3 font-display text-xl text-brand-600 font-semibold">
                  {service.subtitle}
                </p>
              </FadeIn>
              <FadeIn delay={0.14}>
                <p className="mt-6 text-slate-600 text-lg leading-relaxed max-w-2xl">
                  {service.tagline}
                </p>
              </FadeIn>
              <FadeIn delay={0.2}>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link href={`/quote?service=${service.slug}`} className="btn-primary">
                    Request a Quote <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link href="/contact" className="btn-secondary">
                    Talk to us
                  </Link>
                </div>
              </FadeIn>
              <FadeIn delay={0.26}>
                <div className="mt-8 flex flex-wrap gap-4 text-sm text-slate-600">
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-slate-200">
                    <Clock className="w-4 h-4 text-brand-600" />
                    <span><span className="font-semibold text-slate-900">Timeline:</span> {service.timeline}</span>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-slate-200">
                    <Layers className="w-4 h-4 text-brand-600" />
                    <span><span className="font-semibold text-slate-900">Deliverables:</span> {service.deliverables.length}</span>
                  </div>
                </div>
              </FadeIn>
            </div>
            <FadeIn delay={0.18} className="lg:col-span-5">
              <div className="relative">
                <div className="absolute -inset-4 bg-brand-gradient opacity-20 blur-2xl rounded-3xl" />
                <Image
                  src={service.image}
                  alt={service.title}
                  width={900}
                  height={1000}
                  className="relative rounded-3xl object-cover aspect-[4/5] shadow-card-hover border border-white/60"
                  priority
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="section pt-0">
        <div className="container-x">
          <div className="grid lg:grid-cols-12 gap-10">
            <FadeIn className="lg:col-span-8">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-100 text-brand-700 text-xs font-semibold uppercase tracking-wider">
                <Target className="w-3.5 h-3.5" /> Overview
              </span>
              <h2 className="mt-4 font-display font-extrabold text-3xl md:text-4xl tracking-tight leading-[1.1] text-slate-900">
                What we build, and why it works.
              </h2>
              <p className="mt-5 text-slate-600 text-lg leading-relaxed">
                {service.overview}
              </p>
            </FadeIn>
            <FadeIn delay={0.1} className="lg:col-span-4">
              <div className="rounded-2xl bg-gradient-to-br from-brand-50 to-white border border-brand-100 p-6">
                <h3 className="font-display font-bold text-slate-900 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-brand-600" /> What you get
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {service.deliverables.map((d) => (
                    <li key={d} className="flex items-start gap-2.5 text-sm text-slate-700">
                      <Check className="w-4 h-4 text-brand-600 flex-shrink-0 mt-0.5" />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section pt-0">
        <div className="container-x">
          <FadeIn>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-100 text-brand-700 text-xs font-semibold uppercase tracking-wider">
              <Zap className="w-3.5 h-3.5" /> Capabilities
            </span>
            <h2 className="mt-4 font-display font-extrabold text-3xl md:text-4xl tracking-tight leading-[1.1] text-slate-900">
              Built around the features that actually matter.
            </h2>
          </FadeIn>
          <div className="mt-12 grid md:grid-cols-2 gap-5">
            {service.features.map((f, i) => (
              <FadeIn key={f.title} delay={(i % 4) * 0.06}>
                <div className="h-full rounded-2xl bg-white border border-slate-200 p-6 card-lift">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-brand-gradient text-white flex items-center justify-center flex-shrink-0">
                      <Check className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-lg text-slate-900">{f.title}</h3>
                      <p className="mt-2 text-sm text-slate-600 leading-relaxed">{f.description}</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits & Use cases */}
      <section className="section pt-0">
        <div className="container-x">
          <div className="grid lg:grid-cols-2 gap-6">
            <FadeIn>
              <div className="rounded-3xl bg-slate-900 text-white p-8 lg:p-10 relative overflow-hidden">
                <div className="absolute inset-0 bg-grid opacity-[0.05]" />
                <div className="blob bg-brand-500/30 w-72 h-72 -top-20 -right-20" />
                <div className="relative">
                  <h3 className="font-display font-extrabold text-2xl md:text-3xl">Business benefits</h3>
                  <p className="mt-2 text-white/70">What this looks like on your scorecard.</p>
                  <ul className="mt-7 space-y-3.5">
                    {service.benefits.map((b) => (
                      <li key={b} className="flex items-start gap-3">
                        <span className="mt-1 w-5 h-5 rounded-full bg-brand-gradient flex items-center justify-center flex-shrink-0">
                          <Check className="w-3 h-3 text-white" />
                        </span>
                        <span className="text-white/90 leading-relaxed">{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.08}>
              <div className="rounded-3xl bg-white border border-slate-200 p-8 lg:p-10 h-full">
                <h3 className="font-display font-extrabold text-2xl md:text-3xl text-slate-900">Common use cases</h3>
                <p className="mt-2 text-slate-600">Where we've shipped this, or something close to it.</p>
                <ul className="mt-7 space-y-3.5">
                  {service.useCases.map((u) => (
                    <li key={u} className="flex items-start gap-3 text-slate-700">
                      <span className="mt-1 w-5 h-5 rounded-full bg-brand-50 text-brand-600 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3" />
                      </span>
                      <span className="leading-relaxed">{u}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-7 pt-7 border-t border-slate-100">
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-slate-500">Typical tech stack</h4>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {service.techStack.map((t) => (
                      <span key={t} className="px-2.5 py-1 rounded-md text-xs font-medium bg-slate-100 text-slate-700">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section pt-0">
        <div className="container-x">
          <FadeIn className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-100 text-brand-700 text-xs font-semibold uppercase tracking-wider">
              How we ship
            </span>
            <h2 className="mt-4 font-display font-extrabold text-3xl md:text-4xl tracking-tight leading-[1.1] text-slate-900">
              Our delivery process for {service.title.toLowerCase()}.
            </h2>
          </FadeIn>
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {service.process.map((p, i) => (
              <FadeIn key={p.step} delay={i * 0.06}>
                <div className="h-full rounded-2xl bg-white border border-slate-200 p-6 card-lift relative overflow-hidden">
                  <div className="absolute -top-6 -right-6 font-display font-extrabold text-7xl text-brand-50 select-none">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="relative">
                    <div className="text-xs uppercase tracking-widest font-semibold text-brand-600">Step {i + 1}</div>
                    <h3 className="mt-2 font-display font-bold text-lg text-slate-900">{p.step}</h3>
                    <p className="mt-2 text-sm text-slate-600 leading-relaxed">{p.description}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Related services */}
      <section className="section pt-0">
        <div className="container-x">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <FadeIn>
              <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight leading-[1.1] text-slate-900">
                Related services
              </h2>
              <p className="mt-2 text-slate-600">More from our {category.title.toLowerCase()}.</p>
            </FadeIn>
            <Link href="/services" className="btn-ghost">
              All services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {related.map((s, i) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="group block rounded-2xl bg-white border border-slate-200 overflow-hidden card-lift"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, 100vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-display font-bold text-lg text-slate-900 group-hover:text-brand-700">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600 line-clamp-2">{s.description}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-10">
            <Link href="/services" className="inline-flex items-center gap-1.5 text-slate-600 hover:text-brand-600 font-medium text-sm">
              <ArrowLeft className="w-4 h-4" /> Back to all services
            </Link>
          </div>
        </div>
      </section>

      <CTASection
        eyebrow={service.title}
        title={`Let's scope your ${service.title.toLowerCase()}.`}
        description="Share a few details about your goals and constraints — we'll respond within one business day with sharper questions and a recommendation."
        primaryHref={`/quote?service=${service.slug}`}
      />
    </>
  );
}
