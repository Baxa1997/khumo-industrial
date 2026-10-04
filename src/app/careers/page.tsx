import type { Metadata } from "next";
import Link from "next/link";
import { CtaBanner, PageIntro, SplitHeading } from "@/components/Sections";
import Icon from "@/components/Icon";
import { company } from "@/lib/data";

export const metadata: Metadata = { title: "Careers" };

const perks = [
  { icon: "tool" as const, t: "Hands-on Work", d: "Install, service and optimize real packaging lines for leading manufacturers." },
  { icon: "book" as const, t: "Training", d: "Technical training on the equipment we sell and service." },
  { icon: "globe" as const, t: "Regional Team", d: "Work with colleagues and customers across Uzbekistan." },
];

export default function CareersPage() {
  return (
    <>
      <PageIntro
        lines={["Build Your Career", "With Us."]}
        text={`We are always looking for service technicians, application engineers and sales specialists who want to help customers package better.`}
        crumbs={[{ href: "/about", label: "About" }, { label: "Careers" }]}
      />
      <section className="py-20 sm:py-28">
        <div className="container-x">
          <SplitHeading title="Why Work at Khumo Industrial?">
            <p>We are a growing team of packaging specialists. Send us your CV and tell us how you would like to contribute.</p>
            <div className="pt-4">
              <a href={company.telegram.href} target="_blank" rel="noopener noreferrer" className="btn-orange">Send Your Application</a>
            </div>
          </SplitHeading>
          <div className="mt-16 grid gap-5 md:grid-cols-3">
            {perks.map((p) => (
              <div key={p.t} className="rounded-xl bg-surface p-8">
                <Icon name={p.icon} className="h-9 w-9 text-orange-500" strokeWidth={1.5} />
                <p className="display mt-8 text-2xl tracking-[-0.035em]">{p.t}</p>
                <p className="mt-3 leading-relaxed text-muted">{p.d}</p>
              </div>
            ))}
          </div>
          <p className="mt-10 text-muted">
            No open position that fits? <Link href="/contact" className="text-orange-500 hover:underline">Contact us</Link> anyway.
          </p>
        </div>
      </section>
      <CtaBanner />
    </>
  );
}
