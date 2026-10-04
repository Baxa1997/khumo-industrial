import type { Metadata } from "next";
import Link from "@/i18n/Link";
import { notFound } from "next/navigation";
import { Breadcrumbs, BuyingGuide, ChallengeCards, CompleteLine, Eyebrow, FramedPhoto, IndustryCards, RangeCards, TechnologySection, WhyChoose } from "@/components/CategoryParts";
import Faq from "@/components/Faq";
import Icon from "@/components/Icon";
import QuoteFormCard from "@/components/QuoteFormCard";
import { categoryDetails, guides, linePairs, lineTaglines, trustPoints } from "@/lib/categories";
import { getI18n } from "@/i18n/server";
import { getSolution, industries, solutions } from "@/lib/data";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return solutions.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const { t } = await getI18n();
  const solution = getSolution(slug);
  const detail = categoryDetails[slug];
  return solution ? { title: t(detail?.headline ?? solution.name), description: t(detail?.text ?? solution.summary) } : {};
}

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;
  const { t, loc, locale } = await getI18n();
  const baseSolution = getSolution(slug);
  if (!baseSolution || !categoryDetails[slug]) notFound();
  const solution = loc(baseSolution);
  const detail = loc(categoryDetails[slug]);
  const guide = guides[slug] && loc(guides[slug]);

  return (
    <>
      {/* Hero */}
      <section className="pb-16 pt-10 sm:pb-20 lg:pt-14">
        <div className="mx-auto max-w-[100rem] px-4 sm:px-8 lg:px-[4%]">
          <Breadcrumbs items={[{ href: "/products", label: t("Products") }, { label: solution.name }]} />
          <div className="mt-8 grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <Eyebrow className="max-w-xl">{detail.eyebrow}</Eyebrow>
              <h1
                className={`display long-words mt-6 text-[2.5rem] ${
                  detail.headline.length > 60 ? "sm:text-5xl lg:text-[3.25rem] xl:text-[3.75rem]" : "sm:text-6xl lg:text-[4rem] xl:text-[4.6rem]"
                }`}
              >
                {detail.headline}
              </h1>
              <p className="mt-8 max-w-2xl text-lg leading-[1.75] text-muted sm:text-[1.3rem]">{detail.text}</p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link href={`/contact?topic=quote&product=${slug}`} className="btn-orange">{t("Request a Quote")}</Link>
                <a href="#range" className="btn border border-navy-800 text-navy-800 hover:bg-navy-800 hover:text-white">{t("Explore the range")}</a>
              </div>
              <ul className="mt-12 flex flex-wrap gap-x-8 gap-y-3 text-sm font-medium text-ink/80">
                {loc(trustPoints).map((p) => (
                  <li key={p} className="flex items-center gap-2 whitespace-nowrap">
                    <Icon name="check" className="h-4 w-4 text-orange-500" strokeWidth={2.4} />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
            <FramedPhoto src={detail.heroImage ?? solution.image} alt={t("{name} equipment", { name: solution.name })} icon={solution.icon} />
          </div>
        </div>
      </section>

      {/* Statement band */}
      <section className="relative overflow-hidden bg-navy-800 text-white">
        {detail.band.image && (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={detail.band.image} alt="" className="absolute inset-0 h-full w-full object-cover opacity-25" />
        )}
        <Icon name={solution.icon} className="pointer-events-none absolute -bottom-24 right-[8%] h-[30rem] w-[30rem] text-white/[0.06]" strokeWidth={0.6} />
        <div className="relative mx-auto max-w-6xl px-4 py-14 text-center sm:px-8 sm:pb-36 sm:pt-10">
          <span className="inline-block rounded-full bg-white px-5 py-2.5 text-[13px] font-bold uppercase tracking-[0.08em] text-navy-800">
            {detail.band.badge}
          </span>
          <h2 className="display mt-8 text-4xl sm:text-5xl lg:text-[3.6rem]">{detail.band.title}</h2>
          <p className="mx-auto mt-6 max-w-5xl text-lg leading-relaxed text-white/90">{detail.band.text}</p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link href="/contact?topic=quote" className="btn-orange">{detail.band.primary}</Link>
            <Link href="/contact" className="btn border border-white/70 text-white hover:bg-white hover:text-navy-800">{detail.band.secondary}</Link>
          </div>
        </div>
      </section>

      {guide && <BuyingGuide guide={guide} />}

      {/* Range */}
      <section id="range" className={`scroll-mt-24 py-20 sm:py-24 ${guide ? "" : "bg-surface"}`}>
        <div className="mx-auto max-w-[82rem] px-4 sm:px-8">
          <Eyebrow>{t("Our range")}</Eyebrow>
          <h2 className="display mt-4 text-4xl sm:text-5xl">{detail.range.title}</h2>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted">{detail.range.text}</p>
          <div className="mt-12">
            <RangeCards category={slug} items={detail.range.items} icon={solution.icon} />
          </div>
        </div>
      </section>

      {/* Challenges */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-[74rem] px-4 sm:px-8">
          <Eyebrow>{t("Business challenges")}</Eyebrow>
          <h2 className="display mt-4 max-w-3xl text-4xl sm:text-5xl">{t("Solving the packing challenges your team faces every day")}</h2>
          <div className="mt-12">
            <ChallengeCards items={detail.challenges} icon={solution.icon} />
          </div>
        </div>
      </section>

      <TechnologySection technology={detail.technology} icon={solution.icon} />

      <IndustryCards
        title={t("{name} Solutions for Your Industry", { name: solution.name })}
        text={t("Every industry has different packaging requirements. Whether your priority is protecting products, improving load stability, increasing automation or reducing costs, we offer {name} solutions designed for your application.", { name: locale === "en" ? solution.name.toLowerCase() : solution.name })}
        items={detail.industries ?? loc(industries).slice(0, 9).map((i) => ({ name: i.name, text: i.summary, image: i.image }))}
      />

      <WhyChoose category={slug} name={solution.name} others={loc(solutions).map((s) => ({ slug: s.slug, name: s.name }))} />

      <CompleteLine
        name={solution.name}
        cards={[
          ...linePairs[slug].map((other) => {
            const o = loc(getSolution(other)!);
            return { href: `/category/${o.slug}`, title: o.name, text: t(lineTaglines[o.slug]), icon: o.icon, image: o.image };
          }),
          { href: "/service", title: t("Service & Support"), text: t("Maximize equipment uptime"), icon: "tool" as const },
          { href: "/service#training", title: t("Training"), text: t("Help operators work safely and efficiently"), icon: "book" as const },
        ]}
      />

      {/* FAQ */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-[74rem] px-4 sm:px-8">
          <Eyebrow>{t("FAQ")}</Eyebrow>
          <h2 className="display mt-5 text-4xl sm:text-5xl">{t("{name}: frequently asked questions", { name: solution.name })}</h2>
          <div className="mt-12 max-w-[53rem]">
            <Faq items={detail.faqs ?? solution.faqs} />
          </div>
        </div>
      </section>

      {/* Still unsure */}
      <section id="quote" className="scroll-mt-24 pb-24 pt-8">
        <div className="mx-auto grid max-w-[74rem] items-start gap-12 px-4 sm:px-8 lg:grid-cols-2">
          <div className="lg:pt-6">
            <h2 className="display text-4xl sm:text-5xl">{t("Still Unsure?")}</h2>
            <p className="mt-6 text-lg leading-relaxed text-muted">{detail.unsure}</p>
          </div>
          <QuoteFormCard product={solution.name} />
        </div>
      </section>
    </>
  );
}
