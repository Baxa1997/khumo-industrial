import { Eyebrow, RangeCards } from "@/components/CategoryParts";
import { CtaBanner, PageIntro } from "@/components/Sections";
import { categoryDetails } from "@/lib/categories";
import { getI18n, pageTitle } from "@/i18n/server";
import { solutions } from "@/lib/data";

export const generateMetadata = pageTitle("Automation");

// Range items that run automatically / integrate into production lines.
const automated: Record<string, string[]> = {
  strapping: ["automatic-machines"],
  "stretch-wrapping": ["rotary-arm-wrappers", "ring-wrappers"],
  "case-sealing": ["automatic-sealers"],
  "coding-marking": ["continuous-inkjet", "thermal-inkjet", "laser-marking-systems"],
  "binding-bundling": ["banding-machines", "shrink-bundlers"],
};

export default async function AutomationPage() {
  const { t, loc } = await getI18n();
  return (
    <>
      <PageIntro
        lines={[t("End-of-Line\nAutomation.")]}
        text={t("Fully automatic machines that integrate into your conveyors and line controls — for higher throughput, less manual handling and consistent quality.")}
        crumbs={[{ href: "/products", label: t("Products") }, { label: t("Automation") }]}
      />
      {loc(solutions)
        .filter((s) => automated[s.slug])
        .map((s, idx) => (
          <section key={s.slug} className={`py-16 sm:py-20 ${idx % 2 === 0 ? "bg-surface" : ""}`}>
            <div className="mx-auto max-w-[82rem] px-4 sm:px-8">
              <Eyebrow>{s.name}</Eyebrow>
              <h2 className="display mt-4 text-4xl">{t("Automated: {name}", { name: s.name })}</h2>
              <div className="mt-10">
                <RangeCards category={s.slug} icon={s.icon} items={loc(categoryDetails[s.slug].range.items.filter((i) => automated[s.slug].includes(i.slug)))} />
              </div>
            </div>
          </section>
        ))}
      <CtaBanner />
    </>
  );
}
