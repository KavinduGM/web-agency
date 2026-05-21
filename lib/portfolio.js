// Portfolio entries — short summaries shown on /portfolio. Entries with a
// `caseStudySlug` link to the long-form article at /portfolio/[slug].

export const PORTFOLIO = [
  {
    slug: "yt-automation",
    caseStudySlug: "yt-automation",
    client: "Australian Content Agency",
    country: "Australia",
    flag: "🇦🇺",
    title: "Fully automated YouTube publishing system — raw footage in, video out",
    category: "AI & Automation",
    tags: ["YouTube Automation", "Google Drive", "AI Metadata", "Mobile App"],
    image: "/portfolio/yt-tool/cover-5.png",
    metrics: [
      { value: "End-to-end", label: "Pipeline automated" },
      { value: "Auto", label: "Metadata + scheduling" },
      { value: "Mobile", label: "Companion app" },
    ],
    description:
      "An Australian content agency was running multiple YouTube client channels with editors, designers, and two project managers just to keep videos moving. We built YT Automation — Google Drive monitoring, AI metadata, slot-based scheduling, full audit trail, and a companion mobile app — so the team can focus entirely on creating, not coordinating.",
  },
  {
    slug: "demo-host-platform",
    caseStudySlug: "demo-host-platform",
    client: "Canadian UI/UX Agency",
    country: "Canada",
    flag: "🇨🇦",
    title: "Self-hosted demo platform that cut deployment workload 45%",
    category: "Web Development",
    tags: ["Self-Hosted", "One-Click Deploy", "Multi-Tenant", "Agency Workflow"],
    image: "/portfolio/web-host/cover-4.png",
    metrics: [
      { value: "−45%", label: "Deployment workload" },
      { value: "1-click", label: "Git → live demo" },
      { value: "∞", label: "Tenants per demo" },
    ],
    description:
      "A Canadian UI/UX agency with 10+ designers was drowning in subdomain sprawl — every client demo demanding its own hosting, repo, and deployment overhead. We built a custom self-hosted demo platform with one-click Git deploy, centralised demo management, and a multi-tenant comparison system that lets clients review original and revised designs side-by-side.",
  },
  {
    slug: "private-social-analytics",
    caseStudySlug: "private-social-analytics",
    client: "USA Social Media Agency",
    country: "United States",
    flag: "🇺🇸",
    title: "Private AI-powered social media analytics platform",
    category: "AI & Automation",
    tags: ["Privacy-First", "Encrypted AI", "YouTube + LinkedIn", "Automated Reporting"],
    image: "/portfolio/social-tool/cover-3.png",
    metrics: [
      { value: "Zero", label: "Third-party exposure" },
      { value: "Encrypted", label: "Internal AI" },
      { value: "Auto", label: "Monthly PDFs" },
    ],
    description:
      "A USA social media agency was unknowingly leaking client YouTube and LinkedIn channel intelligence through third-party analytics tools. We built a private analytics platform with a fine-tuned, encrypted AI engine that runs entirely inside the agency's infrastructure — no client data ever leaves their environment.",
  },
  {
    slug: "leadiq-crm",
    caseStudySlug: "leadiq-crm",
    client: "UK Marketing Agency",
    country: "United Kingdom",
    flag: "🇬🇧",
    title: "AI-powered CRM that replaced an entire sales team",
    category: "AI & Automation",
    tags: ["AI CRM", "Lead Intelligence", "Spam Detection", "Sales Automation"],
    image: "/portfolio/crm/cover-2.png",
    metrics: [
      { value: "Sales team", label: "Replaced" },
      { value: "24/7", label: "Auto-response" },
      { value: "Spam-free", label: "Pipeline" },
    ],
    description:
      "A UK marketing agency was paying for a full sales team to manually sort spam from real leads and follow up on inquiries during business hours. We built LeadIQ CRM — an AI-powered lead intelligence platform that classifies, responds, qualifies, and follows up on every lead 24/7, replacing the agency's sales team, call centre, and customer support function with one system.",
  },
  {
    slug: "web-analytics-platform",
    caseStudySlug: "web-analytics-platform",
    client: "USA SEO Agency",
    country: "United States",
    flag: "🇺🇸",
    title: "Replaced 3 tools with 1 custom Web Intelligence Platform",
    category: "Web Development",
    tags: ["Web Analytics", "Uptime Monitoring", "Link Tracking", "SaaS Platform"],
    image: "/portfolio/web-analytics-tool/cover-1.png",
    metrics: [
      { value: "3 → 1", label: "Tools replaced" },
      { value: "100%", label: "Monitored uptime" },
      { value: "21", label: "Countries tracked" },
    ],
    description:
      "A USA-based SEO agency was juggling Google Analytics, an uptime monitor, and a link tracker — paying three subscriptions for fragmented, 7–14 day stale data. We built a unified, real-time Web Intelligence Platform that replaced all three with one purpose-built system.",
  },
];

// Client logos shown on the /portfolio page. Sourced from public/client-logos/.
export const CLIENTS = Array.from({ length: 20 }, (_, i) => ({
  src: `/client-logos/${i + 1}.png`,
  alt: `Client logo ${i + 1}`,
}));
