import { CtaBanner, PageIntro, SplitHeading, SustainabilityBlock } from "@/components/Sections";
import Icon from "@/components/Icon";
import { getI18n, pageTitle } from "@/i18n/server";
import { sustainabilityPillars } from "@/lib/pages";

export const generateMetadata = pageTitle("Sustainability");

export default async function SustainabilityPage() {
  const { t, loc } = await getI18n();
  return (
    <>
      <PageIntro
        lines={[t("Local Action."), t("Global Impact.")]}
        text={t("Khumo Industrial is committed to practicing sustainability and helping our customers do the same — with less material, less waste and less energy.")}
        crumbs={[{ label: t("Sustainability") }]}
        imageAlt={t("Sustainable packaging materials")}
        icon="globe"
      />
      <section className="py-20 sm:py-28">
        <div className="container-x">
          <SplitHeading title={t("Recycle, Re-use, Reliable.")}>
            <p>{t("Sustainable packaging doesn’t mean compromising on load security. We help you find the solution that protects your products and the planet.")}</p>
          </SplitHeading>
          <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {loc(sustainabilityPillars).map((p) => (
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
