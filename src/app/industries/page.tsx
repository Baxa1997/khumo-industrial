import type { Metadata } from "next";
import IndustryGrid from "@/components/IndustryGrid";
import { CtaBanner, PageIntro } from "@/components/Sections";

export const metadata: Metadata = { title: "Industries" };

export default function IndustriesPage() {
  return (
    <>
      <PageIntro
        lines={["Packaging Expertise", "for Your Industry."]}
        text="Every sector has its own requirements for load securing, protection and traceability. Find out how we support yours."
        crumbs={[{ label: "Industries" }]}
      />
      <section className="py-16 sm:py-20">
        <div className="container-x">
          <IndustryGrid />
        </div>
      </section>
      <CtaBanner />
    </>
  );
}
