"use client";

import { useEffect, useState } from "react";
import { Cookie, X, Settings2, Check } from "lucide-react";

/**
 * Self-contained cookie consent banner.
 *
 *  - Shows automatically on first visit (when no choice is in localStorage)
 *  - Persists user's choice under `groovymark_cookie_consent` (object) and
 *    `groovymark_cookie_consent_done` ("1") in localStorage
 *  - Optionally POSTs the consent to the LeadIQ CRM if it's reachable
 *  - Exposes window helpers so any "Cookie settings" link can re-open it:
 *      window.groovymarkOpenCookieSettings()
 *      window.groovymarkResetCookieConsent()
 */

const STORAGE_KEY = "groovymark_cookie_consent";
const DONE_KEY = "groovymark_cookie_consent_done";

const CATEGORIES = [
  {
    key: "necessary",
    title: "Necessary",
    desc: "Required for the site to work. Always on.",
    locked: true,
  },
  {
    key: "analytics",
    title: "Analytics",
    desc: "Helps us understand site traffic and improve the experience.",
  },
  {
    key: "functional",
    title: "Functional",
    desc: "Remembers preferences and choices for a better experience.",
  },
  {
    key: "marketing",
    title: "Marketing",
    desc: "Personalised ads and relevant content.",
  },
];

const DEFAULT_PREFS = {
  necessary: true,
  analytics: false,
  functional: false,
  marketing: false,
};

