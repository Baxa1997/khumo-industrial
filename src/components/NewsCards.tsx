import { news } from "@/lib/data";

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });

export function NewsCards() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {news.map((n) => (
        <article key={n.slug} id={n.slug} className="group flex scroll-mt-32 flex-col overflow-hidden rounded-2xl border border-line bg-white">
          <div className="hero-pattern relative aspect-[16/9]">
            <div className="grid-lines absolute inset-0" aria-hidden="true" />
            <span className="absolute left-5 top-5 rounded-full bg-accent-500 px-3 py-1 text-xs font-bold text-navy-950">{n.category}</span>
          </div>
          <div className="flex flex-1 flex-col p-6">
            <time dateTime={n.date} className="text-xs font-semibold uppercase tracking-wider text-muted">{formatDate(n.date)}</time>
            <h3 className="mt-3 text-lg font-bold leading-snug text-navy-900">{n.title}</h3>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{n.excerpt}</p>
          </div>
        </article>
      ))}
    </div>
  );
}
