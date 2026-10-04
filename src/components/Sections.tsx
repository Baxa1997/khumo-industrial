import Link from "@/i18n/Link";
import Icon, { type IconName } from "./Icon";
import Photo from "./Photo";
import CategoryCards from "./CategoryCards";
import { dateLocales } from "@/i18n/config";
import { getI18n } from "@/i18n/server";
import { clients, images, news, services, solutions, stats } from "@/lib/data";

/* ---------- Intro / hero (used on every page) ---------- */

export async function PageIntro({
  lines,
  text,
  crumbs,
  image,
  imageAlt,
  icon,
  children,
}: {
  lines: string[];
  text?: string;
  crumbs?: { href?: string; label: string }[];
  image?: string;
  imageAlt?: string;
  icon?: IconName;
  children?: React.ReactNode;
}) {
  const { t } = await getI18n();
  return (
    <section className="pt-14 sm:pt-20 lg:pt-28">
      <div className="container-x">
        {crumbs && (
          <nav aria-label={t("Breadcrumb")} className="mb-8 flex flex-wrap items-center gap-2 text-sm text-muted">
            <Link href="/" className="hover:text-orange-500">{t("Home")}</Link>
            {crumbs.map((c) => (
              <span key={c.label} className="flex items-center gap-2">
                <span>/</span>
                {c.href ? <Link href={c.href} className="hover:text-orange-500">{c.label}</Link> : <span className="text-ink">{c.label}</span>}
              </span>
            ))}
          </nav>
        )}
        <div className="grid items-end gap-8 lg:grid-cols-[auto_1fr] lg:gap-16">
          <h1 className="display long-words text-[2.6rem] sm:text-6xl lg:text-[4.5rem] xl:text-[5.25rem]">
            {lines.flatMap((l) => l.split("\n")).map((l) => (
              <span key={l} className={`block pb-2 ${l.length <= 22 ? "lg:whitespace-nowrap" : ""}`}>{l}</span>
            ))}
          </h1>
          {text && <p className="display max-w-xl pb-3 text-lg leading-relaxed tracking-[-0.02em] text-muted sm:text-[1.35rem] lg:ml-auto">{text}</p>}
        </div>
        {children}
      </div>
      {imageAlt !== undefined && (
        <div className="mt-8 px-4 sm:px-7 lg:px-14">
          <Photo src={image} alt={imageAlt} icon={icon} className="h-[22rem] w-full rounded-[1.75rem] sm:h-[32rem] lg:h-[38rem]" />
        </div>
      )}
    </section>
  );
}

/* ---------- Split heading: big title left, copy right ---------- */

export function SplitHeading({ title, children }: { title: React.ReactNode; children?: React.ReactNode }) {
  return (
    <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
      <h2 className="display text-4xl sm:text-5xl lg:text-[4rem]">{title}</h2>
      {children && <div className="space-y-6 text-lg leading-relaxed text-muted lg:pt-[13%]">{children}</div>}
    </div>
  );
}

/* ---------- Clients strip ---------- */

