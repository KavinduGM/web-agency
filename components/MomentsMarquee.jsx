"use client";

import Image from "next/image";

const IMAGES = [
  "/about/1.png",
  "/about/2.png",
  "/about/3.png",
  "/about/4.png",
  "/about/5.png",
  "/about/6.png",
];

export default function MomentsMarquee({ duration = 60 }) {
  // Duplicate the array so the animation can loop seamlessly from 0% → -50%.
  const items = [...IMAGES, ...IMAGES];

  return (
    <div className="relative overflow-hidden group">
      {/* Edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 md:w-40 bg-gradient-to-r from-white to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 md:w-40 bg-gradient-to-l from-white to-transparent z-10" />

      <div
        className="flex gap-5 md:gap-6 animate-marquee w-max group-hover:[animation-play-state:paused]"
        style={{ animationDuration: `${duration}s` }}
      >
        {items.map((src, i) => (
          <figure
            key={i}
            className="relative shrink-0 w-[260px] sm:w-[320px] md:w-[380px] aspect-[4/3] rounded-2xl overflow-hidden border border-slate-200 shadow-card bg-slate-100"
          >
            <Image
              src={src}
              alt={`GroovyMark WebX team moment ${(i % IMAGES.length) + 1}`}
              fill
              sizes="(min-width: 768px) 380px, (min-width: 640px) 320px, 260px"
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-slate-900/40 to-transparent" />
          </figure>
        ))}
      </div>
    </div>
  );
}
