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
 * The trailing "## Frequently asked questions" section is removed here
 * because the article page renders it from the structured `faq` column
 * with FAQPage JSON-LD attached.
 *
 * Returns the body blocks + the (optional) preFaq CTA marker the pipeline
 * placed right before the FAQ heading. The caller renders the FAQ block
 * separately, so we surface that preFaq CTA so it can sit between the
 * body and the FAQ.
 */
export default function BlogArticleBody({ bodyMd, inlineImages = [] }) {
  if (!bodyMd) return null;

  // 1. Split off the FAQ section so we render it from the structured faq[].
  const { mainBody, preFaqCta } = splitOffFaq(bodyMd);

  // 2. Resolve [[IMAGE_N]] markers. `inlineImages` is ord-sorted (ord 1..N).
  //    Marker number N maps to inlineImages[N-1].
  let body = mainBody.replace(/\[\[IMAGE_(\d+)\]\]/g, (_match, idx) => {
    const n = parseInt(idx, 10);
    const img = inlineImages[n - 1];
    if (!img?.path) return ""; // missing image → silently drop the marker
    const alt = (img.alt ?? "").replace(/"/g, '\\"').replace(/[\[\]]/g, "");
    const url = assetUrl(img.path);
    if (!url) return "";
    return `\n\n![${alt}](${url})\n\n`;
  });

  // 3. Split at CTA markers so we can drop a React component between chunks.
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
    <>
      <div className="space-y-2">
        {blocks.map((b, i) =>
          b.kind === "cta" ? (
            // Wrap so the banner aligns exactly to the article's max-w-3xl
            // column instead of breaking out via its own container-x.
            <div key={i} className="my-10 -mx-2">
              <InlineCTABanner title={b.title} ctaHref={b.href} embedded />
            </div>
          ) : (
            // Justified prose; relaxed line-height for long-form readability.
            // text-justify gets hyphenation help from `hyphens-auto`.
            <div
              key={i}
              className="prose prose-lg prose-zinc max-w-none text-justify hyphens-auto prose-headings:font-display prose-headings:tracking-tight prose-headings:text-slate-900 prose-headings:text-left prose-a:text-brand-700 prose-a:font-medium hover:prose-a:text-brand-800 prose-img:rounded-2xl prose-img:border prose-img:border-slate-200 prose-img:my-10 prose-img:w-full prose-blockquote:border-l-4 prose-blockquote:border-brand-300 prose-blockquote:bg-brand-50/40 prose-blockquote:rounded-r-xl prose-blockquote:py-2 prose-blockquote:px-5 prose-blockquote:not-italic prose-strong:text-slate-900 prose-code:bg-slate-100 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-[0.92em] prose-code:font-medium"
            >
              <ReactMarkdown
                components={{
                  // Lazy-load + rounded inline images.
                  // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
                  img: (props) => (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      {...props}
                      loading="lazy"
                      decoding="async"
                    />
                  ),
                  // Internal links keep Next-style routing; external open in new tab.
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

      {/* Pre-FAQ CTA — placed between body and the FAQ block by the article page. */}
      {preFaqCta && (
        <div className="my-10 -mx-2">
          <InlineCTABanner title={preFaqCta.title} ctaHref={preFaqCta.href} embedded />
        </div>
      )}
    </>
  );
}

/**
 * Returns the body markdown without the trailing FAQ section, plus the
 * single `[[CTA: …]]` marker that sat right before the FAQ heading (if any).
 *
 * Pipeline contract:
 *   <body markdown>
 *   [[CTA: pre-faq title | /href]]       ← optional, rendered as preFaqCta
 *   ## Frequently asked questions
 *   ### Q1 …
 *   …
 */
function splitOffFaq(md) {
  const m = md.match(/\n##\s+frequently\s+asked\s+questions[^\n]*\n/i);
  if (!m) return { mainBody: md, preFaqCta: null };
  const beforeFaq = md.slice(0, m.index);
  // Look for a CTA marker immediately before the FAQ heading.
  const ctaRe = /\[\[CTA:\s*([^|\]]+?)\s*\|\s*([^\]]+?)\s*\]\]\s*$/;
  const ctaMatch = beforeFaq.match(ctaRe);
  if (ctaMatch) {
    return {
      mainBody: beforeFaq.replace(ctaRe, "").trimEnd(),
      preFaqCta: { title: ctaMatch[1], href: ctaMatch[2] },
    };
  }
  return { mainBody: beforeFaq, preFaqCta: null };
}
