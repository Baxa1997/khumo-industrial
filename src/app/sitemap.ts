import type { MetadataRoute } from "next";
import { locales } from "@/i18n/config";
import { allItems, categoryDetails } from "@/lib/categories";
import { industries, solutions } from "@/lib/data";
import { siteUrl } from "@/lib/site";

const pages = ["", "/products", "/service", "/industries", "/resources", "/news", "/support", "/about", "/company-history", "/contact", "/privacy", "/terms"];

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    ...pages,
    ...solutions.map((s) => `/category/${s.slug}`),
    ...Object.keys(categoryDetails).flatMap((slug) => allItems(slug).map((i) => `/category/${slug}/${i.slug}`)),
    ...industries.map((i) => `/industries/${i.slug}`),
  ];
  return paths.map((path) => ({
    url: `${siteUrl}/uz${path}`,
    priority: path === "" ? 1 : path.startsWith("/category/coding-marking") ? 0.9 : 0.6,
    alternates: { languages: Object.fromEntries(locales.map((l) => [l, `${siteUrl}/${l}${path}`])) },
  }));
}
