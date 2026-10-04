import { NextResponse } from "next/server";

/**
 * Receives quote and contact form submissions and forwards them to a Telegram chat.
 * Configure TELEGRAM_BOT_TOKEN and TELEGRAM_CHAT_ID (see .env.example).
 */

const labels: Record<string, string> = {
  form: "Form",
  name: "Name",
  firstName: "First name",
  lastName: "Last name",
  phone: "Phone",
  email: "Email",
  company: "Company",
  product: "Product",
  topic: "Topic",
  region: "Region",
  city: "City",
  message: "Message",
  page: "Page",
  locale: "Language",
};

const escape = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

export async function POST(request: Request) {
  let data: Record<string, unknown>;
  try {
    data = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "invalid" }, { status: 400 });
  }

  // Honeypot: real visitors never fill the hidden "website" field.
  if (typeof data.website === "string" && data.website.trim()) return NextResponse.json({ ok: true });

  const fields: Record<string, string> = Object.fromEntries(
    Object.keys(labels)
      .map((k) => [k, typeof data[k] === "string" ? (data[k] as string).trim().slice(0, 2000) : ""])
      .filter(([, v]) => v),
  );
  if (!fields.phone || !(fields.name || fields.firstName)) {
    return NextResponse.json({ ok: false, error: "invalid" }, { status: 400 });
  }

  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  if (!token || !chatId) {
    console.error("Lead not delivered: TELEGRAM_BOT_TOKEN / TELEGRAM_CHAT_ID are not set", fields);
    return NextResponse.json({ ok: false, error: "not-configured" }, { status: 503 });
  }

  const text = ["<b>New request from the website</b>", ...Object.entries(fields).map(([k, v]) => `<b>${labels[k]}:</b> ${escape(v)}`)].join("\n");
  const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ chat_id: chatId, text, parse_mode: "HTML", disable_web_page_preview: true }),
  }).catch(() => null);

  if (!res?.ok) {
    console.error("Lead not delivered: Telegram API error", res?.status, fields);
    return NextResponse.json({ ok: false, error: "delivery" }, { status: 502 });
  }
  return NextResponse.json({ ok: true });
}
