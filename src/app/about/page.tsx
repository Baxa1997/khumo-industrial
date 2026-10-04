import type { Metadata } from "next";
import { CtaBanner, PageHero, SectionHeading, StatsBar } from "@/components/Sections";
import { company, milestones } from "@/lib/data";

export const metadata: Metadata = { title: "About us" };

const values = [
  { t: "Customer first", d: "We listen, understand your process and deliver solutions that make a measurable difference." },
  { t: "Quality", d: "Proven machines and consumables, installed and maintained by trained technicians." },
  { t: "Partnership", d: "Long-term relationships built on reliable service and honest advice." },
  { t: "Sustainability", d: "We help customers reduce material use, energy and waste in packaging." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="A trusted partner for packaging solutions"
        text={`Since ${company.founded}, ${company.name} has helped manufacturers and distributors secure, protect and identify their products — with complete solutions and dependable service.`}
        crumbs={[{ label: "About us" }]}
      />
      <section className="py-20">
        <div className="container-x grid gap-16 lg:grid-cols-2">
          <SectionHeading
            eyebrow="Who we are"
            title="Helping customers increase profitability and reduce risk"
            text="We combine high-quality machines, matched consumables and expert engineering to optimize the end of your production line. Our goal is simple: your products arrive safely, your line runs efficiently and your packaging costs go down."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {values.map((v) => (
              <div key={v.t} className="rounded-2xl bg-surface p-6">
                <p className="font-bold text-navy-900">{v.t}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="container-x mt-20">
          <StatsBar />
        </div>
      </section>
      <section id="history" className="scroll-mt-32 bg-surface py-20">
        <div className="container-x">
          <SectionHeading eyebrow="History" title="Our journey" />
          <ol className="relative mt-14 border-l-2 border-brand-500/30 pl-8">
            {milestones.map((m) => (
              <li key={m.year} className="relative mb-10 last:mb-0">
                <span className="absolute -left-[41px] top-1 h-4 w-4 rounded-full border-4 border-surface bg-brand-500" />
                <p className="text-2xl font-extrabold text-brand-500">{m.year}</p>
                <p className="mt-1 max-w-2xl text-ink">{m.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <CtaBanner />
    </>
  );
}
