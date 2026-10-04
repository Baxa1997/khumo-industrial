"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Icon from "./Icon";
import Logo from "./Logo";
import { useFavorites } from "@/lib/favorites";
import Photo from "./Photo";
import { announcement, company, locations } from "@/lib/data";
import { menus, type MegaMenu as MegaMenuData } from "@/lib/menus";

type MenuKey = keyof typeof menus | null;

const nav: { label: string; href: string; menu: Exclude<MenuKey, null> }[] = [
  { label: "Products", href: "/products", menu: "products" },
  { label: "Service", href: "/service", menu: "service" },
  { label: "Industries", href: "/industries", menu: "industries" },
  { label: "Resources", href: "/resources", menu: "resources" },
  { label: "About", href: "/about", menu: "about" },
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
        <div className="flex h-8 items-center justify-between gap-4 px-4 text-xs sm:px-7">
          <p className="min-w-0 truncate">
            <span className="font-medium">{announcement.partner}</span>
            <span className="hidden md:inline">
              {" · "}
              {announcement.text}{" "}
              <Link href={announcement.link.href} className="underline underline-offset-2 hover:text-orange-500">
                {announcement.link.label}
              </Link>
            </span>
          </p>
          <a href={company.phoneHref} className="shrink-0 hover:text-orange-500 sm:hidden">{company.phone}</a>
          <div className="hidden shrink-0 items-center gap-5 sm:flex">
            <a href={company.phoneHref} className="hover:text-orange-500">{company.phone}</a>
            <span className="text-white/60">|</span>
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
      <div className={`relative border-b ${open ? "border-orange-500" : "border-transparent"}`} onMouseLeave={() => setOpen(null)}>
        <div className="mx-auto flex h-16 max-w-[110rem] items-center gap-6 px-4 sm:px-7 xl:px-[6.5%]">
          <Logo />

          <nav className="hidden items-center gap-0.5 lg:flex xl:ml-4" aria-label="Main">
            {nav.map((item) => {
              const active =
                pathname.startsWith(item.href) ||
                (item.menu === "products" && pathname.startsWith("/category")) ||
                (item.menu === "about" && ["/company-history", "/sustainability", "/careers"].some((p) => pathname.startsWith(p)));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onMouseEnter={() => setOpen(item.menu)}
                  onFocus={() => setOpen(item.menu)}
                  aria-expanded={open === item.menu}
                  className={`rounded-full px-3 py-2 text-[15px] transition-colors hover:text-orange-500 ${
                    (open ? open === item.menu : active) ? "text-orange-500" : "text-ink/85"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="ml-auto hidden items-center gap-4 lg:flex">
            <SearchBox className="hidden w-60 xl:flex 2xl:w-72" />
            <Link href="/search" aria-label="Search" className="p-1.5 hover:text-orange-500 xl:hidden">
              <Icon name="search" className="h-6 w-6" />
            </Link>
            <Link href="/contact?topic=quote" className="btn-orange px-6 py-2.5 text-[15px] xl:px-8">Request a Quote</Link>
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
              <Icon name={mobile ? "close" : "menu"} className="h-6 w-6" />
            </button>
          </div>
        </div>

        {open && <MegaMenu menu={menus[open]} />}
      </div>
      {open && <div className="pointer-events-none fixed inset-x-0 bottom-0 top-24 -z-10 hidden bg-[#eef1f5]/80 lg:block" aria-hidden="true" />}

      {mobile && <MobileMenu onClose={() => setMobile(false)} favorites={favorites.length} />}
    </header>
  );
}

function SearchBox({ className = "" }: { className?: string }) {
  const router = useRouter();
  const [q, setQ] = useState("");
  return (
    <form
      role="search"
      className={`flex h-11 items-center gap-2.5 rounded-full border border-ink/25 px-4 transition-colors focus-within:border-navy-800 ${className}`}
      onSubmit={(e) => {
        e.preventDefault();
        router.push(`/search?q=${encodeURIComponent(q.trim())}`);
      }}
    >
      <Icon name="search" className="h-[18px] w-[18px] shrink-0 text-ink/70" />
      <input
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder="Search Khumo"
        aria-label="Search Khumo"
        className="w-full bg-transparent text-[15px] outline-none placeholder:text-ink/60"
      />
    </form>
  );
}

function FavoritesLink({ count }: { count: number }) {
  return (
    <Link href="/favorites" aria-label={`Saved products (${count})`} className="relative p-1.5 text-ink hover:text-orange-500">
      <Icon name="heart" className="h-6 w-6" strokeWidth={1.7} />
      {count > 0 && (
        <span className="absolute -right-0.5 -top-0.5 grid h-5 min-w-5 place-items-center rounded-full bg-orange-500 px-1 text-[11px] font-semibold text-white">
          {count}
        </span>
      )}
    </Link>
  );
}

function MegaMenu({ menu }: { menu: MegaMenuData }) {
  return (
    <div className="absolute inset-x-0 top-full hidden lg:block">
      <div className="mx-auto max-w-[110rem] px-4 sm:px-7 xl:px-[5.5%]">
        <div className="grid grid-cols-12 bg-white py-9 shadow-[0_25px_40px_-25px_rgba(0,0,0,0.15)]">
          <ul className="col-span-3 space-y-5 border-r border-line pl-[22%] pr-6 xl:col-span-2 xl:pl-[35%]">
            {menu.side.map((l) => (
              <li key={l.href + l.label}>
                <Link href={l.href} className="display text-[15px] tracking-[-0.03em] text-ink hover:text-orange-500">{l.label}</Link>
              </li>
            ))}
          </ul>
          <div className="col-span-9 pl-10 pr-8 xl:col-span-10">
            {menu.columns && (
              <div className="grid grid-cols-3 gap-x-8 gap-y-10">
                {menu.columns.map((c) => (
                  <div key={c.title}>
                    <Link href={c.href} className="text-[13px] font-semibold uppercase tracking-[0.06em] text-navy-800 hover:text-orange-500">
                      {c.title}
                    </Link>
                    <ul className="mt-3 space-y-2">
                      {c.links.map((l) => (
                        <li key={l.href + l.label}>
                          <Link href={l.href} className="text-[13px] tracking-[0.01em] text-ink/70 hover:text-orange-500">{l.label}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}
            {menu.links && (
              <ul className="grid grid-cols-3 gap-x-8 gap-y-3">
                {menu.links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-[13px] font-semibold uppercase tracking-[0.06em] text-navy-800 hover:text-orange-500">{l.label}</Link>
                  </li>
                ))}
              </ul>
            )}
            {menu.cards && (
              <div className="flex flex-wrap gap-9 xl:pl-[10%]">
                {menu.cards.map((c) => (
                  <Link key={c.href + c.cta} href={c.href} className="group w-60">
                    <Photo src={c.image} alt="" className="h-34 w-full rounded-md" />
                    <p className="mt-4 text-[13px] leading-relaxed text-ink/75">{c.text}</p>
                    <span className="mt-2 inline-flex items-center gap-1.5 text-[13px] text-orange-500 group-hover:underline">
                      {c.cta} <Icon name="arrow" className="h-3.5 w-3.5" strokeWidth={2.2} />
                    </span>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function MobileMenu({ onClose, favorites }: { onClose: () => void; favorites: number }) {
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const [openSub, setOpenSub] = useState<string | null>(null);

  // Take over the screen: lock page scroll and close on Escape.
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  const groups: { key: string; label: string; href: string; links: { href: string; label: string }[]; columns?: typeof menus.products.columns }[] = [
    { key: "products", label: "Products", href: "/products", links: menus.products.side, columns: menus.products.columns },
    { key: "service", label: "Service", href: "/service", links: menus.service.side },
    { key: "industries", label: "Industries", href: "/industries", links: [...menus.industries.side, ...(menus.industries.links ?? [])] },
    { key: "resources", label: "Resources", href: "/resources", links: menus.resources.side },
    { key: "about", label: "About", href: "/about", links: menus.about.side },
  ];

  return (
    <div className="mobile-menu fixed inset-0 z-[70] flex flex-col bg-white lg:hidden" role="dialog" aria-modal="true" aria-label="Menu">
      <div className="flex h-16 shrink-0 items-center justify-between border-b border-line px-4 sm:px-7">
        <Logo />
        <div className="flex items-center gap-1">
          <FavoritesLink count={favorites} />
          <button type="button" onClick={onClose} aria-label="Close menu" className="grid h-11 w-11 place-items-center rounded-full hover:bg-surface">
            <Icon name="close" className="h-6 w-6" />
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto overscroll-contain px-4 pb-8 pt-5 sm:px-7">
        <SearchBox className="w-full" />
        <nav className="mt-4" aria-label="Mobile">
          {groups.map((g) => {
            const expanded = openGroup === g.key;
            return (
              <div key={g.key} className="border-b border-line">
                <button
                  type="button"
                  onClick={() => {
                    setOpenGroup(expanded ? null : g.key);
                    setOpenSub(null);
                  }}
                  aria-expanded={expanded}
                  className={`flex w-full items-center justify-between py-4 text-left text-xl font-medium tracking-[-0.02em] ${expanded ? "text-orange-500" : ""}`}
                >
                  {g.label}
                  <Icon name="chevron" className={`h-5 w-5 transition-transform ${expanded ? "rotate-180" : ""}`} />
                </button>
                {expanded && (
                  <div className="pb-5">
                    <ul className="grid gap-1 sm:grid-cols-2">
                      {g.links.map((l) => (
                        <li key={l.href + l.label}>
                          <Link href={l.href} className="block rounded-lg px-3 py-2.5 text-[15px] font-medium hover:bg-surface hover:text-orange-500">
                            {l.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                    {g.columns && (
                      <div className="mt-3 overflow-hidden rounded-xl bg-surface">
                        {g.columns.map((c) => {
                          const subOpen = openSub === c.title;
                          return (
                            <div key={c.title} className="border-b border-line/80 last:border-0">
                              <button
                                type="button"
                                onClick={() => setOpenSub(subOpen ? null : c.title)}
                                aria-expanded={subOpen}
                                className="flex w-full items-center justify-between px-4 py-3.5 text-left text-[13px] font-semibold uppercase tracking-[0.06em] text-navy-800"
                              >
                                {c.title}
                                <Icon name="chevron" className={`h-4 w-4 transition-transform ${subOpen ? "rotate-180" : ""}`} />
                              </button>
                              {subOpen && (
                                <ul className="px-4 pb-3">
                                  {c.links.map((l) => (
                                    <li key={l.href + l.label}>
                                      <Link href={l.href} className="block py-2 text-[15px] text-ink/75 hover:text-orange-500">{l.label}</Link>
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
          <Link href="/contact" className="block border-b border-line py-4 text-xl font-medium tracking-[-0.02em]">Contact</Link>
        </nav>

        <div className="mt-8 space-y-3 text-[15px]">
          <a href={company.phoneHref} className="flex items-center gap-3"><Icon name="phone" className="h-5 w-5 text-orange-500" />{company.phone}</a>
          <a href={company.telegram.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3"><Icon name="send" className="h-5 w-5 text-orange-500" />Telegram {company.telegram.label}</a>
          <a href={company.instagram.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3"><Icon name="instagram" className="h-5 w-5 text-orange-500" />Instagram {company.instagram.label}</a>
        </div>
      </div>

      <div className="shrink-0 border-t border-line bg-white p-4 sm:px-7">
        <Link href="/contact?topic=quote" className="btn-orange w-full">Request a Quote</Link>
      </div>
    </div>
  );
}
