# GroovyMark WebX

Marketing + sales website for **GroovyMark WebX** — a web development and AI automation studio for global B2B clients.

Built with **Next.js 14 (App Router)**, **Tailwind CSS**, **Framer Motion**, and **Lucide icons**. White background, brand purple `#6D28D9`, and modern gradients/effects throughout.

---

## 1. Quick start

```bash
# 1. install deps
npm install        # or pnpm install / yarn

# 2. run dev server
npm run dev

# 3. open
http://localhost:3000
```

Production build:

```bash
npm run build
npm run start
```

The site is static-friendly — deploy to Vercel, Netlify, Cloudflare Pages, or any Node host. For Vercel, just `git push` after connecting the repo.

---

## 2. Pages

| Route | Purpose |
| --- | --- |
| `/` | Home — hero, services overview, why-us, process, testimonials, CTA |
| `/about` | Company story, mission, values, timeline, team |
| `/services` | Services hub — both categories with all 24 services |
| `/services/[slug]` | Dedicated detail page for each service (24 in total) |
| `/portfolio` | Demo case studies + clients + industries + testimonials |
| `/contact` | Contact form, channels, offices, FAQ |
| `/quote` | 3-step **Request a Quote** flow (CTA) |
| `/sitemap.xml` | Auto-generated sitemap |
| `/robots.txt` | Auto-generated robots |

---

## 3. Services

All 24 services live in **`lib/services.js`** as a single array. Each service drives:

- The cards on the home page and `/services` hub
- The navbar mega-menu
- The footer links
- The dedicated `/services/[slug]` detail page (statically generated)
- The pre-selectable list on `/quote`

### Web Development (14)

`business-website`, `landing-page`, `ecommerce-store`, `digital-products-store`,
`b2b-ecommerce`, `client-portal`, `booking-system`, `invoice-billing`,
`inventory-management`, `pos-system`, `order-delivery`, `hr-management`,
`erp-integration`, `iot-dashboard`

### AI & Automation (10)

`ai-chatbot`, `ai-lead-qualification`, `ai-customer-support`,
`ai-document-processing`, `workflow-automation`, `ai-inventory-forecasting`,
`executive-reporting`, `predictive-analytics`, `ai-hr-recruitment`,
`custom-ai-agent`

### Adding or editing a service

Edit `lib/services.js`. Each entry has:

```js
{
  slug, category, title, subtitle, tagline, description,
  image, icon,                           // lucide-react icon name
  overview,
  features:    [{ title, description }], // 4-6 items
  benefits:    [String],                 // 4-6 bullets
  useCases:    [String],
  techStack:   [String],
  process:     [{ step, description }],  // 4 steps
  timeline,
  deliverables:[String],
}
```

That's it — the cards, mega-menu, footer, quote-form, and detail page all update automatically.

---

## 4. Brand & theming

- Primary: `#6D28D9` (Tailwind `brand.600`)
- Accent: `#06B6D4` (cyan, Tailwind `accent.500`)
- Background: white
- Fonts: Inter (body) + Plus Jakarta Sans (display) — loaded from Google Fonts

Brand colours, gradients, and shadows are all defined in **`tailwind.config.js`**.
Reusable utility classes (`btn-primary`, `text-gradient`, `glass`, `card-lift`, etc.)
live in **`app/globals.css`**.

---

## 5. Portfolio / clients

Demo data lives in **`lib/portfolio.js`** — six case studies and twelve client names.
Replace these with real content when ready.

---

## 6. SEO

- Per-page `metadata` exports for title + description + OG tags
- `metadataBase` set in `app/layout.js` → update to your real domain
- `sitemap.js` auto-generates from the services data
- `robots.js` auto-generates `robots.txt`
- **JSON-LD** structured data:
  - `Organization` schema on every page (via `OrganizationJsonLd` in the layout)
  - `Service` schema on each `/services/[slug]` page
  - `BreadcrumbList` schema on each `/services/[slug]` page
- Semantic HTML, alt text, and headings hierarchy throughout
- Next.js Image with `remotePatterns` allowing Unsplash

Before launch, replace `https://groovymarkwebx.com` placeholders in:

- `app/layout.js` (metadataBase)
- `app/sitemap.js`, `app/robots.js`
- `components/JsonLd.jsx`

---

## 7. Images

