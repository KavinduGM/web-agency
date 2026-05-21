"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Star, Quote } from "lucide-react";

/**
 * Horizontal testimonial carousel with dot navigation.
 *  - 3 cards visible on lg, 2 on sm, 1 on mobile
 *  - Dots under the track show the active card; click a dot to jump
 *  - Auto-advances every `autoRotateMs` (default 10s) in a continuous loop
 *  - Pauses on hover / focus / when the section is off-screen
 *  - Respects prefers-reduced-motion
 *  - Manual swipe / scroll updates the active dot in real time
 */
export default function TestimonialsCarousel({ items, autoRotateMs = 10000 }) {
  const trackRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  // Refs that coordinate the two effects below without causing a re-render loop:
  //  - ignoreScrollSync: while a programmatic scroll is in flight, the scroll
  //    listener should not echo the position back as a user action.
  //  - lastChangeFromScroll: when currentIndex was just set BY the scroll
  //    listener, skip the next programmatic scroll (we're already there).
  const ignoreScrollSync = useRef(false);
  const lastChangeFromScroll = useRef(false);

  // ─── Programmatic scroll on currentIndex change ────────────────────────
  useEffect(() => {
    if (lastChangeFromScroll.current) {
      lastChangeFromScroll.current = false;
      return;
    }
    const t = trackRef.current;
    if (!t) return;
    const card = t.children[currentIndex];
    if (!card) return;

    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    ignoreScrollSync.current = true;
    const left = card.offsetLeft - t.offsetLeft;
    t.scrollTo({
      left,
      behavior: prefersReducedMotion ? "auto" : "smooth",
    });
    const timer = setTimeout(() => {
      ignoreScrollSync.current = false;
    }, 700);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  // ─── Listen to manual scroll → keep the active dot in sync ─────────────
  useEffect(() => {
    const t = trackRef.current;
    if (!t) return;
    let timer;
    const onScroll = () => {
      if (ignoreScrollSync.current) return;
      clearTimeout(timer);
      timer = setTimeout(() => {
        const cards = Array.from(t.children);
        let closest = 0;
        let minDist = Infinity;
        cards.forEach((card, i) => {
          const dist = Math.abs(
            card.offsetLeft - t.offsetLeft - t.scrollLeft
          );
          if (dist < minDist) {
            minDist = dist;
            closest = i;
          }
        });
        setCurrentIndex((prev) => {
          if (prev === closest) return prev;
          lastChangeFromScroll.current = true;
          return closest;
        });
      }, 150);
    };
    t.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      t.removeEventListener("scroll", onScroll);
      clearTimeout(timer);
    };
  }, []);

  // ─── Pause when section is off-screen ──────────────────────────────────
  useEffect(() => {
    const t = trackRef.current;
    if (!t) return;
    const io = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );
    io.observe(t);
    return () => io.disconnect();
  }, []);

  // ─── Auto-rotate every `autoRotateMs` ──────────────────────────────────
  useEffect(() => {
    if (isPaused || !isVisible) return;
    if (typeof window === "undefined") return;
    const prefersReducedMotion =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length);
    }, autoRotateMs);
    return () => clearInterval(interval);
  }, [isPaused, isVisible, items.length, autoRotateMs, currentIndex]);

  const goTo = (i) => setCurrentIndex(i);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={() => setIsPaused(false)}
    >
      {/* Scrollable track */}
      <div
        ref={trackRef}
        className="flex gap-5 lg:gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide -mx-1 px-1 pb-2"
      >
        {items.map((t) => (
          <article
            key={t.name + t.company}
            className="snap-start flex-shrink-0 w-[88%] sm:w-[calc(50%-0.625rem)] lg:w-[calc(33.333%-1rem)] rounded-2xl bg-white border border-slate-200 p-6 lg:p-7 flex flex-col"
          >
            {/* Stars */}
            <div className="flex gap-0.5">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star
                  key={s}
                  className="w-4 h-4 fill-amber-400 text-amber-400"
                />
              ))}
            </div>

            {/* Quote */}
            <Quote className="w-7 h-7 text-brand-200 mt-4" />
            <p className="mt-2 text-slate-700 leading-relaxed text-[15px] flex-1">
              &ldquo;{t.quote}&rdquo;
            </p>

            {/* Footer: logo + identity */}
            <div className="mt-6 pt-5 border-t border-slate-100 flex items-center gap-4">
              <div className="w-14 h-14 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center p-2 flex-shrink-0">
                <Image
                  src={t.logo}
                  alt={`${t.company} logo`}
                  width={120}
                  height={120}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="min-w-0">
                <div className="font-display font-extrabold text-slate-900 flex items-center gap-2">
                  <span
                    className="text-base leading-none"
                    aria-label={t.country}
                  >
                    {t.flag}
                  </span>
                  <span>{t.name}</span>
                </div>
                <div className="text-xs text-slate-500 mt-0.5 truncate">
                  {t.role} ·{" "}
                  <span className="font-semibold text-slate-700">
                    {t.company}
                  </span>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Dot navigation */}
      <div
        className="mt-8 flex items-center justify-center gap-2"
        role="tablist"
        aria-label="Choose a testimonial"
      >
        {items.map((t, i) => {
          const active = i === currentIndex;
          return (
            <button
              key={t.name + t.company}
              type="button"
              role="tab"
              aria-selected={active}
              aria-label={`Show testimonial from ${t.name}`}
              onClick={() => goTo(i)}
              className={
                "rounded-full transition-all duration-300 " +
                (active
                  ? "w-9 h-2.5 bg-brand-gradient shadow-glow"
                  : "w-2.5 h-2.5 bg-slate-300 hover:bg-slate-400")
              }
            />
          );
        })}
      </div>
    </div>
  );
}
