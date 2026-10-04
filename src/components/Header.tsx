"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Icon from "./Icon";
import Logo from "./Logo";
import { useFavorites } from "@/lib/favorites";
import { announcement, industries, locations, resources, solutions } from "@/lib/data";

type MenuKey = "products" | "industries" | "resources" | null;

const nav: { label: string; href: string; menu?: Exclude<MenuKey, null> }[] = [
  { label: "Products", href: "/products", menu: "products" },
  { label: "Service", href: "/service" },
  { label: "Industries", href: "/industries", menu: "industries" },
  { label: "Resources", href: "/resources", menu: "resources" },
  { label: "About", href: "/about" },
];

export default function Header() {
  const [open, setOpen] = useState<MenuKey>(null);
  const [mobile, setMobile] = useState(false);
  const [locOpen, setLocOpen] = useState(false);
  const pathname = usePathname();
  const { favorites } = useFavorites();
  const locRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setOpen(null);
    setMobile(false);
    setLocOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!locOpen) return;
    const onClick = (e: MouseEvent) => {
      if (!locRef.current?.contains(e.target as Node)) setLocOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [locOpen]);

  return (
    <header className="sticky top-0 z-50 bg-white">
      {/* Announcement bar */}
      <div className="bg-black text-white">
        <div className="flex h-9 items-center justify-between gap-4 px-4 text-[13px] sm:px-7">
          <p className="truncate">
            {announcement.text}{" "}
            <Link href={announcement.link.href} className="underline underline-offset-2 hover:text-orange-500">
              {announcement.link.label}
            </Link>
          </p>
          <div className="hidden shrink-0 items-center gap-5 sm:flex">
            <div ref={locRef} className="relative">
              <button type="button" onClick={() => setLocOpen((v) => !v)} aria-expanded={locOpen} className="hover:text-orange-500">
                Select a Location
              </button>
              {locOpen && (
                <div className="absolute right-0 top-8 z-10 w-64 rounded-xl bg-white p-2 text-ink shadow-xl ring-1 ring-line">
                  {locations.map((l) => (
                    <Link key={l.name} href="/contact#locations" className="block rounded-lg px-3 py-2 hover:bg-surface">
                      <span className="block font-medium">{l.name}</span>
                      <span className="block text-xs text-muted">{l.city} · {l.phone}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <span className="text-white/60">|</span>
            <Link href="/contact" className="hover:text-orange-500">Contact</Link>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="relative border-b border-transparent" onMouseLeave={() => setOpen(null)}>
        <div className="flex h-[4.5rem] items-center gap-6 px-4 sm:px-7 lg:h-20">
          <Logo />

          <nav className="hidden items-center gap-1 lg:flex xl:ml-6" aria-label="Main">
            {nav.map((item) => {
              const active = pathname.startsWith(item.href) || (item.menu === "products" && pathname.startsWith("/category"));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onMouseEnter={() => setOpen(item.menu ?? null)}
                  onFocus={() => setOpen(item.menu ?? null)}
                  aria-expanded={item.menu ? open === item.menu : undefined}
                  className={`rounded-full px-3.5 py-2 text-[17px] transition-colors hover:text-orange-500 ${
                    active || (item.menu && open === item.menu) ? "text-orange-500" : "text-ink/85"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="ml-auto hidden items-center gap-5 lg:flex">
            <SearchBox className="hidden w-72 xl:flex 2xl:w-[21rem]" />
            <Link href="/search" aria-label="Search" className="p-1.5 hover:text-orange-500 xl:hidden">
              <Icon name="search" className="h-7 w-7" />
            </Link>
            <Link href="/contact?topic=quote" className="btn-orange xl:px-10 xl:text-lg">Request a Quote</Link>
            <FavoritesLink count={favorites.length} />
          </div>

          <div className="ml-auto flex items-center gap-2 lg:hidden">
            <FavoritesLink count={favorites.length} />
            <button
              type="button"
              className="rounded-md p-2"
              onClick={() => setMobile((v) => !v)}
              aria-label={mobile ? "Close menu" : "Open menu"}
              aria-expanded={mobile}
            >
              <Icon name={mobile ? "close" : "menu"} className="h-7 w-7" />
            </button>
          </div>
        </div>

        {open && <MegaMenu menu={open} />}
      </div>

      {mobile && (
        <div className="max-h-[calc(100vh-7rem)] overflow-y-auto border-t border-line bg-white lg:hidden">
          <div className="flex flex-col gap-1 px-4 py-4 sm:px-7">
            <SearchBox className="mb-3 w-full" />
            <MobileGroup title="Products" base="/products" items={solutions.map((s) => ({ href: `/category/${s.slug}`, label: s.name }))} />
            <Link href="/service" className="border-b border-line py-3.5 text-lg">Service</Link>
            <MobileGroup title="Industries" base="/industries" items={industries.map((i) => ({ href: `/industries/${i.slug}`, label: i.name }))} />
            <MobileGroup title="Resources" base="/resources" items={resources.map((r) => ({ href: r.href, label: r.label }))} />
            <Link href="/about" className="border-b border-line py-3.5 text-lg">About</Link>
            <Link href="/contact" className="border-b border-line py-3.5 text-lg">Contact</Link>
            <Link href="/contact?topic=quote" className="btn-orange mt-4">Request a Quote</Link>
          </div>
        </div>
      )}
    </header>
  );
}

function SearchBox({ className = "" }: { className?: string }) {
  const router = useRouter();
  const [q, setQ] = useState("");
  return (
    <form
      role="search"
      className={`flex h-14 items-center gap-3 rounded-full border border-ink/25 px-5 transition-colors focus-within:border-navy-800 ${className}`}
      onSubmit={(e) => {
        e.preventDefault();
        router.push(`/search?q=${encodeURIComponent(q.trim())}`);
      }}
    >
      <Icon name="search" className="h-5 w-5 shrink-0 text-ink/70" />
      <input
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder="Search Khumo"
        aria-label="Search Khumo"
        className="w-full bg-transparent text-[17px] outline-none placeholder:text-ink/60"
      />
    </form>
  );
}

function FavoritesLink({ count }: { count: number }) {
  return (
    <Link href="/favorites" aria-label={`Saved products (${count})`} className="relative p-1.5 text-ink hover:text-orange-500">
      <Icon name="heart" className="h-8 w-8" strokeWidth={1.6} />
      {count > 0 && (
        <span className="absolute -right-0.5 -top-0.5 grid h-5 min-w-5 place-items-center rounded-full bg-orange-500 px-1 text-[11px] font-semibold text-white">
          {count}
        </span>
      )}
    </Link>
  );
}

function MegaMenu({ menu }: { menu: Exclude<MenuKey, null> }) {
  if (menu === "resources") {
    return (
      <Panel title="Resources" text="Insights, news and support to help you get the most from your packaging." href="/resources">
        <div className="grid grid-cols-2 gap-3">
          {resources.map((r) => (
            <Link key={r.href} href={r.href} className="group rounded-2xl bg-surface p-6 transition-colors hover:bg-steel-400 hover:text-white">
              <span className="display block text-2xl">{r.label}</span>
              <span className="mt-2 block text-sm text-muted group-hover:text-white/85">{r.description}</span>
            </Link>
          ))}
        </div>
      </Panel>
    );
  }
  const isProducts = menu === "products";
  const items = isProducts
    ? solutions.map((s) => ({ href: `/category/${s.slug}`, label: s.name, icon: s.icon }))
    : industries.map((i) => ({ href: `/industries/${i.slug}`, label: i.name, icon: i.icon }));
  return (
    <Panel
      title={isProducts ? "Products" : "Industries"}
      text={isProducts ? "Complete end-of-line packaging, from handheld tools to fully automated systems." : "Packaging expertise tailored to the challenges of your sector."}
      href={isProducts ? "/products" : "/industries"}
    >
      <div className={`grid gap-3 ${isProducts ? "grid-cols-3" : "grid-cols-4"}`}>
        {items.map((i) => (
          <Link
            key={i.href}
            href={i.href}
            className={`group flex items-center justify-between gap-3 rounded-2xl bg-steel-400 px-5 text-white transition-colors hover:bg-steel-600 ${isProducts ? "h-24" : "h-16"}`}
          >
            <span className="display text-xl">{i.label}</span>
            <Icon name={i.icon} className="h-7 w-7 shrink-0 opacity-80" />
          </Link>
        ))}
      </div>
    </Panel>
  );
}

function Panel({ title, text, href, children }: { title: string; text: string; href: string; children: React.ReactNode }) {
  return (
    <div className="absolute inset-x-0 top-full hidden border-t border-line bg-white shadow-2xl lg:block">
      <div className="container-x grid grid-cols-12 gap-10 py-12">
        <div className="col-span-3">
          <p className="display text-4xl">{title}</p>
          <p className="mt-4 text-muted">{text}</p>
          <Link href={href} className="btn-orange mt-8">View All</Link>
        </div>
        <div className="col-span-9">{children}</div>
      </div>
    </div>
  );
}

function MobileGroup({ title, base, items }: { title: string; base: string; items: { href: string; label: string }[] }) {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className="border-b border-line">
      <button type="button" className="flex w-full items-center justify-between py-3.5 text-lg" onClick={() => setExpanded((v) => !v)} aria-expanded={expanded}>
        {title}
        <Icon name="chevron" className={`h-5 w-5 transition-transform ${expanded ? "rotate-180" : ""}`} />
      </button>
      {expanded && (
        <div className="flex flex-col pb-3 pl-3">
          <Link href={base} className="py-1.5 font-medium text-orange-500">All {title.toLowerCase()}</Link>
          {items.map((i) => (
            <Link key={i.href} href={i.href} className="py-1.5 text-muted">{i.label}</Link>
          ))}
        </div>
      )}
    </div>
  );
}
