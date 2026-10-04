import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Faq from "@/components/Faq";
import FavoriteButton from "@/components/FavoriteButton";
import Icon from "@/components/Icon";
import RegionSection from "@/components/RegionSection";
import { CategoryGrid, CtaBanner, PageIntro } from "@/components/Sections";
import { getSolution, industries, solutions } from "@/lib/data";

type Props = { params: Promise<{ slug: string }> };

const titleCase = (s: string) => s.replace(/(^|[\s-])([a-z])/g, (_, sep: string, c: string) => sep + c.toUpperCase());

export function generateStaticParams() {
  return solutions.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const solution = getSolution((await params).slug);
  return solution ? { title: `${solution.name} Machines & Systems`, description: solution.summary } : {};
}

export default async function CategoryPage({ params }: Props) {
  const solution = getSolution((await params).slug);
  if (!solution) notFound();

  const relatedIndustries = industries.filter((i) => i.solutionSlugs.includes(solution.slug));
  const others = solutions.filter((s) => s.slug !== solution.slug).slice(0, 3).map((s) => s.slug);

  return (
    <>
      <PageIntro
        lines={[solution.name]}
        text={solution.intro}
        crumbs={[{ href: "/products", label: "Products" }, { label: solution.name }]}
        image={solution.image}
        imageAlt={`${solution.name} equipment`}
        icon={solution.icon}
      >
        <div className="mt-10 flex flex-wrap gap-3">
          <Link href={`/contact?topic=quote&product=${solution.slug}`} className="btn-orange">Request a Quote</Link>
          <FavoriteButton slug={solution.slug} name={solution.name} />
        </div>
      </PageIntro>

      {/* Machine types */}
      <section className="py-20 sm:py-28">
        <div className="container-x">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <h2 className="display max-w-2xl text-4xl sm:text-5xl lg:text-[3.6rem]">Explore Our {solution.name} Solutions</h2>
            <p className="max-w-md text-lg leading-relaxed text-muted">{solution.summary}</p>
          </div>
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {solution.products.map((p) => (
              <Link
                key={p.name}
                href={`/contact?topic=quote&product=${solution.slug}`}
                className="group flex flex-col overflow-hidden rounded-[1.25rem] bg-surface transition-shadow hover:shadow-xl"
              >
                <div className="relative grid aspect-[4/3] place-items-center overflow-hidden bg-[#eef1f5]">
                  {p.image ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={p.image} alt={p.name} className="h-[85%] w-[85%] object-contain transition-transform duration-500 group-hover:scale-105" />
                  ) : (
                    <Icon name={solution.icon} className="h-28 w-28 text-steel-400 transition-transform duration-500 group-hover:scale-110" strokeWidth={0.9} />
                  )}
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <h3 className="display text-[1.7rem] leading-tight tracking-[-0.04em]">{titleCase(p.name)}</h3>
                  <p className="mt-3 flex-1 text-muted">{p.description}</p>
                  <span className="mt-6 flex items-center gap-2 font-medium text-navy-800 group-hover:text-orange-500">
                    Get a Quote
                    <Icon name="arrow" className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-navy-800 py-20 text-white sm:py-28">
        <div className="container-x grid gap-14 lg:grid-cols-2">
          <div>
            <h2 className="display text-4xl sm:text-5xl lg:text-[3.6rem]">Why Choose Khumo for {solution.name}?</h2>
            <p className="mt-8 max-w-lg text-lg leading-relaxed text-white/75">
              Machines, consumables and service from one partner — configured for your products, your volumes and your
              budget.
            </p>
            <Link href="/service" className="btn-orange mt-10">Our Service</Link>
          </div>
          <ol>
            {solution.benefits.map((b, idx) => (
              <li key={b} className="flex gap-10 border-b border-white/15 py-7 first:pt-0">
                <span className="display w-12 shrink-0 text-[2.6rem] leading-none tracking-[-0.03em] text-orange-500">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <span className="display text-2xl leading-tight tracking-[-0.035em]">{b}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Industries */}
      {relatedIndustries.length > 0 && (
        <section className="py-20 sm:py-28">
          <div className="container-x">
            <h2 className="display text-4xl sm:text-5xl">{solution.name} for Your Industry</h2>
            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {relatedIndustries.map((i) => (
                <Link
                  key={i.slug}
                  href={`/industries/${i.slug}`}
                  className="group flex items-center justify-between gap-4 rounded-xl bg-steel-400 px-7 py-6 text-white transition-colors hover:bg-steel-600"
                >
                  <span className="flex items-center gap-4">
                    <Icon name={i.icon} className="h-7 w-7" />
                    <span className="display text-2xl tracking-[-0.035em]">{i.name}</span>
                  </span>
                  <Icon name="arrow" className="h-6 w-6 text-navy-800 group-hover:hidden" />
                  <Icon name="arrowUpRight" className="hidden h-6 w-6 group-hover:block" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="bg-surface py-20 sm:py-28">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h2 className="display text-4xl sm:text-5xl">Frequently Asked Questions</h2>
            <Link href="/support" className="mt-8 inline-flex items-center gap-2 font-medium text-orange-500 hover:underline">
              All FAQs <Icon name="arrow" className="h-5 w-5" />
            </Link>
          </div>
          <div className="lg:col-span-8">
            <Faq items={solution.faqs} />
          </div>
        </div>
      </section>

      {/* Other categories */}
      <section className="pt-20 sm:pt-28">
        <div className="container-x">
          <h2 className="display text-4xl sm:text-5xl">Explore More Products</h2>
          <div className="mt-12">
            <CategoryGrid slugs={others} />
          </div>
        </div>
      </section>

      <RegionSection />
      <CtaBanner />
    </>
  );
}
