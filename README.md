# NeuRazor Website

Marketing site for NeuRazor ABS: **Decode Talent. Decide with Confidence.**

## Stack

- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS + Framer Motion
- **UI:** Custom components (Bento grid, glassmorphism)
- **Backend/Forms:** Resend (email), Upstash (rate limiting — optional)

## Palette (Admin portal / NeuRazor MVP theme)

| Token        | Hex       | Usage              |
|-------------|-----------|--------------------|
| Midnight    | `#0A0A0A` | Primary background |
| Surface     | `#111111` | Cards / panels      |
| Slate White | `#EDEDED` | Primary text        |
| Text dim    | `#A1A1A1` | Muted text          |
| Accent      | `#2563eb` | CTAs / links / highlights (blue, matches admin/client) |

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment (optional)

- `NEXT_PUBLIC_TURNSTILE_SITE_KEY` — Cloudflare Turnstile site key (captcha)
- `TURNSTILE_SECRET_KEY` — Cloudflare Turnstile secret key (server-side verification). If not set, captcha is skipped (e.g. dev).
- `RESEND_API_KEY` — Resend API key for contact/demo emails
- `RESEND_FROM` — From address (e.g. `noreply@yourdomain.com`)
- `CONTACT_EMAIL` — Inbox for form submissions

Get Turnstile keys at [dash.cloudflare.com](https://dash.cloudflare.com) → Turnstile. Add your domain and localhost for testing.

## Sections

1. **Hero** — Headline, animated grid, assessment placeholder, CTAs
2. **The Assessment** — Bento grid: 25 min tile, cognitive competencies, drive & agility, candidate profile
3. **Work with Us** — Sticky copy + Typeform-style multi-step form (role pills, company, email, message)
4. **Footer** — Founder spotlight (Sibin, Srinivas), Get in Touch matrix (Client / Investor / Media)

## Design details

- **Loader:** Radar-style loading animation (used in `loading.tsx`)
- **Scroll reveal:** Fade-up + blur-in on scroll
- **Logo:** NR in navbar has a subtle pulse/glimmer every ~10s
