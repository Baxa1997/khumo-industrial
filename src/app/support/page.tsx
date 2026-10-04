import type { Metadata } from "next";
import { CtaBanner, PageHero } from "@/components/Sections";

export const metadata: Metadata = { title: "Support & FAQ" };

const faqs = [
  { q: "Which strapping material is right for my product?", a: "PP strap suits light to medium loads, PET is a strong and cost-effective alternative to steel for heavy loads, and steel strap is used for the heaviest, sharp-edged or hot products. Our specialists will help you choose." },
  { q: "Can I test a machine before buying?", a: "Yes. In our demo center you can test strapping, wrapping, sealing and coding equipment with your own products." },
  { q: "Do you offer maintenance contracts?", a: "We offer preventive maintenance contracts with scheduled visits, priority response times and discounted spare parts." },
  { q: "How quickly can I get spare parts?", a: "Common spare parts are kept in stock and are usually shipped the same or the next working day." },
  { q: "Do your consumables work with other brands' machines?", a: "In most cases, yes. Tell us your machine model and we will recommend a compatible consumable." },
  { q: "Do you provide operator training?", a: "Every installation includes operator training. Additional maintenance training for your technicians is available on request." },
];

export default function SupportPage() {
  return (
    <>
      <PageHero eyebrow="Support" title="Frequently asked questions" text="Quick answers about our machines, consumables and service." crumbs={[{ label: "Support" }]} />
      <section className="py-20">
        <div className="container-x max-w-3xl divide-y divide-line">
          {faqs.map((f) => (
            <details key={f.q} className="group py-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-lg font-bold text-navy-900">
                {f.q}
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-surface text-brand-500 transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="mt-4 leading-relaxed text-muted">{f.a}</p>
            </details>
          ))}
        </div>
      </section>
      <CtaBanner title="Didn't find your answer?" text="Our support team is ready to help with any question." />
    </>
  );
}
