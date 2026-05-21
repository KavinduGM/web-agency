import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Sparkles,
  Globe2,
  ShieldCheck,
  Gauge,
  Zap,
  CheckCircle2,
  Star,
  BugOff,
  Headphones,
  CalendarCheck,
  Award,
} from "lucide-react";
import { SectionHeader, FadeIn } from "@/components/Section";
import ServiceCard from "@/components/ServiceCard";
import CTASection from "@/components/CTASection";
import Stats from "@/components/Stats";
import LogoMarquee from "@/components/LogoMarquee";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import { SERVICES, CATEGORIES } from "@/lib/services";
import { TESTIMONIALS } from "@/lib/testimonials";

export const metadata = {
  title: "Web Development & AI Automation Agency for Global B2B",
  description:
    "GroovyMark WebX is a custom web development and AI automation agency. We design, build, and automate websites, eCommerce platforms, web applications, and AI agents for forward-thinking B2B teams worldwide. Senior-only delivery, measurable outcomes.",
  keywords: [
    "web development agency",
    "AI automation agency",
    "custom web development",
    "B2B web agency",
    "AI agents for business",
    "eCommerce development",
    "AI chatbot development",
    "workflow automation",
    "global web development",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: "Web Development & AI Automation Agency for Global B2B",
    description:
      "Custom websites, eCommerce, and AI agents engineered for measurable B2B outcomes. Senior-only delivery, built to last.",
    url: "/",
    type: "website",
  },
};

const GUARANTEES = [
  {
    icon: BugOff,
    title: "Lifetime Bug-Free Support",
    text: "Any bugs or technical issues that arise after launch are on us — no extra charge, no expiry date. We stand behind our code for the lifetime of your product.",
  },
  {
    icon: Headphones,
    title: "24/7 Customer Support",
    text: "Our team is available around the clock, every day of the year. Whether it's a critical outage at midnight or a quick question on a weekend, we're always reachable.",
  },
  {
    icon: CalendarCheck,
    title: "On-Time Delivery",
    text: "We commit to agreed project timelines and keep you informed every step of the way. If anything shifts, you'll know before the deadline — never after.",
  },
  {
    icon: Award,
    title: "100% Satisfaction Promise",
    text: "We don't consider a project done until you're genuinely happy with the result. We'll revise, refine, and rework until the final product fully meets your expectations.",
  },
];

const HIGHLIGHTS = [
  { icon: Globe2, title: "Global by default", text: "B2B teams across 12+ countries trust us to ship and operate digital products at scale." },
  { icon: Gauge, title: "Performance-obsessed", text: "Sub-second pages, lean bundles, and Core Web Vitals tuned for SEO and conversion." },
  { icon: ShieldCheck, title: "Enterprise-grade", text: "SSO, RBAC, SOC 2-ready architectures, and compliant data handling out of the box." },
  { icon: Zap, title: "AI-native delivery", text: "Every project ships with AI workflows where they add real leverage — never as gimmicks." },
];

const PROCESS = [
  { step: "01", title: "Discover", text: "Goals, audience, constraints, KPIs. We listen first, then write the brief together." },
  { step: "02", title: "Design", text: "Architecture, UX flows, and high-fidelity Figma — reviewed in working sessions." },
  { step: "03", title: "Build", text: "Component-driven engineering with weekly demos and continuous deployment." },
  { step: "04", title: "Launch & evolve", text: "Migration, performance pass, analytics, and a roadmap to keep compounding value." },
];


