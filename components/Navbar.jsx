"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import Logo from "./Logo";
import { CATEGORIES, getServicesByCategory } from "@/lib/services";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services", hasMega: true },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setMegaOpen(false);
  }, [pathname]);

  const isActive = (href) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/85 backdrop-blur-md border-b border-slate-200/70 shadow-sm"
          : "bg-white/0"
      }`}
    >
      <div className="container-x flex items-center justify-between py-1">
        <Logo />

        <nav className="hidden lg:flex items-center gap-1">
          {NAV.map((item) =>
            item.hasMega ? (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => setMegaOpen(true)}
                onMouseLeave={() => setMegaOpen(false)}
              >
                <Link
                  href={item.href}
                  className={`px-4 py-2 rounded-lg flex items-center gap-1 text-sm font-medium transition-colors ${
                    isActive(item.href)
                      ? "text-brand-600"
                      : "text-slate-700 hover:text-brand-600"
                  }`}
                >
                  {item.label}
                  <ChevronDown className="w-3.5 h-3.5" />
                </Link>
                {megaOpen && <MegaMenu />}
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive(item.href)
                    ? "text-brand-600"
                    : "text-slate-700 hover:text-brand-600"
                }`}
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Link href="/quote" className="btn-primary text-sm">
            Request a Quote <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <button
          aria-label="Toggle menu"
          className="lg:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-white border-t border-slate-200">
          <div className="container-x py-4 flex flex-col gap-1">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-4 py-3 rounded-lg text-base font-medium ${
                  isActive(item.href)
                    ? "bg-brand-50 text-brand-700"
                    : "text-slate-700 hover:bg-slate-50"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link href="/quote" className="btn-primary mt-3 w-full">
              Request a Quote <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

function MegaMenu() {
  const web = getServicesByCategory("web-development");
  const ai = getServicesByCategory("ai-automation");
  return (
    // Outer wrapper owns the gap as PADDING (not margin), so the hover area is
    // contiguous from the trigger to the menu — no dead zone where the cursor
    // would otherwise trigger mouseleave.
    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 z-50">
      <div className="relative w-[720px] bg-white border border-slate-200 shadow-2xl rounded-2xl p-6 grid grid-cols-2 gap-x-8">
        <MegaCol
          category={CATEGORIES["web-development"]}
          services={web}
        />
        <div className="absolute top-6 bottom-6 left-1/2 -translate-x-px w-px bg-slate-100" />
        <MegaCol
          category={CATEGORIES["ai-automation"]}
          services={ai}
        />
      </div>
    </div>
  );
}

function MegaCol({ category, services }) {
  const categoryHref = `/services/${category.slug}`;
  return (
    <div className="flex flex-col">
      {/* Category header — clickable */}
      <Link href={categoryHref} className="group/header mb-3 flex items-baseline justify-between gap-2">
        <h4 className="font-display font-bold text-[11px] uppercase tracking-[0.15em] text-slate-500 group-hover/header:text-brand-600 transition-colors">
          {category.title.replace(" Services", "")}
        </h4>
        <span className="text-[10px] font-semibold text-brand-500/80">
          {services.length} services
        </span>
      </Link>

      {/* Services list */}
      <ul className="grid gap-0.5">
        {services.map((s) => (
          <li key={s.slug}>
            <Link
              href={`/services/${s.slug}`}
              className="flex items-center gap-2.5 px-2 py-1.5 rounded-lg hover:bg-brand-50/60 transition-colors group/item"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-brand-300 group-hover/item:bg-brand-600 transition-colors flex-shrink-0" />
              <span className="text-[13px] text-slate-700 group-hover/item:text-slate-900 font-medium leading-tight">
                {s.title}
              </span>
            </Link>
          </li>
        ))}
      </ul>

      {/* Footer "View all" link */}
      <Link
        href={categoryHref}
        className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-brand-600 hover:text-brand-700 transition-all hover:gap-1.5"
      >
        View all {category.title.replace(" Services", "")} services
        <span aria-hidden="true">→</span>
      </Link>
    </div>
  );
}
