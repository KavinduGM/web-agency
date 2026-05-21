"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

/**
 * Floating "scroll to top" button.
 *  - Appears once the user has scrolled more than ~400px down
 *  - Fades in/out smoothly and floats at the bottom-right of every page
 *  - Accessible (button, aria-label, focusable, respects reduced motion)
 */
export default function BackToTop({ threshold = 400 }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > threshold);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  const scrollToTop = () => {
    const prefersReduced =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: prefersReduced ? "auto" : "smooth" });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll to top of the page"
      className={[
        // Sit ABOVE the support-ticket widget (which lives at bottom-6 right-6)
        "fixed bottom-24 right-6 z-50 w-12 h-12 lg:w-14 lg:h-14",
        "rounded-full bg-white text-brand-700 border border-brand-200 shadow-card",
        "flex items-center justify-center",
        "transition-all duration-300 ease-out",
        "hover:border-brand-400 hover:text-brand-700 hover:-translate-y-1 hover:shadow-card-hover",
        "focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-300/40",
        visible
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-3 pointer-events-none",
      ].join(" ")}
    >
      <ArrowUp className="w-5 h-5 lg:w-6 lg:h-6" />
    </button>
  );
}