export async function ClientsStrip() {
  const { t } = await getI18n();
  return (
    <section className="py-16 sm:py-24">
      <div className="container-x flex flex-col gap-10 lg:flex-row lg:items-center">
        <p className="display shrink-0 text-xl leading-snug tracking-[-0.03em] lg:w-72 lg:border-r lg:border-line lg:pr-10 lg:text-[1.6rem]">
          {t("Some of the brands we are honored to serve")}
        </p>
        <ul className="grid flex-1 grid-cols-2 items-center gap-6 sm:grid-cols-4">
          {clients.map((c) => (
            <li key={c.name} className="flex h-20 items-center justify-center">
              {c.logo ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={c.logo} alt={c.name} className="max-h-16 max-w-[11rem] object-contain" />
              ) : (
                <span className="grid h-16 w-full max-w-[11rem] place-items-center rounded-xl border border-dashed border-ink/20 text-sm text-ink/40">
                  {t("{name} logo", { name: c.name })}
                </span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ---------- Product category cards ---------- */

export async function CategoryGrid({ slugs }: { slugs?: string[] }) {
  const { loc } = await getI18n();
  const list = slugs ? solutions.filter((s) => slugs.includes(s.slug)) : solutions;
  return <CategoryCards items={loc(list)} />;
}

/* ---------- History ---------- */

export async function HistoryBlock() {
  const { t } = await getI18n();
  return (
    <section className="py-20 sm:py-28">
      <div className="container-x">
        <SplitHeading title={t("Over 100 Years of Cyklop Expertise, Delivered Locally")}>
          <p>{t("Cyklop was established in 1912 and today is a leading global provider of packaging machinery and supplies, including coding and marking systems.")}</p>
          <p>{t("Khumo Industrial is Cyklop’s official partner in Uzbekistan. We supply, set up and service CIJ, TIJ and laser marking systems and end-of-line packaging equipment — so you get proven technology with local support.")}</p>
          <div className="pt-6">
            <Link href="/company-history" className="btn-orange">{t("Learn About Cyklop History")}</Link>
          </div>
        </SplitHeading>
      </div>
    </section>
  );
}

/* ---------- Sustainability (navy block) ---------- */

export async function SustainabilityBlock() {
  const { t } = await getI18n();
  return (
    <section className="relative mt-10 overflow-hidden">
      <div className="relative bg-navy-800 pb-20 pt-28 text-white sm:pb-28 sm:pt-36 [clip-path:polygon(0_9%,34%_0,100%_0,100%_100%,0_100%)] lg:[clip-path:polygon(0_7rem,34%_0,100%_0,100%_100%,0_100%)]">
        <svg className="pointer-events-none absolute -right-24 top-0 h-[34rem] w-[34rem] text-white/15" viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="0.8" aria-hidden="true">
          <path d="M60 10h70l50 70-30 80H70L20 90z" />
          <path d="M90 40h70l40 60-25 70H95L55 110z" />
        </svg>
        <div className="mx-auto max-w-[110rem] px-4 sm:px-8 lg:px-[6.5%]">
          <h2 className="display mx-auto max-w-4xl text-center text-3xl tracking-[-0.04em] sm:text-5xl">
            {t("Committed to the future of the planet, people, and packaging")}
          </h2>
          <div className="mt-16 grid gap-5 lg:grid-cols-3 lg:grid-rows-[auto_auto]">
            <Photo src={images.sustainabilityTall} alt={t("Packaging machine in a warehouse")} icon="box" className="h-80 rounded-xl lg:row-span-2 lg:h-full" />
            <Photo src={images.sustainabilityTool} alt={t("Battery strapping tool in use")} icon="strap" className="h-72 rounded-xl" />
            <Link href="/category/consumables" className="group flex h-72 flex-col rounded-xl bg-orange-500 p-9 transition-colors hover:bg-orange-600">
              <svg viewBox="0 0 36 36" className="h-12 w-12" aria-hidden="true">
                <path d="M9 4v28" stroke="#003063" strokeWidth="6" strokeLinecap="round" />
                <path d="M30 6L15.5 18 30 30" stroke="#fff" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              </svg>
              <p className="display mt-6 text-3xl tracking-[-0.04em]">{t("Recycle, re-use, reliable. Sustainable consumables.")}</p>
              <span className="kicker mt-5 group-hover:underline">{t("Browse consumables")}</span>
            </Link>
            <div className="relative flex flex-col overflow-hidden rounded-xl bg-steel-400 p-9 text-navy-950 lg:col-span-2 lg:p-12">
              <p className="kicker">{t("Local action. Global impact.")}</p>
              <p className="display relative z-10 mt-4 max-w-3xl text-2xl tracking-[-0.03em] text-white sm:text-[2rem] sm:leading-tight">
                {t("Khumo Industrial is committed to practicing sustainability and helping you do the same.")}
              </p>
              <div className="relative z-10 mt-10">
                <Link href="/sustainability" className="btn-orange">
                  {t("Commitment to Sustainability")} <Icon name="arrow" className="h-5 w-5" />
                </Link>
              </div>
              <Photo src={images.sustainabilityTeam} alt={t("Khumo Industrial team")} icon="globe" className="absolute -right-6 bottom-6 hidden h-40 w-56 rotate-6 rounded-lg shadow-xl xl:grid" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- News list ---------- */

export async function NewsList({ limit = 3 }: { limit?: number }) {
  const { loc, locale } = await getI18n();
  const formatDate = (iso: string) =>
    new Date(iso).toLocaleDateString(dateLocales[locale], { month: "long", day: "numeric", year: "numeric", timeZone: "UTC" });
  return (
    <ol>
      {loc(news).slice(0, limit).map((n, idx) => (
        <li key={n.slug} id={n.slug} className="flex scroll-mt-32 gap-10 border-b border-line py-8 first:pt-0">
          <span className="display w-12 shrink-0 text-[2.6rem] leading-none tracking-[-0.03em]">{String(idx + 1).padStart(2, "0")}</span>
          <div>
            <h3 className="display text-2xl leading-tight tracking-[-0.035em] sm:text-[1.75rem]">{n.title}</h3>
            <p className="mt-3 text-[15px]">
              <span className="text-orange-500">{n.category}</span>
              <span className="mx-2.5 text-muted">.</span>
              <time dateTime={n.date} className="text-muted">{formatDate(n.date)}</time>
            </p>
          </div>
        </li>
      ))}
    </ol>
  );
}

export async function NewsSection() {
  const { t } = await getI18n();
  return (
    <section className="py-20 sm:py-28">
      <div className="container-x grid gap-12 lg:grid-cols-2">
        <div>
          <h2 className="display text-4xl sm:text-5xl lg:text-[3.6rem]">
            {t("Latest news,\nevents & press").split("\n").map((line, i) => (
              <span key={i} className="block">{line}</span>
            ))}
          </h2>
          <Link href="/news" className="btn-orange mt-12">{t("View All Articles")}</Link>
        </div>
        <NewsList />
      </div>
    </section>
  );
}

/* ---------- Service / stats / misc ---------- */

export async function ServiceGrid() {
  const { loc } = await getI18n();
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {services.map((base) => ({ id: base.name.toLowerCase().replace(/[^a-z0-9]+/g, "-"), ...loc(base) })).map((s) => (
        <div key={s.id} id={s.id} className="scroll-mt-28 rounded-xl bg-surface p-8">
          <Icon name={s.icon} className="h-9 w-9 text-orange-500" strokeWidth={1.5} />
          <h3 className="display mt-8 text-2xl tracking-[-0.035em]">{s.name}</h3>
          <p className="mt-3 leading-relaxed text-muted">{s.description}</p>
        </div>
      ))}
    </div>
  );
}

export async function StatsBar({ light = false }: { light?: boolean }) {
  const { loc } = await getI18n();
  return (
    <dl className="grid grid-cols-2 gap-x-4 gap-y-10 lg:grid-cols-4">
      {loc(stats).map((s) => (
        <div key={s.label} className={`flex flex-col-reverse border-l pl-6 ${light ? "border-white/25" : "border-line"}`}>
          <dt className={`mt-2 text-sm ${light ? "text-white/70" : "text-muted"}`}>{s.label}</dt>
          <dd className={`display break-words text-4xl tracking-[-0.04em] sm:text-6xl ${light ? "text-white" : "text-navy-800"}`}>{s.value}</dd>
        </div>
      ))}
    </dl>
  );
}

export function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-4">
      {items.map((b) => (
        <li key={b} className="flex gap-3">
          <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-orange-500 text-white">
            <Icon name="check" className="h-3.5 w-3.5" strokeWidth={3} />
          </span>
          <span>{b}</span>
        </li>
      ))}
    </ul>
  );
}

export async function CtaBanner({ title, text }: { title?: string; text?: string }) {
  const { t } = await getI18n();
  title ??= t("It’s Like Having a Packaging Expert on Your Team");
  text ??= t("No matter where you are in your packaging journey, from manually taping boxes to fully automated pallet strapping, we are here for you. Let us help you find what works best.");
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-8">
        <h2 className="display text-4xl sm:text-5xl lg:text-[3.6rem]">{title}</h2>
        <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-muted">{text}</p>
        <Link href="/contact?topic=quote" className="btn-orange mt-12">{t("Request a Quote")}</Link>
      </div>
    </section>
  );
}

