import Link from "next/link";
import Icon from "./Icon";
import Logo from "./Logo";
import { company, industries, resources, solutions } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();
  const cols = [
    { title: "Products", links: solutions.map((s) => ({ href: `/category/${s.slug}`, label: s.name })) },
    { title: "Industries", links: industries.slice(0, 6).map((i) => ({ href: `/industries/${i.slug}`, label: i.name })) },
    { title: "Resources", links: resources.map((r) => ({ href: r.href, label: r.label })) },
    {
      title: "Company",
      links: [
        { href: "/about", label: "About" },
        { href: "/service", label: "Service" },
        { href: "/contact", label: "Contact" },
        { href: "/contact?topic=quote", label: "Request a Quote" },
      ],
    },
  ];
  return (
    <footer className="bg-navy-800 text-white">
      <div className="container-x py-20">
        <div className="flex flex-col justify-between gap-10 border-b border-white/15 pb-14 lg:flex-row lg:items-end">
          <div>
            <Logo light />
            <p className="display mt-8 max-w-xl text-3xl tracking-[-0.035em] sm:text-4xl">Strong packaging. Stronger partner.</p>
          </div>
          <Link href="/contact?topic=quote" className="btn-orange self-start lg:self-auto">Request a Quote</Link>
        </div>
        <div className="grid gap-10 pt-14 sm:grid-cols-2 lg:grid-cols-6">
          <div className="lg:col-span-2">
            <h3 className="kicker text-white/60">Get in touch</h3>
            <ul className="mt-5 space-y-3 text-white/85">
              <li className="flex items-center gap-3"><Icon name="pin" className="h-4 w-4 text-orange-500" />{company.address}</li>
              <li><a href={`tel:${company.phone.replace(/\s/g, "")}`} className="flex items-center gap-3 hover:text-orange-500"><Icon name="phone" className="h-4 w-4 text-orange-500" />{company.phone}</a></li>
              <li><a href={`mailto:${company.email}`} className="flex items-center gap-3 hover:text-orange-500"><Icon name="mail" className="h-4 w-4 text-orange-500" />{company.email}</a></li>
            </ul>
          </div>
          {cols.map((c) => (
            <div key={c.title}>
              <h3 className="kicker text-white/60">{c.title}</h3>
              <ul className="mt-5 space-y-2.5 text-white/85">
                {c.links.map((l) => (
                  <li key={l.href}><Link href={l.href} className="hover:text-orange-500">{l.label}</Link></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="border-t border-white/15">
        <div className="container-x flex flex-col items-center justify-between gap-3 py-6 text-sm text-white/60 md:flex-row">
          <p>© {year} {company.name}. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white">Terms &amp; Conditions</Link>
            <Link href="/imprint" className="hover:text-white">Imprint</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
