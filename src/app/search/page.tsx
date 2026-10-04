import type { Metadata } from "next";
import Link from "next/link";
import Icon from "@/components/Icon";
import { PageIntro } from "@/components/Sections";
import { industries, news, resources, solutions } from "@/lib/data";

export const metadata: Metadata = { title: "Search" };

type Props = { searchParams: Promise<{ q?: string }> };

export default async function SearchPage({ searchParams }: Props) {
  const q = ((await searchParams).q ?? "").trim();
  const needle = q.toLowerCase();
  const match = (...fields: string[]) => needle !== "" && fields.some((f) => f.toLowerCase().includes(needle));

  const results = [
    ...solutions
      .filter((s) => match(s.name, s.summary, s.intro, ...s.products.flatMap((p) => [p.name, p.description])))
      .map((s) => ({ href: `/category/${s.slug}`, type: "Product", title: s.name, text: s.summary })),
    ...industries
      .filter((i) => match(i.name, i.title, i.summary))
      .map((i) => ({ href: `/industries/${i.slug}`, type: "Industry", title: i.name, text: i.summary })),
    ...news.filter((n) => match(n.title, n.excerpt)).map((n) => ({ href: `/news#${n.slug}`, type: "News", title: n.title, text: n.excerpt })),
    ...resources.filter((r) => match(r.label, r.description)).map((r) => ({ href: r.href, type: "Resource", title: r.label, text: r.description })),
  ];

  return (
    <>
      <PageIntro lines={[q ? `Results for “${q}”` : "Search."]} text={q ? `${results.length} result${results.length === 1 ? "" : "s"} found.` : "Use the search box in the header to find products, industries and articles."} />
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
            q && <p className="text-lg text-muted">No results. Try “strapping”, “film” or “logistics”.</p>
          )}
        </div>
      </section>
    </>
  );
}
