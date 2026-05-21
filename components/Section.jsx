"use client";

import { motion } from "framer-motion";

export function SectionHeader({ eyebrow, title, description, align = "center", className = "" }) {
  const isCenter = align === "center";
  // If the caller passed an explicit max-w-* class, skip the default so it wins.
  const hasCustomWidth = /\bmax-w-/.test(className);
  const widthClass = hasCustomWidth ? "" : "max-w-3xl";
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`${isCenter ? "text-center mx-auto" : "text-left"} ${widthClass} ${className}`}
    >
      {eyebrow && (
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-100 text-brand-700 text-xs font-semibold uppercase tracking-wider">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-600 animate-pulse" />
          {eyebrow}
        </span>
      )}
      <h2 className="mt-4 font-display font-extrabold text-3xl md:text-4xl lg:text-5xl tracking-tight text-slate-900 leading-[1.1]">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-slate-600 text-base md:text-lg leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  );
}

export function FadeIn({ children, delay = 0, y = 18, className = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
