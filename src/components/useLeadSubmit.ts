"use client";

import { useState, type FormEvent } from "react";
import { useI18n } from "@/i18n/client";

export type LeadStatus = "idle" | "sending" | "sent" | "error";

/** Posts a form to /api/lead and tracks its delivery state. */
export function useLeadSubmit(form: string) {
  const { locale } = useI18n();
  const [status, setStatus] = useState<LeadStatus>("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, form, locale, page: window.location.pathname }),
      });
      setStatus(res.ok ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  }

  return { status, onSubmit };
}
