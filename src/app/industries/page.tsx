import type { Metadata } from "next";
import Link from "next/link";
import Icon from "@/components/Icon";
import { CtaBanner, PageHero } from "@/components/Sections";
import { industries } from "@/lib/data";

export const metadata: Metadata = { title: "Industries" };

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="Packaging expertise for your industry"
        text="Every sector has its own requirements for load securing, protection and traceability. Find out how we support yours."
        crumbs={[{ label: "Industries" }]}
      />
      <section className="bg-surface py-20">
        <div className="container-x grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((i) => (
            <Link key={i.slug} href={`/industries/${i.slug}`} className="group flex flex-col rounded-2xl border border-line bg-white p-8 transition-all hover:-translate-y-1 hover:border-brand-500 hover:shadow-xl">
              <Icon name={i.icon} className="h-10 w-10 text-brand-500" />
              <h2 className="mt-6 text-xl font-bold text-navy-900">{i.name}</h2>
              <p className="mt-1 text-sm font-semibold text-muted">{i.title}</p>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{i.summary}</p>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-500">
                Learn more <Icon name="arrow" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </section>
      <CtaBanner />
    </>
  );
}
