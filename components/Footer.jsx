import Link from "next/link";
import Logo from "./Logo";
import CookieSettingsButton from "./CookieSettingsButton";
import PaymentMethods from "./PaymentMethods";
import { Mail, MapPin, Phone, Linkedin, Twitter, Github, Youtube, Instagram } from "lucide-react";
import { SERVICES } from "@/lib/services";

// Reddit isn't in lucide-react — using a small inline SVG for the alien-logo shape.
function RedditIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M22 12a2.4 2.4 0 0 0-4.1-1.7c-1.6-1-3.7-1.7-6-1.8l1.3-4 3.4.8a1.8 1.8 0 1 0 .3-1.4l-3.9-.9a.7.7 0 0 0-.8.5L10.6 8.6c-2.3.1-4.5.7-6.1 1.7A2.4 2.4 0 0 0 2 12c0 1 .6 1.8 1.4 2.2-.1.3-.1.7-.1 1 0 3.4 4 6.2 9 6.2s9-2.8 9-6.2c0-.3 0-.7-.1-1A2.4 2.4 0 0 0 22 12ZM7.5 13.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm9 4c-1.1 1-2.7 1.6-4.5 1.6s-3.4-.5-4.5-1.6a.6.6 0 0 1 .9-.8c.9.9 2.2 1.3 3.6 1.3 1.4 0 2.7-.4 3.6-1.3a.6.6 0 0 1 .9.8Zm0-2.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z" />
    </svg>
  );
}

export default function Footer() {
  const web = SERVICES.filter((s) => s.category === "web-development").slice(0, 6);
  const ai = SERVICES.filter((s) => s.category === "ai-automation").slice(0, 6);

  return (
    <footer className="relative bg-slate-50 border-t border-slate-200 mt-20">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-300 to-transparent" />
      <div className="container-x py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2">
            <Logo />
            <p className="mt-4 text-slate-600 text-sm leading-relaxed max-w-sm">
              We design, build, and automate digital products for forward-thinking
              B2B companies worldwide. Web, eCommerce, custom systems, and AI agents —
              engineered for measurable outcomes.
            </p>
            <ul className="mt-6 space-y-2.5 text-sm text-slate-600">
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-brand-600 flex-shrink-0" />{" "}
                <a href="mailto:webx@groovymark.com" className="hover:text-brand-600">
                  webx@groovymark.com
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-brand-600 flex-shrink-0" />{" "}
                <a href="tel:+94712345222" className="hover:text-brand-600">
                  +94 71 234 5222
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brand-600 flex-shrink-0 mt-0.5" />
                <span>
                  Global · HQ in Colombo, Sri Lanka
                  <br />
                  Branch in Perth, Australia
                </span>
              </li>
            </ul>
            <div className="mt-6 flex items-center flex-wrap gap-2.5">
              {[
                { Icon: Linkedin, href: "https://www.linkedin.com/company/groovymark-webx", label: "LinkedIn" },
                { Icon: Twitter, href: "https://twitter.com/groovymarkwebx", label: "Twitter / X" },
                { Icon: Youtube, href: "https://youtube.com/@groovymarkwebx", label: "YouTube" },
                { Icon: Github, href: "https://github.com/groovymarkwebx", label: "GitHub" },
                { Icon: RedditIcon, href: "https://reddit.com/r/groovymarkwebx", label: "Reddit" },
                { Icon: Instagram, href: "https://instagram.com/groovymarkwebx", label: "Instagram" },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg border border-slate-200 bg-white flex items-center justify-center text-slate-500 hover:text-brand-600 hover:border-brand-300 transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <FooterCol title="Web Development" items={web.map((s) => ({ label: s.title, href: `/services/${s.slug}` }))} />
          <FooterCol title="AI & Automation" items={ai.map((s) => ({ label: s.title, href: `/services/${s.slug}` }))} />
          <FooterCol
            title="Company"
            items={[
              { label: "About", href: "/about" },
              { label: "Services", href: "/services" },
              { label: "Portfolio", href: "/portfolio" },
              { label: "Contact", href: "/contact" },
              { label: "Request a Quote", href: "/quote" },
            ]}
          />
        </div>

        <PaymentMethods />

        <div className="mt-8 pt-6 border-t border-slate-200 flex flex-col md:flex-row gap-3 justify-between text-sm text-slate-500">
          <span>© {new Date().getFullYear()} GroovyMark WebX. All rights reserved.</span>
          <div className="flex gap-5">
            <Link href="/privacy-policy" className="hover:text-brand-600">Privacy</Link>
            <Link href="/terms-and-conditions" className="hover:text-brand-600">Terms</Link>
            <Link href="/cookie-policy" className="hover:text-brand-600">Cookie Policy</Link>
            <CookieSettingsButton />
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, items }) {
  return (
    <div>
      <h4 className="font-display font-bold text-sm uppercase tracking-wider text-slate-900">
        {title}
      </h4>
      <ul className="mt-4 space-y-2.5">
        {items.map((item) => (
          <li key={item.href + item.label}>
            <Link
              href={item.href}
              className="text-sm text-slate-600 hover:text-brand-600 transition-colors"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
