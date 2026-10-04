export const locales = ["uz", "ru", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "uz";
export const localeCookie = "NEXT_LOCALE";

export const localeNames: Record<Locale, string> = { uz: "O‘zbekcha", ru: "Русский", en: "English" };
export const localeShort: Record<Locale, string> = { uz: "UZ", ru: "RU", en: "EN" };
export const dateLocales: Record<Locale, string> = { uz: "uz-Latn-UZ", ru: "ru-RU", en: "en-US" };

export const isLocale = (value: string | undefined | null): value is Locale => !!value && (locales as readonly string[]).includes(value);

/** Prefix an internal path with the locale ("/products" -> "/ru/products"). */
export function localizeHref(locale: Locale, href: string) {
  if (!href.startsWith("/") || href.startsWith("//")) return href;
  const first = href.split(/[/?#]/)[1];
  if (isLocale(first)) return href;
  return `/${locale}${href === "/" ? "" : href}`;
}

/** Swap the locale segment of a pathname. */
export function switchLocalePath(pathname: string, locale: Locale) {
  const parts = pathname.split("/");
  if (isLocale(parts[1])) parts[1] = locale;
  else parts.splice(1, 0, locale);
  return parts.join("/") || `/${locale}`;
}
