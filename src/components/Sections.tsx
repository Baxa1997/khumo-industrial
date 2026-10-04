import Link from "next/link";
import Icon, { type IconName } from "./Icon";
import { industries, services, solutions, stats } from "@/lib/data";

export function SectionHeading({
  eyebrow,
  title,
  text,
  center = false,
  light = false,
}: {
  eyebrow: string;
  title: string;
  text?: string;
  center?: boolean;
  light?: boolean;
}) {
  return (
    <div className={`max-w-2xl ${center ? "mx-auto text-center" : ""}`}>
      <p className={`eyebrow ${light ? "text-accent-500" : ""}`}>{eyebrow}</p>
      <h2 className={`mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl ${light ? "text-white" : "text-navy-900"}`}>{title}</h2>
      {text && <p className={`mt-4 text-lg leading-relaxed ${light ? "text-white/70" : "text-muted"}`}>{text}</p>}
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  text,
  crumbs,
  icon,
}: {
  eyebrow: string;
  title: string;
  text?: string;
  crumbs: { href?: string; label: string }[];
  icon?: IconName;
}) {
  return (
    <section className="hero-pattern relative overflow-hidden text-white">
      <div className="grid-lines absolute inset-0" aria-hidden="true" />
      <div className="container-x relative py-16 sm:py-24">
        <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-xs text-white/60">
          <Link href="/" className="hover:text-white">Home</Link>
          {crumbs.map((c) => (
            <span key={c.label} className="flex items-center gap-2">
              <span>/</span>
              {c.href ? <Link href={c.href} className="hover:text-white">{c.label}</Link> : <span className="text-white">{c.label}</span>}
            </span>
          ))}
        </nav>
        <div className="mt-8 flex items-start gap-6">
          {icon && (
            <span className="hidden h-16 w-16 shrink-0 place-items-center rounded-2xl bg-white/10 text-accent-500 ring-1 ring-white/20 sm:grid">
              <Icon name={icon} className="h-8 w-8" />
            </span>
          )}
          <div className="max-w-3xl">
            <p className="eyebrow text-accent-500">{eyebrow}</p>
            <h1 className="mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl">{title}</h1>
            {text && <p className="mt-5 text-lg leading-relaxed text-white/75">{text}</p>}
          </div>
        </div>
      </div>
    </section>
  );
}

export function SolutionCards({ slugs }: { slugs?: string[] }) {
  const list = slugs ? solutions.filter((s) => slugs.includes(s.slug)) : solutions;
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {list.map((s) => (
        <Link
          key={s.slug}
          href={`/solutions/${s.slug}`}
          className="group relative flex flex-col overflow-hidden rounded-2xl border border-line bg-white p-8 transition-all hover:-translate-y-1 hover:border-brand-500 hover:shadow-xl"
        >
          <span className="grid h-14 w-14 place-items-center rounded-xl bg-surface text-navy-800 transition-colors group-hover:bg-brand-500 group-hover:text-white">
            <Icon name={s.icon} className="h-7 w-7" />
          </span>
          <h3 className="mt-6 text-xl font-bold text-navy-900">{s.name}</h3>
          <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{s.summary}</p>
          <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-500">
            Discover {s.name.toLowerCase()}
            <Icon name="arrow" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </span>
        </Link>
      ))}
    </div>
  );
}

export function IndustryGrid() {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
      {industries.map((i) => (
        <Link
          key={i.slug}
          href={`/industries/${i.slug}`}
          className="group flex flex-col items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 text-white transition-colors hover:border-accent-500 hover:bg-white/10"
        >
          <Icon name={i.icon} className="h-8 w-8 text-accent-500" />
          <span className="font-semibold">{i.name}</span>
          <Icon name="arrow" className="mt-auto h-4 w-4 text-white/40 transition-all group-hover:translate-x-1 group-hover:text-white" />
        </Link>
      ))}
    </div>
  );
}

export function StatsBar() {
  return (
    <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-line lg:grid-cols-4">
      {stats.map((s) => (
        <div key={s.label} className="bg-white p-8 text-center">
          <p className="text-4xl font-extrabold text-brand-500 sm:text-5xl">{s.value}</p>
          <p className="mt-2 text-sm font-medium text-muted">{s.label}</p>
        </div>
      ))}
    </div>
  );
}

export function ServiceGrid() {
  return (
    <div className="grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
      {services.map((s) => (
        <div key={s.name} className="flex gap-5">
          <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-brand-500/10 text-brand-500">
            <Icon name={s.icon} className="h-6 w-6" />
          </span>
          <div>
            <h3 className="text-lg font-bold text-navy-900">{s.name}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{s.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export function CtaBanner({
  title = "Let's find the right packaging solution together",
  text = "Tell us about your products and processes — our specialists will get back to you with a tailored recommendation.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="py-20">
      <div className="container-x">
        <div className="hero-pattern relative overflow-hidden rounded-3xl px-8 py-14 text-white sm:px-14">
          <div className="grid-lines absolute inset-0" aria-hidden="true" />
          <div className="relative flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">{title}</h2>
              <p className="mt-4 text-lg text-white/75">{text}</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact" className="btn-primary">
                Get custom advice <Icon name="arrow" className="h-4 w-4" />
              </Link>
              <Link href="/service" className="btn-outline">Our service</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((b) => (
        <li key={b} className="flex gap-3">
          <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-accent-500 text-navy-950">
            <Icon name="check" className="h-3.5 w-3.5" strokeWidth={3} />
          </span>
          <span className="text-ink">{b}</span>
        </li>
      ))}
    </ul>
  );
}
