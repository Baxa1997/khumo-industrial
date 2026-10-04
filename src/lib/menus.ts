import { productMenu } from "./categories";
import { industries, solutions } from "./data";

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
    ],
    columns: productMenu.map((m) => {
      const s = solutions.find((x) => x.slug === m.category)!;
      return {
        title: s.name,
        href: `/category/${s.slug}`,
        links: [
          ...(m.overview ? [{ href: `/category/${s.slug}`, label: "Product Overview" }] : []),
          ...m.links.map((l) => ({ href: `/category/${s.slug}/${l.item}`, label: l.label })),
        ],
      };
    }),
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
    ],
  },
  about: {
    side: [
      { href: "/about", label: "Who We Are" },
      { href: "/company-history", label: "Our Story" },
      { href: "/contact", label: "Contact" },
    ],
  },
};

export const serviceAnchor = slug;
