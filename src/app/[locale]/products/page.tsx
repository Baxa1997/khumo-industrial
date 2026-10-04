import { CategoryGrid, CtaBanner, PageIntro } from "@/components/Sections";
import { getI18n, pageTitle } from "@/i18n/server";

export const generateMetadata = pageTitle("Products");

export default async function ProductsPage() {
  const { t } = await getI18n();
  return (
    <>
      <PageIntro
        lines={[t("Products for Every\nEnd of Line.")]}
        text={t("Stretch wrapping, strapping, case sealing, binding, coding & marking and consumables — from a single handheld tool to fully automated systems.")}
        crumbs={[{ label: t("Products") }]}
      />
      <section className="py-16 sm:py-20">
        <div className="container-x">
          <CategoryGrid />
        </div>
      </section>
      <CtaBanner />
    </>
  );
}