export default function HomePage() {
  // Hand-picked featured services for the home page (3 web-dev + 3 AI).
  const featuredSlugs = [
    "business-website",
    "landing-page",
    "ecommerce-store",
    "ai-chatbot",
    "ai-lead-qualification",
    "predictive-analytics",
  ];
  const featured = featuredSlugs
    .map((slug) => SERVICES.find((s) => s.slug === slug))
    .filter(Boolean);

  return (
    <>
      {/* ───── Hero ───── */}
      <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-grid bg-grid-fade opacity-60" />
        <div className="blob bg-brand-300 w-[40rem] h-[40rem] -top-40 -left-40 animate-blob" />
        <div className="blob bg-accent-400/40 w-[30rem] h-[30rem] top-20 -right-20 animate-blob" style={{ animationDelay: "2s" }} />

        <div className="container-x relative">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <div className="lg:col-span-7">
              <FadeIn>
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-brand-100 text-brand-700 text-xs font-semibold uppercase tracking-wider shadow-sm">
                  <Sparkles className="w-3.5 h-3.5" />
                  Web Development × AI Automation
                </span>
              </FadeIn>
              <FadeIn delay={0.08}>
                <h1 className="mt-5 font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.02] tracking-tight text-slate-900">
                  We build the <span className="text-gradient">digital products</span> that move B2B businesses forward.
                </h1>
              </FadeIn>
              <FadeIn delay={0.16}>
                <p className="mt-6 text-slate-600 text-lg leading-relaxed max-w-2xl">
                  GroovyMark WebX designs and engineers websites, eCommerce platforms,
                  custom systems, and AI-powered automations for global teams.
                  Modern, measurable, and built to last.
                </p>
              </FadeIn>
              <FadeIn delay={0.22}>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link href="/quote" className="btn-primary btn-glow">
                    <span className="relative z-10 inline-flex items-center gap-2">
                      Request a Quote <ArrowRight className="w-4 h-4" />
                    </span>
                  </Link>
                  <Link href="/services" className="btn-secondary">
                    Explore Services
                  </Link>
                </div>
              </FadeIn>
              <FadeIn delay={0.3}>
                <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-600">
                  {["B2B-focused delivery", "Global, async-friendly", "Senior-only team"].map((t) => (
                    <li key={t} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-brand-600" /> {t}
                    </li>
                  ))}
                </ul>
              </FadeIn>
            </div>

            <FadeIn delay={0.25} className="lg:col-span-5">
              <div className="relative">
                <div className="absolute -inset-4 bg-brand-gradient opacity-20 blur-2xl rounded-3xl" />
                <div className="relative rounded-3xl overflow-hidden shadow-card-hover border border-white/60">
                  <Image
                    src="/hero-image.png"
                    alt="GroovyMark WebX team building digital products"
                    width={800}
                    height={1000}
                    className="w-full h-full object-cover object-center aspect-[4/5]"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5 glass rounded-2xl p-4 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-brand-gradient flex items-center justify-center text-white">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-wider text-brand-700 font-semibold">Now shipping</div>
                      <div className="text-sm font-display font-bold text-slate-900">Agentic websites for global B2B</div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.35} className="mt-16">
            <Stats
              stats={[
                { value: "120+", label: "Projects delivered" },
                { value: "8+", label: "Countries served" },
                { value: "98%", label: "Client retention" },
                { value: "4.9/5", label: "Avg. client rating" },
              ]}
            />
          </FadeIn>
        </div>
      </section>

      {/* ───── Client logos marquee ───── */}
      <section className="pt-4 pb-6 lg:pt-6 lg:pb-8">
        <div className="container-x">
          <p className="text-center text-xs uppercase tracking-[0.2em] text-slate-400 font-semibold">
            Trusted by global B2B teams
          </p>
          <LogoMarquee />
        </div>
      </section>

      {/* ───── Service categories ───── */}
      <section className="section">
        <div className="container-x">
          <SectionHeader
            eyebrow="What we do"
            className="max-w-5xl"
            title={
              <>
                Two practices, one outcome.
                <br className="hidden sm:block" />
                Products that work in the real world.
              </>
            }
            description="Whether you need a marketing site that converts, a custom operations platform, or an AI workflow that pays for itself, we deliver under one roof."
          />

          <div className="mt-14 grid lg:grid-cols-2 gap-6">
            {Object.values(CATEGORIES).map((cat) => (
              <FadeIn key={cat.slug}>
                <Link
                  href={`/services#${cat.slug}`}
                  className="group relative block rounded-3xl overflow-hidden border border-slate-200 bg-white card-lift"
                >
                  <div className="relative aspect-[16/9] overflow-hidden bg-slate-50">
                    <Image
                      src={cat.image}
                      alt={`${cat.title} — illustrated service category`}
                      fill
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      className="object-contain group-hover:scale-[1.03] transition-transform duration-700"
                    />
                  </div>
                  <div className="p-8">
                    <h3 className="font-display font-extrabold text-2xl text-slate-900 group-hover:text-brand-700 transition-colors">
                      {cat.title}
                    </h3>
                    <p className="mt-3 text-slate-600 leading-relaxed">{cat.description}</p>
                    <span className="mt-5 inline-flex items-center gap-1.5 text-brand-600 font-semibold text-sm">
                      Explore {cat.title.split(" ")[0]} services <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ───── Featured services ───── */}
      <section className="section bg-slate-50/60 border-y border-slate-100">
        <div className="container-x">
          <SectionHeader
            eyebrow="Featured Services"
            title="A few of the engines we build"
            description="Each engagement is custom — but these are the most-requested products our clients ship with us."
          />

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featured.map((s, i) => (
              <ServiceCard key={s.slug} service={s} index={i} />
            ))}
          </div>

          {/* Purple CTA — under the service cards, centered */}
          <FadeIn delay={0.1}>
            <div className="mt-12 flex justify-center">
              <Link href="/services" className="btn-primary">
                View all 24 services <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ───── Why us ───── */}
      <section className="section">
        <div className="container-x">
          <SectionHeader
            eyebrow="Why GroovyMark WebX"
            title="Senior craft. Global delivery. Real outcomes."
            description="We're a senior-only team that obsesses over the parts most agencies skip: performance, accessibility, observability, and the unglamorous stuff that makes products work for years."
          />

          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {HIGHLIGHTS.map((h, i) => (
              <FadeIn key={h.title} delay={i * 0.06}>
                <div className="h-full rounded-2xl bg-white border border-slate-200 p-6 card-lift">
                  <div className="w-12 h-12 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center">
                    <h.icon className="w-6 h-6" />
                  </div>
                  <h3 className="mt-5 font-display font-bold text-lg text-slate-900">{h.title}</h3>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">{h.text}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ───── Process ───── */}
      <section className="section bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-[0.05]" />
        <div className="blob bg-brand-600/40 w-[28rem] h-[28rem] -top-32 left-1/4" />
        <div className="blob bg-accent-500/30 w-[28rem] h-[28rem] bottom-0 right-0" />
        <div className="container-x relative">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-white/90 text-xs font-semibold uppercase tracking-wider">
              Our Process
            </span>
            <h2 className="mt-4 font-display font-extrabold text-3xl md:text-5xl tracking-tight leading-[1.05]">
              A delivery model built for high-trust, high-velocity B2B work.
            </h2>
          </div>

          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROCESS.map((p, i) => (
              <FadeIn key={p.step} delay={i * 0.08}>
                <div className="relative rounded-2xl bg-white/5 border border-white/10 p-6 backdrop-blur hover:bg-white/10 transition-colors">
                  <div className="text-brand-300 font-display font-extrabold text-sm tracking-widest">
                    {p.step}
                  </div>
                  <h3 className="mt-3 font-display font-bold text-xl">{p.title}</h3>
                  <p className="mt-2 text-sm text-white/70 leading-relaxed">{p.text}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ───── Our 4 Guarantees ───── */}
      <section className="section">
        <div className="container-x">
          <SectionHeader
            eyebrow="Our Guarantees"
            title={
              <>
                Four promises we keep on every project.
                <br className="hidden sm:block" />{" "}
                Without exception.
              </>
            }
            description="The standards that come built-in with every engagement — not features you have to ask for, ceilings you can rely on."
          />

          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
            {GUARANTEES.map((g, i) => (
              <FadeIn key={g.title} delay={i * 0.06}>
                <article className="group h-full relative rounded-2xl bg-white border border-slate-200 p-6 lg:p-7 card-lift overflow-hidden">
                  <div className="absolute -top-12 -right-12 w-32 h-32 bg-brand-100/30 rounded-full blur-2xl pointer-events-none group-hover:bg-brand-200/40 transition-colors" />
                  <div className="relative">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-brand-gradient text-white shadow-glow">
                      <g.icon className="w-5 h-5" />
                    </div>
                    <div className="mt-5 flex items-center gap-2 text-brand-600 font-display font-extrabold text-xs tracking-widest">
                      <span className="w-5 h-px bg-brand-300" />
                      GUARANTEE {String(i + 1).padStart(2, "0")}
                    </div>
                    <h3 className="mt-2 font-display font-extrabold text-lg lg:text-xl text-slate-900 leading-tight">
                      {g.title}
                    </h3>
                    <p className="mt-3 text-sm text-slate-600 leading-relaxed">{g.text}</p>
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ───── Client testimonials ───── */}
      <section className="section bg-slate-50/60 border-y border-slate-100">
        <div className="container-x">
          <SectionHeader
            eyebrow="Client Voices"
            title="What our clients say about working with us"
            description="Real reviews from real teams across five continents — the businesses we've helped move forward."
          />

          <div className="mt-12">
            <TestimonialsCarousel items={TESTIMONIALS} />
          </div>

          {/* Summary strip below testimonials */}
          <FadeIn delay={0.1}>
            <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm text-slate-600">
              <div className="flex items-center gap-2">
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="font-display font-bold text-slate-900">5.0 / 5</span>
                <span className="text-slate-500">average rating</span>
              </div>
              <span className="hidden sm:inline text-slate-300">·</span>
              <span>
                Clients across{" "}
                <span className="font-bold text-slate-900">🇦🇺 🇨🇦 🇬🇧 🇺🇸 🇳🇿</span>
              </span>
            </div>
          </FadeIn>
        </div>
      </section>

      <CTASection />
    </>
  );
}
