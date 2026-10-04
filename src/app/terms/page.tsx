import type { Metadata } from "next";
import { PageHero } from "@/components/Sections";
import { company } from "@/lib/data";

export const metadata: Metadata = { title: "Terms & conditions" };

export default function Page() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Terms & conditions" crumbs={[{ label: "Terms & conditions" }]} />
      <section className="py-20">
        <div className="container-x max-w-3xl space-y-4 leading-relaxed text-muted">
          <p>This page is a placeholder. Replace it with the official Terms & conditions text for {company.name}.</p>
          <p>For questions, contact us at {company.email}.</p>
        </div>
      </section>
    </>
  );
}
