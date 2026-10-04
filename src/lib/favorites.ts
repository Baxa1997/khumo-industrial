"use client";

import { useCallback, useSyncExternalStore } from "react";

const KEY = "khumo:favorites";
const EVENT = "khumo:favorites-change";
const EMPTY: string[] = [];
let cache: { raw: string | null; value: string[] } = { raw: null, value: EMPTY };

function read(): string[] {
  try {
    const raw = window.localStorage.getItem(KEY);
    if (raw !== cache.raw) cache = { raw, value: raw ? (JSON.parse(raw) as string[]) : EMPTY };
    return cache.value;
  } catch {
    return EMPTY;
  }
}

function subscribe(cb: () => void) {
  window.addEventListener(EVENT, cb);
  window.addEventListener("storage", cb);
  return () => {
    window.removeEventListener(EVENT, cb);
    window.removeEventListener("storage", cb);
  };
}

/** Saved product categories (by slug), persisted per browser. */
export function useFavorites() {
  const favorites = useSyncExternalStore(subscribe, read, () => EMPTY);
  const toggle = useCallback((slug: string) => {
    const current = read();
    const next = current.includes(slug) ? current.filter((s) => s !== slug) : [...current, slug];
    try {
      window.localStorage.setItem(KEY, JSON.stringify(next));
    } catch {
      /* storage unavailable */
    }
    window.dispatchEvent(new Event(EVENT));
  }, []);
  return { favorites, toggle, has: (slug: string) => favorites.includes(slug) };
}