export default function CookieConsent() {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);
  const [view, setView] = useState("main"); // "main" | "customize"
  const [prefs, setPrefs] = useState(DEFAULT_PREFS);

  // Show banner on first visit
  useEffect(() => {
    setMounted(true);
    const open = () => {
      try {
        const existing = localStorage.getItem(STORAGE_KEY);
        if (existing) {
          try {
            setPrefs({ ...DEFAULT_PREFS, ...JSON.parse(existing) });
          } catch (_) {}
        }
      } catch (_) {}
      setView("main");
      setVisible(true);
    };

    // Always expose the helpers so any "Cookie settings" link can re-open
    // the banner, regardless of whether the user has chosen yet.
    window.groovymarkOpenCookieSettings = open;
    window.groovymarkResetCookieConsent = () => {
      try {
        localStorage.removeItem(STORAGE_KEY);
        localStorage.removeItem(DONE_KEY);
      } catch (_) {}
      open();
    };

    let done = false;
    try {
      done = localStorage.getItem(DONE_KEY) === "1";
    } catch (_) {}

    if (!done) {
      // Small delay so the banner doesn't fight with first paint
      const t = setTimeout(open, 800);
      return () => clearTimeout(t);
    }
  }, []);

  function save(choices) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(choices));
      localStorage.setItem(DONE_KEY, "1");
    } catch (_) {}

    // Best-effort: send to the LeadIQ CRM if it accepts it. Failures silently ignored.
    try {
      const ua = navigator.userAgent;
      const browser = /Edg/.test(ua)
        ? "Edge"
        : /Chrome/.test(ua)
        ? "Chrome"
        : /Firefox/.test(ua)
        ? "Firefox"
        : /Safari/.test(ua)
        ? "Safari"
        : "Other";
      const os = /Windows/.test(ua)
        ? "Windows"
        : /Mac/.test(ua)
        ? "macOS"
        : /Linux/.test(ua)
        ? "Linux"
        : /Android/.test(ua)
        ? "Android"
        : /iPhone|iPad/.test(ua)
        ? "iOS"
        : "Other";
      const device = /Mobile|Android|iPhone/i.test(ua)
        ? "Mobile"
        : /iPad|Tablet/i.test(ua)
        ? "Tablet"
        : "Desktop";
      fetch("https://crm.groovymark.com/api/public/web-x/cookie-consent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          consent_choices: choices,
          browser,
          os,
          device,
        }),
        keepalive: true,
        mode: "no-cors",
      }).catch(() => {});
    } catch (_) {}

    window.dispatchEvent(
      new CustomEvent("groovymarkCookieConsent", { detail: choices })
    );

    setVisible(false);
  }

  function acceptAll() {
    save({ necessary: true, analytics: true, functional: true, marketing: true });
  }
  function rejectAll() {
    save({ necessary: true, analytics: false, functional: false, marketing: false });
  }
  function savePrefs() {
    save({ ...prefs, necessary: true });
  }

  if (!mounted || !visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      className="fixed inset-x-0 bottom-0 z-[9999] flex justify-center px-3 pb-3 lg:pb-5 pointer-events-none"
    >
      <div className="pointer-events-auto w-full max-w-xl rounded-2xl bg-white border border-slate-200 shadow-2xl overflow-hidden">
        {view === "main" ? (
          <div className="p-5 md:p-6">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-brand-gradient text-white flex items-center justify-center flex-shrink-0 shadow-glow">
                <Cookie className="w-5 h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-display font-extrabold text-base text-slate-900">
                  We use cookies to improve your experience
                </h3>
                <p className="mt-1.5 text-sm text-slate-600 leading-relaxed">
                  We use cookies for analytics, to remember your preferences,
                  and to personalise content. You can accept all, reject all,
                  or choose what you're comfortable with.
                </p>
              </div>
            </div>

            <div className="mt-5 flex flex-wrap items-center justify-end gap-2">
              <button
                type="button"
                onClick={() => setView("customize")}
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-semibold text-slate-600 hover:text-brand-600 transition-colors"
              >
                <Settings2 className="w-4 h-4" />
                Customize
              </button>
              <button
                type="button"
                onClick={rejectAll}
                className="px-4 py-2 rounded-lg text-sm font-semibold text-slate-700 bg-white border border-slate-200 hover:border-slate-300 transition-colors"
              >
                Reject all
              </button>
              <button
                type="button"
                onClick={acceptAll}
                className="px-4 py-2 rounded-lg text-sm font-semibold text-white bg-brand-gradient shadow-glow hover:shadow-card-hover transition-shadow"
              >
                Accept all
              </button>
            </div>
          </div>
        ) : (
          <div className="p-5 md:p-6">
            <div className="flex items-center justify-between gap-3">
              <h3 className="font-display font-extrabold text-base text-slate-900">
                Cookie preferences
              </h3>
              <button
                type="button"
                onClick={() => setView("main")}
                aria-label="Back"
                className="w-8 h-8 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-100 flex items-center justify-center transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="mt-4 divide-y divide-slate-100">
              {CATEGORIES.map((cat) => (
                <CategoryToggle
                  key={cat.key}
                  category={cat}
                  checked={!!prefs[cat.key]}
                  onChange={(checked) =>
                    setPrefs((p) => ({ ...p, [cat.key]: checked }))
                  }
                />
              ))}
            </div>
            <div className="mt-5 flex flex-wrap items-center justify-end gap-2">
              <button
                type="button"
                onClick={() => setView("main")}
                className="px-4 py-2 rounded-lg text-sm font-semibold text-slate-700 bg-white border border-slate-200 hover:border-slate-300 transition-colors"
              >
                ← Back
              </button>
              <button
                type="button"
                onClick={savePrefs}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-semibold text-white bg-brand-gradient shadow-glow hover:shadow-card-hover transition-shadow"
              >
                <Check className="w-4 h-4" /> Save preferences
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function CategoryToggle({ category, checked, onChange }) {
  const id = `cookie-${category.key}`;
  return (
    <label
      htmlFor={id}
      className="flex items-start justify-between gap-4 py-3 cursor-pointer"
    >
      <div className="min-w-0">
        <div className="font-display font-bold text-sm text-slate-900">
          {category.title}
        </div>
        <div className="text-xs text-slate-500 mt-0.5">{category.desc}</div>
      </div>
      <span className="relative inline-flex flex-shrink-0">
        <input
          id={id}
          type="checkbox"
          checked={checked}
          disabled={category.locked}
          onChange={(e) => onChange(e.target.checked)}
          className="sr-only peer"
        />
        <span
          className={[
            "w-10 h-5 rounded-full transition-colors",
            category.locked
              ? "bg-brand-300 cursor-not-allowed"
              : checked
              ? "bg-brand-gradient"
              : "bg-slate-300 peer-hover:bg-slate-400",
          ].join(" ")}
        />
        <span
          className={[
            "absolute top-0.5 left-0.5 w-4 h-4 rounded-full bg-white shadow transition-transform",
            checked ? "translate-x-5" : "translate-x-0",
          ].join(" ")}
        />
      </span>
    </label>
  );
}
