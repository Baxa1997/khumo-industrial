import type { Metadata } from "next";
import Link from "@/i18n/Link";
import { notFound } from "next/navigation";
import { Breadcrumbs, Eyebrow, FramedPhoto, RangeCards } from "@/components/CategoryParts";
import { CtaBanner } from "@/components/Sections";
import { allItems, categoryDetails, getRangeItem } from "@/lib/categories";
import { getI18n } from "@/i18n/server";
import { getSolution } from "@/lib/data";

type Props = { params: Promise<{ slug: string; item: string }> };

export function generateStaticParams() {
  return Object.keys(categoryDetails).flatMap((slug) => allItems(slug).map((i) => ({ slug, item: i.slug })));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, item } = await params;
  const { t } = await getI18n();
  const range = getRangeItem(slug, item);
  return range ? { title: t(range.name), description: t(range.description) } : {};
}

export default async function RangeItemPage({ params }: Props) {
  const { slug, item } = await params;
  const { t, loc } = await getI18n();
  const baseSolution = getSolution(slug);
  const baseRange = getRangeItem(slug, item);
  if (!baseSolution || !baseRange) notFound();
  const solution = loc(baseSolution);
  const range = loc(baseRange);
  const siblings = loc(categoryDetails[slug].range.items.filter((i) => i.slug !== item));

  return (
    <>
      <section className="pb-20 pt-10 lg:pt-14">
        <div className="mx-auto max-w-[100rem] px-4 sm:px-8 lg:px-[4%]">
          <Breadcrumbs items={[{ href: "/products", label: t("Products") }, { href: `/category/${slug}`, label: solution.name }, { label: range.name }]} />
          <div className="mt-8 grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <Eyebrow>{solution.name}</Eyebrow>
              <h1 className="display long-words mt-6 text-[2.5rem] sm:text-6xl lg:text-[4.2rem]">{range.name}</h1>
              <p className="mt-8 max-w-2xl text-lg leading-[1.75] text-muted sm:text-[1.3rem]">{range.description}</p>
              <div className="mt-10 grid gap-8 sm:grid-cols-2">
                {[
                  { t: t("Best suited for"), l: range.bestFor },
                  { t: t("Key benefits"), l: range.benefits },
                ].map((b) => (
                  <div key={b.t}>
                    <Eyebrow className="text-xs">{b.t}</Eyebrow>
                    <ul className="mt-3 list-disc space-y-1 pl-6 text-ink/85">
                      {b.l.map((x) => <li key={x}>{x}</li>)}
                    </ul>
                  </div>
                ))}
              </div>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link href={`/contact?topic=quote&product=${slug}`} className="btn-orange">{t("Request a Quote")}</Link>
                <Link href={`/category/${slug}`} className="btn border border-navy-800 text-navy-800 hover:bg-navy-800 hover:text-white">
                  {t("All: {name}", { name: solution.name })}
                </Link>
              </div>
            </div>
            <FramedPhoto src={range.image} alt={range.name} icon={solution.icon} />
          </div>
        </div>
      </section>
      {siblings.length > 0 && (
        <section className="bg-surface py-20">
          <div className="mx-auto max-w-[82rem] px-4 sm:px-8">
            <Eyebrow>{t("Also in {name}", { name: solution.name })}</Eyebrow>
            <h2 className="display mt-4 text-4xl sm:text-5xl">{t("Explore Related Equipment")}</h2>
            <div className="mt-12">
              <RangeCards category={slug} items={siblings} icon={solution.icon} />
            </div>
          </div>
        </section>
      )}
      <CtaBanner />
    </>
  );
}
