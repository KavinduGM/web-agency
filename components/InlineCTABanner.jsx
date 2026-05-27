import Link from "next/link";
import { ArrowRight, Calendar, Sparkles, Compass, FileText } from "lucide-react";

/**
 * Inline full-width CTA banner.
 *
 * Two usage modes:
 *   - Default (case studies, marketing pages): wraps itself in a section +
 *     container + max-w-4xl so it spans those layouts cleanly.
 *   - `embedded` (blog article body): drops the wrappers so the banner
 *     aligns to whatever column the parent already established. Use this
 *     when the banner is nested inside an article's max-w-3xl prose column.
 *
 * The button label + icon adapt to the destination href so each CTA reads
 * naturally without the caller having to pass `ctaLabel`.
 */
export default function InlineCTABanner({
  badge,
  title,
  ctaHref = "/quote",
  ctaLabel,
  embedded = false,
}) {
  const { label, Icon } = resolveCta(ctaHref, ctaLabel);

  const card = (
    <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-brand-700 via-brand-600 to-accent-500 px-6 py-7 md:px-9 md:py-9 text-white shadow-xl">
      {/* Decoration */}
      <div className="absolute -top-16 -right-12 w-44 h-44 bg-white/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-16 -left-12 w-44 h-44 bg-accent-400/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-grid opacity-[0.08] pointer-events-none" />

      <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="flex-1 min-w-0">
          {badge && (
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-white/15 border border-white/25 text-white/95 text-[9px] font-bold uppercase tracking-wider backdrop-blur">
              <Sparkles className="w-2.5 h-2.5" />
              {badge}
            </span>
          )}
          {/* text-left fights the parent's text-justify prose, and balanced
              wrapping keeps the title looking deliberate at any width. */}
          <h3 className="mt-2 font-display font-extrabold text-base md:text-lg leading-snug tracking-tight text-left text-balance">
            {title}
          </h3>
        </div>

        <Link
          href={ctaHref}
          className="btn-glow inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-lg bg-white text-brand-700 font-semibold text-sm hover:bg-brand-50 transition-colors shadow whitespace-nowrap flex-shrink-0 self-start md:self-auto"
        >
          <Icon className="w-3.5 h-3.5" />
          <span className="relative z-10">{label}</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );

  if (embedded) {
    // Caller controls width + margins.
    return card;
  }
  return (
    <section className="my-14 lg:my-20">
      <div className="container-x">
        <div className="max-w-4xl mx-auto">{card}</div>
      </div>
    </section>
  );
}

// Map a destination URL to a sensible button label + icon. Lets the
// automation pipeline emit any href and the renderer picks a verb that fits.
function resolveCta(href = "", overrideLabel) {
  if (overrideLabel) return { label: overrideLabel, Icon: ArrowRight };
  const h = href.toLowerCase();
  if (h.startsWith("/services/")) return { label: "See the service",     Icon: Compass };
  if (h.startsWith("/services"))  return { label: "Explore services",    Icon: Compass };
  if (h.startsWith("/portfolio") || h.startsWith("/case-studies"))
                                  return { label: "Read the case study", Icon: FileText };
  if (h.startsWith("/quote"))     return { label: "Request a Quote",     Icon: ArrowRight };
  if (h.startsWith("/contact"))   return { label: "Book a free call",    Icon: Calendar };
  return { label: "Talk to us", Icon: ArrowRight };
}
