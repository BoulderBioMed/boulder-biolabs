# Boulder BioLabs — Brand v2 Progress

## Version safety
- V1 snapshot SHA (main): `37689a3be8575520a56ddad85cf7961e36986f69`
- Tag: `v1-prebrand` (pushed) · Backup branch: `backup/v1-prebrand` (pushed)
- Work branch: `brand/v2-biolabs`
- **Restore V1:** `git checkout backup/v1-prebrand` (or `git reset --hard v1-prebrand`)
- Production stays on V1 until Jim merges the PR. Never force-push main.

## Brand standard applied
- **Font → Lato** loaded globally via Google Fonts `<link>` in `app/layout.tsx`; `--font-sans` set to Lato. System-font stack removed.
- **Color tokens** in `app/globals.css`: Boulder Blue `#2968A0` primary, Navy `#0B2545`, Sky Blue `#5B8FC7`, Green `#75D69C` accent, Slate, Ink, Cloud, Boulder Gray. Retired teal `#3DA9C7` → Boulder Blue everywhere (hex + decimal rgba). Legacy `--color-teal*` tokens repointed to blue so nothing breaks.
- **Logo** → shared `components/BoulderLockup.tsx` (Option 2 Medium, locked). Header uses `<BoulderLockup word="BioLabs" />`; footer uses BioLabs + BioMed lockups. Old `components/Logo.tsx` (teal crosshair SVG) deleted.
- **Family bar** (`components/FamilyBar.tsx`): navy, standard locked order — BioMed · iQ · Sterilization · RA/QA · BioLabs · Package Testing · Applied AI (all 7).
- **Footer**: navy 4-column, family links in standard order incl. Applied AI + BioMed hub; info@boulderiq.com; 5375 Western Ave + 5421 family ops; 303-531-1238; © 2026; ISO 13485 line retained.
- Buttons: primary blue/white/6px; secondary transparent/blue text/1px blue border.

## Open items
- **Quote form** (`app/api/quote-request/route.ts`) → now emails **info@boulderiq.com** via `lib/email.ts` (Resend HTTP API, no npm dep). Still logs the submission. Graceful no-op until env keys set. **Manual:** set `RESEND_API_KEY` + `FORM_FROM_EMAIL` in Vercel.
- **Equipment**: confirmed (Mike Daddario signed off) — no "pending confirmation" notes were present in content; nothing to remove.
- **Testimonials**: real, attributed (first-name + state) in `content/testimonials.ts` — kept as-is. No placeholders.
- **GA4**: already wired (env-gated `components/Analytics.tsx`). **Manual:** set `NEXT_PUBLIC_GA_MEASUREMENT_ID` in Vercel.
- **Calendly**: no key/config found in repo → TODO (add embed once Calendly URL provided).
- **Favicon + OG image**: added programmatic, palette-consistent `app/icon.tsx` + `app/opengraph-image.tsx` (no external asset needed).
- **ISOXpress**: untouched (out of scope).

## Acceptance check
- [x] Lato everywhere; no teal; primary `#2968A0`, footer/dark `#0B2545`, accents `#75D69C`.
- [x] Header logo = BoulderLockup; family bar present (standard order); navy 4-col footer with info@boulderiq.com.
- [x] No placeholders / invented content; real testimonials in place.
- [x] Forms email info@boulderiq.com (transport added). Build passes (`npm run build` ✓).
- [x] Mobile nav collapses (existing responsive Nav); "Boulder" 28px header / 38px footer (≥22px).

## IMAGES TO GENERATE (AI, palette-consistent, clean lab aesthetic)
None blocking — OG image is rendered programmatically. If real lab photography is ever desired for hero/sections, generate cleanroom/lab imagery in navy+blue palette and wire to `public/img/`. (Hero currently uses gradient + layout, no broken placeholders.)

## Jim-only manual steps
- Merge `brand/v2-biolabs` PR when approved (production currently V1).
- Set Vercel env: `RESEND_API_KEY`, `FORM_FROM_EMAIL`, `NEXT_PUBLIC_GA_MEASUREMENT_ID`.
- Provide Calendly URL if booking embed is wanted.
- No DNS / domain changes required (boulderbiolabs.com already attached).
