import Link from "@/i18n/Link";
import Icon from "@/components/Icon";
import { PageIntro } from "@/components/Sections";
import { getI18n, pageTitle } from "@/i18n/server";
import { industries, news, resources, solutions } from "@/lib/data";

export const generateMetadata = pageTitle("Search");

type Props = { searchParams: Promise<{ q?: string }> };

export default async function SearchPage({ searchParams }: Props) {
  const { t, loc } = await getI18n();
  const q = ((await searchParams).q ?? "").trim();
  const needle = q.toLowerCase();
  // Match against the translated text and the English source, so either language finds results.
  const match = (base: unknown, localized: unknown) =>
    needle !== "" && (JSON.stringify(base) + JSON.stringify(localized)).toLowerCase().includes(needle);

  const results = [
    ...solutions.filter((s) => match(s, loc(s))).map((s) => loc(s)).map((s) => ({ href: `/category/${s.slug}`, type: t("Product"), title: s.name, text: s.summary })),
    ...industries.filter((i) => match(i, loc(i))).map((i) => loc(i)).map((i) => ({ href: `/industries/${i.slug}`, type: t("Industry"), title: i.name, text: i.summary })),
    ...news.filter((n) => match(n, loc(n))).map((n) => loc(n)).map((n) => ({ href: `/news#${n.slug}`, type: t("News"), title: n.title, text: n.excerpt })),
    ...resources.filter((r) => match(r, loc(r))).map((r) => loc(r)).map((r) => ({ href: r.href, type: t("Resource"), title: r.label, text: r.description })),
  ];

  return (
    <>
      <PageIntro
        lines={[q ? t("Results for “{q}”", { q }) : t("Search.")]}
        text={q ? t("Results found: {count}", { count: results.length }) : t("Use the search box in the header to find products, industries and articles.")}
      />
      <section className="py-16 sm:py-24">
        <div className="container-x">
          {results.length > 0 ? (
            <ul className="border-t border-line">
              {results.map((r) => (
                <li key={r.href} className="border-b border-line">
                  <Link href={r.href} className="group flex items-center justify-between gap-6 py-7">
                    <span>
                      <span className="text-sm text-orange-500">{r.type}</span>
                      <span className="display mt-1 block text-2xl tracking-[-0.03em] group-hover:text-orange-500">{r.title}</span>
                      <span className="mt-1 block text-muted">{r.text}</span>
                    </span>
                    <Icon name="arrow" className="h-6 w-6 shrink-0 text-navy-800 group-hover:text-orange-500" />
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            q && <p className="text-lg text-muted">{t("No results. Try “strapping”, “laser” or “logistics”.")}</p>
          )}
        </div>
      </section>
    </>
  );
}
