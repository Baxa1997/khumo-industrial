"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Icon from "./Icon";
import { useI18n } from "@/i18n/client";
import { localeCookie, localeNames, localeShort, locales, switchLocalePath, type Locale } from "@/i18n/config";

function useSwitchLocale() {
  const router = useRouter();
  const pathname = usePathname();
  return (next: Locale) => {
    document.cookie = `${localeCookie}=${next}; path=/; max-age=31536000; samesite=lax`;
    router.push(switchLocalePath(pathname, next) + window.location.search + window.location.hash);
  };
}

/** Compact dropdown for the top bar. */
export function LanguageDropdown() {
  const { locale, t } = useI18n();
  const switchTo = useSwitchLocale();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => !ref.current?.contains(e.target as Node) && setOpen(false);
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [open]);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-label={t("Language")}
        className="flex items-center gap-1.5 hover:text-orange-500"
      >
        <Icon name="globe" className="h-3.5 w-3.5" />
        {localeNames[locale]}
        <Icon name="chevron" className={`h-3 w-3 transition-transform ${open ? "rotate-180" : ""}`} strokeWidth={2.4} />
      </button>
      {open && (
        <ul className="absolute right-0 top-7 z-10 w-44 rounded-xl bg-white p-1.5 text-ink shadow-xl ring-1 ring-line">
          {locales.map((l) => (
            <li key={l}>
              <button
                type="button"
                onClick={() => {
                  setOpen(false);
                  if (l !== locale) switchTo(l);
                }}
                aria-current={l === locale}
                className={`flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-sm hover:bg-surface ${l === locale ? "font-semibold text-orange-500" : ""}`}
              >
                {localeNames[l]}
                <span className="text-xs text-muted">{localeShort[l]}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

/** Segmented buttons for the mobile menu. */
export function LanguageButtons() {
  const { locale, t } = useI18n();
  const switchTo = useSwitchLocale();
  return (
    <div role="group" aria-label={t("Language")} className="grid grid-cols-3 gap-1 rounded-full bg-surface p-1">
      {locales.map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => l !== locale && switchTo(l)}
          aria-pressed={l === locale}
          className={`rounded-full py-2 text-sm font-medium transition-colors ${l === locale ? "bg-white text-orange-500 shadow-sm" : "text-ink/70"}`}
        >
          {localeNames[l]}
        </button>
      ))}
    </div>
  );
}
