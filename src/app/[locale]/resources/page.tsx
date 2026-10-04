import Link from "@/i18n/Link";
import Icon from "@/components/Icon";
import { CtaBanner, NewsSection, PageIntro } from "@/components/Sections";
import { getI18n, pageTitle } from "@/i18n/server";
import { resources } from "@/lib/data";

export const generateMetadata = pageTitle("Resources");

export default async function ResourcesPage() {
  const { t, loc } = await getI18n();
  return (
    <>
      <PageIntro lines={[t("Resources.")]} text={t("News, answers and insights to help you get the most out of your packaging.")} crumbs={[{ label: t("Resources") }]} />
      <section className="py-16 sm:py-20">
        <div className="container-x grid gap-5 sm:grid-cols-2">
          {loc(resources).map((r) => (
            <Link key={r.href} href={r.href} className="group flex min-h-56 flex-col justify-between gap-6 rounded-xl bg-steel-400 p-8 text-white transition-colors hover:bg-steel-600">
              <div>
                <span className="display block text-[2rem] leading-tight tracking-[-0.04em]">{r.label}</span>
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
