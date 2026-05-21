"use client";

import { useEffect, useState } from "react";
import { FileText } from "lucide-react";

/**
 * Sticky table of contents for legal pages with scroll-spy behaviour.
 *
 *  - No internal scrollbar — TOC is as tall as it needs to be
 *  - IntersectionObserver tracks which section is currently in view
 *  - Active item gets a brand-tinted background, brand-purple text, a
 *    coloured accent bar on the left, and a smooth colour transition
 *  - Clicking any item still anchor-scrolls to the section
 */
export default function LegalTOC({ sections }) {
  const [activeId, setActiveId] = useState(sections[0]?.id || "");

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Initialise: pick the closest section to the current scroll position
    const updateFromScroll = () => {
      const viewportMid = window.scrollY + window.innerHeight * 0.25;
      let bestId = sections[0]?.id || "";
      let bestTop = -Infinity;
      for (const s of sections) {
        const el = document.getElementById(s.id);
        if (!el) continue;
        const top = el.getBoundingClientRect().top + window.scrollY;
        if (top <= viewportMid && top > bestTop) {
          bestTop = top;
          bestId = s.id;
        }
      }
      setActiveId(bestId);
    };
    updateFromScroll();

    // Then keep it in sync via IntersectionObserver
    const observer = new IntersectionObserver(
      () => {
        // Re-evaluate on every intersection change — simple and reliable.
        updateFromScroll();
      },
      {
        // Trigger when section enters the top 25% of the viewport.
        rootMargin: "-15% 0px -70% 0px",
        threshold: 0,
      }
    );

    const observed = [];
    for (const s of sections) {
      const el = document.getElementById(s.id);
      if (el) {
        observer.observe(el);
        observed.push(el);
      }
    }

    // Also listen for scroll directly so the very-top and very-bottom edges
    // resolve correctly (IntersectionObserver alone can lag at boundaries).
    window.addEventListener("scroll", updateFromScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", updateFromScroll);
    };
  }, [sections]);

  return (
    <div className="rounded-2xl bg-white border border-slate-200 p-5 shadow-card">
      <div className="flex items-center gap-2 text-xs font-display font-extrabold uppercase tracking-widest text-brand-700 mb-3">
        <FileText className="w-3.5 h-3.5" /> On this page
      </div>
      <ol className="space-y-0.5">
        {sections.map((s, i) => {
          const active = s.id === activeId;
          return (
            <li key={s.id} className="relative">
              <a
                href={`#${s.id}`}
                aria-current={active ? "true" : undefined}
                className={[
                  "relative group flex items-start gap-2 py-1.5 px-2 -mx-2 rounded-md text-sm transition-colors duration-200",
                  active
                    ? "bg-brand-50 text-brand-700"
                    : "text-slate-600 hover:bg-brand-50/60 hover:text-brand-700",
                ].join(" ")}
              >
                {/* Active indicator bar */}
                <span
                  className={[
                    "absolute left-0 top-1.5 bottom-1.5 w-0.5 rounded-full transition-all",
                    active ? "bg-brand-gradient opacity-100" : "opacity-0",
                  ].join(" ")}
                />
                <span
                  className={[
                    "font-display font-bold text-xs w-5 flex-shrink-0 pt-0.5 transition-colors",
                    active ? "text-brand-600" : "text-brand-500",
                  ].join(" ")}
                >
                  {s.partLabel || String(i + 1).padStart(2, "0")}
                </span>
                <span
                  className={[
                    "leading-tight transition-all",
                    active ? "font-semibold" : "font-medium",
                  ].join(" ")}
                >
                  {s.title}
                </span>
              </a>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
