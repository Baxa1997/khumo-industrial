import type { Metadata } from "next";
import { defaultLocale, locales } from "@/i18n/config";
import RegionSection from "@/components/RegionSection";
import Link from "@/i18n/Link";
import Icon from "@/components/Icon";
import { CategoryGrid, ClientsStrip, CtaBanner, HistoryBlock, InstagramSection, NewsSection, PageIntro } from "@/components/Sections";
import { getI18n } from "@/i18n/server";
import { company, hero, images } from "@/lib/data";

export async function generateMetadata(): Promise<Metadata> {
  const { locale } = await getI18n();
  return {
    alternates: {
      canonical: `/${locale}`,
      languages: { ...Object.fromEntries(locales.map((l) => [l, `/${l}`])), "x-default": `/${defaultLocale}` },
    },
  };
}

export default async function HomePage() {
  const { t, loc } = await getI18n();
  const h = loc(hero);
  return (
    <>
      <PageIntro lines={h.lines} text={h.text} image={images.hero} imageAlt={t("Khumo Industrial service engineers at work")} icon="code">
        <div className="mt-10 flex flex-wrap gap-3">
          <Link href="/category/coding-marking" className="btn-orange">{t("Marking Solutions")}</Link>
          <a href={company.telegram.href} target="_blank" rel="noopener noreferrer" className="btn border border-navy-800 text-navy-800 hover:bg-navy-800 hover:text-white">
            <Icon name="send" className="h-4 w-4" /> {t("Write to us")}
          </a>
        </div>
      </PageIntro>
      <ClientsStrip />
      <section className="pb-8">
        <div className="container-x">
          <CategoryGrid />
        </div>
      </section>
      <HistoryBlock />
      <NewsSection />
      <InstagramSection />
      <RegionSection />
      <CtaBanner />
    </>
  );
}
