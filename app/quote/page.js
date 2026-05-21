import { Suspense } from "react";
import { CheckCircle2, Clock, Globe2, ShieldCheck, Sparkles } from "lucide-react";
import { FadeIn } from "@/components/Section";
import QuoteForm from "@/components/QuoteForm";

export const metadata = {
  title: "Request a Quote — Custom Web Development & AI Project Pricing",
  description:
    "Get a tailored project quote from GroovyMark WebX in three quick steps. Choose your services, set budget and timeline, share details. We respond within one business day with a scope and recommendation.",
  keywords: [
    "request quote web development",
    "AI automation quote",
    "custom project quote",
    "web development pricing",
    "AI development pricing",
    "B2B project estimate",
  ],
  alternates: { canonical: "/quote" },
  openGraph: {
    type: "website",
    title: "Request a Quote — GroovyMark WebX",
    description:
      "Three steps. One business day response. Get your custom project scope and pricing.",
    url: "/quote",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const PROMISES = [
  { icon: Clock, title: "1 business-day response", text: "A senior team member replies within one working day." },
  { icon: ShieldCheck, title: "NDA on request", text: "We can sign yours before our first detailed call." },
  { icon: Globe2, title: "Global, async-friendly", text: "We work across time zones with structured async by default." },
  { icon: CheckCircle2, title: "No-pressure discovery", text: "We never pitch — we recommend, even if it's not us." },
];

export default function QuotePage() {
  return (
    <>
      <section className="relative pt-32 pb-12 lg:pt-44 lg:pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-grid bg-grid-fade opacity-50" />
        <div className="blob bg-brand-300 w-[34rem] h-[34rem] -top-32 -left-16 animate-blob" />
        <div className="blob bg-accent-400/30 w-[26rem] h-[26rem] top-10 right-0 animate-blob" style={{ animationDelay: "2s" }} />

        <div className="container-x relative">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14">
            <div className="lg:col-span-5">
              <FadeIn>
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-brand-100 text-brand-700 text-xs font-semibold uppercase tracking-wider shadow-sm">
                  <Sparkles className="w-3.5 h-3.5" /> Request a Quote
                </span>
                <h1 className="mt-5 font-display font-extrabold text-4xl md:text-5xl tracking-tight leading-[1.05] text-slate-900">
                  Tell us the goal. We'll bring the plan.
                </h1>
                <p className="mt-5 text-slate-600 text-lg leading-relaxed">
                  Three quick steps — services, project, contact. We respond
                  within one business day with sharper questions, a rough scope,
                  and a clear next step.
                </p>
              </FadeIn>

              <FadeIn delay={0.1}>
                <div className="mt-8 space-y-3">
                  {PROMISES.map((p) => (
                    <div key={p.title} className="flex items-start gap-3 rounded-xl bg-white border border-slate-200 p-4">
                      <div className="w-10 h-10 rounded-lg bg-brand-50 text-brand-600 flex items-center justify-center flex-shrink-0">
                        <p.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="font-display font-bold text-slate-900 text-sm">{p.title}</div>
                        <div className="text-xs text-slate-600 mt-0.5">{p.text}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </FadeIn>
            </div>

            <div className="lg:col-span-7">
              <FadeIn delay={0.1}>
                <Suspense fallback={<div className="rounded-3xl bg-white border border-slate-200 p-10 animate-pulse h-[600px]" />}>
                  <QuoteForm />
                </Suspense>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
