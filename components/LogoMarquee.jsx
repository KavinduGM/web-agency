"use client";

import Image from "next/image";
import { CLIENTS } from "@/lib/portfolio";

/**
 * Continuously-scrolling client logo strip.
 * Duplicates the logo set so the CSS animation loops seamlessly with no jump.
 * The marquee pauses on hover so visitors can read a specific logo.
 */
export default function LogoMarquee() {
  const items = [...CLIENTS, ...CLIENTS];
  return (
    <div className="relative overflow-hidden py-6 group">
      {/* Soft fade-out edges so logos slide in/out gracefully */}
      <div className="absolute inset-y-0 left-0 w-24 lg:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 lg:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

      <div className="flex gap-12 lg:gap-16 animate-marquee-slow w-max group-hover:[animation-play-state:paused]">
        {items.map((c, i) => (
          <div
            key={`${c.src}-${i}`}
            className="flex-shrink-0 w-36 md:w-44 lg:w-52 h-20 md:h-24 lg:h-28 flex items-center justify-center"
          >
            <Image
              src={c.src}
              alt={c.alt}
              width={260}
              height={140}
              className="max-h-full w-auto object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
