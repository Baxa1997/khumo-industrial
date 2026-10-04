import type { Metadata } from "next";
import { CtaBanner, PageHero, SectionHeading, ServiceGrid } from "@/components/Sections";

export const metadata: Metadata = { title: "Service" };

const steps = [
  { t: "Analysis", d: "We visit your site, review your products and processes and define your goals." },
  { t: "Recommendation", d: "You receive a tailored proposal with machines, consumables and expected savings." },
  { t: "Installation", d: "Our technicians install, commission and integrate the solution into your line." },
  { t: "Lifetime support", d: "Training, maintenance and spare parts keep your equipment running for years." },
];

export default function ServicePage() {
  return (
    <>
      <PageHero
        eyebrow="Service"
        title="Service that keeps your line running"
        text="Our customers have access to experts and engineers who make sure every packaging solution matches their needs — and keeps performing long after installation."
        crumbs={[{ label: "Service" }]}
      />
      <section className="py-20">
        <div className="container-x">
          <SectionHeading eyebrow="What we offer" title="Full-service packaging support" />
          <div className="mt-14">
            <ServiceGrid />
          </div>
        </div>
      </section>
      <section className="bg-navy-900 py-20">
        <div className="container-x">
          <SectionHeading light eyebrow="How we work" title="From first contact to lifetime support" />
          <ol className="mt-14 grid gap-6 md:grid-cols-4">
            {steps.map((s, idx) => (
              <li key={s.t} className="rounded-2xl border border-white/10 bg-white/5 p-6 text-white">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-accent-500 font-extrabold text-navy-950">{idx + 1}</span>
                <p className="mt-5 text-lg font-bold">{s.t}</p>
                <p className="mt-2 text-sm text-white/70">{s.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <CtaBanner title="Need service or spare parts?" text="Contact our service team — we respond fast and get your equipment back in operation." />
    </>
  );
}
