import Link from "next/link";
import { ArrowRight, Home } from "lucide-react";

export const metadata = {
  title: "Page Not Found",
  description:
    "We couldn't find the page you were looking for. Head back to the GroovyMark WebX home page or browse our services.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden pt-32 pb-20">
      <div className="absolute inset-0 bg-grid bg-grid-fade opacity-50" />
      <div className="blob bg-brand-300 w-[36rem] h-[36rem] -top-32 -right-20 animate-blob" />
      <div className="container-x relative text-center">
        <div className="font-display font-extrabold text-[10rem] md:text-[14rem] leading-none text-gradient">
          404
        </div>
        <h1 className="mt-2 font-display font-extrabold text-3xl md:text-5xl tracking-tight text-slate-900">
          We couldn't find that page.
        </h1>
        <p className="mt-4 text-slate-600 max-w-md mx-auto">
          The page might have moved, or the link might be off. Let's get you back on track.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/" className="btn-primary">
            <Home className="w-4 h-4" /> Back home
          </Link>
          <Link href="/services" className="btn-secondary">
            Browse services <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
