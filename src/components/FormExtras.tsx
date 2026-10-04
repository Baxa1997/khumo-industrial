"use client";

import Link from "@/i18n/Link";
import { useI18n } from "@/i18n/client";
import { company } from "@/lib/data";
import type { LeadStatus } from "./useLeadSubmit";

/** Hidden spam trap, privacy consent and delivery error shared by the quote and contact forms. */
export function Honeypot() {
  return (
    <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 opacity-0" />
  );
}

export function Consent({ className = "" }: { className?: string }) {
  const { t } = useI18n();
  const [before, after] = t("I agree to the processing of my personal data in accordance with the {policy}.").split("{policy}");
  return (
    <label className={`flex items-start gap-3 text-sm text-muted ${className}`}>
      <input required type="checkbox" name="consent" value="yes" className="mt-0.5 h-4 w-4 shrink-0 accent-orange-500" />
      <span>
        {before}
        <Link href="/privacy" target="_blank" className="text-ink underline underline-offset-2 hover:text-orange-500">{t("Privacy Policy")}</Link>
        {after}
      </span>
    </label>
  );
}

export function SubmitError({ status, className = "" }: { status: LeadStatus; className?: string }) {
  const { t } = useI18n();
  if (status !== "error") return null;
  return (
    <p role="alert" className={`rounded-md bg-orange-500/10 px-4 py-3 text-sm text-ink ${className}`}>
      {t("Your request could not be sent. Please call us at {phone} or write to us on Telegram {telegram}.", { phone: company.phone, telegram: company.telegram.label })}
    </p>
  );
}
