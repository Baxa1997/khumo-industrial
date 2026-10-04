import { Eyebrow, RangeCards } from "@/components/CategoryParts";
import { CtaBanner, PageIntro } from "@/components/Sections";
import { getRangeItem } from "@/lib/categories";
import { getI18n, pageTitle } from "@/i18n/server";
import { getSolution } from "@/lib/data";

export const generateMetadata = pageTitle("Most Viewed Products");

// Hand-picked list until real page-view analytics are connected.
const popular: [string, string][] = [
  ["strapping", "manual-battery-tools"],
  ["stretch-wrapping", "turntable-wrappers"],
  ["case-sealing", "semi-automatic-sealers"],
  ["coding-marking", "continuous-inkjet"],
  ["coding-marking", "laser-marking-systems"],
  ["consumables", "pet-strapping"],
];

export default async function MostViewedPage() {
  const { t, loc } = await getI18n();
  return (
    <>
      <PageIntro
        lines={[t("Most Viewed\nProducts.")]}
        text={t("The equipment and consumables our customers look at most — a good place to start.")}
        crumbs={[{ href: "/products", label: t("Products") }, { label: t("Most Viewed") }]}
      />
      <section className="bg-surface py-16 sm:py-20">
        <div className="mx-auto grid max-w-[82rem] gap-x-5 gap-y-12 px-4 sm:px-8 md:grid-cols-2 lg:grid-cols-3">
          {popular.map(([cat, item]) => {
            const s = loc(getSolution(cat)!);
            const r = loc(getRangeItem(cat, item)!);
            return (
              <div key={cat + item}>
                <Eyebrow>{s.name}</Eyebrow>
                <div className="mt-4">
                  <RangeCards category={cat} items={[r]} icon={s.icon} cols="" />
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <CtaBanner />
    </>
  );
}
