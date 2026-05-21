import Link from "next/link";
import { ArrowRight, Calendar, Sparkles } from "lucide-react";

/**
 * Inline full-width CTA banner used between case study sections.
 * Title on the left, Book-A-Free-Call button on the right.
 */
export default function InlineCTABanner({ badge, title, ctaHref = "/quote" }) {
  return (
    <section className="my-8 lg:my-10">
      <div className="container-x">
        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-brand-700 via-brand-600 to-accent-500 px-5 py-5 md:px-7 md:py-6 text-white shadow-xl">
            {/* Decoration */}
            <div className="absolute -top-16 -right-12 w-44 h-44 bg-white/15 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-16 -left-12 w-44 h-44 bg-accent-400/30 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute inset-0 bg-grid opacity-[0.08] pointer-events-none" />

            <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="flex-1 min-w-0">
                {badge && (
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-white/15 border border-white/25 text-white/95 text-[9px] font-bold uppercase tracking-wider backdrop-blur">
                    <Sparkles className="w-2.5 h-2.5" />
                    {badge}
                  </span>
                )}
                <h3 className="mt-2 font-display font-extrabold text-base md:text-lg leading-snug tracking-tight">
                  {title}
                </h3>
              </div>

              <Link
                href={ctaHref}
                className="btn-glow inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-lg bg-white text-brand-700 font-semibold text-sm hover:bg-brand-50 transition-colors shadow whitespace-nowrap flex-shrink-0"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span className="relative z-10">Book A Free Call</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
