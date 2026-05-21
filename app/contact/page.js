import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  MessageCircle,
  Calendar,
  Sparkles,
  Globe2,
  ArrowRight,
} from "lucide-react";
import { SectionHeader, FadeIn } from "@/components/Section";
import EmbeddedContactForm from "@/components/EmbeddedContactForm";
import { BreadcrumbJsonLd, FAQJsonLd } from "@/components/JsonLd";

export const metadata = {
  title: "Contact GroovyMark WebX — Start Your Web or AI Project",
  description:
    "Get in touch with GroovyMark WebX for web development, AI automation, or a custom system. Reach us by email (webx@groovymark.com), phone (+94 71 234 5222), WhatsApp, or our contact form. We reply within one business day.",
  keywords: [
    "contact GroovyMark WebX",
    "hire web development agency",
    "hire AI automation agency",
    "web development quote",
    "AI development consultation",
    "Sri Lanka web agency contact",
  ],
  alternates: { canonical: "/contact" },
  openGraph: {
    type: "website",
    title: "Contact GroovyMark WebX — Start Your Project",
    description:
      "Email, phone, WhatsApp, or contact form. One business day response time, always.",
    url: "/contact",
  },
};

const CHANNELS = [
  { icon: Mail, label: "Email", value: "webx@groovymark.com", href: "mailto:webx@groovymark.com" },
  { icon: Phone, label: "Phone", value: "+94 71 234 5222", href: "tel:+94712345222" },
  { icon: MessageCircle, label: "WhatsApp", value: "+94 71 234 5222", href: "https://wa.me/94712345222" },
  { icon: Calendar, label: "Book a call", value: "30 min discovery", href: "/quote" },
];

const OFFICES = [
  { city: "Colombo", country: "Sri Lanka — HQ", address: "Global · headquartered in Colombo, Sri Lanka", tz: "IST (UTC +5:30)" },
  { city: "Perth", country: "Australia — Branch", address: "Branch office in Perth, Western Australia", tz: "AWST (UTC +8)" },
];

const FAQ = [
  {
    q: "How long does it take to design and develop a professional business website or web application?",
    a: "The timeline depends on the complexity of your project. A standard business website typically takes 2–4 weeks, while a custom web application or AI-powered platform can take 6–16 weeks. Our development process includes discovery, UI/UX design, front-end and back-end development, testing, and deployment. We provide a detailed project roadmap upfront so you always know exactly where your project stands.",
  },
  {
    q: "How much does it cost to build a custom website or AI-integrated web system for my business?",
    a: "Web development costs vary based on features, integrations, and complexity. A professional business website can start from $1,500, while custom web applications and AI-integrated systems typically range from $5,000 to $50,000+. We offer transparent, fixed-price packages with no hidden fees — and a free consultation to give you an accurate quote tailored to your business needs and budget.",
  },
  {
    q: "Can you integrate Artificial Intelligence (AI) into my existing website or business system?",
    a: "Yes. We specialize in AI integration for businesses, including AI chatbots, automated customer support, machine learning features, predictive analytics, and smart recommendation engines. Whether you need to upgrade an existing platform or build an AI-driven system from scratch, we help businesses leverage AI technology to automate processes, reduce costs, and improve customer experience.",
  },
  {
    q: "Will my website be mobile-friendly, fast-loading, and optimized for search engines (SEO)?",
    a: "Absolutely. Every website we develop is fully responsive across all devices, built for high performance and fast loading speeds, and follows the latest on-page SEO best practices — including clean code structure, optimized metadata, Core Web Vitals compliance, and schema markup. A fast, mobile-optimized, SEO-ready website is not optional for us — it's our standard.",
  },
  {
    q: "Do you provide ongoing website maintenance, security updates, and technical support after launch?",
    a: "Yes. We offer comprehensive post-launch support plans that include regular software updates, security monitoring, performance optimization, bug fixes, and content updates. Our 24/7 customer support team ensures your website or web application stays secure, up-to-date, and running at peak performance — so you can focus on growing your business without worrying about the technical side.",
  },
];

export default function ContactPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Contact", url: "/contact" },
        ]}
      />
      <FAQJsonLd questions={FAQ} />

      {/* Hero */}
      <section className="relative pt-32 pb-12 lg:pt-44 lg:pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-grid bg-grid-fade opacity-50" />
        <div className="blob bg-brand-300 w-[34rem] h-[34rem] -top-32 -right-16 animate-blob" />
        <div className="container-x relative">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <FadeIn>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-brand-100 text-brand-700 text-xs font-semibold uppercase tracking-wider shadow-sm">
                <Sparkles className="w-3.5 h-3.5" /> Get in touch
              </span>
              <h1 className="mt-5 font-display font-extrabold text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.05] text-slate-900">
                Let's start a conversation.
              </h1>
              <p className="mt-6 text-slate-600 text-lg leading-relaxed max-w-xl">
                Tell us about your project, your timelines, or the outcome
                you want. We reply to every message within one business day.
              </p>
              <div className="mt-8 grid sm:grid-cols-2 gap-3">
                {CHANNELS.map((c) => (
                  <a
                    key={c.label}
                    href={c.href}
                    className="group flex items-center gap-3 rounded-xl bg-white border border-slate-200 p-4 hover:border-brand-300 transition-colors"
                  >
                    <div className="w-11 h-11 rounded-lg bg-brand-50 text-brand-600 flex items-center justify-center group-hover:bg-brand-gradient group-hover:text-white transition-colors flex-shrink-0">
                      <c.icon className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs uppercase tracking-wider text-slate-500 font-semibold">{c.label}</div>
                      <div className="text-sm font-display font-bold text-slate-900 truncate">{c.value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={0.15}>
              <EmbeddedContactForm />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Offices */}
      <section className="section">
        <div className="container-x">
          <SectionHeader
            eyebrow="Where we work"
            title="Two regions, one team"
            description="We're async-first by default — so wherever you are, we can find a working rhythm."
          />
          <div className="mt-12 grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {OFFICES.map((o, i) => (
              <FadeIn key={o.city} delay={i * 0.06}>
                <div className="h-full rounded-2xl bg-white border border-slate-200 p-6 card-lift">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-lg bg-brand-50 text-brand-600 flex items-center justify-center">
                      <Globe2 className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-lg text-slate-900">{o.city}</h3>
                      <p className="text-xs text-slate-500">{o.country}</p>
                    </div>
                  </div>
                  <p className="mt-4 text-sm text-slate-600 flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-brand-600 mt-0.5 flex-shrink-0" />
                    {o.address}
                  </p>
                  <p className="mt-2 text-xs text-slate-500 ml-6">{o.tz}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-slate-50/60 border-y border-slate-100">
        <div className="container-x">
          <SectionHeader
            eyebrow="FAQ"
            title="Quick answers"
          />
          <div className="mt-12 max-w-3xl mx-auto grid gap-3">
            {FAQ.map((f, i) => (
              <FadeIn key={f.q} delay={i * 0.04}>
                <details className="group rounded-2xl bg-white border border-slate-200 p-5 open:border-brand-200">
                  <summary className="cursor-pointer list-none flex items-center justify-between gap-4">
                    <span className="font-display font-bold text-slate-900">{f.q}</span>
                    <span className="w-7 h-7 rounded-full bg-brand-50 text-brand-600 flex items-center justify-center group-open:rotate-45 transition-transform">+</span>
                  </summary>
                  <p className="mt-3 text-slate-600 leading-relaxed text-sm">{f.a}</p>
                </details>
              </FadeIn>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link href="/quote" className="btn-primary">
              Or skip ahead — request a quote <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
