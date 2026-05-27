import Link from "next/link";
import { ArrowUpRight, Clock, User } from "lucide-react";
import { assetUrl } from "@/lib/db";

/**
 * Card used on the blog index grid. Three per row on desktop.
 * Cover image is the asset stored at `coverImagePath`; if a post somehow
 * lacks one we render a brand-gradient placeholder so the grid stays tidy.
 */
export default function BlogCard({ post }) {
  const cover = post.coverImagePath ? assetUrl(post.coverImagePath) : null;
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group relative flex flex-col rounded-3xl border border-slate-200 bg-white overflow-hidden card-lift focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2"
    >
      {/* Cover — aspect-[3/2] matches the gpt-image-1 source (1536×1024).
          Was aspect-[16/10] which cropped the brand headline on the left edge
          ("SCALABLE WEB" → "ICALABLE WEB"). object-contain preserves the safe
          zone the automation tool builds the cover around. */}
      <div className="relative aspect-[3/2] bg-slate-100 overflow-hidden">
        {cover ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={cover}
            alt={post.ogImageAlt || post.title}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-[1.03]"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-brand-600 via-brand-500 to-accent-500" />
        )}
        {post.tags?.[0] && (
          <span className="absolute top-3 left-3 z-10 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-white/90 backdrop-blur text-brand-700 border border-white/60 shadow-sm">
            {post.tags[0]}
          </span>
        )}
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 p-6">
        <div className="flex items-center gap-3 text-xs text-slate-500">
          <time dateTime={new Date(post.publishedAt).toISOString()}>
            {new Date(post.publishedAt).toLocaleDateString(undefined, {
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </time>
          {post.readingMinutes ? (
            <span className="inline-flex items-center gap-1">
              <Clock className="w-3 h-3" /> {post.readingMinutes} min read
            </span>
          ) : null}
        </div>

        <h3 className="mt-3 font-display font-bold text-lg md:text-xl leading-snug text-slate-900 group-hover:text-brand-700 transition-colors">
          {post.metaTitle || post.title}
        </h3>

        {(post.metaDescription || post.excerpt) && (
          <p className="mt-3 text-sm text-slate-600 leading-relaxed line-clamp-3">
            {post.metaDescription || post.excerpt}
          </p>
        )}

        <div className="mt-auto pt-5 flex items-center justify-between">
          {post.authorName ? (
            <span className="inline-flex items-center gap-1.5 text-xs text-slate-500">
              <User className="w-3.5 h-3.5" />
              {post.authorName}
            </span>
          ) : (
            <span />
          )}
          <span className="inline-flex items-center gap-1 text-sm font-semibold text-brand-700">
            Read article
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        </div>
      </div>
    </Link>
  );
}
