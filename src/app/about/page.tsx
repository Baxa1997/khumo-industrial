import type { Metadata } from "next";
import { CtaBanner, HistoryBlock, PageIntro, SplitHeading, StatsBar } from "@/components/Sections";
import { company, images } from "@/lib/data";

export const metadata: Metadata = { title: "About" };

const values = [
  { t: "Customer First", d: "We listen, understand your process and deliver solutions that make a measurable difference." },
  { t: "Quality", d: "Proven machines and consumables, installed and maintained by trained technicians." },
  { t: "Partnership", d: "Long-term relationships built on reliable service and honest advice." },
  { t: "Sustainability", d: "We help customers reduce material use, energy and waste in packaging." },
];

export default function AboutPage() {
  return (
    <>
      <PageIntro
        lines={["A Trusted Partner", "for Packaging."]}
        text={`Since ${company.founded}, ${company.name} has helped manufacturers and distributors secure, protect and identify their products — with complete solutions and dependable service.`}
        crumbs={[{ label: "About" }]}
        image={images.history}
        imageAlt="Khumo Industrial team"
        icon="globe"
      />
      <section className="py-20 sm:py-28">
        <div className="container-x">
          <SplitHeading title="Helping Customers Increase Profitability and Reduce Risk">
            <p>
              We combine high-quality machines, matched consumables and expert engineering to optimize the end of your
              production line. Our goal is simple: your products arrive safely, your line runs efficiently and your
              packaging costs go down.
            </p>
          </SplitHeading>
          <div className="mt-20">
            <StatsBar />
          </div>
        </div>
      </section>
      <section className="bg-surface py-20 sm:py-28">
        <div className="container-x">
          <h2 className="display text-4xl sm:text-5xl">Our Values</h2>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div key={v.t} className="rounded-xl bg-white p-8">
                <p className="display text-2xl tracking-[-0.035em]">{v.t}</p>
                <p className="mt-3 leading-relaxed text-muted">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <HistoryBlock />
      <CtaBanner />
    </>
  );
}
