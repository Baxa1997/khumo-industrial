import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { LocaleProvider } from "@/i18n/client";
import { isLocale, locales } from "@/i18n/config";
import { messages } from "@/i18n/messages";
import { getI18n } from "@/i18n/server";
import { company } from "@/lib/data";
import "../globals.css";

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata(): Promise<Metadata> {
  const { t, locale } = await getI18n();
  return {
    title: {
      default: `${company.name} — ${t(company.tagline)}`,
      template: `%s | ${company.name}`,
    },
    description: t(
      "Your single-source, end-to-end packaging solutions partner: stretch wrapping, strapping, case sealing, binding, coding & marking and consumables.",
    ),
    alternates: {
      canonical: `/${locale}`,
      languages: Object.fromEntries(locales.map((l) => [l, `/${l}`])),
    },
  };
}

export default async function LocaleLayout({ children, params }: { children: React.ReactNode; params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return (
    <html lang={locale}>
      <body className="flex min-h-screen flex-col font-sans">
        <LocaleProvider locale={locale} messages={messages[locale]}>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </LocaleProvider>
      </body>
    </html>
  );
}
