"use client";

import { motion } from "framer-motion";

export default function Stats({ stats }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
      {stats.map((s, i) => (
        <motion.div
          key={s.label}
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.08 }}
          className="rounded-2xl bg-white border border-slate-200 p-6 text-center hover:border-brand-300 transition-colors"
        >
          <div className="text-3xl md:text-4xl font-display font-extrabold text-gradient">
            {s.value}
          </div>
          <div className="mt-2 text-sm text-slate-600 font-medium">{s.label}</div>
        </motion.div>
      ))}
    </div>
  );
}
