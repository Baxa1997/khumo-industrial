# Khumo Industrial website

Corporate website for Khumo Industrial — packaging solutions (strapping, stretch wrapping, case sealing, coding & marking, binding, consumables). Structure and layout modelled on industrial packaging sites such as cyklop.com.

## Stack

- Next.js 16 (App Router) + React 19
- TypeScript
- Tailwind CSS v4

## Getting started

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
npm run typecheck
```

## Structure

- `src/lib/data.ts` — all site content (company info, solutions, industries, services, stats, news, history). Edit here to change copy.
- `src/components/` — Header (top bar, mega menu, mobile menu), Footer, Logo, Icon set, shared sections, contact form.
- `src/app/` — pages: home, `/solutions`, `/solutions/[slug]`, `/industries`, `/industries/[slug]`, `/service`, `/about`, `/news`, `/contact`, `/support`, legal pages.

## TODO

- Replace placeholder phone, email, address, stats and news with real data.
- Add real product/photo imagery (`public/`) in place of the gradient placeholders.
- Connect the contact form (`src/components/ContactForm.tsx`) to an email service or API route.
- Fill in the privacy, terms and imprint pages.
