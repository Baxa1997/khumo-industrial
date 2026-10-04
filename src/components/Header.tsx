"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Icon from "./Icon";
import Logo from "./Logo";
import { company, industries, solutions } from "@/lib/data";

type MenuKey = "solutions" | "industries" | null;

export default function Header() {
  const [open, setOpen] = useState<MenuKey>(null);
  const [mobile, setMobile] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(null);
    setMobile(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const simpleLinks = [
    { href: "/service", label: "Service" },
    { href: "/about", label: "About us" },
    { href: "/news", label: "News" },
  ];

  return (
    <header className="sticky top-0 z-50">
      {/* Top bar */}
      <div className="hidden bg-navy-950 text-xs text-white/70 md:block">
        <div className="container-x flex h-9 items-center justify-between">
          <p>{company.tagline}</p>
          <div className="flex items-center gap-6">
            <a href={`tel:${company.phone.replace(/\s/g, "")}`} className="flex items-center gap-1.5 hover:text-white">
              <Icon name="phone" className="h-3.5 w-3.5" /> {company.phone}
            </a>
            <a href={`mailto:${company.email}`} className="flex items-center gap-1.5 hover:text-white">
              <Icon name="mail" className="h-3.5 w-3.5" /> {company.email}
            </a>
            <Link href="/support" className="hover:text-white">Support</Link>
            <span className="flex items-center gap-1.5">
              <Icon name="globe" className="h-3.5 w-3.5" /> EN
            </span>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div
        className={`border-b bg-white transition-shadow ${scrolled ? "border-line shadow-md" : "border-transparent"}`}
        onMouseLeave={() => setOpen(null)}
      >
        <div className="container-x flex h-18 items-center justify-between gap-6">
          <Logo />

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
            {(["solutions", "industries"] as const).map((key) => (
              <button
                key={key}
                type="button"
                onMouseEnter={() => setOpen(key)}
                onClick={() => setOpen(open === key ? null : key)}
                aria-expanded={open === key}
                className={`flex items-center gap-1 rounded-full px-4 py-2 text-sm font-semibold capitalize transition-colors hover:text-brand-500 ${
                  open === key || pathname.startsWith(`/${key}`) ? "text-brand-500" : "text-ink"
                }`}
              >
                {key}
                <Icon name="chevron" className={`h-4 w-4 transition-transform ${open === key ? "rotate-180" : ""}`} />
              </button>
            ))}
            {simpleLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onMouseEnter={() => setOpen(null)}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors hover:text-brand-500 ${
                  pathname.startsWith(l.href) ? "text-brand-500" : "text-ink"
                }`}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <Link href="/contact" className="btn-dark">
              Contact us <Icon name="arrow" className="h-4 w-4" />
            </Link>
          </div>

          <button
            type="button"
            className="rounded-md p-2 lg:hidden"
            onClick={() => setMobile((v) => !v)}
            aria-label={mobile ? "Close menu" : "Open menu"}
            aria-expanded={mobile}
          >
            <Icon name={mobile ? "close" : "menu"} />
          </button>
        </div>

        {/* Mega menu */}
        {open && (
          <div className="absolute inset-x-0 hidden border-t border-line bg-white shadow-xl lg:block">
            <div className="container-x grid grid-cols-12 gap-8 py-10">
              <div className="col-span-3">
                <p className="eyebrow">{open === "solutions" ? "Our solutions" : "Industries we serve"}</p>
                <p className="mt-3 text-2xl font-bold text-navy-900">
                  {open === "solutions" ? "Everything for the end of your line" : "Packaging know-how for your sector"}
                </p>
                <Link href={`/${open}`} className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-500 hover:underline">
                  View all {open} <Icon name="arrow" className="h-4 w-4" />
                </Link>
              </div>
              <div className="col-span-9 grid grid-cols-3 gap-2">
                {(open === "solutions" ? solutions : industries).map((item) => (
                  <Link
                    key={item.slug}
                    href={`/${open}/${item.slug}`}
                    className="group flex items-start gap-3 rounded-xl p-3 transition-colors hover:bg-surface"
                  >
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-surface text-navy-800 group-hover:bg-brand-500 group-hover:text-white">
                      <Icon name={item.icon} className="h-5 w-5" />
                    </span>
                    <span>
                      <span className="block text-sm font-semibold text-ink">{item.name}</span>
                      <span className="mt-0.5 line-clamp-2 block text-xs text-muted">{item.summary}</span>
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Mobile menu */}
      {mobile && (
        <div className="max-h-[calc(100vh-4.5rem)] overflow-y-auto border-b border-line bg-white lg:hidden">
          <nav className="container-x flex flex-col py-4" aria-label="Mobile">
            <MobileGroup title="Solutions" base="/solutions" items={solutions} />
            <MobileGroup title="Industries" base="/industries" items={industries} />
            {[...simpleLinks, { href: "/support", label: "Support" }].map((l) => (
              <Link key={l.href} href={l.href} className="border-b border-line py-3 font-semibold">
                {l.label}
              </Link>
            ))}
            <Link href="/contact" className="btn-dark mt-4">Contact us</Link>
          </nav>
        </div>
      )}
    </header>
  );
}

function MobileGroup({ title, base, items }: { title: string; base: string; items: { slug: string; name: string }[] }) {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className="border-b border-line">
      <button type="button" className="flex w-full items-center justify-between py-3 font-semibold" onClick={() => setExpanded((v) => !v)} aria-expanded={expanded}>
        {title}
        <Icon name="chevron" className={`h-4 w-4 transition-transform ${expanded ? "rotate-180" : ""}`} />
      </button>
      {expanded && (
        <div className="flex flex-col pb-3 pl-3">
          <Link href={base} className="py-1.5 text-sm font-semibold text-brand-500">All {title.toLowerCase()}</Link>
          {items.map((i) => (
            <Link key={i.slug} href={`${base}/${i.slug}`} className="py-1.5 text-sm text-muted">
              {i.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
