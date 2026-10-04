import { CtaBanner, HistoryBlock, PageIntro, SplitHeading, StatsBar } from "@/components/Sections";
import { getI18n, pageTitle } from "@/i18n/server";
import { company, images } from "@/lib/data";
import { aboutValues } from "@/lib/pages";

export const generateMetadata = pageTitle("About");

export default async function AboutPage() {
  const { t, loc } = await getI18n();
  return (
    <>
      <PageIntro
        lines={[t("A Trusted Partner\nfor Packaging.")]}
        text={t("{name} is the official Cyklop partner in Uzbekistan. We help manufacturers mark, secure and protect their products — with proven equipment, local setup and dependable service.", { name: company.name })}
        crumbs={[{ label: t("About") }]}
        image={images.history}
        imageAlt={t("Khumo Industrial team")}
        icon="globe"
      />
      <section className="py-20 sm:py-28">
        <div className="container-x">
          <SplitHeading title={t("Helping Customers Increase Profitability and Reduce Risk")}>
            <p>{t("We combine high-quality machines, matched consumables and expert engineering to optimize the end of your production line. Our goal is simple: your products arrive safely, your line runs efficiently and your packaging costs go down.")}</p>
          </SplitHeading>
          <div className="mt-20">
            <StatsBar />
          </div>
        </div>
      </section>
      <section className="bg-surface py-20 sm:py-28">
        <div className="container-x">
          <h2 className="display text-4xl sm:text-5xl">{t("Our Values")}</h2>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {loc(aboutValues).map((v) => (
              <div key={v.t} className="rounded-xl bg-white p-8">
                <p className="display text-2xl tracking-[-0.035em]">{v.t}</p>
                <p className="mt-3 leading-relaxed text-muted">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <HistoryBlock />
      <CtaBanner />
    </>
  );
}
