"use client";

/**
 * Footer "Cookies" link — re-opens the cookie consent banner via the
 * global helper exposed by `CookieConsent.jsx`.
 */
export default function CookieSettingsButton({ className = "" }) {
  return (
    <button
      type="button"
      onClick={() => {
        if (
          typeof window !== "undefined" &&
          typeof window.groovymarkOpenCookieSettings === "function"
        ) {
          window.groovymarkOpenCookieSettings();
        }
      }}
      className={"hover:text-brand-600 " + className}
    >
      Cookie Widget
    </button>
  );
}
