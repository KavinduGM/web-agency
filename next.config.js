/** @type {import('next').NextConfig} */

// ──────────────────────────────────────────────────────────────────────────
// Security headers
//
// Applied to every response.  Notes:
//  • CSP allows the LeadIQ iframe (crm.groovymark.com), Google Fonts,
//    Unsplash images, and our analytics endpoint — anything else is blocked.
//  • frame-src: own origin + CRM (for the embedded contact form).
//  • frame-ancestors: 'self' prevents the site from being embedded in iframes
//    on other domains (clickjacking protection).
//  • HSTS is opt-in via the host; we still send the header here so production
//    hosts (Vercel, etc.) can honour it.
// ──────────────────────────────────────────────────────────────────────────

const CSP_DIRECTIVES = {
  "default-src": ["'self'"],
  // 'unsafe-inline' is required for Next.js inline boot scripts + Tailwind hydration markers.
  // 'unsafe-eval' is only needed for the Next dev server; production builds work without it.
  "script-src": [
    "'self'",
    "'unsafe-inline'",
    "'unsafe-eval'",
    "https://crm.groovymark.com",
  ],
  "style-src": [
    "'self'",
    "'unsafe-inline'",
    "https://fonts.googleapis.com",
  ],
  "font-src": [
    "'self'",
    "https://fonts.gstatic.com",
    "data:",
  ],
  "img-src": [
    "'self'",
    "data:",
    "blob:",
    "https://images.unsplash.com",
    "https://plus.unsplash.com",
    "https://crm.groovymark.com",
    // Automation-generated blog / case-study / resource / landing-page media
    // served by the Caddy `assets` container in the Content Automation stack.
    "https://assets.groovymark.com",
  ],
  "connect-src": [
    "'self'",
    "https://crm.groovymark.com",
    "https://api.resend.com",
  ],
  "frame-src": [
    "'self'",
    "https://crm.groovymark.com",
  ],
  "frame-ancestors": ["'self'"],
  "form-action": ["'self'"],
  "base-uri": ["'self'"],
  "object-src": ["'none'"],
  "upgrade-insecure-requests": [],
};

const cspHeader = Object.entries(CSP_DIRECTIVES)
  .map(([k, v]) => (v.length ? `${k} ${v.join(" ")}` : k))
  .join("; ");

const securityHeaders = [
  // Force HTTPS for 2 years and include subdomains (only takes effect over HTTPS).
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  // Block MIME-sniffing — protects against drive-by file upload exploits.
  { key: "X-Content-Type-Options", value: "nosniff" },
  // Older equivalent of CSP frame-ancestors (kept for legacy browsers).
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  // Don't leak referrers to third parties beyond origin.
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  // Lock down powerful APIs we don't use.
  {
    key: "Permissions-Policy",
    value:
      "camera=(), microphone=(), geolocation=(), payment=(), usb=(), interest-cohort=()",
  },
  // Limit cross-origin window/popup access (mostly a defence against future XS-Leaks).
  { key: "Cross-Origin-Opener-Policy", value: "same-origin-allow-popups" },
  // Disable legacy XSS auditor (modern browsers ignore; safer to set 0).
  { key: "X-XSS-Protection", value: "0" },
  // Content Security Policy.
  { key: "Content-Security-Policy", value: cspHeader },
];

const nextConfig = {
  reactStrictMode: true,
  // Hide the X-Powered-By: Next.js header (small fingerprinting reduction).
  poweredByHeader: false,
  // Disable client-side source maps in production so app source can't be
  // trivially read in DevTools. (Note: client JS is still inspectable —
  // browsers must execute it.  Real secrets must stay server-side.)
  productionBrowserSourceMaps: false,
  // Use SWC's modern minifier (already default in 14, explicit for clarity).
  swcMinify: true,
  // Compress responses (gzip/brotli where supported).
  compress: true,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "plus.unsplash.com" },
      { protocol: "https", hostname: "crm.groovymark.com" },
    ],
    // Modern formats first (smaller, better quality).
    formats: ["image/avif", "image/webp"],
    // Cache optimised images at the edge for 1 year.
    minimumCacheTTL: 60 * 60 * 24 * 365,
  },
  // Strip console.* calls from the production bundle (except errors/warnings).
  compiler: {
    removeConsole: process.env.NODE_ENV === "production"
      ? { exclude: ["error", "warn"] }
      : false,
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
      // Long-lived cache for hashed static assets.
      {
        source: "/_next/static/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      // Cache the favicon + web manifest aggressively too.
      {
        source: "/(favicon.png|logo.png|site.webmanifest)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=2592000, must-revalidate",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
