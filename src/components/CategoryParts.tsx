import Link from "@/i18n/Link";
import Icon, { type IconName } from "./Icon";
import Photo from "./Photo";
import { getI18n } from "@/i18n/server";
import type { Challenge, Guide, IndustryCard, RangeItem, Technology } from "@/lib/categories";

/** Category names read naturally lower-cased mid-sentence in English only. */
const inline = (locale: string, name: string) => (locale === "en" ? name.toLowerCase() : name);

export function Eyebrow({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <p className={`long-words text-[13px] font-semibold uppercase leading-relaxed tracking-[0.08em] text-orange-500 sm:tracking-[0.14em] ${className}`}>{children}</p>;
}

export async function Breadcrumbs({ items }: { items: { href?: string; label: string }[] }) {
  const { t } = await getI18n();
  return (
    <nav aria-label={t("Breadcrumb")} className="flex flex-wrap items-center gap-1.5 text-[15px] text-muted">
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
      {src?.startsWith("/images/products/") ? (
        <div className="grid aspect-[16/9] w-full place-items-center rounded-xl bg-white p-6">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={src} alt={alt} className="h-full w-full object-contain" />
        </div>
      ) : (
        <Photo src={src} alt={alt} icon={icon} className="aspect-[16/9] w-full rounded-xl" />
      )}
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

export async function RangeCards({
  category,
  items,
  icon,
  cols = "md:grid-cols-2 lg:grid-cols-3",
}: {
  category: string;
  items: RangeItem[];
  icon: IconName;
  cols?: string;
}) {
  const { t } = await getI18n();
  return (
    <div className={`grid gap-5 ${cols}`}>
      {items.map((item) => (
        <article
          key={item.slug}
          className="grid gap-6 rounded-[1.25rem] border border-line bg-white p-7 lg:row-span-6 lg:grid-rows-subgrid"
        >
          <div className="flex h-52 items-center justify-center overflow-hidden">
            {item.image ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={item.image} alt={item.name} className="h-full max-h-52 w-full object-contain" />
            ) : (
              <Icon name={icon} className="h-32 w-32 text-steel-400" strokeWidth={0.9} />
            )}
          </div>
          <h3 className="text-2xl font-semibold tracking-[-0.02em]">{item.name}</h3>
          <p className="text-[15px] leading-relaxed text-ink/85">{item.description}</p>
          <BulletBlock title={t("Best suited for")} items={item.bestFor} />
          <BulletBlock title={t("Key benefits")} items={item.benefits} />
          <Link
            href={`/category/${category}/${item.slug}`}
            className="group mt-2 inline-flex items-center gap-1.5 self-end text-[15px] font-semibold text-navy-800 hover:text-orange-500"
          >
            {t("Explore {name}", { name: item.name })}
            <Icon name="arrow" className="h-4 w-4 transition-transform group-hover:translate-x-0.5" strokeWidth={2.2} />
          </Link>
        </article>
      ))}
    </div>
  );
}

export async function ChallengeCards({ items, icon }: { items: Challenge[]; icon: IconName }) {
  const { t } = await getI18n();
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
            <Eyebrow className="text-xs">{t("How our solutions help")}</Eyebrow>
            <p className="mt-2 text-[15px] leading-relaxed text-ink/85">{c.solution}</p>
          </div>
          <p className="mt-7 text-xs font-semibold uppercase tracking-[0.14em] text-muted">{t("Operational benefits")}</p>
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

export async function TechnologySection({ technology, icon }: { technology: Technology; icon: IconName }) {
  const { t } = await getI18n();
  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto grid max-w-[74rem] items-center gap-12 px-4 sm:px-8 lg:grid-cols-2">
        <div>
          <Eyebrow>{t("Our technology")}</Eyebrow>
          <h2 className="display mt-5 text-4xl sm:text-5xl">{technology.title}</h2>
          <p className="mt-6 text-lg leading-relaxed text-muted">{technology.text}</p>
          <ul className="mt-10 grid gap-x-8 gap-y-3 text-[15px] text-muted sm:grid-cols-2">
            {technology.points.map((p) => (
              <li key={p} className="flex items-center gap-2.5">
                <Icon name="check" className="h-4 w-4 shrink-0 text-orange-500" strokeWidth={2.4} />
                {p}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex h-80 items-center justify-center sm:h-[26rem]">
          {technology.image ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={technology.image} alt={technology.title} className="h-full max-h-80 w-auto rounded-xl object-contain shadow-[0_30px_60px_-25px_rgba(0,48,99,0.35)] sm:max-h-[26rem]" />
          ) : (
            <Icon name={icon} className="h-64 w-64 text-steel-400" strokeWidth={0.7} />
          )}
        </div>
      </div>
    </section>
  );
}

export async function IndustryCards({ title, text, items }: { title: string; text: string; items: IndustryCard[] }) {
  const { t } = await getI18n();
  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-[74rem] px-4 sm:px-8">
        <Eyebrow>{t("Industries we serve")}</Eyebrow>
        <h2 className="display mt-5 text-4xl sm:text-5xl">{title}</h2>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted">{text}</p>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((i) => (
            <article key={i.name} className="relative min-h-52 overflow-hidden rounded-xl text-white">
              {i.image ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={i.image} alt="" className="absolute inset-0 h-full w-full object-cover" />
              ) : (
                <div className="photo-placeholder absolute inset-0" />
              )}
              <div className="absolute inset-0 bg-navy-800/70" />
              <div className="relative p-6">
                <h3 className="text-lg font-semibold">{i.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/85">{i.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

// "{name}" is replaced with the category name.
const reasons: { icon: IconName; title: string; text: string }[] = [
  { icon: "layers", title: "Complete {name} Portfolio", text: "From manual tools to fully automatic systems, we offer {name} solutions for every production environment." },
  { icon: "tool", title: "Tailored to Your Production", text: "Every business is different. Our engineers work with you to recommend the right equipment, automation level and consumables for your application." },
  { icon: "headset", title: "Expert Advice, Local Support", text: "Our specialists and technicians provide fast local service, spare parts and technical support wherever you operate in the region." },
  { icon: "shield", title: "Official Cyklop Partner", text: "Original Cyklop equipment, inks and spare parts — supplied, set up and serviced by our team in Uzbekistan." },
];

export async function WhyChoose({ category, name, others }: { category: string; name: string; others: { slug: string; name: string }[] }) {
  const { t, locale } = await getI18n();
  const lower = inline(locale, name);
  return (
    <section className="relative overflow-hidden bg-navy-800 text-white">
      <div className="pointer-events-none absolute inset-0 opacity-[0.07] [background-image:repeating-linear-gradient(115deg,#fff_0_1px,transparent_1px_90px)]" />
      <div className="relative mx-auto max-w-[74rem] px-4 py-20 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow>{t("Why choose Khumo?")}</Eyebrow>
          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.02em] sm:text-[2.6rem] sm:leading-tight">{t("A packaging partner, not just a supplier")}</h2>
          <p className="mt-6 text-lg leading-relaxed text-white/90">
            {t("Choosing the right {name} solution is about more than selecting a machine. It’s about a partner who understands your production, your packaging challenges and your long-term goals.", { name: lower })}
          </p>
          <p className="mt-5 leading-relaxed text-white/65">
            {t("As the official Cyklop partner in Uzbekistan, Khumo Industrial helps manufacturers raise packaging efficiency, reduce operating costs and protect products with reliable equipment and expert local support.")}
          </p>
        </div>
        <div className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((r) => (
            <div key={r.title} className="border-t border-white/20 pt-6">
              <article className="h-full rounded-lg bg-white p-5 text-ink shadow-xl">
                <div className="photo-placeholder grid h-36 place-items-center rounded-md">
                  <Icon name={r.icon} className="h-12 w-12 text-white/40" strokeWidth={1} />
                </div>
                <span className="mt-5 grid h-10 w-10 place-items-center rounded-full bg-orange-500/10 text-orange-500">
                  <Icon name="check" className="h-4 w-4" strokeWidth={2.6} />
                </span>
                <h3 className="mt-4 text-lg font-semibold leading-snug">{t(r.title, { name })}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted">{t(r.text, { name: lower })}</p>
              </article>
            </div>
          ))}
        </div>
        <div className="mt-16 grid gap-8 border-t border-white/20 pt-10 lg:grid-cols-2">
          <div>
            <h3 className="text-2xl font-semibold tracking-[-0.015em]">{t("Your Complete Packaging Partner")}</h3>
            <p className="mt-3 max-w-md text-white/70">
              {t("Our expertise goes beyond {name}. We help you optimize your entire packaging process with:", { name: lower })}
            </p>
          </div>
          <div className="grid content-start gap-3.5 sm:grid-cols-2">
            {others.filter((o) => o.slug !== category).map((o) => (
              <Link
                key={o.slug}
                href={`/category/${o.slug}`}
                className="group flex items-center justify-between rounded-md bg-white px-4 py-3.5 text-[15px] font-semibold text-navy-800 hover:bg-orange-50"
              >
                {o.name}
                <Icon name="arrow" className="h-4 w-4 text-orange-500 transition-transform group-hover:translate-x-0.5" strokeWidth={2.4} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export async function CompleteLine({ name, cards }: { name: string; cards: { href: string; title: string; text: string; icon: IconName; image?: string }[] }) {
  const { t, locale } = await getI18n();
  return (
    <section className="bg-surface py-20 sm:py-24">
      <div className="mx-auto max-w-[74rem] px-4 sm:px-8">
        <Eyebrow>{t("Beyond {name}", { name: inline(locale, name) })}</Eyebrow>
        <h2 className="display mt-5 max-w-3xl text-4xl sm:text-5xl">{t("Complete Your Packaging Line")}</h2>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted">
          {t("{name} is one step of your end of line. Combine it with the right equipment and support for a fully optimized packaging process.", { name })}
        </p>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((c) => (
            <Link key={c.title} href={c.href} className="group rounded-xl border border-line bg-white p-5 transition-shadow hover:shadow-lg">
              <div className="grid h-36 place-items-center overflow-hidden rounded-lg">
                {c.image ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={c.image} alt="" className="h-full w-full object-cover" />
                ) : (
                  <Icon name={c.icon} className="h-20 w-20 text-steel-400 transition-transform group-hover:scale-110" strokeWidth={1} />
                )}
              </div>
              <h3 className="mt-5 text-xl font-semibold tracking-[-0.015em] group-hover:text-orange-500">{c.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-muted">{c.text}</p>
            </Link>
          ))}
        </div>
        <Link href="/contact?topic=quote" className="btn-orange mt-10 px-6 py-3 text-[15px]">{t("Build Your Complete Packaging Line")}</Link>
      </div>
    </section>
  );
}

export async function BuyingGuide({ guide }: { guide: Guide }) {
  const { t } = await getI18n();
  return (
    <section className="bg-surface py-20 sm:py-24">
      <div className="mx-auto max-w-[74rem] px-4 sm:px-8">
        <Eyebrow>{t("Buying guide")}</Eyebrow>
        <h2 className="display mt-5 max-w-3xl text-4xl sm:text-5xl">{guide.title}</h2>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted">{guide.text}</p>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {guide.options.map((o) => (
            <article key={o.title} className="flex flex-col rounded-2xl border border-line bg-white p-7 shadow-[0_8px_30px_-18px_rgba(0,0,0,0.15)]">
              <h3 className="mt-3 text-2xl font-semibold tracking-[-0.02em]">{o.title}</h3>
              <div className="mt-5 rounded-lg bg-[#fff4ec] p-4">
                <Eyebrow className="text-xs">{t("Best suited for")}</Eyebrow>
                <p className="mt-1.5 text-[15px] leading-relaxed text-muted">{o.bestFor}</p>
              </div>
              <Eyebrow className="mt-6 text-xs">{t("Key benefits")}</Eyebrow>
              <ul className="mt-2.5 flex-1 space-y-2.5 pl-4 text-sm leading-relaxed text-ink/85">
                {o.points.map((p) => (
                  <li key={p} className="flex gap-2">
                    <Icon name="check" className="mt-0.5 h-3.5 w-3.5 shrink-0 text-orange-500" strokeWidth={2.6} />
                    {p}
                  </li>
                ))}
              </ul>
              <Link href={o.href} className="group mt-7 inline-flex items-center gap-1.5 text-[15px] font-semibold text-navy-800 hover:text-orange-500">
                {o.cta}
                <Icon name="arrow" className="h-4 w-4 transition-transform group-hover:translate-x-0.5" strokeWidth={2.2} />
              </Link>
            </article>
          ))}
        </div>
        <div className="mt-8 flex flex-col items-start justify-between gap-4 rounded-xl bg-navy-800 px-7 py-5 text-white sm:flex-row sm:items-center">
          <p className="text-xl font-semibold">{t("Still Unsure?")}</p>
          <a href="#quote" className="btn-orange px-6 py-3 text-[15px]">{guide.unsureCta}</a>
        </div>
      </div>
    </section>
  );
}
