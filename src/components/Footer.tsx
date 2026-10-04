import Link from "next/link";
import Icon from "./Icon";
import Logo from "./Logo";
import { company, industries, solutions } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-navy-950 text-white/70">
      <div className="container-x grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Logo light />
          <p className="mt-5 max-w-sm text-sm leading-relaxed">
            Strapping, wrapping, sealing, coding and consumables — complete packaging solutions with expert advice and
            reliable service.
          </p>
          <ul className="mt-6 space-y-3 text-sm">
            <li className="flex items-center gap-3"><Icon name="pin" className="h-4 w-4 text-accent-500" />{company.address}</li>
            <li><a href={`tel:${company.phone.replace(/\s/g, "")}`} className="flex items-center gap-3 hover:text-white"><Icon name="phone" className="h-4 w-4 text-accent-500" />{company.phone}</a></li>
            <li><a href={`mailto:${company.email}`} className="flex items-center gap-3 hover:text-white"><Icon name="mail" className="h-4 w-4 text-accent-500" />{company.email}</a></li>
          </ul>
        </div>

        <FooterCol title="Solutions" links={solutions.map((s) => ({ href: `/solutions/${s.slug}`, label: s.name }))} />
        <FooterCol title="Industries" links={industries.slice(0, 6).map((i) => ({ href: `/industries/${i.slug}`, label: i.name }))} />
        <FooterCol
          title="Company"
          links={[
            { href: "/about", label: "About us" },
            { href: "/about#history", label: "History" },
            { href: "/service", label: "Service" },
            { href: "/news", label: "News & events" },
            { href: "/support", label: "Support & FAQ" },
            { href: "/contact", label: "Contact" },
          ]}
        />
      </div>
      <div className="border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-3 py-6 text-xs md:flex-row">
          <p>© {year} {company.name}. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white">Privacy policy</Link>
            <Link href="/terms" className="hover:text-white">Terms & conditions</Link>
            <Link href="/imprint" className="hover:text-white">Imprint</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: { href: string; label: string }[] }) {
  return (
    <div className="lg:col-span-2 lg:first-of-type:col-span-2">
      <h3 className="text-sm font-bold uppercase tracking-wider text-white">{title}</h3>
      <ul className="mt-5 space-y-2.5 text-sm">
        {links.map((l) => (
          <li key={l.href}>
            <Link href={l.href} className="hover:text-white">{l.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
