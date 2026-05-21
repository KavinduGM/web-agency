"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import * as Icons from "lucide-react";
import { motion } from "framer-motion";

export default function ServiceCard({ service, index = 0 }) {
  const Icon = Icons[service.icon] || Icons.Sparkles;

  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: (index % 6) * 0.06, ease: "easeOut" }}
    >
      <Link
        href={`/services/${service.slug}`}
        className="group block h-full rounded-2xl bg-white border border-slate-200 overflow-hidden card-lift"
      >
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            src={service.image}
            alt={service.title}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/55 via-slate-900/10 to-transparent" />
          <div className="absolute top-3 left-3">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-white/90 backdrop-blur text-brand-700 border border-white/60">
              <Icon className="w-3.5 h-3.5" />
              {service.category === "web-development" ? "Web Dev" : "AI & Automation"}
            </span>
          </div>
        </div>

        <div className="p-6">
          <div className="flex items-start justify-between gap-3">
            <div>
              <h3 className="font-display font-bold text-lg text-slate-900 group-hover:text-brand-700 transition-colors">
                {service.title}
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">{service.subtitle}</p>
            </div>
            <span className="w-9 h-9 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center group-hover:bg-brand-600 group-hover:text-white transition-colors flex-shrink-0">
              <ArrowUpRight className="w-4 h-4" />
            </span>
          </div>
          <p className="mt-3 text-sm text-slate-600 leading-relaxed line-clamp-2">
            {service.description}
          </p>
        </div>
      </Link>
    </motion.div>
  );
}
