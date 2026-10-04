"use client";

import Icon from "./Icon";
import { useI18n } from "@/i18n/client";
import { regions } from "@/lib/data";
import { Consent, Honeypot, SubmitError } from "./FormExtras";
import { useLeadSubmit } from "./useLeadSubmit";

const input =
  "w-full rounded-md border border-ink/15 bg-white px-3 py-3 text-[15px] outline-none transition placeholder:text-ink/55 focus:border-navy-800 focus:ring-2 focus:ring-navy-800/10";

function Field({ name, placeholder, required, type = "text", autoComplete }: { name: string; placeholder: string; required?: boolean; type?: string; autoComplete?: string }) {
  return (
    <label className="relative block">
      <span className="sr-only">{placeholder}</span>
      <input name={name} type={type} required={required} placeholder={placeholder} autoComplete={autoComplete} className={input} />
      {required && <span className="pointer-events-none absolute right-2 top-1 text-xs text-orange-500" aria-hidden="true">*</span>}
    </label>
  );
}

/** Compact quote request form used at the bottom of category pages. */
export default function QuoteFormCard({ product }: { product?: string }) {
  const { status, onSubmit } = useLeadSubmit("Quote (category page)");
  const { t, loc } = useI18n();

  return (
    <div className="rounded-2xl border border-line bg-white p-6 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.12)] sm:p-7">
      {status === "sent" ? (
        <div className="flex min-h-80 flex-col items-center justify-center text-center">
          <span className="grid h-14 w-14 place-items-center rounded-full bg-orange-500 text-white">
            <Icon name="check" className="h-7 w-7" strokeWidth={3} />
          </span>
          <p className="display mt-5 text-2xl">{t("Thank you!")}</p>
          <p className="mt-2 text-muted">{t("A specialist will contact you within one working day.")}</p>
        </div>
      ) : (
        <form
          className="relative grid gap-3.5 sm:grid-cols-2"
          onSubmit={onSubmit}
        >
          <Honeypot />
          {product && <input type="hidden" name="product" value={product} />}
          <Field name="firstName" placeholder={t("First Name")} required autoComplete="given-name" />
          <Field name="lastName" placeholder={t("Last Name")} required autoComplete="family-name" />
          <Field name="phone" placeholder={t("Phone")} type="tel" required autoComplete="tel" />
          <Field name="email" placeholder={t("Email")} type="email" autoComplete="email" />
          <div className="sm:col-span-2">
            <Field name="company" placeholder={t("Company Name")} required autoComplete="organization" />
          </div>
          <label className="relative block sm:col-span-2">
            <span className="sr-only">{t("Select Region")}</span>
            <select name="region" defaultValue="" className={`${input} appearance-none pr-10`}>
              <option value="">{t("Select Region")}</option>
              {loc(regions).map((r) => <option key={r}>{r}</option>)}
            </select>
            <Icon name="chevron" className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2" strokeWidth={2.4} />
          </label>
          <div className="sm:col-span-2">
            <Field name="city" placeholder={t("City")} autoComplete="address-level2" />
          </div>
          <label className="relative block sm:col-span-2">
            <span className="sr-only">{t("Message")}</span>
            <textarea name="message" required rows={4} placeholder={t("Message")} className={`${input} resize-y`} />
            <span className="pointer-events-none absolute right-2 top-1 text-xs text-orange-500" aria-hidden="true">*</span>
          </label>
          <Consent className="mt-1 sm:col-span-2" />
          <SubmitError status={status} className="sm:col-span-2" />
          <button type="submit" disabled={status === "sending"} className="btn-orange mt-2 w-full py-3 text-[15px] disabled:opacity-60 sm:col-span-2">
            {status === "sending" ? t("Sending…") : t("Submit")}
          </button>
        </form>
      )}
    </div>
  );
}
