import RegionSection from "@/components/RegionSection";
import { CategoryGrid, ClientsStrip, CtaBanner, HistoryBlock, NewsSection, PageIntro, SustainabilityBlock } from "@/components/Sections";
import Testimonials from "@/components/Testimonials";
import { hero, images } from "@/lib/data";

export default function HomePage() {
  return (
    <>
      <PageIntro lines={hero.lines} text={hero.text} image={images.hero} imageAlt="Khumo Industrial service engineers at work" icon="gear" />
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
