import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Icon from "@/components/Icon";
import { CtaBanner, PageHero, SectionHeading, SolutionCards } from "@/components/Sections";
import { getIndustry, industries } from "@/lib/data";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return industries.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const industry = getIndustry((await params).slug);
  return industry ? { title: `${industry.name}: ${industry.title}`, description: industry.summary } : {};
}

export default async function IndustryPage({ params }: Props) {
  const industry = getIndustry((await params).slug);
  if (!industry) notFound();

  return (
    <>
      <PageHero
        eyebrow={industry.name}
        title={industry.title}
        text={industry.summary}
        icon={industry.icon}
        crumbs={[{ href: "/industries", label: "Industries" }, { label: industry.name }]}
      />

      <section className="py-20">
        <div className="container-x">
          <SectionHeading eyebrow="Challenges" title={`Packaging challenges in ${industry.name.toLowerCase()}`} />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {industry.challenges.map((c, idx) => (
              <div key={c} className="rounded-2xl border border-line p-8">
                <span className="text-sm font-extrabold text-accent-500">0{idx + 1}</span>
                <p className="mt-3 text-lg font-bold text-navy-900">{c}</p>
                <p className="mt-3 flex items-center gap-2 text-sm text-muted">
                  <Icon name="check" className="h-4 w-4 text-brand-500" /> Solved with the right equipment and expert set-up
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface py-20">
        <div className="container-x">
          <SectionHeading eyebrow="Recommended" title="Solutions for your industry" />
          <div className="mt-10">
            <SolutionCards slugs={industry.solutionSlugs} />
          </div>
        </div>
      </section>

      <CtaBanner title={`Talk to our ${industry.name.toLowerCase()} specialists`} />
    </>
  );
}
