import type { Metadata } from "next";
import { PageIntro } from "@/components/Sections";
import { company } from "@/lib/data";

export const metadata: Metadata = { title: "Privacy Policy" };

export default function Page() {
  return (
    <>
      <PageIntro lines={["Privacy Policy."]} crumbs={[{ label: "Privacy Policy" }]} />
      <section className="py-16 sm:py-24">
        <div className="container-x max-w-4xl space-y-4 text-lg leading-relaxed text-muted">
          <p>This page is a placeholder. Replace it with the official Privacy Policy text for {company.legalName}.</p>
          <p>For questions, call {company.phone} or message us on Telegram ({company.telegram.label}).</p>
        </div>
      </section>
    </>
  );
}
