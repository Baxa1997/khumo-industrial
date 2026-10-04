import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import Icon from "@/components/Icon";
import { PageHero } from "@/components/Sections";
import { company } from "@/lib/data";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  const channels = [
    { icon: "phone" as const, label: "Call us", value: company.phone, href: `tel:${company.phone.replace(/\s/g, "")}` },
    { icon: "mail" as const, label: "Email us", value: company.email, href: `mailto:${company.email}` },
    { icon: "pin" as const, label: "Visit us", value: company.address },
  ];
  return (
    <>
      <PageHero eyebrow="Contact" title="Get in touch" text="Questions about a machine, consumables or service? Our team is happy to help." crumbs={[{ label: "Contact" }]} />
      <section className="py-20">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <div className="space-y-4 lg:col-span-4">
            {channels.map((c) => {
              const body = (
                <>
                  <span className="grid h-12 w-12 place-items-center rounded-full bg-brand-500/10 text-brand-500"><Icon name={c.icon} /></span>
                  <span>
                    <span className="block text-sm text-muted">{c.label}</span>
                    <span className="block font-bold text-navy-900">{c.value}</span>
                  </span>
                </>
              );
              return c.href ? (
                <a key={c.label} href={c.href} className="flex items-center gap-4 rounded-2xl border border-line p-6 hover:border-brand-500">{body}</a>
              ) : (
                <div key={c.label} className="flex items-center gap-4 rounded-2xl border border-line p-6">{body}</div>
              );
            })}
            <div className="rounded-2xl bg-surface p-6 text-sm text-muted">
              <p className="font-bold text-navy-900">Opening hours</p>
              <p className="mt-2">Mon – Fri: 08:30 – 18:00</p>
              <p>Service hotline: 24/7 for contract customers</p>
            </div>
          </div>
          <div className="lg:col-span-8">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
