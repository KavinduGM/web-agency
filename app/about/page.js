import Image from "next/image";
import Link from "next/link";
import {
  Target,
  Compass,
  HeartHandshake,
  Lightbulb,
  Globe,
  Award,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { SectionHeader, FadeIn } from "@/components/Section";
import CTASection from "@/components/CTASection";
import Stats from "@/components/Stats";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import MomentsMarquee from "@/components/MomentsMarquee";

export const metadata = {
  title: "About GroovyMark WebX — Senior Web & AI Engineering Team",
  description:
    "Meet GroovyMark WebX — a senior-only web development and AI automation studio building digital products for global B2B teams. Founded in 2019, operating across Sri Lanka, Australia, and worldwide. Outcomes over output.",
  keywords: [
    "about GroovyMark WebX",
    "web development agency Sri Lanka",
    "AI automation agency",
    "senior web engineering team",
    "global B2B agency",
    "Colombo web development",
    "Perth web development",
  ],
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About GroovyMark WebX — Senior Web & AI Engineering Team",
    description:
      "A senior-only studio of engineers, designers, and AI practitioners across three continents. Custom websites, AI agents, and measurable outcomes.",
    url: "/about",
    type: "profile",
  },
};

const VALUES = [
  { icon: Target, title: "Outcomes over output", text: "We measure success in metrics that move — pipeline, revenue, retention, cost-to-serve — not deliverables shipped." },
  { icon: Compass, title: "Senior craft, end to end", text: "No junior hand-offs. Every product is led by senior engineers and designers from kickoff to launch." },
  { icon: HeartHandshake, title: "Partner, not vendor", text: "We push back when something won't work and bring ideas when you didn't ask. That's the job." },
  { icon: Lightbulb, title: "Bias for clarity", text: "Crisp briefs, demo-led updates, decisions written down. Less mystery, faster decisions." },
  { icon: Globe, title: "Global, async-friendly", text: "Time zones are a feature, not a bug. We work across continents with structured async by default." },
  { icon: Award, title: "Built to last", text: "Performance, accessibility, observability, and documentation are not optional — they're the foundation." },
];

const TEAM = [
  {
    role: "Founder & CEO",
    image: "/about/team/1.png",
    bio: "Meta Certified Social Media Manager, entrepreneur, and researcher. I've worked with clients across the UK, USA, Australia, Dubai, New Zealand, and Canada — helping companies scale through sustainable, organic growth frameworks. GroovyMark Web X is where global teams build their digital workspaces for the AI era.",
  },
  {
    role: "CTO & Senior Software Engineer",
    image: "/about/team/2.png",
    bio: "I lead the technical vision and architecture behind everything we ship — full-stack platforms, cloud-native systems, and infrastructure engineered to scale. My focus is bridging cutting-edge technology with real-world business needs, one powerful solution at a time.",
  },
  {
    role: "Senior AI Systems Engineer",
    image: "/about/team/3.png",
    bio: "I design and integrate AI-driven systems that help businesses operate smarter and faster. From ML pipelines to automation workflows, I work at the intersection of technology and innovation — keeping our clients ahead of the curve. Building the future, one system at a time.",
  },
  {
    role: "Full Stack Developer",
    image: "/about/team/4.png",
    bio: "I bring precision, creativity, and craft to every project — writing clean, high-performance code that powers seamless digital experiences. I turn complex business requirements into elegant, scalable solutions. Passionate about quality, innovation, and continuous growth.",
  },
];

const TIMELINE = [
  { year: "2019", title: "Founded as a boutique web studio", text: "Started with a focus on trust-driven business websites for medium-size companies." },
  { year: "2021", title: "Expanded into custom platforms", text: "Began shipping operational systems — booking, billing, portals — for mid-market clients in Australia and the UK." },
  { year: "2023", title: "AI practice launched", text: "Stood up a dedicated AI engineering team after early agentic experiments for clients." },
  { year: "2025", title: "Global team, 120+ products shipped", text: "Now operating across three continents, with senior practitioners in every discipline." },
];

