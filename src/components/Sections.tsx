import Link from "@/i18n/Link";
import Icon, { type IconName } from "./Icon";
import Photo from "./Photo";
import CategoryCards from "./CategoryCards";
import { getI18n } from "@/i18n/server";
import { company, images, news, services, solutions, stats } from "@/lib/data";

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
        <div className="grid items-end gap-8 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] lg:gap-16">
          <h1 className="display long-words text-[2.6rem] sm:text-6xl lg:text-[4.5rem] xl:text-[5.25rem]">
            {lines.flatMap((l) => l.split("\n")).map((l) => (
              <span key={l} className={`block pb-2 ${l.length <= 16 ? "lg:whitespace-nowrap" : ""}`}>{l}</span>
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
  const items = [
    { icon: "code" as const, title: t(company.focus), text: t(company.technologies) },
    { icon: "tool" as const, title: t(company.services), text: t("Installation, operator training and local service") },
    { icon: "shield" as const, title: t("Official Cyklop partner"), text: t("Original equipment, inks and spare parts") },
  ];
  return (
    <section className="py-16 sm:py-20">
      <ul className="container-x grid gap-4 md:grid-cols-3">
        {items.map((i) => (
          <li key={i.title} className="flex items-start gap-4 rounded-xl border border-line p-6">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-orange-500/10 text-orange-500">
              <Icon name={i.icon} className="h-6 w-6" />
            </span>
            <span>
              <span className="display block text-xl tracking-[-0.03em]">{i.title}</span>
              <span className="mt-1 block text-muted">{i.text}</span>
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}

/* ---------- Instagram ---------- */

export async function InstagramSection() {
  const { t } = await getI18n();
  return (
    <section className="pb-24 sm:pb-28">
      <div className="container-x">
        <div className="grid items-center gap-10 rounded-[1.25rem] bg-surface p-8 sm:p-12 lg:grid-cols-2">
          <div>
            <p className="flex items-center gap-2 font-medium text-orange-500">
              <Icon name="instagram" className="h-5 w-5" /> {company.instagram.label}
            </p>
            <h2 className="display long-words mt-4 text-4xl sm:text-5xl">{t("See Our Marking Systems in Action")}</h2>
            <p className="mt-5 text-lg leading-relaxed text-muted">
              {t("Egg marking, labeling, printing on production lines and operator training — follow us on Instagram or write to us on Telegram.")}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={company.instagram.href} target="_blank" rel="noopener noreferrer" className="btn-orange">
                <Icon name="instagram" className="h-5 w-5" /> {t("Follow on Instagram")}
              </a>
              <a href={company.telegram.href} target="_blank" rel="noopener noreferrer" className="btn border border-navy-800 text-navy-800 hover:bg-navy-800 hover:text-white">
                <Icon name="send" className="h-4 w-4" /> {t("Write to us")}
              </a>
            </div>
          </div>
          <ul className="grid grid-cols-2 gap-3">
            {["Egg marking", "Labeling", "Printing process", "Training"].map((label) => (
              <li key={label} className="photo-placeholder flex aspect-square items-end rounded-xl p-4 text-white">
                <span className="display text-lg tracking-[-0.02em]">{t(label)}</span>
              </li>
            ))}
          </ul>
        </div>
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
        <SplitHeading title={t("Product Marking Solutions in Uzbekistan")}>
          <p>{t("Khumo Industrial is the official Cyklop partner in Uzbekistan. We help manufacturers put clear, durable codes on every product — dates, batch numbers, barcodes and logos.")}</p>
          <p>{t("We supply CIJ, TIJ and laser marking systems, set them up on your line, train your operators and provide local service, inks and spare parts.")}</p>
          <div className="flex flex-wrap gap-3 pt-6">
            <Link href="/about" className="btn-orange">{t("About Khumo Industrial")}</Link>
            <a href={company.telegram.href} target="_blank" rel="noopener noreferrer" className="btn border border-navy-800 text-navy-800 hover:bg-navy-800 hover:text-white">
              <Icon name="send" className="h-4 w-4" /> {t("Write to us")}
            </a>
          </div>
        </SplitHeading>
      </div>
    </section>
  );
}

/* ---------- Sustainability (navy block) ---------- */

/* ---------- News list ---------- */

export async function NewsList({ limit = 3 }: { limit?: number }) {
  const { t, loc } = await getI18n();
  return (
    <ol>
      {loc(news).slice(0, limit).map((n, idx) => (
        <li key={n.slug} id={n.slug} className="scroll-mt-32 border-b border-line py-8 first:pt-0">
          <a href={n.href} target="_blank" rel="noopener noreferrer" className="group flex gap-6 sm:gap-10">
            <span className="display w-12 shrink-0 text-[2.6rem] leading-none tracking-[-0.03em]">{String(idx + 1).padStart(2, "0")}</span>
            <div>
              <h3 className="display text-2xl leading-tight tracking-[-0.035em] group-hover:text-orange-500 sm:text-[1.75rem]">{n.title}</h3>
              <p className="mt-2 text-muted">{n.excerpt}</p>
              <p className="mt-3 flex items-center gap-2 text-[15px] text-orange-500">
                <Icon name="instagram" className="h-4 w-4" />
                {t("View on Instagram")}
              </p>
            </div>
          </a>
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

