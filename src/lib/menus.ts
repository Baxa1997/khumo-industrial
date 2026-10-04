import { categoryDetails } from "./categories";
import { industries, news, solutions } from "./data";

export type MenuLink = { href: string; label: string };
export type MenuCard = { href: string; text: string; cta: string; image?: string };
export type MegaMenu = {
  side: MenuLink[];
  columns?: { title: string; href: string; links: MenuLink[] }[];
  links?: MenuLink[];
  cards?: MenuCard[];
};

const slug = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

export const menus: Record<"products" | "service" | "industries" | "resources" | "about", MegaMenu> = {
  products: {
    side: [
      { href: "/products", label: "All Products" },
      { href: "/products/automation", label: "Automation" },
      { href: "/news", label: "New Arrivals" },
      { href: "/favorites", label: "Saved Products" },
    ],
    columns: solutions.map((s) => ({
      title: s.name,
      href: `/category/${s.slug}`,
      links: [
        { href: `/category/${s.slug}`, label: "Product Overview" },
        ...(categoryDetails[s.slug]?.range.items ?? []).map((i) => ({ href: `/category/${s.slug}/${i.slug}`, label: i.name })),
      ],
    })),
  },
  service: {
    side: [
      { href: "/service", label: "Service Overview" },
      { href: "/service#maintenance", label: "Maintenance" },
      { href: "/service#spare-parts", label: "Spare Parts" },
      { href: "/service#training", label: "Training" },
      { href: "/service#technical-support", label: "Technical Support" },
    ],
    cards: [
      { href: "/service", text: "Local technicians and preventive maintenance keep your packaging line running.", cta: "Our service" },
      { href: "/contact?topic=quote", text: "Not sure what you need? Our specialists analyze your process and recommend a solution.", cta: "Get custom advice" },
    ],
  },
  industries: {
    side: [{ href: "/industries", label: "All Industries" }],
    links: industries.map((i) => ({ href: `/industries/${i.slug}`, label: i.name })),
  },
  resources: {
    side: [
      { href: "/news", label: "News & Events" },
      { href: "/support", label: "FAQ & Support" },
      { href: "/sustainability", label: "Sustainability" },
      { href: "/company-history", label: "Our History" },
    ],
    cards: news.slice(0, 2).map((n) => ({ href: `/news#${n.slug}`, text: n.title, cta: "Read more" })),
  },
  about: {
    side: [
      { href: "/about", label: "Who We Are" },
      { href: "/company-history", label: "History" },
      { href: "/sustainability", label: "Sustainability" },
      { href: "/careers", label: "Careers" },
      { href: "/contact", label: "Contact" },
    ],
    cards: [
      { href: "/about", text: "Driven by our values. Who we are is what makes our solutions work for you.", cta: "Get to know us" },
      { href: "/sustainability", text: "Recycled PET strap and pre-stretch film help customers cut their plastic footprint.", cta: "Sustainability" },
    ],
  },
};

export const serviceAnchor = slug;
