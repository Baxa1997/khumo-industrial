import type { Metadata } from "next";
import Link from "next/link";
import Icon from "@/components/Icon";
import { CtaBanner, NewsSection, PageIntro } from "@/components/Sections";
import { resources } from "@/lib/data";

export const metadata: Metadata = { title: "Resources" };

export default function ResourcesPage() {
  return (
    <>
      <PageIntro lines={["Resources."]} text="News, answers and insights to help you get the most out of your packaging." crumbs={[{ label: "Resources" }]} />
      <section className="py-16 sm:py-20">
        <div className="container-x grid gap-5 sm:grid-cols-2">
          {resources.map((r) => (
            <Link key={r.href} href={r.href} className="group flex h-56 flex-col justify-between rounded-xl bg-steel-400 p-8 text-white transition-colors hover:bg-steel-600">
              <div>
                <span className="display block text-[2rem] tracking-[-0.04em]">{r.label}</span>
                <span className="mt-2 block text-white/85">{r.description}</span>
              </div>
              <span className="text-navy-800 group-hover:text-white">
                <Icon name="arrow" className="h-7 w-7 group-hover:hidden" />
                <Icon name="arrowUpRight" className="hidden h-7 w-7 group-hover:block" />
              </span>
            </Link>
          ))}
        </div>
      </section>
      <NewsSection />
      <CtaBanner />
    </>
  );
}
