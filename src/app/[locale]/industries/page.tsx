import IndustryGrid from "@/components/IndustryGrid";
import { CtaBanner, PageIntro } from "@/components/Sections";
import { getI18n, pageTitle } from "@/i18n/server";

export const generateMetadata = pageTitle("Industries");

export default async function IndustriesPage() {
  const { t } = await getI18n();
  return (
    <>
      <PageIntro
        lines={[t("Packaging Expertise\nfor Your Industry.")]}
        text={t("Every sector has its own requirements for load securing, protection and traceability. Find out how we support yours.")}
        crumbs={[{ label: t("Industries") }]}
      />
      <section className="py-16 sm:py-20">
        <div className="container-x">
          <IndustryGrid />
        </div>
      </section>
      <CtaBanner />
    </>
  );
}
