import type { Metadata } from "next";
import Link from "@/i18n/Link";
import { notFound } from "next/navigation";
import { CategoryGrid, CtaBanner, PageIntro, SplitHeading } from "@/components/Sections";
import { getI18n } from "@/i18n/server";
import { getIndustry, industries } from "@/lib/data";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return industries.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { loc } = await getI18n();
  const base = getIndustry((await params).slug);
  const industry = base && loc(base);
  return industry ? { title: `${industry.name}: ${industry.title}`, description: industry.summary } : {};
}

export default async function IndustryPage({ params }: Props) {
  const { t, loc, locale } = await getI18n();
  const base = getIndustry((await params).slug);
  if (!base) notFound();
  const industry = loc(base);

  return (
    <>
      <PageIntro
        lines={[`${industry.name}.`]}
        text={`${industry.title}. ${industry.summary}`}
        crumbs={[{ href: "/industries", label: t("Industries") }, { label: industry.name }]}
        image={industry.image}
        imageAlt={t("{name} packaging", { name: industry.name })}
        icon={industry.icon}
      >
        <div className="mt-10">
          <Link href="/contact?topic=quote" className="btn-orange">{t("Talk to a Specialist")}</Link>
        </div>
      </PageIntro>

      <section className="py-20 sm:py-28">
        <div className="container-x">
          <SplitHeading title={t("Packaging Challenges in {name}", { name: industry.name })}>
            <ol>
              {industry.challenges.map((c, idx) => (
                <li key={c} className="flex items-baseline gap-8 border-b border-line py-6 first:pt-0">
                  <span className="display text-4xl text-ink">{String(idx + 1).padStart(2, "0")}</span>
                  <span className="display text-2xl tracking-[-0.03em] text-ink">{c}</span>
                </li>
              ))}
            </ol>
          </SplitHeading>
        </div>
      </section>

      <section className="pb-20 sm:pb-28">
        <div className="container-x">
          <h2 className="display text-4xl sm:text-5xl">{t("Recommended Products")}</h2>
          <div className="mt-12">
            <CategoryGrid slugs={industry.solutionSlugs} />
          </div>
        </div>
      </section>

      <CtaBanner title={t("Talk to our {name} specialists", { name: locale === "en" ? industry.name.toLowerCase() : industry.name })} />
    </>
  );
}
