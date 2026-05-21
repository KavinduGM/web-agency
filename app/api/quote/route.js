import { NextResponse } from "next/server";
import { generateCaseId } from "@/lib/caseId";
import { sendEmail, renderEmail, DEFAULT_TO } from "@/lib/email";
import { SERVICES } from "@/lib/services";

export const runtime = "nodejs";

const SERVICE_SLUGS = new Set(SERVICES.map((s) => s.slug));
const SERVICE_TITLE_BY_SLUG = Object.fromEntries(
  SERVICES.map((s) => [s.slug, s.title])
);

export async function POST(req) {
  let body;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  const {
    contact = {},
    selectedServices = [],
    budget,
    timeline,
    description,
    page,
    userAgent,
  } = body || {};

  const { name, email, company, country } = contact || {};

  if (!name || !email || !description) {
    return NextResponse.json(
      { ok: false, error: "Please provide your name, email, and project details." },
      { status: 400 }
    );
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json(
      { ok: false, error: "Please provide a valid email address." },
      { status: 400 }
    );
  }
  if (!Array.isArray(selectedServices) || selectedServices.length === 0) {
    return NextResponse.json(
      { ok: false, error: "Please select at least one service." },
      { status: 400 }
    );
  }
  if (description.length > 8000) {
    return NextResponse.json(
      { ok: false, error: "Project details are too long (max 8,000 characters)." },
      { status: 400 }
    );
  }

  const caseId = generateCaseId("WX");
  const submittedAt = new Date().toISOString();

  const validSlugs = selectedServices.filter((s) => SERVICE_SLUGS.has(s));
  const serviceTitles = validSlugs
    .map((slug) => SERVICE_TITLE_BY_SLUG[slug])
    .filter(Boolean);

  const rows = [
    ["Case ID", caseId],
    ["Submitted (UTC)", submittedAt],
    ["Name", name],
    ["Email", email],
    ["Company", company || "(not provided)"],
    ["Country", country || "(not provided)"],
    ["Budget", budget || "(not provided)"],
    ["Timeline", timeline || "(not provided)"],
    ["Services selected", `${serviceTitles.length}\n• ${serviceTitles.join("\n• ")}`],
    ["Page", page || "(not provided)"],
    ["User-Agent", userAgent || "(not provided)"],
  ];

  const html = renderEmail({
    heading: `New Quote Request — ${serviceTitles.length} service${serviceTitles.length === 1 ? "" : "s"}`,
    caseId,
    intro: `A new quote request has been submitted via the GroovyMark WebX website. Please respond within one business day with sharper questions and a recommendation.`,
    rows,
    message: description,
    footer: `Sent automatically · Reply directly to this email to respond to ${name}.`,
  });

  const text = [
    `New Quote Request`,
    `Case ID: ${caseId}`,
    ...rows.map(([k, v]) => `${k}: ${v}`),
    ``,
    `Project description:`,
    description,
  ].join("\n");

  const result = await sendEmail({
    to: DEFAULT_TO,
    subject: `[Quote Request] ${caseId} — ${name}`,
    html,
    text,
    replyTo: `${name} <${email}>`,
  });

  return NextResponse.json({
    ok: true,
    caseId,
    submittedAt,
    emailSent: result.ok && !result.simulated,
    simulated: !!result.simulated,
  });
}
