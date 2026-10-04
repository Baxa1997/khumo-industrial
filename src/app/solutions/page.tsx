import type { Metadata } from "next";
import { CtaBanner, PageHero, SolutionCards } from "@/components/Sections";

export const metadata: Metadata = { title: "Solutions" };

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Solutions"
        title="Packaging solutions for every need"
        text="Strapping, stretch wrapping, case sealing, coding & marking, binding and consumables — explore our complete end-of-line portfolio."
        crumbs={[{ label: "Solutions" }]}
      />
      <section className="bg-surface py-20">
        <div className="container-x">
          <SolutionCards />
        </div>
      </section>
      <CtaBanner />
    </>
  );
}
