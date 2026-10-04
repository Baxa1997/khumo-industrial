import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Icon from "@/components/Icon";
import { CheckList, CtaBanner, PageHero, SectionHeading } from "@/components/Sections";
import { getSolution, industries, solutions } from "@/lib/data";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return solutions.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const solution = getSolution((await params).slug);
  return solution ? { title: solution.name, description: solution.summary } : {};
}

export default async function SolutionPage({ params }: Props) {
  const solution = getSolution((await params).slug);
  if (!solution) notFound();

  const relatedIndustries = industries.filter((i) => i.solutionSlugs.includes(solution.slug));

  return (
    <>
      <PageHero
        eyebrow="Solutions"
        title={solution.name}
        text={solution.intro}
        icon={solution.icon}
        crumbs={[{ href: "/solutions", label: "Solutions" }, { label: solution.name }]}
      />

      <section className="py-20">
        <div className="container-x grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <SectionHeading eyebrow="Product range" title={`Our ${solution.name.toLowerCase()} portfolio`} />
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {solution.products.map((p) => (
                <div key={p.name} className="rounded-2xl border border-line p-6 transition-colors hover:border-brand-500">
                  <Icon name={solution.icon} className="h-7 w-7 text-brand-500" />
                  <h3 className="mt-4 font-bold text-navy-900">{p.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{p.description}</p>
                </div>
              ))}
            </div>
          </div>
          <aside className="lg:col-span-5">
            <div className="sticky top-32 rounded-3xl bg-surface p-8">
              <h2 className="text-xl font-bold text-navy-900">Your benefits</h2>
              <div className="mt-6">
                <CheckList items={solution.benefits} />
              </div>
              <Link href="/contact" className="btn-dark mt-8 w-full">
                Request a quote <Icon name="arrow" className="h-4 w-4" />
              </Link>
            </div>
          </aside>
        </div>
      </section>

      {relatedIndustries.length > 0 && (
        <section className="bg-surface py-20">
          <div className="container-x">
            <SectionHeading eyebrow="Applications" title="Used in these industries" />
            <div className="mt-10 flex flex-wrap gap-3">
              {relatedIndustries.map((i) => (
                <Link key={i.slug} href={`/industries/${i.slug}`} className="flex items-center gap-2 rounded-full border border-line bg-white px-5 py-3 text-sm font-semibold text-navy-900 hover:border-brand-500 hover:text-brand-500">
                  <Icon name={i.icon} className="h-4 w-4" /> {i.name}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaBanner title={`Find the right ${solution.name.toLowerCase()} solution`} />
    </>
  );
}
