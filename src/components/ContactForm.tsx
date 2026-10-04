"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";
import Icon from "./Icon";
import { useI18n } from "@/i18n/client";
import { solutions as baseSolutions } from "@/lib/data";

const field =
  "mt-2 w-full rounded-xl border border-ink/15 bg-white px-4 py-3.5 text-base outline-none transition focus:border-navy-800 focus:ring-2 focus:ring-navy-800/15";

export default function ContactForm() {
  const params = useSearchParams();
  const { t, loc } = useI18n();
  const solutions = loc(baseSolutions);
  const isQuote = params.get("topic") === "quote";
  const product = solutions.find((s) => s.slug === params.get("product"))?.name;
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div className="flex h-full min-h-96 flex-col items-center justify-center rounded-xl bg-surface p-12 text-center">
        <span className="grid h-16 w-16 place-items-center rounded-full bg-orange-500 text-white">
          <Icon name="check" className="h-8 w-8" strokeWidth={3} />
        </span>
        <h2 className="display mt-6 text-3xl">{t("Thank you for your message")}</h2>
        <p className="mt-2 text-muted">{t("Our team will get back to you within one working day.")}</p>
      </div>
    );
  }

  return (
    <form
      className="rounded-xl bg-surface p-8 sm:p-12"
      onSubmit={(e) => {
        e.preventDefault();
        // TODO: connect to an email service or API route.
        setSent(true);
      }}
    >
      <h2 className="display text-4xl">{isQuote ? t("Request a Quote") : t("Send Us a Message")}</h2>
      <div className="mt-10 grid gap-5 sm:grid-cols-2">
        <label className="text-sm font-medium">
          {t("Name")} *<input required name="name" className={field} autoComplete="name" />
        </label>
        <label className="text-sm font-medium">
          {t("Company")}<input name="company" className={field} autoComplete="organization" />
        </label>
        <label className="text-sm font-medium">
          {t("Phone")} *<input required type="tel" name="phone" className={field} autoComplete="tel" />
        </label>
        <label className="text-sm font-medium">
          {t("Email")}<input type="email" name="email" className={field} autoComplete="email" />
        </label>
        <label className="text-sm font-medium sm:col-span-2">
          {t("Product interest")}
          <select name="topic" className={field} defaultValue={product ?? ""}>
            <option value="">{t("Select a product or topic")}</option>
            {solutions.map((s) => <option key={s.slug}>{s.name}</option>)}
            <option>{t("Service & spare parts")}</option>
            <option>{t("Other")}</option>
          </select>
        </label>
        <label className="text-sm font-medium sm:col-span-2">
          {t("Message")} *<textarea required name="message" rows={5} className={field} />
        </label>
      </div>
      <label className="mt-6 flex items-start gap-3 text-sm text-muted">
        <input required type="checkbox" className="mt-0.5 h-4 w-4 accent-orange-500" />
        {t("I agree that my data will be used to process my request.")}
      </label>
      <button type="submit" className="btn-orange mt-8">
        {isQuote ? t("Request a Quote") : t("Send Message")} <Icon name="arrow" className="h-5 w-5" />
      </button>
    </form>
  );
}
