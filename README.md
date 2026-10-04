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

## Languages

The site is available in Uzbek (default), Russian and English under `/uz`, `/ru` and `/en`.

- `/` redirects to the visitor's language (saved choice → browser language → Uzbek), handled in `src/proxy.ts`.
- English text in the code and in `src/lib/*.ts` is the source; translations live in
  `src/i18n/messages/ru.json` and `src/i18n/messages/uz.json`, keyed by the English text. Missing keys fall back to English.
- Server components use `const { t, loc } = await getI18n()` (`src/i18n/server.ts`), client components use `useI18n()`.
  `t("…")` translates a string, `loc(obj)` translates every display string in a content object.
- Use `Link` from `@/i18n/Link` so links keep the current language.
- After adding or changing text, run `node scripts/i18n-keys.mjs collect` and then `node scripts/i18n-keys.mjs missing --list`
  to see which strings still need Russian/Uzbek translations.

## Structure

- `src/lib/data.ts` — all site content: company info, hero, products, industries, services, news, testimonials, client logos, locations, image paths.
- `src/components/` — Header (announcement bar, mega menus, search, quote button, saved-products heart), Footer, shared sections (`Sections.tsx`), testimonials slider, contact form, `Photo` placeholder.
- `src/app/[locale]/` — pages (one copy per language): `/`, `/products`, `/category/[slug]`, `/industries`, `/industries/[slug]`, `/service`, `/about`, `/company-history`, `/sustainability`, `/resources`, `/news`, `/support`, `/contact`, `/search`, `/favorites`, legal pages.
- `public/images/` — drop photos here (see the README inside).

## Before launch

- Replace placeholder phone, email, address, locations, stats and news with real data.
- Add real photos, product cut-outs and client logos (`public/images`, paths in `data.ts`).
- Replace the sample testimonials with real customer quotes.
- Connect the contact form (`src/components/ContactForm.tsx`) to an email service or API route.
- Fill in the privacy, terms and imprint pages.
