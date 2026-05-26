import { Plus } from "lucide-react";

/**
 * Renders the structured FAQ list as expandable accordion items.
 * Uses native <details> so the markup ships SEO-friendly text without JS,
 * matching the FAQPage JSON-LD emitted in the parent route.
 */
export default function BlogFAQ({ items }) {
  if (!Array.isArray(items) || items.length === 0) return null;
  return (
    <section className="mt-16 lg:mt-20">
      <div className="rounded-3xl border border-slate-200 bg-slate-50/60 p-8 lg:p-12">
        <header className="mb-8">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-brand-100 text-brand-700 text-xs font-semibold uppercase tracking-wider">
            FAQ
          </span>
          <h2 className="mt-4 font-display font-extrabold text-2xl md:text-3xl text-slate-900 leading-tight">
            Frequently asked questions
          </h2>
        </header>

        <ul className="divide-y divide-slate-200">
          {items.map((it, i) => (
            <li key={i}>
              <details className="group py-4">
                <summary className="flex items-start gap-3 cursor-pointer list-none">
                  <Plus className="w-5 h-5 mt-0.5 text-brand-600 transition-transform group-open:rotate-45 flex-shrink-0" />
                  <span className="font-display font-semibold text-base md:text-lg text-slate-900 leading-snug">
                    {it.q}
                  </span>
                </summary>
                <p className="mt-3 ml-8 text-slate-700 leading-relaxed">
                  {it.a}
                </p>
              </details>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
