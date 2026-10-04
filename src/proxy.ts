import { NextResponse, type NextRequest } from "next/server";
import { defaultLocale, isLocale, localeCookie, locales, type Locale } from "@/i18n/config";

function preferredLocale(request: NextRequest): Locale {
  const cookie = request.cookies.get(localeCookie)?.value;
  if (isLocale(cookie)) return cookie;
  const header = request.headers.get("accept-language") ?? "";
  const ranked = header
    .split(",")
    .map((part) => {
      const [tag, q] = part.trim().split(";q=");
      return { lang: tag.toLowerCase().split("-")[0], q: q ? Number(q) : 1 };
    })
    .sort((a, b) => b.q - a.q);
  return ranked.find((r) => (locales as readonly string[]).includes(r.lang))?.lang as Locale ?? defaultLocale;
}

/** Redirect paths without a language prefix to the visitor's preferred language. */
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  if (isLocale(pathname.split("/")[1])) return;
  const url = request.nextUrl.clone();
  url.pathname = `/${preferredLocale(request)}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  // Skip Next internals, API routes and files with an extension (images, fonts, etc.).
  matcher: ["/((?!_next|api|.*\\..*).*)"],
};
