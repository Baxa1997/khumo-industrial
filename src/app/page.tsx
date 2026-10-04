import Link from "next/link";
import Icon from "@/components/Icon";
import { CtaBanner, IndustryGrid, SectionHeading, ServiceGrid, SolutionCards, StatsBar } from "@/components/Sections";
import { NewsCards } from "@/components/NewsCards";
import { solutions } from "@/lib/data";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="hero-pattern relative overflow-hidden text-white">
        <div className="grid-lines absolute inset-0" aria-hidden="true" />
        <div className="container-x relative grid items-center gap-12 py-20 lg:grid-cols-2 lg:py-28">
          <div>
            <p className="eyebrow text-accent-500">Packaging solutions for industry</p>
            <h1 className="mt-4 text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl">
              Secure your products. <span className="text-accent-500">Simplify</span> your packaging.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/75">
              Strapping, wrapping, sealing, coding and consumables — one partner for your complete end-of-line, backed
              by expert advice, installation and service.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link href="/solutions" className="btn-primary">
                Explore solutions <Icon name="arrow" className="h-4 w-4" />
              </Link>
              <Link href="/contact" className="btn-outline">Get custom advice</Link>
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              {solutions.slice(0, 4).map((s, idx) => (
                <Link
                  key={s.slug}
                  href={`/solutions/${s.slug}`}
                  className={`group rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur transition-colors hover:border-accent-500 hover:bg-white/10 ${
                    idx % 2 === 1 ? "translate-y-8" : ""
                  }`}
                >
                  <Icon name={s.icon} className="h-10 w-10 text-accent-500" />
                  <p className="mt-8 text-lg font-bold">{s.name}</p>
                  <p className="mt-1 flex items-center gap-1 text-xs text-white/60 group-hover:text-white">
                    Learn more <Icon name="arrow" className="h-3 w-3" />
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quick links strip */}
      <section className="border-b border-line bg-white">
        <div className="container-x grid divide-line sm:grid-cols-3 sm:divide-x">
          {[
            { icon: "chat" as const, title: "Custom advice", text: "Talk to a packaging specialist", href: "/contact" },
            { icon: "headset" as const, title: "Service & support", text: "Maintenance, repair and spare parts", href: "/service" },
            { icon: "roll" as const, title: "Order consumables", text: "Strap, film, tape and inks", href: "/solutions/consumables" },
          ].map((q) => (
            <Link key={q.title} href={q.href} className="group flex items-center gap-4 py-6 sm:px-6 first:sm:pl-0">
              <span className="grid h-12 w-12 place-items-center rounded-full bg-surface text-brand-500">
                <Icon name={q.icon} />
              </span>
              <span className="flex-1">
                <span className="block font-bold text-navy-900">{q.title}</span>
                <span className="block text-sm text-muted">{q.text}</span>
              </span>
              <Icon name="arrow" className="h-5 w-5 text-muted transition-transform group-hover:translate-x-1 group-hover:text-brand-500" />
            </Link>
          ))}
        </div>
      </section>

      {/* Solutions */}
      <section className="bg-surface py-24">
        <div className="container-x">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading
              eyebrow="Our solutions"
              title="Complete packaging solutions"
              text="From a single handheld tool to a fully automated end-of-line system — we have the right solution for your products, volumes and budget."
            />
            <Link href="/solutions" className="btn-dark shrink-0">
              All solutions <Icon name="arrow" className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-14">
            <SolutionCards />
          </div>
        </div>
      </section>

      {/* About / value proposition */}
      <section className="py-24">
        <div className="container-x grid items-center gap-16 lg:grid-cols-2">
          <div className="relative">
            <div className="hero-pattern relative aspect-[4/3] overflow-hidden rounded-3xl">
              <div className="grid-lines absolute inset-0" aria-hidden="true" />
              <div className="absolute inset-0 grid place-items-center">
                <Icon name="box" className="h-40 w-40 text-white/20" strokeWidth={1} />
              </div>
            </div>
            <div className="absolute -bottom-8 -right-4 rounded-2xl bg-accent-500 p-6 text-navy-950 shadow-xl sm:right-8">
              <p className="text-4xl font-extrabold">15+</p>
              <p className="text-sm font-semibold">years of packaging expertise</p>
            </div>
          </div>
          <div>
            <SectionHeading
              eyebrow="Why Khumo Industrial"
              title="Your trusted partner for packaging"
              text="We help manufacturers and logistics companies increase productivity, reduce costs and protect their products — with the right machines, the right consumables and service you can rely on."
            />
            <ul className="mt-8 grid gap-5 sm:grid-cols-2">
              {[
                { t: "One-stop shop", d: "Machines, consumables and service from a single source." },
                { t: "Expert engineers", d: "Application specialists who understand your line." },
                { t: "Fast service", d: "Local technicians and spare parts in stock." },
                { t: "Sustainable choices", d: "Solutions that cut material use and waste." },
              ].map((f) => (
                <li key={f.t} className="rounded-xl border border-line p-5">
                  <p className="font-bold text-navy-900">{f.t}</p>
                  <p className="mt-1 text-sm text-muted">{f.d}</p>
                </li>
              ))}
            </ul>
            <Link href="/about" className="mt-8 inline-flex items-center gap-2 font-semibold text-brand-500 hover:underline">
              More about us <Icon name="arrow" className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="pb-24 pt-8">
        <div className="container-x">
          <StatsBar />
        </div>
      </section>

      {/* Industries */}
      <section className="bg-navy-900 py-24">
        <div className="container-x">
          <SectionHeading
            light
            eyebrow="Industries"
            title="Solutions for your industry"
            text="Every industry has its own packaging challenges. Discover how we help companies in your sector."
          />
          <div className="mt-14">
            <IndustryGrid />
          </div>
        </div>
      </section>

      {/* Service */}
      <section className="py-24">
        <div className="container-x">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading
              eyebrow="Service"
              title="We've got your back"
              text="From the first consultation through installation, training and maintenance — our service team keeps your packaging running."
            />
            <Link href="/service" className="btn-dark shrink-0">
              Our service <Icon name="arrow" className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-14">
            <ServiceGrid />
          </div>
        </div>
      </section>

      {/* News */}
      <section className="bg-surface py-24">
        <div className="container-x">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading eyebrow="News & events" title="Latest from Khumo Industrial" />
            <Link href="/news" className="inline-flex items-center gap-2 font-semibold text-brand-500 hover:underline">
              All news <Icon name="arrow" className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-12">
            <NewsCards />
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
