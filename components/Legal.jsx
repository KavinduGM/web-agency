import Link from "next/link";
import { Shield, Mail, CalendarClock, AlertTriangle, Info } from "lucide-react";
import { FadeIn } from "./Section";
import LegalTOC from "./LegalTOC";
import { BreadcrumbJsonLd, ArticleJsonLd } from "./JsonLd";

/**
 * Shared building blocks for the legal pages
 *  - /privacy-policy
 *  - /cookie-policy
 *  - /terms-and-conditions
 *
 * <LegalLayout> renders the hero (badge + title + subtitle + description + last-updated)
 *  and the two-column body (sticky TOC + scrollable content).
 *
 * The smaller primitives (Section, P, UL, etc.) are exported so each page can
 * compose its own content while keeping a consistent visual rhythm.
 */

export function LegalLayout({
  badge = "Legal",
  title,
  subtitle,
  description,
  lastUpdated,
  sections,
  // For SEO: pass the route + breadcrumb label so we can emit BreadcrumbList + Article schema.
  slug,
  breadcrumbLabel,
  children,
}) {
  const url = slug ? `/${slug}` : undefined;
  return (
    <>
      {url && (
        <>
          <BreadcrumbJsonLd
            items={[
              { name: "Home", url: "/" },
              { name: breadcrumbLabel || title, url },
            ]}
          />
          <ArticleJsonLd
            article={{
              title,
              description: description || subtitle,
              url: `https://webx.groovymark.com${url}`,
              datePublished: "2026-05-21",
              dateModified: lastUpdated,
              section: "Legal",
            }}
          />
        </>
      )}

      {/* ───── Hero ───── */}
      <section className="relative pt-32 pb-10 lg:pt-40 lg:pb-12 overflow-hidden">
        <div className="absolute inset-0 bg-grid bg-grid-fade opacity-40" />
        <div className="blob bg-brand-300 w-[34rem] h-[34rem] -top-32 -right-20 animate-blob" />
        <div className="container-x relative">
          <FadeIn className="max-w-4xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-brand-100 text-brand-700 text-xs font-semibold uppercase tracking-wider shadow-sm">
              <Shield className="w-3.5 h-3.5" /> {badge}
            </span>
            <h1 className="mt-5 font-display font-extrabold text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.05] text-slate-900">
              {title}
            </h1>
            {subtitle && (
              <p className="mt-4 font-display font-bold text-lg md:text-xl tracking-tight text-gradient">
                {subtitle}
              </p>
            )}
            {description && (
              <p className="mt-6 text-slate-600 text-base md:text-lg leading-relaxed">
                {description}
              </p>
            )}
            {lastUpdated && (
              <div className="mt-6 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 text-slate-700 text-sm">
                <CalendarClock className="w-4 h-4 text-brand-600" />
                Last updated: <span className="font-semibold">{lastUpdated}</span>
              </div>
            )}
          </FadeIn>
        </div>
      </section>

      {/* ───── Body — TOC + content ───── */}
      <section className="pb-16 lg:pb-24">
        <div className="container-x">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 max-w-6xl mx-auto">
            <aside className="lg:col-span-4 xl:col-span-3">
              <div className="lg:sticky lg:top-28">
                <LegalTOC sections={sections} />

                <div className="mt-4 rounded-2xl bg-gradient-to-br from-brand-50 to-white border border-brand-100 p-5">
                  <div className="text-[11px] font-display font-extrabold uppercase tracking-widest text-brand-700">
                    Need to reach us?
                  </div>
                  <a
                    href="mailto:webx@groovymark.com"
                    className="mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-slate-900 hover:text-brand-700"
                  >
                    <Mail className="w-4 h-4 text-brand-600" />
                    webx@groovymark.com
                  </a>
                </div>
              </div>
            </aside>

            <div className="lg:col-span-8 xl:col-span-9 max-w-3xl">{children}</div>
          </div>
        </div>
      </section>
    </>
  );
}

/* ──────────────── Primitives ──────────────── */

export function Section({ id, num, title, children }) {
  return (
    <section id={id} className="scroll-mt-28 mt-12 first:mt-0">
      <div className="flex items-baseline gap-3 mb-4">
        {num && (
          <span className="font-display font-extrabold text-brand-500 text-sm tracking-widest">
            {typeof num === "number" ? String(num).padStart(2, "0") : num}
          </span>
        )}
        <h2 className="font-display font-extrabold text-2xl md:text-3xl tracking-tight text-slate-900 leading-tight">
          {title}
        </h2>
      </div>
      <div className="space-y-4">{children}</div>
    </section>
  );
}

