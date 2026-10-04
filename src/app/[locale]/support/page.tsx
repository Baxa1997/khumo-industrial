import { CtaBanner, PageIntro } from "@/components/Sections";
import { getI18n, pageTitle } from "@/i18n/server";
import { supportFaqs } from "@/lib/pages";

export const generateMetadata = pageTitle("FAQ & Support");

export default async function SupportPage() {
  const { t, loc } = await getI18n();
  return (
    <>
      <PageIntro
        lines={[t("Frequently Asked\nQuestions.")]}
        text={t("Quick answers about our machines, consumables and service.")}
        crumbs={[{ href: "/resources", label: t("Resources") }, { label: t("FAQ") }]}
      />
      <section className="py-20 sm:py-28">
        <div className="container-x">
          <div className="border-t border-line">
            {loc(supportFaqs).map((f) => (
              <details key={f.q} className="group border-b border-line py-7">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6">
                  <span className="display text-2xl tracking-[-0.03em] sm:text-[1.75rem]">{f.q}</span>
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-line text-2xl transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-4 max-w-3xl text-lg leading-relaxed text-muted">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
      <CtaBanner title={t("Didn’t find your answer?")} text={t("Our support team is ready to help with any question.")} />
    </>
  );
}
