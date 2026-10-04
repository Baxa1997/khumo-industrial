import type { Metadata } from "next";
import { Suspense } from "react";
import ContactForm from "@/components/ContactForm";
import Icon from "@/components/Icon";
import { PageIntro } from "@/components/Sections";
import { company, locations } from "@/lib/data";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <>
      <PageIntro
        lines={["We’re By Your Side."]}
        text="Questions about a machine, consumables or service? Request a quote or send us a message — our team is happy to help."
        crumbs={[{ label: "Contact" }]}
      />
      <section className="py-16 sm:py-24">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <div className="space-y-8 lg:col-span-4">
            <div className="space-y-3">
              <a href={`tel:${company.phone.replace(/\s/g, "")}`} className="flex items-center gap-4 rounded-xl bg-surface p-6 hover:text-orange-500">
                <Icon name="phone" className="h-6 w-6 text-orange-500" />
                <span className="display text-xl tracking-[-0.03em]">{company.phone}</span>
              </a>
              <a href={`mailto:${company.email}`} className="flex items-center gap-4 rounded-xl bg-surface p-6 hover:text-orange-500">
                <Icon name="mail" className="h-6 w-6 text-orange-500" />
                <span className="display break-all text-xl tracking-[-0.03em]">{company.email}</span>
              </a>
            </div>
            <div id="locations" className="scroll-mt-32">
              <h2 className="display text-3xl">Locations</h2>
              <ul className="mt-5 divide-y divide-line border-y border-line">
                {locations.map((l) => (
                  <li key={l.name} className="py-4">
                    <p className="font-medium">{l.name}</p>
                    <p className="text-sm text-muted">{l.city} · {l.phone}</p>
                  </li>
                ))}
              </ul>
            </div>
            <p className="text-sm text-muted">Mon – Fri: 08:30 – 18:00 · Service hotline 24/7 for contract customers</p>
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