export default function AboutPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "About", url: "/about" },
        ]}
      />
      {/* Hero */}
      <section className="relative pt-32 pb-16 lg:pt-44 lg:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid bg-grid-fade opacity-50" />
        <div className="blob bg-brand-300 w-[34rem] h-[34rem] -top-32 -right-20 animate-blob" />
        <div className="container-x relative">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <FadeIn>
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-brand-100 text-brand-700 text-xs font-semibold uppercase tracking-wider shadow-sm">
                  About GroovyMark WebX
                </span>
              </FadeIn>
              <FadeIn delay={0.08}>
                <h1 className="mt-5 font-display font-extrabold text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.05] text-slate-900">
                  A studio for ambitious B2B teams who want more than a vendor.
                </h1>
              </FadeIn>
              <FadeIn delay={0.16}>
                <p className="mt-6 text-slate-600 text-lg leading-relaxed max-w-2xl">
                  We're a senior-only group of engineers, designers, and AI practitioners
                  scattered across three continents. We've built marketing sites that
                  closed enterprise deals, portals that replaced 14 spreadsheets, and AI
                  agents that quietly deflect half a support team's volume.
                  We bring opinions, ship quickly, and stay accountable to outcomes.
                </p>
              </FadeIn>
              <FadeIn delay={0.22}>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link href="/quote" className="btn-primary">
                    Start a project <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link href="/portfolio" className="btn-secondary">
                    See our work
                  </Link>
                </div>
              </FadeIn>
            </div>
            <FadeIn delay={0.25} className="lg:col-span-5">
              <div className="relative">
                <div className="absolute -inset-4 bg-brand-gradient opacity-20 blur-2xl rounded-3xl" />
                <Image
                  src="/about-hero.png"
                  alt="GroovyMark WebX team collaborating"
                  width={1122}
                  height={1402}
                  priority
                  className="relative rounded-3xl object-cover object-center aspect-[4/5] shadow-card-hover border border-white/60"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Mission / Stats */}
      <section className="section">
        <div className="container-x">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <FadeIn className="lg:col-span-6">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-100 text-brand-700 text-xs font-semibold uppercase tracking-wider">
                Our Mission
              </span>
              <h2 className="mt-4 font-display font-extrabold text-3xl md:text-4xl lg:text-5xl tracking-tight leading-[1.1] text-slate-900">
                Help global B2B teams ship faster and operate smarter with the right mix of web and AI.
              </h2>
              <p className="mt-5 text-slate-600 text-lg leading-relaxed">
                The internet has gotten harder, not easier. Buyers expect product-grade
                experiences. Operations teams are stretched thin. Tooling sprawls. We
                exist to cut through that — bringing senior craft, modern technology,
                and a partner's mindset to every engagement.
              </p>
              <ul className="mt-6 space-y-2.5">
                {[
                  "We invest in the parts of delivery most teams cut corners on",
                  "We treat your roadmap as ours — even after launch",
                  "We hire only senior practitioners, by design",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-2.5 text-slate-700">
                    <CheckCircle2 className="w-5 h-5 text-brand-600 flex-shrink-0 mt-0.5" />
                    {t}
                  </li>
                ))}
              </ul>
            </FadeIn>
            <FadeIn delay={0.15} className="lg:col-span-6">
              <Stats
                stats={[
                  { value: "120+", label: "Projects shipped" },
                  { value: "8+", label: "Countries served" },
                  { value: "6+", label: "Years of practice" },
                  { value: "98%", label: "Client retention" },
                ]}
              />
              <div className="mt-6 rounded-2xl overflow-hidden border border-slate-200">
                <Image
                  src="/about-2.png"
                  alt="GroovyMark WebX strategy session"
                  width={1920}
                  height={1080}
                  className="w-full aspect-[16/9] object-cover object-center"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section bg-slate-50/60 border-y border-slate-100">
        <div className="container-x">
          <SectionHeader
            eyebrow="Our Values"
            title="Six principles that shape how we work"
            description="These aren't slogans — they're the calls we make when nobody's looking. They show up in our briefs, our reviews, and the products we ship."
          />
          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {VALUES.map((v, i) => (
              <FadeIn key={v.title} delay={i * 0.05}>
                <div className="h-full rounded-2xl bg-white border border-slate-200 p-6 card-lift">
                  <div className="w-12 h-12 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center">
                    <v.icon className="w-6 h-6" />
                  </div>
                  <h3 className="mt-5 font-display font-bold text-lg text-slate-900">{v.title}</h3>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">{v.text}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section">
        <div className="container-x">
          <SectionHeader
            eyebrow="Our Story"
            title="From boutique studio to global B2B partner"
          />
          <div className="mt-10 relative max-w-3xl mx-auto">
            <div className="absolute left-3 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-px bg-gradient-to-b from-brand-300 via-brand-200 to-transparent" />
            <div className="space-y-5 md:space-y-6">
              {TIMELINE.map((t, i) => (
                <FadeIn key={t.year} delay={i * 0.06}>
                  <div className={`relative flex flex-col md:flex-row gap-4 md:gap-10 ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}>
                    <div className="md:w-1/2 pl-10 md:pl-0">
                      <div className={`rounded-2xl bg-white border border-slate-200 p-5 card-lift ${i % 2 === 1 ? "md:text-right" : ""}`}>
                        <div className="text-brand-600 font-display font-extrabold text-xs tracking-widest">{t.year}</div>
                        <h3 className="mt-1.5 font-display font-bold text-base text-slate-900">{t.title}</h3>
                        <p className="mt-1.5 text-sm text-slate-600 leading-relaxed">{t.text}</p>
                      </div>
                    </div>
                    <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 top-3 w-5 h-5 rounded-full bg-brand-gradient ring-4 ring-white shadow-glow" />
                    <div className="hidden md:block md:w-1/2" />
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team moments marquee */}
      <section className="pt-4 pb-16 lg:pt-8 lg:pb-24">
        <div className="container-x">
          <SectionHeader
            eyebrow="Behind the scenes"
            title="Our team moments"
            description="A peek into the days, demos, and milestones that make GroovyMark WebX what it is."
          />
        </div>
        <FadeIn className="mt-10 lg:mt-14">
          <MomentsMarquee duration={60} />
        </FadeIn>
      </section>

      {/* Team */}
      <section className="section bg-slate-50/60 border-y border-slate-100">
        <div className="container-x">
          <SectionHeader
            eyebrow="The team"
            title="Senior practitioners — the people who'll build your product"
            description="No black-box account managers. The people you meet are the people who ship."
          />
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
            {TEAM.map((m, i) => (
              <FadeIn key={m.role} delay={i * 0.06}>
                <article className="group h-full rounded-2xl bg-white border border-slate-200 overflow-hidden card-lift flex flex-col">
                  <div className="relative aspect-[4/5] overflow-hidden bg-slate-100">
                    <Image
                      src={m.image}
                      alt={m.role}
                      fill
                      sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover group-hover:scale-[1.05] transition-transform duration-700"
                    />
                  </div>
                  <div className="p-5 flex-1 flex flex-col">
                    <span className="inline-flex w-fit items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-brand-50 text-brand-700 border border-brand-100">
                      GroovyMark Web X
                    </span>
                    <h3 className="mt-2.5 font-display font-extrabold text-lg text-slate-900 leading-snug">
                      {m.role}
                    </h3>
                    <p className="mt-2.5 text-slate-600 text-sm leading-relaxed">{m.bio}</p>
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="Work with us"
        title="Let's build the right thing — well."
        description="Tell us about your goals. We'll come back within one business day with sharper questions, a rough scope, and a recommendation."
      />
    </>
  );
}
