import type { Metadata } from "next";
import { NewsCards } from "@/components/NewsCards";
import { CtaBanner, PageHero } from "@/components/Sections";

export const metadata: Metadata = { title: "News & events" };

export default function NewsPage() {
  return (
    <>
      <PageHero eyebrow="News & events" title="News from Khumo Industrial" text="Company updates, product launches and insights from the world of packaging." crumbs={[{ label: "News" }]} />
      <section className="bg-surface py-20">
        <div className="container-x">
          <NewsCards />
        </div>
      </section>
      <CtaBanner />
    </>
  );
}
