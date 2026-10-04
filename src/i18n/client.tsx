"use client";

import { createContext, useContext, useMemo } from "react";
import type { Locale } from "./config";
import { createI18n, type I18n, type Messages } from "./translate";

const I18nContext = createContext<I18n | null>(null);

export function LocaleProvider({ locale, messages, children }: { locale: Locale; messages: Messages; children: React.ReactNode }) {
  const value = useMemo(() => createI18n(locale, messages), [locale, messages]);
  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

/** Translation helpers for Client Components. */
export function useI18n(): I18n {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used inside <LocaleProvider>");
  return ctx;
}
