import ReactMarkdown from "react-markdown";
import { assetUrl } from "@/lib/db";
import InlineCTABanner from "@/components/InlineCTABanner";

/**
 * Renders the article body markdown produced by the automation pipeline.
 *
 * Two custom tokens are stripped/replaced before/around ReactMarkdown:
 *
 *   [[IMAGE_N]]            → inline <img> using inlineImages[N-1]
 *   [[CTA: title | href]]  → <InlineCTABanner /> between markdown chunks
 *
 * The Q&A list at the bottom (`## Frequently asked questions` …) is removed
 * here because the article page renders it as a styled FAQ block from the
 * structured `faq` column, with FAQPage JSON-LD.
 */
export default function BlogArticleBody({ bodyMd, inlineImages = [] }) {
  if (!bodyMd) return null;

  // 1. Drop the trailing FAQ section so it's not rendered twice.
  let body = stripFaqSection(bodyMd);

  // 2. Resolve [[IMAGE_N]] markers. `inlineImages` is ord-sorted (ord 1..N).
  //    Marker number N maps to inlineImages[N-1].
  body = body.replace(/\[\[IMAGE_(\d+)\]\]/g, (_match, idx) => {
    const n = parseInt(idx, 10);
    const img = inlineImages[n - 1];
    if (!img?.path) return ""; // missing image → silently drop the marker
    const alt = (img.alt ?? "").replace(/"/g, '\\"');
    return `\n\n![${alt}](${assetUrl(img.path)})\n\n`;
  });

  // 3. Split at CTA markers so we can drop a React component between chunks.
  //    The regex captures BOTH the title and href in one go.
  const parts = body.split(/\[\[CTA:\s*([^|\]]+?)\s*\|\s*([^\]]+?)\s*\]\]/);
  // parts: ['mdBefore', 'title1', 'href1', 'mdMid', 'title2', 'href2', 'mdAfter', ...]

  const blocks = [];
  for (let i = 0; i < parts.length; i++) {
    if (i % 3 === 0) {
      const md = parts[i]?.trim();
      if (md) blocks.push({ kind: "md", content: md });
    } else if (i % 3 === 1) {
      const title = parts[i];
      const href = parts[i + 1] ?? "/contact";
      blocks.push({ kind: "cta", title, href });
      i++; // we consumed both title + href
    }
  }

  return (
    <div className="space-y-2">
      {blocks.map((b, i) =>
        b.kind === "cta" ? (
          <InlineCTABanner key={i} title={b.title} ctaHref={b.href} />
        ) : (
          <div key={i} className="prose prose-lg prose-zinc max-w-none">
            <ReactMarkdown
              components={{
                // Lazy-load + rounded inline images (cover image handled
                // separately as the banner in the parent component).
                // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
                img: ({ node, ...props }) => (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    {...props}
                    loading="lazy"
                    decoding="async"
                    className="rounded-2xl border border-slate-200 my-8"
                  />
                ),
                // Internal links keep Next-style hashes; external open in new tab.
                a: ({ href, children, ...props }) => {
                  const isExternal = /^https?:\/\//.test(href ?? "");
                  return (
                    <a
                      href={href}
                      {...props}
                      {...(isExternal
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                    >
                      {children}
                    </a>
                  );
                },
              }}
            >
              {b.content}
            </ReactMarkdown>
          </div>
        ),
      )}
    </div>
  );
}

// Removes the trailing "## Frequently asked questions" section and anything
// after it. Tolerant of small heading variations (case-insensitive, dropped
// punctuation).
function stripFaqSection(md) {
  const m = md.match(/\n##\s+frequently\s+asked\s+questions[^\n]*\n/i);
  if (!m) return md;
  return md.slice(0, m.index);
}
