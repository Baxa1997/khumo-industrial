import { PageIntro } from "@/components/Sections";
import { getI18n, pageTitle } from "@/i18n/server";
import { company } from "@/lib/data";

export const generateMetadata = pageTitle("Terms & Conditions");

export default async function Page() {
  const { t } = await getI18n();
  return (
    <>
      <PageIntro lines={[t("Terms & Conditions") + "."]} crumbs={[{ label: t("Terms & Conditions") }]} />
      <section className="py-16 sm:py-24">
        <div className="container-x max-w-4xl space-y-4 text-lg leading-relaxed text-muted">
          <p>{t("This page is a placeholder. Replace it with the official text for {company}.", { company: company.legalName })}</p>
          <p>{t("For questions, call {phone} or message us on Telegram ({telegram}).", { phone: company.phone, telegram: company.telegram.label })}</p>
        </div>
      </section>
    </>
  );
}
