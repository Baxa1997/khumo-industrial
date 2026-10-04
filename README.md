# Khumo Industrial website

Corporate website for Khumo Industrial — packaging solutions (stretch wrapping, strapping, case sealing, binding, coding & marking, consumables). Layout and UI modelled on cyklop.com.

## Stack

- Next.js 16 (App Router) + React 19
- TypeScript
- Tailwind CSS v4
- Inter / Inter Tight (self-hosted via Fontsource)
- Yarn (classic) as package manager

## Getting started

```bash
yarn install
yarn dev          # http://localhost:3000
yarn build        # production build
yarn start        # serve the production build
yarn typecheck
yarn generate:map  # regenerate the dotted region map after changing office locations
```

## Structure

- `src/lib/data.ts` — all site content: company info, hero, products, industries, services, news, testimonials, client logos, locations, image paths.
- `src/components/` — Header (announcement bar, mega menus, search, quote button, saved-products heart), Footer, shared sections (`Sections.tsx`), testimonials slider, contact form, `Photo` placeholder.
- `src/app/` — pages: `/`, `/products`, `/category/[slug]`, `/industries`, `/industries/[slug]`, `/service`, `/about`, `/company-history`, `/sustainability`, `/resources`, `/news`, `/support`, `/contact`, `/search`, `/favorites`, legal pages.
- `public/images/` — drop photos here (see the README inside).

## Before launch

- Replace placeholder phone, email, address, locations, stats and news with real data.
- Add real photos, product cut-outs and client logos (`public/images`, paths in `data.ts`).
- Replace the sample testimonials with real customer quotes.
- Connect the contact form (`src/components/ContactForm.tsx`) to an email service or API route.
- Fill in the privacy, terms and imprint pages.
