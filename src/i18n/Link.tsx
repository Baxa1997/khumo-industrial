"use client";

import NextLink from "next/link";
import type { ComponentProps } from "react";
import { localizeHref } from "./config";
import { useI18n } from "./client";

/** next/link that keeps the current language: "/products" -> "/ru/products". */
export default function Link({ href, ...props }: ComponentProps<typeof NextLink>) {
  const { locale } = useI18n();
  return <NextLink href={typeof href === "string" ? localizeHref(locale, href) : href} {...props} />;
}
