"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Embedded contact form from the LeadIQ CRM.
 *  - Hosts the form inside an iframe styled to match the rest of the site
 *  - Listens for the `leadiq-embed-height` postMessage events so the iframe
 *    auto-resizes to fit its content exactly (no empty space below, no inner scroll)
 *  - Keeps the privacy line underneath the form
 */
export default function EmbeddedContactForm() {
  const iframeRef = useRef(null);
  // Tight placeholder height that matches the actual form content (Name, Email,
  // Phone, Service dropdown, Message textarea, Send button). If the embed posts
  // a `leadiq-embed-height` message later, we'll resize to that exact value.
  const [height, setHeight] = useState(460);

  useEffect(() => {
    const onMessage = (e) => {
      if (!e.data) return;

      // Accept a few common embed-height message shapes so this stays robust
      // even if the CRM updates the protocol:
      //   { type: "leadiq-embed-height", height: 480 }
      //   { type: "iframe-height",      height: 480 }
      //   { height: 480 }                   // bare height
      let h = null;
      if (typeof e.data === "object") {
        if (
          (e.data.type === "leadiq-embed-height" ||
            e.data.type === "iframe-height") &&
          typeof e.data.height === "number"
        ) {
          h = e.data.height;
        } else if (
          typeof e.data.height === "number" &&
          !e.data.type // bare {height: ...}
        ) {
          h = e.data.height;
        }
      }
      // Sanity guard — ignore obviously wrong sizes
      if (h && h > 120 && h < 4000) {
        setHeight(h);
      }
    };
    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, []);

  return (
    <div className="rounded-2xl bg-white border border-slate-200 shadow-card overflow-hidden">
      <iframe
        ref={iframeRef}
        src="https://crm.groovymark.com/web-x/contact-us?embed=1&form=4&hide_name=1&hide_desc=1&hide_logo=1"
        id="leadiq-form-4"
        title="Contact form"
        loading="lazy"
        scrolling="no"
        style={{ width: "100%", border: 0, height: `${height}px`, display: "block" }}
      />
      <p className="px-5 py-3 text-xs text-slate-500 text-center border-t border-slate-100 bg-slate-50/40">
        By submitting, you agree to our privacy policy. We never share your details.
      </p>
    </div>
  );
}
