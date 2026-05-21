"use client";

import { useState, useMemo, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  CheckCircle2,
  Send,
  Sparkles,
  Loader2,
  AlertCircle,
  Copy,
} from "lucide-react";
import { SERVICES, CATEGORIES } from "@/lib/services";

const BUDGETS = ["< $10k", "$10k – $25k", "$25k – $50k", "$50k – $100k", "$100k – $250k", "$250k+"];
const TIMELINES = ["ASAP / Within 1 month", "1 – 3 months", "3 – 6 months", "Flexible / Exploring"];

const STEPS = [
  { id: 1, label: "Services" },
  { id: 2, label: "Project" },
  { id: 3, label: "Contact" },
];

export default function QuoteForm() {
  const params = useSearchParams();
  const preselect = params.get("service");

  const [step, setStep] = useState(1);
  const [selected, setSelected] = useState(preselect ? [preselect] : []);
  const [budget, setBudget] = useState("");
  const [timeline, setTimeline] = useState("");
  const [description, setDescription] = useState("");
  const [contact, setContact] = useState({ name: "", email: "", company: "", country: "" });
  const [done, setDone] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [caseId, setCaseId] = useState("");
  const [copied, setCopied] = useState(false);

  function copyCaseId() {
    if (!caseId) return;
    try {
      navigator.clipboard.writeText(caseId);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {}
  }

  useEffect(() => {
    if (preselect && !selected.includes(preselect)) {
      setSelected([preselect]);
    }
  }, [preselect]);

  const toggle = (slug) =>
    setSelected((prev) =>
      prev.includes(slug) ? prev.filter((s) => s !== slug) : [...prev, slug]
    );

  const grouped = useMemo(
    () => ({
      "web-development": SERVICES.filter((s) => s.category === "web-development"),
      "ai-automation": SERVICES.filter((s) => s.category === "ai-automation"),
    }),
    []
  );

  const canNext = () => {
    if (step === 1) return selected.length > 0;
    if (step === 2) return budget && timeline && description.trim().length > 10;
    return true;
  };

  async function submit(e) {
    e.preventDefault();
    if (submitting) return;
    setSubmitting(true);
    setSubmitError("");
    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contact,
          selectedServices: selected,
          budget,
          timeline,
          description,
          page: typeof window !== "undefined" ? window.location.href : "",
          userAgent: typeof navigator !== "undefined" ? navigator.userAgent : "",
        }),
      });
      const data = await res.json();
      if (!res.ok || !data.ok) {
        throw new Error(data.error || `Request failed (${res.status})`);
      }
      setCaseId(data.caseId);
      setDone(true);
    } catch (err) {
      setSubmitError(err.message || "Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  if (done) {
    return (
      <div className="rounded-3xl bg-gradient-to-br from-brand-50 to-white border border-brand-100 p-10 md:p-14 text-center">
        <div className="w-16 h-16 mx-auto rounded-full bg-brand-gradient flex items-center justify-center text-white shadow-glow">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="mt-6 font-display font-extrabold text-3xl text-slate-900">
          Quote request received.
        </h3>
        <p className="mt-4 text-slate-600 max-w-lg mx-auto leading-relaxed">
          Thank you, <span className="font-semibold text-slate-900">{contact.name || "there"}</span>.
          We've logged your details and a senior team member will reach out within
          one business day with sharper questions and a recommended next step.
        </p>

        {caseId && (
          <div className="mt-7 inline-flex flex-col items-center gap-3 px-6 py-4 rounded-2xl bg-white border border-brand-100">
            <div className="text-[10px] font-display font-extrabold uppercase tracking-widest text-brand-700">
              <Sparkles className="w-3 h-3 inline mr-1" /> Your case ID
            </div>
            <div className="font-mono text-lg font-bold text-slate-900 tracking-wider break-all">
              {caseId}
            </div>
            <button
              type="button"
              onClick={copyCaseId}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700 hover:border-brand-300 hover:text-brand-700 transition-colors"
            >
              <Copy className="w-3.5 h-3.5" />
              {copied ? "Copied!" : "Copy case ID"}
            </button>
          </div>
        )}

        <div className="mt-8 grid sm:grid-cols-3 gap-3 max-w-xl mx-auto text-left">
          <div className="rounded-xl bg-white border border-slate-200 p-4">
            <div className="text-xs uppercase font-semibold text-slate-500">Services</div>
            <div className="mt-1 text-sm font-bold text-slate-900">{selected.length}</div>
          </div>
          <div className="rounded-xl bg-white border border-slate-200 p-4">
            <div className="text-xs uppercase font-semibold text-slate-500">Budget</div>
            <div className="mt-1 text-sm font-bold text-slate-900">{budget || "—"}</div>
          </div>
          <div className="rounded-xl bg-white border border-slate-200 p-4">
            <div className="text-xs uppercase font-semibold text-slate-500">Timeline</div>
            <div className="mt-1 text-sm font-bold text-slate-900">{timeline || "—"}</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="rounded-3xl bg-white border border-slate-200 shadow-card overflow-hidden">
      {/* Stepper */}
      <div className="px-4 sm:px-6 md:px-10 pt-6 sm:pt-8">
        <div className="flex items-center justify-between gap-1 sm:gap-2">
          {STEPS.map((s, i) => (
            <div key={s.id} className="flex-1 min-w-0 flex items-center gap-2 sm:gap-3">
              <div
                className={`w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center font-display font-bold text-sm flex-shrink-0 ${
                  step >= s.id
                    ? "bg-brand-gradient text-white shadow-glow"
                    : "bg-slate-100 text-slate-500"
                }`}
              >
                {step > s.id ? <Check className="w-4 h-4" /> : s.id}
              </div>
              <div className="flex-1 min-w-0">
                <div className={`text-[10px] sm:text-xs uppercase tracking-wider font-semibold ${step >= s.id ? "text-brand-700" : "text-slate-400"}`}>
                  Step {s.id}
                </div>
                <div className={`text-xs sm:text-sm font-display font-bold truncate ${step >= s.id ? "text-slate-900" : "text-slate-400"}`}>
                  {s.label}
                </div>
              </div>
              {i < STEPS.length - 1 && (
                <div className="hidden md:block flex-1 h-px bg-slate-200" />
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="p-4 sm:p-6 md:p-10">
        {step === 1 && (
          <div>
            <h3 className="font-display font-extrabold text-2xl md:text-3xl text-slate-900">
              Which services are you interested in?
            </h3>
            <p className="mt-2 text-slate-600">Select all that apply. We'll tailor our response.</p>

            <div className="mt-8 space-y-8">
              {Object.entries(grouped).map(([catSlug, list]) => (
                <div key={catSlug}>
                  <h4 className="font-display font-bold text-sm uppercase tracking-wider text-slate-500 mb-3">
                    {CATEGORIES[catSlug].title}
                  </h4>
                  <div className="grid sm:grid-cols-2 gap-2.5">
                    {list.map((s) => {
                      const active = selected.includes(s.slug);
                      return (
                        <button
                          key={s.slug}
                          type="button"
                          onClick={() => toggle(s.slug)}
                          className={`text-left rounded-xl border p-3.5 flex items-start gap-3 transition-all ${
                            active
                              ? "border-brand-400 bg-brand-50 ring-1 ring-brand-300"
                              : "border-slate-200 hover:border-brand-300 bg-white"
                          }`}
                        >
                          <span
                            className={`mt-0.5 w-5 h-5 rounded-md flex items-center justify-center flex-shrink-0 transition-colors ${
                              active ? "bg-brand-gradient text-white" : "border border-slate-300"
                            }`}
                          >
                            {active && <Check className="w-3 h-3" />}
                          </span>
                          <div className="min-w-0">
                            <div className="font-display font-bold text-sm text-slate-900 truncate">
                              {s.title}
                            </div>
                            <div className="text-xs text-slate-500 truncate">{s.subtitle}</div>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {step === 2 && (
          <div>
            <h3 className="font-display font-extrabold text-2xl md:text-3xl text-slate-900">
              Tell us about the project.
            </h3>
            <p className="mt-2 text-slate-600">Rough is fine — we'll dig into details on the call.</p>

            <div className="mt-8 grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-slate-800 mb-3">Budget range</label>
                <div className="grid grid-cols-2 gap-2.5">
                  {BUDGETS.map((b) => (
                    <button
                      key={b}
                      type="button"
                      onClick={() => setBudget(b)}
                      className={`text-sm rounded-xl border px-3 py-2.5 font-medium transition-all ${
                        budget === b
                          ? "border-brand-400 bg-brand-50 text-brand-700 ring-1 ring-brand-300"
                          : "border-slate-200 hover:border-brand-300 text-slate-700"
                      }`}
                    >
                      {b}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-800 mb-3">Timeline</label>
                <div className="grid grid-cols-1 gap-2.5">
                  {TIMELINES.map((t) => (
                    <button
                      key={t}
                      type="button"
                      onClick={() => setTimeline(t)}
                      className={`text-sm text-left rounded-xl border px-3.5 py-2.5 font-medium transition-all ${
                        timeline === t
                          ? "border-brand-400 bg-brand-50 text-brand-700 ring-1 ring-brand-300"
                          : "border-slate-200 hover:border-brand-300 text-slate-700"
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8">
              <label className="block text-sm font-semibold text-slate-800 mb-2">
                Project details <span className="text-brand-600">*</span>
              </label>
              <textarea
                rows={6}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Goals, audience, current pain points, must-have features, integrations..."
                className="block w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 outline-none focus:ring-2 focus:ring-brand-500/30 focus:border-brand-400 transition"
              />
              <div className="mt-1.5 text-xs text-slate-500">
                {description.length} / a short paragraph is plenty
              </div>
            </div>
          </div>
        )}

        {step === 3 && (
          <div>
            <h3 className="font-display font-extrabold text-2xl md:text-3xl text-slate-900">
              How can we reach you?
            </h3>
            <p className="mt-2 text-slate-600">We'll reply within one business day.</p>

            <div className="mt-8 grid md:grid-cols-2 gap-4">
              <Input label="Full name" required value={contact.name} onChange={(v) => setContact({ ...contact, name: v })} placeholder="Jane Doe" />
              <Input label="Work email" type="email" required value={contact.email} onChange={(v) => setContact({ ...contact, email: v })} placeholder="jane@company.com" />
              <Input label="Company" value={contact.company} onChange={(v) => setContact({ ...contact, company: v })} placeholder="Acme Corp" />
              <Input label="Country" value={contact.country} onChange={(v) => setContact({ ...contact, country: v })} placeholder="Singapore" />
            </div>

            {/* Summary */}
            <div className="mt-8 rounded-2xl bg-gradient-to-br from-brand-50 to-white border border-brand-100 p-5">
              <div className="flex items-center gap-2 text-brand-700 text-xs uppercase tracking-wider font-semibold">
                <Sparkles className="w-3.5 h-3.5" /> Quote summary
              </div>
              <div className="mt-3 grid sm:grid-cols-3 gap-3 text-sm">
                <div>
                  <div className="text-xs text-slate-500">Services</div>
                  <div className="font-display font-bold text-slate-900">{selected.length} selected</div>
                </div>
                <div>
                  <div className="text-xs text-slate-500">Budget</div>
                  <div className="font-display font-bold text-slate-900">{budget || "—"}</div>
                </div>
                <div>
                  <div className="text-xs text-slate-500">Timeline</div>
                  <div className="font-display font-bold text-slate-900">{timeline || "—"}</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Nav */}
        <div className="mt-10 flex items-center justify-between gap-4">
          <button
            type="button"
            disabled={step === 1}
            onClick={() => setStep((s) => Math.max(1, s - 1))}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-600 hover:text-brand-600 disabled:opacity-40 disabled:cursor-not-allowed"
          >
            <ArrowLeft className="w-4 h-4" /> Back
          </button>

          {step < 3 ? (
            <button
              type="button"
              onClick={() => setStep((s) => Math.min(3, s + 1))}
              disabled={!canNext()}
              className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
            >
              Continue <ArrowRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              type="submit"
              disabled={submitting}
              className="btn-primary disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
            >
              {submitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Sending…
                </>
              ) : (
                <>
                  Send quote request <Send className="w-4 h-4" />
                </>
              )}
            </button>
          )}
        </div>

        {/* Error banner — only visible on the final step if the API rejected */}
        {step === 3 && submitError && (
          <div className="mt-4 flex items-start gap-2 px-4 py-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-sm">
            <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
            <span>{submitError}</span>
          </div>
        )}
      </div>
    </form>
  );
}

function Input({ label, value, onChange, type = "text", required, placeholder }) {
  return (
    <label className="block">
      <span className="block text-xs font-semibold text-slate-700 mb-1.5">
        {label} {required && <span className="text-brand-600">*</span>}
      </span>
      <input
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="block w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 outline-none focus:ring-2 focus:ring-brand-500/30 focus:border-brand-400 transition"
      />
    </label>
  );
}
