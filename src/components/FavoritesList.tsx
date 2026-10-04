"use client";

import Link from "next/link";
import { CategoryGrid } from "./Sections";
import { useFavorites } from "@/lib/favorites";

export default function FavoritesList() {
  const { favorites } = useFavorites();
  if (favorites.length === 0) {
    return (
      <div className="rounded-xl bg-surface p-12 text-center">
        <p className="display text-3xl">No saved products yet</p>
        <p className="mt-3 text-muted">Tap “Save” on any product page to keep it here.</p>
        <Link href="/products" className="btn-orange mt-8">Browse Products</Link>
      </div>
    );
  }
  return <CategoryGrid slugs={favorites} />;
}
