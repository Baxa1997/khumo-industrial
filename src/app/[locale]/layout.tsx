import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import { LocaleProvider } from "@/i18n/client";
import { dateLocales, isLocale, locales } from "@/i18n/config";
import { messages } from "@/i18n/messages";
import { getI18n } from "@/i18n/server";
import { company } from "@/lib/data";
import { fullTitle, seo, siteUrl } from "@/lib/site";
import "../globals.css";

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata(): Promise<Metadata> {
  const { t, locale } = await getI18n();
  const title = fullTitle(t(seo.title));
  const description = t(seo.description);
  return {
    metadataBase: new URL(siteUrl),
    title: { default: title, template: `%s | ${company.name}` },
    description,
    keywords: seo.keywords.map((k) => t(k)),
    applicationName: company.name,
    openGraph: {
      type: "website",
      siteName: company.name,
      title,
      description,
      locale: dateLocales[locale].replace(/-/g, "_").replace("_Latn", ""),
    },
    twitter: { card: "summary_large_image", title, description },
  };
}

export default async function LocaleLayout({ children, params }: { children: React.ReactNode; params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return (
    <html lang={locale}>
      <body className="flex min-h-screen flex-col font-sans">
        <LocaleProvider locale={locale} messages={messages[locale]}>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Organization",
                name: company.name,
                legalName: company.legalName,
                url: `${siteUrl}/${locale}`,
                logo: `${siteUrl}/apple-icon.png`,
                telephone: company.phone.replace(/\s/g, ""),
                areaServed: "UZ",
                address: { "@type": "PostalAddress", addressCountry: "UZ" },
                sameAs: [company.instagram.href, company.telegram.href],
              }),
            }}
          />
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <FloatingContact />
        </LocaleProvider>
      </body>
    </html>
  );
}
