import Link from "next/link";
import Icon, { type IconName } from "./Icon";
import Photo from "./Photo";
import type { Challenge, RangeItem } from "@/lib/categories";

export function Eyebrow({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <p className={`text-[13px] font-semibold uppercase leading-relaxed tracking-[0.14em] text-orange-500 ${className}`}>{children}</p>;
}

export function Breadcrumbs({ items }: { items: { href?: string; label: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1.5 text-[15px] text-muted">
      {items.map((c, idx) => (
        <span key={c.label} className="flex items-center gap-1.5">
          {idx > 0 && <span>/</span>}
          {c.href ? <Link href={c.href} className="hover:text-orange-500">{c.label}</Link> : <span>{c.label}</span>}
        </span>
      ))}
    </nav>
  );
}

/** Image inside a soft blue frame, as used in the category hero. */
export function FramedPhoto({ src, alt, icon }: { src?: string; alt: string; icon: IconName }) {
  return (
    <div className="rounded-[1.25rem] bg-gradient-to-br from-[#e3eaf2] to-[#d3dde9] p-4 shadow-[0_30px_60px_-20px_rgba(0,48,99,0.18)] sm:p-6">
      <Photo src={src} alt={alt} icon={icon} className="aspect-[16/9] w-full rounded-xl" />
    </div>
  );
}

function BulletBlock({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <Eyebrow className="text-xs">{title}</Eyebrow>
      <ul className="mt-2 list-disc space-y-0.5 pl-6 text-[15px] text-ink/85 marker:text-ink">
        {items.map((i) => <li key={i}>{i}</li>)}
      </ul>
    </div>
  );
}

export function RangeCards({ category, items, icon }: { category: string; items: RangeItem[]; icon: IconName }) {
  return (
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <article
          key={item.slug}
          className="grid gap-6 rounded-[1.25rem] border border-line bg-white p-7 lg:row-span-6 lg:grid-rows-subgrid"
        >
          <div className="grid h-52 place-items-center">
            {item.image ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={item.image} alt={item.name} className="max-h-full max-w-full object-contain" />
            ) : (
              <Icon name={icon} className="h-32 w-32 text-steel-400" strokeWidth={0.9} />
            )}
          </div>
          <h3 className="text-2xl font-semibold tracking-[-0.02em]">{item.name}</h3>
          <p className="text-[15px] leading-relaxed text-ink/85">{item.description}</p>
          <BulletBlock title="Best suited for" items={item.bestFor} />
          <BulletBlock title="Key benefits" items={item.benefits} />
          <Link
            href={`/category/${category}/${item.slug}`}
            className="group mt-2 inline-flex items-center gap-1.5 self-end text-[15px] font-semibold text-navy-800 hover:text-orange-500"
          >
            Explore {item.name}
            <Icon name="arrow" className="h-4 w-4 transition-transform group-hover:translate-x-0.5" strokeWidth={2.2} />
          </Link>
        </article>
      ))}
    </div>
  );
}

export function ChallengeCards({ items, icon }: { items: Challenge[]; icon: IconName }) {
  return (
    <div className="grid gap-5 lg:grid-cols-2">
      {items.map((c, idx) => (
        <article key={c.title} className="flex flex-col rounded-[1.25rem] border border-line bg-white p-7">
          <Photo src={c.image} alt={c.title} icon={icon} className="h-40 w-full rounded-xl" />
          <div className="mt-8 flex items-center gap-3">
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-md bg-navy-800 text-xs font-semibold text-white">
              {String(idx + 1).padStart(2, "0")}
            </span>
            <h3 className="text-xl font-semibold tracking-[-0.015em]">{c.title}</h3>
          </div>
          <p className="mt-6 flex-1 text-[15px] leading-relaxed text-muted">{c.problem}</p>
          <div className="mt-8 rounded-r-lg border-l-4 border-orange-500 bg-surface p-5">
            <Eyebrow className="text-xs">How our solutions help</Eyebrow>
            <p className="mt-2 text-[15px] leading-relaxed text-ink/85">{c.solution}</p>
          </div>
          <p className="mt-7 text-xs font-semibold uppercase tracking-[0.14em] text-muted">Operational benefits</p>
          <ul className="mt-3 grid gap-x-6 gap-y-2 text-sm text-muted sm:grid-cols-2">
            {c.benefits.map((b) => (
              <li key={b} className="flex items-center gap-2">
                <Icon name="check" className="h-4 w-4 shrink-0 text-orange-500" strokeWidth={2.4} />
                {b}
              </li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}
