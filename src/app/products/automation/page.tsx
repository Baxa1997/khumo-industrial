import type { Metadata } from "next";
import { Eyebrow, RangeCards } from "@/components/CategoryParts";
import { CtaBanner, PageIntro } from "@/components/Sections";
import { categoryDetails } from "@/lib/categories";
import { solutions } from "@/lib/data";

export const metadata: Metadata = { title: "Automation" };

// Range items that run automatically / integrate into production lines.
const automated: Record<string, string[]> = {
  strapping: ["automatic-machines"],
  "stretch-wrapping": ["rotary-arm-wrappers", "ring-wrappers"],
  "case-sealing": ["automatic-sealers"],
  "coding-marking": ["inkjet-coders", "laser-coders", "print-apply"],
  "binding-bundling": ["banding-machines", "shrink-bundlers"],
};

export default function AutomationPage() {
  return (
    <>
      <PageIntro
        lines={["End-of-Line", "Automation."]}
        text="Fully automatic machines that integrate into your conveyors and line controls — for higher throughput, less manual handling and consistent quality."
        crumbs={[{ href: "/products", label: "Products" }, { label: "Automation" }]}
      />
      {solutions
        .filter((s) => automated[s.slug])
        .map((s, idx) => (
          <section key={s.slug} className={`py-16 sm:py-20 ${idx % 2 === 0 ? "bg-surface" : ""}`}>
            <div className="mx-auto max-w-[82rem] px-4 sm:px-8">
              <Eyebrow>{s.name}</Eyebrow>
              <h2 className="display mt-4 text-4xl">Automated {s.name}</h2>
              <div className="mt-10">
                <RangeCards category={s.slug} icon={s.icon} items={categoryDetails[s.slug].range.items.filter((i) => automated[s.slug].includes(i.slug))} />
              </div>
            </div>
          </section>
        ))}
      <CtaBanner />
    </>
  );
}
