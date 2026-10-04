import { CtaBanner, PageIntro } from "@/components/Sections";
import { getI18n, pageTitle } from "@/i18n/server";
import { milestones } from "@/lib/data";

export const generateMetadata = pageTitle("Our Story");

export default async function HistoryPage() {
  const { t, loc } = await getI18n();
  return (
    <>
      <PageIntro
        lines={[t("Our Story.")]}
        text={t("Khumo Industrial — product marking solutions and the official Cyklop partner in Uzbekistan.")}
        crumbs={[{ href: "/about", label: t("About") }, { label: t("Our Story") }]}
      />
      <section className="py-20 sm:py-28">
        <div className="container-x">
          <ol>
            {loc(milestones).map((m) => (
              <li key={m.year} className="grid gap-4 border-t border-line py-10 last:border-b sm:grid-cols-12">
                <span className="display long-words text-4xl text-orange-500 sm:col-span-4 sm:text-5xl">{m.year}</span>
                <p className="display text-2xl leading-snug tracking-[-0.03em] sm:col-span-8 sm:text-3xl">{m.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <CtaBanner />
    </>
  );
}
