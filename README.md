# D207 Construction — website

Next.js 15 (App Router) · React 19 · TypeScript · Tailwind CSS 4

## Run it

```bash
npm install
npm run dev        # http://localhost:3000
npm run build && npm start
```

Deploys to Vercel as-is (no extra config).

## Pages

| Route | File |
| --- | --- |
| `/` | `app/page.tsx` — hero, intro, services, selected work (location filter), smart home, process, FAQ, inquiry |
| `/company` | `app/company/page.tsx` — story, facts, mission & vision, values, HSE / QA / CSR |
| `/services` | `app/services/page.tsx` — the four disciplines + turnkey band |
| `/projects` | `app/projects/page.tsx` — all 9 projects with type filter |
| `/projects/[slug]` | `app/projects/[slug]/page.tsx` — case study, statically generated for every project |
| `/contact` | `app/contact/page.tsx` — full brief form, next steps, contact details |
| `POST /api/contact` | `app/api/contact/route.ts` — validates the brief and emails it |

## Editing content

All copy lives in `lib/`, not in the pages:

- `lib/site.ts` — company name, phone, email, address, nav
- `lib/projects.ts` — the 9 projects (title, location, scope, image, featured on homepage)
- `lib/content.ts` — services, process steps, FAQ, values, governance, contact project types

Brand tokens (colours, fonts) are in `app/globals.css` under `@theme`.

## Contact form email

The form posts to `/api/contact`. To deliver briefs by email, add to `.env.local` (and Vercel env vars):

```
RESEND_API_KEY=re_xxx
CONTACT_TO=info@d207construction.com.ng
CONTACT_FROM=D207 Website <website@d207.com.ng>   # must be a domain verified in Resend
NEXT_PUBLIC_SITE_URL=https://d207.com.ng
```

Without `RESEND_API_KEY` the brief is logged to the server console.

## Before launch — still to confirm with D207

Search the code for `TODO(D207)` and `[` placeholders:

- **Photos**: every image in `public/images` is an Unsplash stand-in (free for commercial use). Replace with D207's real project photography, keeping the same file names, and the site updates automatically.
- FAQ answers (`lib/content.ts`)
- Project years / status and case-study write-ups (`lib/projects.ts`, `app/projects/[slug]/page.tsx`)
- Budget bands and reply time in the contact form (`components/ContactForm.tsx`)
- Brand name (logo says "D207 Designs & Projects"; legal name "D207 Construction Limited") and the email domain
