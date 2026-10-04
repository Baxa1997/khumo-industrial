import Link from "@/i18n/Link";
import { PageIntro } from "./Sections";
import { getI18n } from "@/i18n/server";
import { dateLocales } from "@/i18n/config";
import { company } from "@/lib/data";
import { legalUpdated, type LegalSection } from "@/lib/legal";

export default async function LegalPage({ title, sections, other }: { title: string; sections: LegalSection[]; other: { href: string; label: string } }) {
  const { t, locale } = await getI18n();
  const vars = { legalName: company.legalName, phone: company.phone, telegram: company.telegram.label, instagram: company.instagram.label };
  const updated = new Intl.DateTimeFormat(dateLocales[locale], { day: "numeric", month: "long", year: "numeric" }).format(new Date(legalUpdated));
  return (
    <>
      <PageIntro lines={[t(title) + "."]} crumbs={[{ label: t(title) }]} />
      <section className="pb-20 sm:pb-28">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <nav aria-label={t("Contents")} className="hidden lg:col-span-4 lg:block xl:col-span-3">
            <div className="sticky top-32">
              <p className="kicker text-muted">{t("Contents")}</p>
              <ol className="mt-4 space-y-2.5 text-[15px]">
                {sections.map((s, i) => (
                  <li key={s.title}>
                    <a href={`#section-${i + 1}`} className="text-ink/75 hover:text-orange-500">{i + 1}. {t(s.title)}</a>
                  </li>
                ))}
              </ol>
            </div>
          </nav>
          <div className="long-words max-w-3xl lg:col-span-8 xl:col-span-9">
            <p className="text-sm text-muted">{t("Last updated: {date}", { date: updated })}</p>
            {sections.map((s, i) => (
              <section key={s.title} id={`section-${i + 1}`} className="scroll-mt-32 border-b border-line py-8 last:border-0">
                <h2 className="display text-2xl tracking-[-0.03em] sm:text-3xl">{i + 1}. {t(s.title)}</h2>
                <div className="mt-4 space-y-4 text-lg leading-relaxed text-muted">
                  {s.paragraphs.map((p) => <p key={p}>{t(p, vars)}</p>)}
                  {s.list && (
                    <ul className="list-disc space-y-2 pl-6 marker:text-orange-500">
                      {s.list.map((l) => <li key={l}>{t(l, vars)}</li>)}
                    </ul>
                  )}
                </div>
              </section>
            ))}
            <p className="mt-6 text-muted">
              {t("See also:")}{" "}
              <Link href={other.href} className="text-ink underline underline-offset-2 hover:text-orange-500">{t(other.label)}</Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
