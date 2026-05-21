import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import SupportWidget from "@/components/SupportWidget";
import CookieConsent from "@/components/CookieConsent";
import Analytics from "@/components/Analytics";
import { OrganizationJsonLd, WebSiteJsonLd } from "@/components/JsonLd";

const SITE_URL = "https://groovymarkwebx.com";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "GroovyMark WebX — Web Development & AI Automation Agency for Global B2B",
    template: "%s | GroovyMark WebX",
  },
  description:
    "Custom web development and AI automation for global B2B teams. We design, build, and automate websites, eCommerce stores, web applications, AI agents, and workflow systems that move metrics.",
  applicationName: "GroovyMark WebX",
  generator: "Next.js",
  keywords: [
    // Core practice
    "web development agency",
    "AI automation agency",
    "custom web development",
    "AI development company",
    "B2B web agency",
    "global web development agency",
    // Service-level
    "business website development",
    "eCommerce development",
    "Shopify development",
    "Next.js development",
    "custom web application development",
    "AI chatbot development",
    "AI agent development",
    "workflow automation",
    "CRM automation",
    "AI document processing",
    "predictive analytics",
    "AI lead qualification",
    "ERP integration",
    "POS system development",
    "API development",
    // Geo / niche
    "web development Sri Lanka",
    "web agency Colombo",
    "B2B SaaS development",
    "agentic websites",
  ],
  authors: [{ name: "GroovyMark WebX", url: SITE_URL }],
  creator: "GroovyMark WebX",
  publisher: "GroovyMark PVT Ltd",
  category: "Web Development & AI Automation",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "website",
    siteName: "GroovyMark WebX",
    title: "GroovyMark WebX — Web Development & AI Automation for Global B2B",
    description:
      "Custom websites, eCommerce, web applications, and AI agents engineered for global B2B teams. Senior-only delivery, measurable outcomes, built to last.",
    url: SITE_URL,
    locale: "en_US",
    // images auto-resolved from app/opengraph-image.js (dynamic ImageResponse)
  },
  twitter: {
    card: "summary_large_image",
    site: "@groovymarkwebx",
    creator: "@groovymarkwebx",
    title: "GroovyMark WebX — Web Development & AI Automation",
    description:
      "Custom websites, eCommerce, and AI automation for global B2B teams.",
    // images auto-resolved from app/twitter-image.js or app/opengraph-image.js
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png", sizes: "any" },
      { url: "/favicon.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon.png", type: "image/png", sizes: "16x16" },
    ],
    apple: [{ url: "/favicon.png", sizes: "180x180", type: "image/png" }],
    shortcut: "/favicon.png",
  },
  manifest: "/site.webmanifest",
  referrer: "origin-when-cross-origin",
  verification: {
    google: "nDfzV_oUHTuZmstdicdXkooo3C2R31eLRdOmOUFVFbs",
  },
};

export const viewport = {
  themeColor: "#6D28D9",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  colorScheme: "light",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Performance — preconnect to font origins so the first paint is faster */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap"
          rel="stylesheet"
        />
        {/* DNS prefetch for the CRM iframe + analytics endpoint */}
        <link rel="dns-prefetch" href="https://crm.groovymark.com" />
      </head>
      <body className="bg-white text-slate-900 font-sans antialiased">
        {/* Skip link for accessibility — Lighthouse / a11y score boost */}
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:px-4 focus:py-2 focus:rounded-lg focus:bg-brand-600 focus:text-white"
        >
          Skip to content
        </a>

        <OrganizationJsonLd />
        <WebSiteJsonLd />
        <Navbar />
        <main id="main" className="min-h-screen">
          {children}
        </main>
        <Footer />
        <SupportWidget />
        <BackToTop />
        <CookieConsent />
        <Analytics />
      </body>
    </html>
  );
}
