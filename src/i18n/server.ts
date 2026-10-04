import { locale as rootLocale } from "next/root-params";
import { defaultLocale, isLocale, type Locale } from "./config";
import { messages } from "./messages";
import { createI18n } from "./translate";

if (process.env.I18N_COLLECT) {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const fs = require("node:fs") as typeof import("node:fs");
  const file = process.env.I18N_COLLECT;
  (globalThis as { __i18nCollect?: (k: string) => void }).__i18nCollect = (k) => fs.appendFileSync(file, JSON.stringify(k) + "\n");
}

export async function getLocale(): Promise<Locale> {
  const value = await rootLocale();
  return isLocale(value) ? value : defaultLocale;
}

/** Translation helpers for Server Components: `const { t, loc, locale } = await getI18n()`. */
export async function getI18n() {
  const locale = await getLocale();
  return createI18n(locale, messages[locale]);
}

/** `export const generateMetadata = pageTitle("About")` — a translated <title>. */
export function pageTitle(title: string) {
  return async () => ({ title: (await getI18n()).t(title) });
}
