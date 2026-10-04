import Link from "@/i18n/Link";
import { CtaBanner, PageIntro, SplitHeading } from "@/components/Sections";
import Icon from "@/components/Icon";
import { getI18n, pageTitle } from "@/i18n/server";
import { company } from "@/lib/data";
import { careerPerks } from "@/lib/pages";

export const generateMetadata = pageTitle("Careers");

export default async function CareersPage() {
  const { t, loc } = await getI18n();
  return (
    <>
      <PageIntro
        lines={[t("Build Your Career\nWith Us.")]}
        text={t("We are always looking for service technicians, application engineers and sales specialists who want to help customers package better.")}
        crumbs={[{ href: "/about", label: t("About") }, { label: t("Careers") }]}
      />
      <section className="py-20 sm:py-28">
        <div className="container-x">
          <SplitHeading title={t("Why Work at Khumo Industrial?")}>
            <p>{t("We are a growing team of packaging specialists. Send us your CV and tell us how you would like to contribute.")}</p>
            <div className="pt-4">
              <a href={company.telegram.href} target="_blank" rel="noopener noreferrer" className="btn-orange">{t("Send Your Application")}</a>
            </div>
          </SplitHeading>
          <div className="mt-16 grid gap-5 md:grid-cols-3">
            {loc(careerPerks).map((p) => (
              <div key={p.t} className="rounded-xl bg-surface p-8">
                <Icon name={p.icon} className="h-9 w-9 text-orange-500" strokeWidth={1.5} />
                <p className="display mt-8 text-2xl tracking-[-0.035em]">{p.t}</p>
                <p className="mt-3 leading-relaxed text-muted">{p.d}</p>
              </div>
            ))}
          </div>
          <p className="mt-10 text-muted">
            {t("No open position that fits?")}{" "}
            <Link href="/contact" className="text-orange-500 hover:underline">{t("Contact us anyway.")}</Link>
          </p>
        </div>
      </section>
      <CtaBanner />
    </>
  );
}
