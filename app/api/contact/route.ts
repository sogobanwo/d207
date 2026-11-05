import { NextResponse } from "next/server";

type Brief = {
  name?: string;
  email?: string;
  phone?: string;
  location?: string;
  budget?: string;
  start?: string;
  brief?: string;
  projectType?: string;
  company?: string; // honeypot
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function clean(v: unknown, max = 2000) {
  return typeof v === "string" ? v.trim().slice(0, max) : "";
}

export async function POST(req: Request) {
  let body: Brief;
  try {
    body = (await req.json()) as Brief;
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Bots fill the hidden field; pretend success so they move on.
  if (clean(body.company)) return NextResponse.json({ ok: true });

  const brief = {
    name: clean(body.name, 120),
    email: clean(body.email, 200),
    phone: clean(body.phone, 40),
    location: clean(body.location, 200),
    budget: clean(body.budget, 80),
    start: clean(body.start, 80),
    projectType: clean(body.projectType, 80),
    brief: clean(body.brief, 5000),
  };

  if (!brief.name || !brief.phone || !brief.brief) {
    return NextResponse.json({ error: "Please add your name, phone number and a short brief." }, { status: 422 });
  }
  if (!EMAIL_RE.test(brief.email)) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 422 });
  }

  const text = [
    `New project brief from the D207 website`,
    ``,
    `Name: ${brief.name}`,
    `Email: ${brief.email}`,
    `Phone: ${brief.phone}`,
    `Project type: ${brief.projectType}`,
    `Location: ${brief.location || "—"}`,
    `Budget: ${brief.budget || "—"}`,
    `Ideal start: ${brief.start || "—"}`,
    ``,
    brief.brief,
  ].join("\n");

  // Delivery: set RESEND_API_KEY (and optionally CONTACT_TO / CONTACT_FROM) to email briefs via Resend.
  // Without a key the brief is logged on the server so nothing is lost in development.
  const key = process.env.RESEND_API_KEY;
  if (!key) {
    console.info("[contact] RESEND_API_KEY not set — brief logged instead:\n" + text);
    return NextResponse.json({ ok: true });
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: process.env.CONTACT_FROM ?? "D207 Website <website@d207construction.com>",
      to: [process.env.CONTACT_TO ?? "info@d207construction.com"],
      reply_to: brief.email,
      subject: `New brief: ${brief.projectType} — ${brief.name}`,
      text,
    }),
  });

  if (!res.ok) {
    console.error("[contact] Resend error", res.status, await res.text().catch(() => ""));
    return NextResponse.json({ error: "We couldn’t send your brief just now. Please call or email us." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
