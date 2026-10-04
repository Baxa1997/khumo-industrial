import type { Metadata } from "next";
import { CtaBanner, PageIntro, ServiceGrid, SplitHeading } from "@/components/Sections";

export const metadata: Metadata = { title: "Service" };

const steps = [
  { t: "Analysis", d: "We visit your site, review your products and processes and define your goals." },
  { t: "Recommendation", d: "You receive a tailored proposal with machines, consumables and expected savings." },
  { t: "Installation", d: "Our technicians install, commission and integrate the solution into your line." },
  { t: "Lifetime Support", d: "Training, maintenance and spare parts keep your equipment running for years." },
];

export default function ServicePage() {
  return (
    <>
      <PageIntro
        lines={["Service That Keeps", "Your Line Running."]}
        text="Our customers have access to experts and engineers who make sure every packaging solution matches their needs — and keeps performing long after installation."
        crumbs={[{ label: "Service" }]}
        imageAlt="Service technician maintaining a packaging machine"
        icon="tool"
      />
      <section className="py-20 sm:py-28">
        <div className="container-x">
          <SplitHeading title="Full-Service Packaging Support">
            <p>Training, installation, preventive maintenance, technical support — whatever you need, we’ve got your back.</p>
          </SplitHeading>
          <div className="mt-16">
            <ServiceGrid />
          </div>
        </div>
      </section>
      <section className="bg-navy-800 py-20 text-white sm:py-28">
        <div className="container-x">
          <h2 className="display max-w-3xl text-4xl sm:text-5xl">From First Contact to Lifetime Support</h2>
          <ol className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, idx) => (
              <li key={s.t} className="rounded-xl bg-white/5 p-8 ring-1 ring-white/10">
                <span className="display text-5xl text-orange-500">{String(idx + 1).padStart(2, "0")}</span>
                <p className="display mt-8 text-2xl tracking-[-0.03em]">{s.t}</p>
                <p className="mt-3 text-white/70">{s.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <CtaBanner title="Need service or spare parts?" text="Contact our service team — we respond fast and get your equipment back in operation." />
    </>
  );
}
