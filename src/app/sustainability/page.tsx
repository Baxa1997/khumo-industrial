import type { Metadata } from "next";
import { CtaBanner, PageIntro, SplitHeading, SustainabilityBlock } from "@/components/Sections";
import Icon from "@/components/Icon";

export const metadata: Metadata = { title: "Sustainability" };

const pillars = [
  { icon: "roll" as const, t: "Less Material", d: "Pre-stretch film technology and optimized strapping patterns reduce consumable use." },
  { icon: "layers" as const, t: "Recycled Content", d: "PET strap from recycled bottles and paper-based banding and tape options." },
  { icon: "gear" as const, t: "Energy Efficiency", d: "Modern drives and standby modes cut the energy consumption of every machine." },
  { icon: "tool" as const, t: "Longer Lifetime", d: "Preventive maintenance and refurbishment keep equipment in service for longer." },
];

export default function SustainabilityPage() {
  return (
    <>
      <PageIntro
        lines={["Local Action.", "Global Impact."]}
        text="Khumo Industrial is committed to practicing sustainability and helping our customers do the same — with less material, less waste and less energy."
        crumbs={[{ label: "Sustainability" }]}
        imageAlt="Sustainable packaging materials"
        icon="globe"
      />
      <section className="py-20 sm:py-28">
        <div className="container-x">
          <SplitHeading title="Recycle, Re-use, Reliable.">
            <p>Sustainable packaging doesn’t mean compromising on load security. We help you find the solution that protects your products and the planet.</p>
          </SplitHeading>
          <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((p) => (
              <div key={p.t} className="rounded-xl bg-surface p-8">
                <Icon name={p.icon} className="h-9 w-9 text-orange-500" strokeWidth={1.5} />
                <p className="display mt-8 text-2xl tracking-[-0.035em]">{p.t}</p>
                <p className="mt-3 leading-relaxed text-muted">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <SustainabilityBlock />
      <CtaBanner />
    </>
  );
}
