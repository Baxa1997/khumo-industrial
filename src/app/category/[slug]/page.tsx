import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import FavoriteButton from "@/components/FavoriteButton";
import Icon from "@/components/Icon";
import { CategoryGrid, CheckList, CtaBanner, PageIntro, SplitHeading } from "@/components/Sections";
import { getSolution, industries, solutions } from "@/lib/data";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return solutions.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const solution = getSolution((await params).slug);
  return solution ? { title: solution.name, description: solution.summary } : {};
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
        text={solution.summary}
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

      <section className="py-20 sm:py-28">
        <div className="container-x">
          <SplitHeading title={`Our ${solution.name} Range`}>
            <p>{solution.intro}</p>
          </SplitHeading>
          <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {solution.products.map((p) => (
              <article key={p.name} className="group flex min-h-64 flex-col rounded-xl bg-surface p-8 transition-colors hover:bg-steel-400 hover:text-white">
                <Icon name={solution.icon} className="h-9 w-9 text-orange-500 group-hover:text-white" strokeWidth={1.5} />
                <h3 className="display mt-10 text-[1.75rem] leading-tight tracking-[-0.04em]">{p.name}</h3>
                <p className="mt-3 text-muted group-hover:text-white/85">{p.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface py-20 sm:py-28">
        <div className="container-x grid gap-14 lg:grid-cols-2">
          <div>
            <h2 className="display text-4xl sm:text-5xl">Your Benefits</h2>
            <div className="mt-10 text-lg">
              <CheckList items={solution.benefits} />
            </div>
          </div>
          {relatedIndustries.length > 0 && (
            <div>
              <h2 className="display text-4xl sm:text-5xl">Used in These Industries</h2>
              <div className="mt-10 flex flex-wrap gap-3">
                {relatedIndustries.map((i) => (
                  <Link key={i.slug} href={`/industries/${i.slug}`} className="flex items-center gap-2 rounded-full border border-ink/15 bg-white px-5 py-3 transition-colors hover:border-orange-500 hover:text-orange-500">
                    <Icon name={i.icon} className="h-5 w-5" /> {i.name}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="container-x">
          <h2 className="display text-4xl sm:text-5xl">Explore More Products</h2>
          <div className="mt-12">
            <CategoryGrid slugs={others} />
          </div>
        </div>
      </section>

      <CtaBanner title={`Find the right ${solution.name.toLowerCase()} solution`} />
    </>
  );
}
