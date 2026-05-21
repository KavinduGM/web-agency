import { NextResponse } from "next/server";
import { generateCaseId } from "@/lib/caseId";
import { sendEmail, renderEmail, DEFAULT_TO } from "@/lib/email";

export const runtime = "nodejs";

const CATEGORIES = [
  "Website issue / bug",
  "Account / billing",
  "Project support",
  "General enquiry",
  "Feature request",
  "Other",
];
const PRIORITIES = ["Low", "Medium", "High", "Urgent"];

export async function POST(req) {
  let body;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  const {
    name,
    email,
    subject,
    category,
    priority,
    message,
    page, // optional — URL the user was on
    userAgent, // optional — sent from client for debugging
  } = body || {};

  // Basic validation
  if (!name || !email || !subject || !message) {
    return NextResponse.json(
      {
        ok: false,
        error: "Please provide name, email, subject, and message.",
      },
      { status: 400 }
    );
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json(
      { ok: false, error: "Please provide a valid email address." },
      { status: 400 }
    );
  }
  if (message.length > 6000) {
    return NextResponse.json(
      { ok: false, error: "Message is too long (max 6,000 characters)." },
      { status: 400 }
    );
  }

  const caseId = generateCaseId("WX");
  const submittedAt = new Date().toISOString();
  const cat = CATEGORIES.includes(category) ? category : "General enquiry";
  const pri = PRIORITIES.includes(priority) ? priority : "Medium";

  const rows = [
    ["Case ID", caseId],
    ["Submitted (UTC)", submittedAt],
    ["Category", cat],
    ["Priority", pri],
    ["Name", name],
    ["Email", email],
    ["Subject", subject],
    ["Page", page || "(not provided)"],
    ["User-Agent", userAgent || "(not provided)"],
  ];

  const html = renderEmail({
    heading: `New Support Ticket — ${subject}`,
    caseId,
    intro: `A new support ticket has been opened on the GroovyMark WebX website. Please respond to the user within one business day.`,
    rows,
    message,
    footer: `Sent automatically · Reply directly to this email to respond to ${name}.`,
  });

  const text = [
    `New Support Ticket`,
    `Case ID: ${caseId}`,
    ...rows.map(([k, v]) => `${k}: ${v}`),
    ``,
    `Message:`,
    message,
  ].join("\n");

  const result = await sendEmail({
    to: DEFAULT_TO,
    subject: `[Support Ticket] ${caseId} — ${subject}`,
    html,
    text,
    replyTo: `${name} <${email}>`,
  });

  // We always return success to the user (so they get their case ID), but
  // include the email status so we can surface a soft warning if needed.
  return NextResponse.json({
    ok: true,
    caseId,
    submittedAt,
    emailSent: result.ok && !result.simulated,
    simulated: !!result.simulated,
  });
}
