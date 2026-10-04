import type { Metadata } from "next";
import { CtaBanner, PageIntro } from "@/components/Sections";
import { milestones } from "@/lib/data";

export const metadata: Metadata = { title: "Our History" };

export default function HistoryPage() {
  return (
    <>
      <PageIntro
        lines={["Our History."]}
        text="More than a century of Cyklop packaging innovation — now available in Uzbekistan through Khumo Industrial."
        crumbs={[{ href: "/about", label: "About" }, { label: "History" }]}
      />
      <section className="py-20 sm:py-28">
        <div className="container-x">
          <ol>
            {milestones.map((m) => (
              <li key={m.year} className="grid gap-4 border-t border-line py-10 last:border-b sm:grid-cols-12">
                <span className="display text-5xl text-orange-500 sm:col-span-4 sm:text-6xl">{m.year}</span>
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
