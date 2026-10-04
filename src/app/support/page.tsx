import type { Metadata } from "next";
import { CtaBanner, PageIntro } from "@/components/Sections";

export const metadata: Metadata = { title: "FAQ & Support" };

const faqs = [
  { q: "Which strapping material is right for my product?", a: "PP strap suits light to medium loads, PET is a strong and cost-effective alternative to steel for heavy loads, and steel strap is used for the heaviest, sharp-edged or hot products. Our specialists will help you choose." },
  { q: "Can I see a coder working before I buy?", a: "Yes. Contact us and we will arrange a demonstration or print samples on your own products." },
  { q: "Do you offer maintenance contracts?", a: "We offer preventive maintenance contracts with scheduled visits, priority response times and discounted spare parts." },
  { q: "How quickly can I get spare parts?", a: "Common spare parts are kept in stock and are usually shipped the same or the next working day." },
  { q: "Do your consumables work with other brands’ machines?", a: "In most cases, yes. Tell us your machine model and we will recommend a compatible consumable." },
  { q: "Do you provide operator training?", a: "Every installation includes operator training. Additional maintenance training for your technicians is available on request." },
];

export default function SupportPage() {
  return (
    <>
      <PageIntro lines={["Frequently Asked", "Questions."]} text="Quick answers about our machines, consumables and service." crumbs={[{ href: "/resources", label: "Resources" }, { label: "FAQ" }]} />
      <section className="py-20 sm:py-28">
        <div className="container-x">
          <div className="border-t border-line">
            {faqs.map((f) => (
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
      <CtaBanner title="Didn’t find your answer?" text="Our support team is ready to help with any question." />
    </>
  );
}
