import RegionSection from "@/components/RegionSection";
import { CategoryGrid, ClientsStrip, CtaBanner, HistoryBlock, NewsSection, PageIntro, SustainabilityBlock } from "@/components/Sections";
import Testimonials from "@/components/Testimonials";
import { getI18n } from "@/i18n/server";
import { hero, images } from "@/lib/data";

export default async function HomePage() {
  const { t, loc } = await getI18n();
  const h = loc(hero);
  return (
    <>
      <PageIntro lines={h.lines} text={h.text} image={images.hero} imageAlt={t("Khumo Industrial service engineers at work")} icon="gear" />
      <ClientsStrip />
      <section className="pb-8">
        <div className="container-x">
          <CategoryGrid />
        </div>
      </section>
      <HistoryBlock />
      <SustainabilityBlock />
      <NewsSection />
      <Testimonials />
      <RegionSection />
      <CtaBanner />
    </>
  );
}
