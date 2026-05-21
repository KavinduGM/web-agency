// Sends transactional emails via Resend's REST API (no SDK install needed).
//
// Required environment variables (set these in `.env.local` or your host):
//   RESEND_API_KEY      — Resend API key (https://resend.com/api-keys)
//   EMAIL_FROM          — Optional. Defaults to "GroovyMark WebX <onboarding@resend.dev>"
//                         while you're verifying your own domain.
//   EMAIL_TO            — Optional. Defaults to "webx@groovymark.com"
//
// If RESEND_API_KEY is missing, the email is logged to the server console
// instead of being sent. The form still succeeds and the user still gets
// their case ID — so the UX works locally even before you've wired Resend.

const RESEND_ENDPOINT = "https://api.resend.com/emails";

export const DEFAULT_TO = process.env.EMAIL_TO || "webx@groovymark.com";
export const DEFAULT_FROM =
  process.env.EMAIL_FROM ||
  "GroovyMark WebX <onboarding@resend.dev>";

export async function sendEmail({ to, from, subject, html, text, replyTo }) {
  const apiKey = process.env.RESEND_API_KEY;

  // Local-dev fallback: log instead of erroring.
  if (!apiKey) {
    console.warn(
      "[email] RESEND_API_KEY not set. Logging email instead of sending.\n" +
        "Set RESEND_API_KEY in .env.local to enable real delivery."
    );
    console.info("\n──────────── EMAIL (not sent) ────────────");
    console.info("To:        ", to || DEFAULT_TO);
    console.info("From:      ", from || DEFAULT_FROM);
    console.info("Reply-To:  ", replyTo || "(none)");
    console.info("Subject:   ", subject);
    console.info("─── Text ───");
    console.info(text || "(no text body)");
    console.info("──────────────────────────────────────────\n");
    return { ok: true, simulated: true };
  }

  try {
    const payload = {
      from: from || DEFAULT_FROM,
      to: to || DEFAULT_TO,
      subject,
      html,
      text,
    };
    if (replyTo) payload.reply_to = replyTo;

    const res = await fetch(RESEND_ENDPOINT, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      const body = await res.text();
      console.error("[email] Resend failed:", res.status, body);
      return { ok: false, error: `Resend ${res.status}` };
    }
    const data = await res.json();
    return { ok: true, id: data.id };
  } catch (err) {
    console.error("[email] Resend exception:", err);
    return { ok: false, error: err.message || "unknown error" };
  }
}

/* ─────────────── HTML helpers for the body ─────────────── */

export function escapeHtml(s) {
  return String(s || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

/**
 * Renders a styled HTML email with rows of key/value pairs, optional long
 * message block, and the case ID prominent at the top.
 */
export function renderEmail({ heading, caseId, intro, rows, message, footer }) {
  const safeRows = (rows || [])
    .filter(([, v]) => v !== undefined && v !== null && v !== "")
    .map(
      ([k, v]) => `
        <tr>
          <td style="padding:8px 12px;background:#f8fafc;border:1px solid #e2e8f0;font-weight:600;color:#475569;width:32%;font-size:13px;">
            ${escapeHtml(k)}
          </td>
          <td style="padding:8px 12px;border:1px solid #e2e8f0;color:#0f172a;font-size:14px;">
            ${escapeHtml(v)}
          </td>
        </tr>`
    )
    .join("");

  return `<!doctype html>
<html><body style="margin:0;padding:0;background:#f1f5f9;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f1f5f9;padding:24px 12px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 8px 32px rgba(15,23,42,0.08);max-width:600px;width:100%;">
        <tr><td style="background:linear-gradient(135deg,#6D28D9 0%,#8B4FF0 50%,#06B6D4 100%);padding:24px 28px;color:#fff;">
          <div style="font-family:'Plus Jakarta Sans',-apple-system,sans-serif;font-weight:800;font-size:18px;letter-spacing:-0.01em;">
            GroovyMark <span style="opacity:0.85;">WebX</span>
          </div>
          <div style="margin-top:14px;font-size:22px;font-weight:700;line-height:1.25;">
            ${escapeHtml(heading)}
          </div>
          ${caseId ? `<div style="margin-top:10px;display:inline-block;padding:4px 10px;border-radius:999px;background:rgba(255,255,255,0.18);font-family:ui-monospace,SFMono-Regular,Menlo,monospace;font-size:12px;letter-spacing:0.04em;">Case ID: ${escapeHtml(caseId)}</div>` : ""}
        </td></tr>
        <tr><td style="padding:24px 28px;">
          ${intro ? `<p style="margin:0 0 18px 0;color:#475569;font-size:14px;line-height:1.6;">${escapeHtml(intro)}</p>` : ""}
          ${
            safeRows
              ? `<table width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;font-size:14px;">${safeRows}</table>`
              : ""
          }
          ${
            message
              ? `<div style="margin-top:20px;">
                  <div style="font-size:11px;font-weight:700;color:#6D28D9;text-transform:uppercase;letter-spacing:0.1em;margin-bottom:6px;">Message</div>
                  <div style="padding:14px 16px;border-radius:12px;background:#f8fafc;border:1px solid #e2e8f0;color:#0f172a;font-size:14px;line-height:1.6;white-space:pre-wrap;">${escapeHtml(message)}</div>
                </div>`
              : ""
          }
        </td></tr>
        <tr><td style="padding:18px 28px 24px 28px;border-top:1px solid #f1f5f9;color:#64748b;font-size:12px;">
          ${footer || "Sent automatically by the GroovyMark WebX website."}
        </td></tr>
      </table>
    </td></tr>
  </table>
</body></html>`;
}
