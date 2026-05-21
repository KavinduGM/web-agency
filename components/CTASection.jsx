"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export default function CTASection({
  eyebrow = "Let's build something exceptional",
  title = "Ready to ship faster and smarter?",
  description = "Tell us about your goals — we'll come back within one business day with ideas, a rough scope, and a clear next step.",
  primaryLabel = "Request a Quote",
  primaryHref = "/quote",
  secondaryLabel = "Talk to us",
  secondaryHref = "/contact",
}) {
  return (
    <section className="relative section">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-700 via-brand-600 to-accent-500 p-10 md:p-16 text-white shadow-2xl">
          <div className="absolute -top-24 -right-24 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-32 -left-20 w-96 h-96 bg-accent-400/30 rounded-full blur-3xl" />
          <div className="absolute inset-0 bg-grid bg-grid-fade opacity-[0.08]" />

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative z-10 max-w-3xl mx-auto text-center"
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 border border-white/20 text-white/90 text-xs font-semibold uppercase tracking-wider backdrop-blur">
              <Sparkles className="w-3.5 h-3.5" />
              {eyebrow}
            </span>
            <h2 className="mt-4 font-display font-extrabold text-3xl md:text-5xl tracking-tight leading-[1.05]">
              {title}
            </h2>
            <p className="mt-5 text-white/85 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
              {description}
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link
                href={primaryHref}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold bg-white text-brand-700 hover:bg-brand-50 transition-colors shadow-lg"
              >
                {primaryLabel} <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href={secondaryHref}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold border border-white/30 text-white hover:bg-white/10 transition-colors"
              >
                {secondaryLabel}
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
