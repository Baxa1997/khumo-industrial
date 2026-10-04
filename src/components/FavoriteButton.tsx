"use client";

import Icon from "./Icon";
import { useFavorites } from "@/lib/favorites";
import { useI18n } from "@/i18n/client";

export default function FavoriteButton({ slug, name }: { slug: string; name: string }) {
  const { has, toggle } = useFavorites();
  const { t } = useI18n();
  const saved = has(slug);
  return (
    <button
      type="button"
      onClick={() => toggle(slug)}
      aria-pressed={saved}
      className={`btn ${saved ? "border border-orange-500 bg-orange-500/10 text-orange-600" : "btn-ghost"}`}
    >
      <Icon name="heart" className={`h-5 w-5 ${saved ? "fill-orange-500" : ""}`} />
      {saved ? t("Saved: {name}", { name }) : t("Save: {name}", { name })}
    </button>
  );
}