All imagery is hot-linked from **Unsplash** (`images.unsplash.com`). The
`next.config.js` allows these domains. To swap images, just change the `image`
URL on each service in `lib/services.js` or in `lib/portfolio.js`.

---

## 8. Forms

Contact form (`components/ContactForm.jsx`) and Quote form
(`components/QuoteForm.jsx`) are currently **client-side mock submissions** —
they show a success state but don't hit any backend.

To wire them up, replace the `handleSubmit` / `submit` functions to POST to
your endpoint (HubSpot, Formspree, your own API route, etc.). Recommended:
add a Next.js `app/api/contact/route.js` server handler that proxies to your
CRM or sends an email.

---

## 9. Animations

Moderate level by design — scroll-triggered fade-ins via Framer Motion,
gradient blobs (`.blob` + `animate-blob`), marquee logos, hover lifts, and a
subtle grid background. Performance-safe; CLS- and LCP-friendly.

---

## 10. File map

```
app/
  layout.js              # Root layout, fonts, metadata, JSON-LD
  page.js                # Home
  globals.css            # Global styles + utilities
  about/page.js
  services/
    page.js              # Hub
    [slug]/page.js       # Detail (24 routes)
  portfolio/page.js
  contact/page.js
  quote/page.js
  sitemap.js
  robots.js
  not-found.js
components/
  Navbar.jsx             # With mega-menu
  Footer.jsx
  Logo.jsx
  Section.jsx            # SectionHeader + FadeIn
  ServiceCard.jsx
  CTASection.jsx
  Stats.jsx
  LogoMarquee.jsx
  ContactForm.jsx
  QuoteForm.jsx          # 3-step
  JsonLd.jsx
lib/
  services.js            # 24 services
  portfolio.js           # Demo case studies
public/
  favicon.svg
tailwind.config.js
next.config.js
postcss.config.js
jsconfig.json
package.json
```

---

## 11. Email delivery (support tickets + quote requests)

Both the floating **Support Ticket widget** (bottom-right of every page) and
the **Request a Quote form** at `/quote` send their submissions to
`webx@groovymark.com` via the [Resend](https://resend.com) REST API.

Each submission generates a unique **Case ID** like `WX-260521-A8K3F2`
(format: `WX-{YYMMDD}-{6 random chars}`) and shows it to the user on success.

### Setup

1. Sign up at <https://resend.com> (free tier is generous)
2. Create an API key in the dashboard → "API Keys"
3. Copy `.env.local.example` to `.env.local` and fill in:

   ```bash
   RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxx
   EMAIL_TO=webx@groovymark.com
   # EMAIL_FROM="GroovyMark WebX <webx@groovymark.com>"   # once domain verified
   ```

4. Restart `npm run dev`

### Development without an API key

If `RESEND_API_KEY` is **not set**, the API routes still return a successful
response with a real case ID, but the email body is logged to the dev server
console instead of being sent. This lets you test the UX locally before
wiring real email delivery.

### Production checklist

- [ ] Verify your sending domain in Resend (so you can send from `webx@groovymark.com` instead of `onboarding@resend.dev`)
- [ ] Update `EMAIL_FROM` once the domain is verified
- [ ] Set both `RESEND_API_KEY` and `EMAIL_FROM` in your host's environment (Vercel, Netlify, etc.)

### API routes

| Endpoint | Method | Payload | Email subject prefix |
|---|---|---|---|
| `/api/support-ticket` | POST | `{ name, email, subject, category, priority, message }` | `[Support Ticket] WX-…` |
| `/api/quote` | POST | `{ contact, selectedServices, budget, timeline, description }` | `[Quote Request] WX-…` |

Both endpoints set a `Reply-To` header to the user's name + email, so a
single reply in your inbox lands directly with them — no need to look up
addresses.

---

## 12. What to swap before launch

- [ ] Set `RESEND_API_KEY` in `.env.local` so support tickets + quote requests actually email `webx@groovymark.com`
- [ ] Verify your domain in Resend and update `EMAIL_FROM` accordingly
- [ ] Domain in `metadataBase`, `sitemap.js`, `robots.js`, `JsonLd.jsx`
- [ ] Real portfolio data in `lib/portfolio.js`
- [ ] Replace social handles in `Footer.jsx` and `JsonLd.jsx`
- [ ] Add Google Analytics / Plausible / etc. in `app/layout.js` (LeadIQ analytics already wired)

Happy shipping.
