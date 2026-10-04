import type { Locale } from "./config";

/** English text -> translation. English is the source language, so its map is empty. */
export type Messages = Record<string, string>;
export type Vars = Record<string, string | number>;
export type T = (key: string, vars?: Vars) => string;

// Build-time hook used by scripts/i18n-keys.mjs to list every string that needs translating.
const collect = (key: string) => (globalThis as { __i18nCollect?: (k: string) => void }).__i18nCollect?.(key);

export function makeT(messages: Messages): T {
  return (key, vars) => {
    collect(key);
    let s = messages[key] ?? key;
    if (vars) for (const [k, v] of Object.entries(vars)) s = s.replaceAll(`{${k}}`, String(v));
    return s;
  };
}

// Object keys whose values are identifiers, not display text.
const SKIP_KEYS = new Set(["slug", "href", "icon", "image", "item", "phoneHref", "logo", "heroImage", "key"]);

/** Deep-translate every display string inside a content object. */
export function localize<V>(value: V, messages: Messages): V {
  if (typeof value === "string") {
    if (value.startsWith("/") || value.startsWith("http") || value.startsWith("tel:")) return value;
    collect(value);
    return (messages[value] ?? value) as V;
  }
  if (Array.isArray(value)) return value.map((v) => localize(v, messages)) as V;
  if (value && typeof value === "object") {
    const out: Record<string, unknown> = {};
    for (const [k, v] of Object.entries(value)) out[k] = SKIP_KEYS.has(k) ? v : localize(v, messages);
    return out as V;
  }
  return value;
}

export type I18n = { locale: Locale; t: T; loc: <V>(value: V) => V };

export function createI18n(locale: Locale, messages: Messages): I18n {
  return { locale, t: makeT(messages), loc: (v) => localize(v, messages) };
}
