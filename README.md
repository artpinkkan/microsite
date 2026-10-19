# Shannon Microsite — AINE Academy landing

Static landing page served at **https://artpinkkan.github.io/microsite**.

This is the public marketing page for Bank Danamon's AI Native Engineering
programme. The LMS at https://artpinkkan.github.io/shannon-lms links its
"Open Microsite" buttons here.

## What this is (and isn't)

- **Is**: a single static page — hero, programme overview, course structure,
  course highlights, fee & payment. Pure HTML/CSS/JS, no backend.
- **Isn't**: the full microsite app with sign-in, AI mentor, admin, or
  participant workspace. That app lives in
  `../shannon-lms/danamon-microsite-main/` and needs a dynamic host (Vercel
  or similar) because of Supabase SSR, Server Actions, and middleware.

The sign-in buttons on this page currently link to `#` (dead links). When the
full app is deployed, replace `SIGN_IN_HREF` in `app/page.tsx` with its URL.

## Dev

```bash
npm install
npm run dev        # http://localhost:3000/microsite
npm run build      # static export → ./out
```

## Deployment

Every push to `main` triggers `.github/workflows/deploy.yml`, which runs
`next build` (static export) and publishes `out/` to GitHub Pages.

## Design tokens

The visual system comes from the Shannon LMS `md-files/00-design-system.md`
§8 (light theme): `#FFFFFF` surface, `#2563EB` royal blue, Inter +
JetBrains Mono, hairline cards, soft shadows. Tokens are hardcoded inline
in `app/page.tsx` to keep the project self-contained.

## Content source

`content/site.ts` and `content/curriculum.ts` are copies of the files in
`../shannon-lms/danamon-microsite-main/content/`. When programme details
change, update both — this is a deliberate split; the full microsite is
authoritative and this landing is a static snapshot of its public copy.
