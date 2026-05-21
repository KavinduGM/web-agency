import Link from "next/link";
import Image from "next/image";

export default function Logo({ className = "" }) {
  return (
    <Link
      href="/"
      aria-label="GroovyMark WebX home"
      className={`inline-flex items-center group ${className}`}
    >
      <Image
        src="/logo.png"
        alt="GroovyMark WebX"
        width={1000}
        height={500}
        priority
        sizes="(min-width: 1024px) 200px, 160px"
        className="h-16 lg:h-20 w-auto object-contain group-hover:scale-[1.03] transition-transform duration-300"
      />
    </Link>
  );
}
