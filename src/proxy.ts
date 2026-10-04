import { NextResponse, type NextRequest } from "next/server";
import { defaultLocale, isLocale, localeCookie, type Locale } from "@/i18n/config";

/** Uzbek unless the visitor has picked another language with the language switcher. */
function preferredLocale(request: NextRequest): Locale {
  const cookie = request.cookies.get(localeCookie)?.value;
  return isLocale(cookie) ? cookie : defaultLocale;
}

/** Redirect paths without a language prefix to Uzbek, or to the language the visitor chose before. */
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
