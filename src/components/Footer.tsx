import Link from "@/i18n/Link";
import Icon from "./Icon";
import Logo from "./Logo";
import SocialLinks from "./SocialLinks";
import { getI18n } from "@/i18n/server";
import { company, industries as baseIndustries, resources as baseResources, solutions as baseSolutions } from "@/lib/data";

export default async function Footer() {
  const { t, loc } = await getI18n();
  const [solutions, industries, resources] = [loc(baseSolutions), loc(baseIndustries), loc(baseResources)];
  const year = new Date().getFullYear();
  const cols = [
    { title: t("Products"), links: solutions.map((s) => ({ href: `/category/${s.slug}`, label: s.name })) },
    { title: t("Industries"), links: industries.slice(0, 6).map((i) => ({ href: `/industries/${i.slug}`, label: i.name })) },
    { title: t("Resources"), links: resources.map((r) => ({ href: r.href, label: r.label })) },
    {
      title: t("Company"),
      links: [
        { href: "/about", label: t("About") },
        { href: "/service", label: t("Service") },
        { href: "/contact", label: t("Contact") },
      ],
    },
  ];
  return (
    <footer className="bg-navy-800 text-white">
      <div className="container-x py-20">
        <div className="flex flex-col justify-between gap-10 border-b border-white/15 pb-14 lg:flex-row lg:items-end">
          <div>
            <Logo light />
            <p className="display mt-8 max-w-xl text-3xl tracking-[-0.035em] sm:text-4xl">{t(company.focus)} · {t(company.services)}</p>
            <SocialLinks className="mt-8" itemClassName="h-11 w-11 bg-white/10 text-white hover:bg-orange-500" />
          </div>
          <Link href="/contact?topic=quote" className="btn-orange self-start lg:self-auto">{t("Request a Quote")}</Link>
        </div>
        <div className="grid gap-10 pt-14 sm:grid-cols-2 lg:grid-cols-6">
          <div className="lg:col-span-2">
            <h3 className="kicker text-white/60">{t("Get in touch")}</h3>
            <ul className="mt-5 space-y-3 text-white/85">
              <li className="flex items-center gap-3"><Icon name="pin" className="h-4 w-4 text-orange-500" />{t(company.address)}</li>
              <li><a href={company.phoneHref} className="flex items-center gap-3 hover:text-orange-500"><Icon name="phone" className="h-4 w-4 text-orange-500" />{company.phone}</a></li>
              <li><a href={company.telegram.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-orange-500"><Icon name="send" className="h-4 w-4 text-orange-500" />Telegram {company.telegram.label}</a></li>
              <li><a href={company.instagram.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-orange-500"><Icon name="instagram" className="h-4 w-4 text-orange-500" />Instagram {company.instagram.label}</a></li>
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
          <p>© {year} {company.legalName}. {t("All rights reserved.")}</p>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            <Link href="/privacy" className="hover:text-white">{t("Privacy Policy")}</Link>
            <Link href="/terms" className="hover:text-white">{t("Terms & Conditions")}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