/** Big visual divider that announces a "PART X — Heading" group of sections. */
export function PartDivider({ label, title }) {
  return (
    <div className="mt-16 mb-6 relative">
      <div className="absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-brand-200 to-transparent" />
      <div className="relative inline-flex flex-col items-start bg-white pr-4">
        <span className="text-[11px] font-display font-extrabold uppercase tracking-widest text-brand-600">
          {label}
        </span>
        <span className="text-lg md:text-xl font-display font-extrabold text-slate-900 mt-0.5">
          {title}
        </span>
      </div>
    </div>
  );
}

export function P({ children }) {
  return (
    <p className="text-slate-700 leading-relaxed text-[15px] md:text-base">
      {children}
    </p>
  );
}

export function SubH({ children }) {
  return (
    <h3 className="mt-6 mb-2 font-display font-bold text-lg text-slate-900">
      {children}
    </h3>
  );
}

export function UL({ children }) {
  return (
    <ul className="space-y-2 pl-5 list-disc marker:text-brand-500 text-slate-700 leading-relaxed text-[15px]">
      {children}
    </ul>
  );
}

export function B({ children }) {
  return <span className="font-semibold text-slate-900">{children}</span>;
}

export function Email({ children }) {
  return (
    <a
      href={`mailto:${children}`}
      className="text-brand-700 hover:underline font-semibold"
    >
      {children}
    </a>
  );
}

export function Table({ headers, rows }) {
  return (
    <div className="my-5 overflow-hidden rounded-2xl border border-slate-200 shadow-card">
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          {headers && headers.some(Boolean) && (
            <thead className="bg-slate-50">
              <tr>
                {headers.map((h, i) => (
                  <th
                    key={i}
                    className="px-4 py-3 text-left font-display font-bold text-[11px] uppercase tracking-wider text-slate-500"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
          )}
          <tbody className="divide-y divide-slate-100 bg-white">
            {rows.map((row, i) => (
              <tr key={i} className="hover:bg-brand-50/30 transition-colors">
                {row.map((cell, j) => (
                  <td
                    key={j}
                    className={
                      "px-4 py-3 text-slate-700 align-top leading-relaxed " +
                      (j === 0 ? "font-semibold text-slate-900" : "")
                    }
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

/** Callout box — warning (rose) or info (brand). */
export function Callout({ kind = "info", title, children }) {
  const styles =
    kind === "warning"
      ? {
          bar: "border-rose-400",
          bg: "from-rose-50 to-white",
          chip: "bg-rose-100 text-rose-700 border-rose-200",
          Icon: AlertTriangle,
        }
      : {
          bar: "border-brand-400",
          bg: "from-brand-50 to-white",
          chip: "bg-brand-100 text-brand-700 border-brand-200",
          Icon: Info,
        };
  const Icon = styles.Icon;
  return (
    <div
      className={`my-5 rounded-2xl bg-gradient-to-br ${styles.bg} border-l-4 ${styles.bar} border border-slate-200 p-5`}
    >
      {title && (
        <div
          className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full ${styles.chip} border text-[10px] font-bold uppercase tracking-wider mb-2`}
        >
          <Icon className="w-3 h-3" />
          {title}
        </div>
      )}
      <div className="text-slate-700 leading-relaxed text-[15px] space-y-2">
        {children}
      </div>
    </div>
  );
}

/** Footer card with branding + back-home/contact CTAs. */
export function LegalFooter({ effectiveDate }) {
  return (
    <div className="mt-12 pt-8 border-t border-slate-200">
      <div className="rounded-2xl bg-gradient-to-br from-brand-50 to-white border border-brand-100 p-6 text-center">
        <div className="font-display font-extrabold text-slate-900">
          GroovyMark WebX
        </div>
        <div className="mt-1 text-sm text-slate-600">
          Web Development & AI System Automation
        </div>
        <div className="mt-3 text-sm text-slate-600">
          <a
            href="mailto:webx@groovymark.com"
            className="text-brand-700 hover:underline font-semibold"
          >
            webx@groovymark.com
          </a>{" "}
          · GroovyMark PVT Ltd, Colombo, Sri Lanka
        </div>
        {effectiveDate && (
          <div className="mt-3 text-xs text-slate-500">
            This document is effective as of {effectiveDate}.
          </div>
        )}
      </div>

      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link href="/contact" className="btn-secondary">
          Contact us
        </Link>
        <Link href="/" className="btn-ghost">
          Back home
        </Link>
      </div>
    </div>
  );
}
