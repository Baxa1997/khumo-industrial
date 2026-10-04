import { company } from "./data";

/** Public site address: NEXT_PUBLIC_SITE_URL, else the Vercel production domain, else localhost. */
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : "http://localhost:3000")
).replace(/\/$/, "");

/** Search and link-preview text (English source; translated through the i18n dictionaries). */
export const seo = {
  title: "Official distributor of marking printers in Uzbekistan",
  description:
    "CIJ inkjet printers, TIJ printers and laser marking machines for dates, batch numbers and barcodes. Official Cyklop distributor in Uzbekistan: supply, setup, training and service.",
  keywords: [
    "marking printer",
    "CIJ printer",
    "TIJ printer",
    "laser marking machine",
    "date coder",
    "inkjet printer for packaging",
    "Cyklop Uzbekistan",
    "Khumo Industrial",
  ],
};

export const fullTitle = (title: string) => `${company.name} — ${title}`;
