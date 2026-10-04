import { Suspense } from "react";
import ContactForm from "@/components/ContactForm";
import Icon from "@/components/Icon";
import { PageIntro } from "@/components/Sections";
import { getI18n, pageTitle } from "@/i18n/server";
import { company, locations } from "@/lib/data";

export const generateMetadata = pageTitle("Contact");

export default async function ContactPage() {
  const { t, loc } = await getI18n();
  return (
    <>
      <PageIntro
        lines={[t("We’re By Your Side.")]}
        text={t("Questions about a machine, consumables or service? Request a quote or send us a message — our team is happy to help.")}
        crumbs={[{ label: t("Contact") }]}
      />
      <section className="py-16 sm:py-24">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <div className="space-y-8 lg:col-span-4">
            <div className="space-y-3">
              {[
                { href: company.phoneHref, icon: "phone" as const, label: t("Call us"), value: company.phone },
                { href: company.telegram.href, icon: "send" as const, label: "Telegram", value: company.telegram.label, external: true },
                { href: company.instagram.href, icon: "instagram" as const, label: "Instagram", value: company.instagram.label, external: true },
              ].map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  {...(c.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="flex items-center gap-4 rounded-xl bg-surface p-5 hover:text-orange-500 sm:p-6"
                >
                  <Icon name={c.icon} className="h-6 w-6 shrink-0 text-orange-500" />
                  <span className="min-w-0">
                    <span className="block text-sm text-muted">{c.label}</span>
                    <span className="display block break-words text-xl tracking-[-0.03em]">{c.value}</span>
                  </span>
                </a>
              ))}
            </div>
            <div id="locations" className="scroll-mt-32">
              <h2 className="display text-3xl">{t("Locations")}</h2>
              <ul className="mt-5 divide-y divide-line border-y border-line">
                {loc(locations).map((l) => (
                  <li key={l.label} className="py-4">
                    <p className="font-medium">{l.name}</p>
                    <p className="text-sm text-muted">{l.city} · {l.phone}</p>
                  </li>
                ))}
              </ul>
            </div>
            <p className="text-sm text-muted">{company.legalName} · {t(company.tagline)}</p>
          </div>
          <div className="lg:col-span-8">
            <Suspense>
              <ContactForm />
            </Suspense>
          </div>
        </div>
      </section>
    </>
  );
}
