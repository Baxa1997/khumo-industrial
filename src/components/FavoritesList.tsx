"use client";

import Link from "@/i18n/Link";
import CategoryCards from "./CategoryCards";
import { useFavorites } from "@/lib/favorites";
import { useI18n } from "@/i18n/client";
import { solutions } from "@/lib/data";

export default function FavoritesList() {
  const { favorites } = useFavorites();
  const { t, loc } = useI18n();
  if (favorites.length === 0) {
    return (
      <div className="rounded-xl bg-surface p-12 text-center">
        <p className="display text-3xl">{t("No saved products yet")}</p>
        <p className="mt-3 text-muted">{t("Tap “Save” on any product page to keep it here.")}</p>
        <Link href="/products" className="btn-orange mt-8">{t("Browse Products")}</Link>
      </div>
    );
  }
  return <CategoryCards items={loc(solutions.filter((s) => favorites.includes(s.slug)))} />;
}
