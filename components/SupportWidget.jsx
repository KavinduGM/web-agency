"use client";

import { useEffect, useRef, useState } from "react";
import {
  LifeBuoy,
  X,
  Send,
  CheckCircle2,
  Copy,
  Loader2,
  AlertCircle,
  Sparkles,
} from "lucide-react";

/**
 * Floating support-ticket widget — bottom-right of every page.
 *  - Closed state: a small circular brand-gradient button with a help-buoy icon
 *  - Open state: a clean card with subject, category, priority, name, email,
 *    message; submits to /api/support-ticket and shows the generated Case ID
 *    on success.
 *
 * The widget is designed so a future chatbot tab can be added alongside the
 * support form in the same panel.
 */

const CATEGORIES = [
  "Website issue / bug",
  "Account / billing",
  "Project support",
  "General enquiry",
  "Feature request",
  "Other",
];
const PRIORITIES = ["Low", "Medium", "High", "Urgent"];

export default function SupportWidget() {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [errorMsg, setErrorMsg] = useState("");
  const [caseId, setCaseId] = useState("");
  const [copied, setCopied] = useState(false);
  const dialogRef = useRef(null);

  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    category: CATEGORIES[0],
    priority: "Medium",
    message: "",
  });

  // Esc closes the panel
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  function reset() {
    setForm({
      name: "",
      email: "",
      subject: "",
      category: CATEGORIES[0],
      priority: "Medium",
      message: "",
    });
    setStatus("idle");
    setErrorMsg("");
    setCaseId("");
    setCopied(false);
  }

  function close() {
    setOpen(false);
    // small delay so the success animation finishes before resetting
    setTimeout(() => {
      if (status === "success") reset();
    }, 300);
  }

  function update(field, value) {
    setForm((f) => ({ ...f, [field]: value }));
  }

  async function submit(e) {
    e.preventDefault();
    if (status === "sending") return;
    setStatus("sending");
    setErrorMsg("");

    try {
      const res = await fetch("/api/support-ticket", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          page: typeof window !== "undefined" ? window.location.href : "",
          userAgent: typeof navigator !== "undefined" ? navigator.userAgent : "",
        }),
      });
      const data = await res.json();
      if (!res.ok || !data.ok) {
        throw new Error(data.error || `Request failed (${res.status})`);
      }
      setCaseId(data.caseId);
      setStatus("success");
    } catch (err) {
      setStatus("error");
      setErrorMsg(err.message || "Something went wrong. Please try again.");
    }
  }

  function copyCaseId() {
    if (!caseId) return;
    try {
      navigator.clipboard.writeText(caseId);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {}
  }

  return (
    <>
      {/* Floating launcher button */}
      <button
        type="button"
        aria-label={open ? "Close support" : "Open support ticket"}
        aria-expanded={open}
        onClick={() => (open ? close() : setOpen(true))}
        className={[
          "fixed z-[60] bottom-6 right-6",
          "w-14 h-14 rounded-full",
          "bg-brand-gradient text-white shadow-glow",
          "flex items-center justify-center",
          "transition-all duration-300",
          "hover:shadow-card-hover hover:-translate-y-0.5",
          "focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-300/40",
        ].join(" ")}
      >
        <span className="sr-only">
          {open ? "Close support" : "Open support ticket"}
        </span>
        {open ? (
          <X className="w-6 h-6" />
        ) : (
          <LifeBuoy className="w-6 h-6" />
        )}
        {/* Subtle pulse ring when closed (idle invitation) */}
        {!open && (
          <span
            className="absolute inset-0 rounded-full border-2 border-brand-400/50 animate-ping pointer-events-none"
            aria-hidden="true"
          />
        )}
      </button>

      {/* Panel */}
      {open && (
        <div
          ref={dialogRef}
          role="dialog"
          aria-label="Support ticket"
          className={[
            "fixed z-[59] bottom-24 right-4 sm:right-6",
            "w-[calc(100%-2rem)] sm:w-[400px] max-h-[calc(100vh-7rem)]",
            "rounded-2xl bg-white border border-slate-200 shadow-2xl",
            "flex flex-col overflow-hidden",
            "animate-fade-up",
          ].join(" ")}
        >
          {/* Header */}
          <div className="relative px-5 py-4 bg-gradient-to-br from-brand-700 via-brand-600 to-accent-500 text-white">
            <div className="absolute -top-12 -right-10 w-32 h-32 bg-white/15 rounded-full blur-2xl pointer-events-none" />
            <div className="relative flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/15 border border-white/20 backdrop-blur flex items-center justify-center flex-shrink-0">
                <LifeBuoy className="w-5 h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-display font-extrabold text-sm">
                  Need a hand?
                </div>
                <div className="text-xs text-white/80 mt-0.5 leading-snug">
                  Open a ticket and we'll get back within one business day.
                </div>
              </div>
              <button
                type="button"
                onClick={close}
                aria-label="Close"
                className="w-8 h-8 rounded-lg text-white/85 hover:text-white hover:bg-white/15 flex items-center justify-center transition-colors flex-shrink-0"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Body */}
          <div className="flex-1 overflow-y-auto">
            {status === "success" ? (
              <SuccessView
                caseId={caseId}
                copied={copied}
                onCopy={copyCaseId}
                onClose={close}
                onNew={reset}
              />
            ) : (
              <form
                onSubmit={submit}
                className="px-5 py-5 space-y-3.5"
              >
                <div className="grid grid-cols-2 gap-3">
                  <Field
                    label="Category"
                    name="category"
                    type="select"
                    value={form.category}
                    onChange={(v) => update("category", v)}
                    options={CATEGORIES}
                    disabled={status === "sending"}
                  />
                  <Field
                    label="Priority"
                    name="priority"
                    type="select"
                    value={form.priority}
                    onChange={(v) => update("priority", v)}
                    options={PRIORITIES}
                    disabled={status === "sending"}
                  />
                </div>

                <Field
                  label="Subject"
                  name="subject"
                  required
                  value={form.subject}
                  onChange={(v) => update("subject", v)}
                  placeholder="Short summary of your issue"
                  disabled={status === "sending"}
                />

                <div className="grid grid-cols-2 gap-3">
                  <Field
                    label="Your name"
                    name="name"
                    required
                    value={form.name}
                    onChange={(v) => update("name", v)}
                    placeholder="Jane Doe"
                    disabled={status === "sending"}
                  />
                  <Field
                    label="Email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(v) => update("email", v)}
                    placeholder="jane@company.com"
                    disabled={status === "sending"}
                  />
                </div>

                <Field
                  label="Describe the issue"
                  name="message"
                  type="textarea"
                  required
                  value={form.message}
                  onChange={(v) => update("message", v)}
                  placeholder="What happened? What did you expect? Any steps to reproduce?"
                  disabled={status === "sending"}
                />

                {status === "error" && (
                  <div className="flex items-start gap-2 px-3 py-2 rounded-lg bg-rose-50 border border-rose-200 text-rose-700 text-xs">
                    <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-brand-gradient text-white text-sm font-semibold shadow-glow hover:shadow-card-hover transition-shadow disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === "sending" ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Sending…
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Open Ticket
                    </>
                  )}
                </button>

                <p className="text-[11px] text-slate-500 text-center leading-relaxed">
                  By submitting, you agree to our{" "}
                  <a
                    href="/privacy-policy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-600 hover:text-brand-700 hover:underline font-semibold"
                  >
                    Privacy Policy
                  </a>
                  . We'll only use your details to respond to this ticket.
                </p>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  value,
  onChange,
  placeholder,
  required,
  options,
  disabled,
}) {
  const id = `sw-${name}`;
  const baseInput =
    "w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 outline-none focus:ring-2 focus:ring-brand-500/30 focus:border-brand-400 transition disabled:bg-slate-50 disabled:cursor-not-allowed";
  return (
    <label htmlFor={id} className="block">
      <span className="block text-[11px] font-display font-bold uppercase tracking-wider text-slate-500 mb-1">
        {label} {required && <span className="text-brand-600">*</span>}
      </span>
      {type === "textarea" ? (
        <textarea
          id={id}
          name={name}
          required={required}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          rows={4}
          disabled={disabled}
          className={baseInput}
        />
      ) : type === "select" ? (
        <select
          id={id}
          name={name}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          disabled={disabled}
          className={baseInput + " appearance-none bg-no-repeat pr-8"}
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' stroke='%2364748b' stroke-width='2' viewBox='0 0 24 24'%3e%3cpath d='M6 9l6 6 6-6'/%3e%3c/svg%3e\")",
            backgroundSize: "16px 16px",
            backgroundPosition: "right 0.5rem center",
          }}
        >
          {options.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
      ) : (
        <input
          id={id}
          name={name}
          type={type}
          required={required}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          disabled={disabled}
          className={baseInput}
        />
      )}
    </label>
  );
}

function SuccessView({ caseId, copied, onCopy, onClose, onNew }) {
  return (
    <div className="px-5 py-7 text-center">
      <div className="w-14 h-14 mx-auto rounded-full bg-brand-gradient text-white flex items-center justify-center shadow-glow">
        <CheckCircle2 className="w-7 h-7" />
      </div>
      <div className="mt-4 font-display font-extrabold text-lg text-slate-900">
        Ticket opened
      </div>
      <p className="mt-2 text-sm text-slate-600 leading-relaxed">
        We've received your ticket and a senior team member will reply within
        one business day.
      </p>

      <div className="mt-5 rounded-xl bg-gradient-to-br from-brand-50 to-white border border-brand-100 p-4">
        <div className="text-[10px] font-display font-extrabold uppercase tracking-widest text-brand-700">
          <Sparkles className="w-3 h-3 inline mr-1" /> Your case ID
        </div>
        <div className="mt-2 font-mono text-lg font-bold text-slate-900 tracking-wider break-all">
          {caseId}
        </div>
        <button
          type="button"
          onClick={onCopy}
          className="mt-3 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-xs font-semibold text-slate-700 hover:border-brand-300 hover:text-brand-700 transition-colors"
        >
          <Copy className="w-3.5 h-3.5" />
          {copied ? "Copied!" : "Copy case ID"}
        </button>
      </div>

      <div className="mt-5 flex flex-wrap items-center justify-center gap-2">
        <button
          type="button"
          onClick={onNew}
          className="px-4 py-2 rounded-lg text-sm font-semibold text-slate-700 bg-white border border-slate-200 hover:border-slate-300 transition-colors"
        >
          New ticket
        </button>
        <button
          type="button"
          onClick={onClose}
          className="px-4 py-2 rounded-lg text-sm font-semibold text-white bg-brand-gradient shadow-glow hover:shadow-card-hover transition-shadow"
        >
          Close
        </button>
      </div>
    </div>
  );
}
