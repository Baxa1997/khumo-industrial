import type { Metadata } from "next";
import { PageHero } from "@/components/Sections";
import { company } from "@/lib/data";

export const metadata: Metadata = { title: "Imprint" };

export default function Page() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Imprint" crumbs={[{ label: "Imprint" }]} />
      <section className="py-20">
        <div className="container-x max-w-3xl space-y-4 leading-relaxed text-muted">
          <p>This page is a placeholder. Replace it with the official Imprint text for {company.name}.</p>
          <p>For questions, contact us at {company.email}.</p>
        </div>
      </section>
    </>
  );
}
