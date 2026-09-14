# Fulcronix

A [Next.js](https://nextjs.org) app (App Router, TypeScript, Tailwind CSS) organized for clarity, reuse, and maintainability as it grows.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the result.

## Project Structure

```
src/
  app/
    (marketing)/  Route group for real site pages (home, about) — its layout
                  adds the shared MarketingNavbar/MarketingFooter. Routes
                  outside this group (global-theme, api, ...) render bare.
    global-theme/ Internal component toolkit — see Global Theme below.
                  Routes only otherwise — pages, layouts, loading/error/
                  not-found states, robots.ts, sitemap.ts, manifest.ts, and
                  api/ route handlers. Keep route files thin; delegate real
                  logic to lib/components.
  components/
    ui/          Reusable, generic UI primitives (Button, Dropdown,
                 Container, ...). No business logic — presentational and
                 composable. Colocate `*.test.tsx` next to the component.
    home/        The marketing home page's sections (hero, capabilities, ...)
                 plus MarketingNavbar/MarketingFooter, rendered from the
                 `(marketing)` route group's layout.
  lib/           Framework-agnostic helpers and utilities (e.g. cn()).
  hooks/         Reusable client-side hooks (prefixed use-*).
  config/        Static app configuration (site metadata, nav links).
  types/         Shared TypeScript types used across the app.
  env.ts         Validated, typed environment variables. Never read
                 `process.env` directly anywhere else — add new vars here.
```

Guidelines:

- Import via the `@/*` alias (e.g. `@/components/ui/button`), never relative paths across top-level folders.
- Components in `components/ui` stay generic and reusable; anything tied to a specific feature or route belongs closer to where it's used.
- Server Components are the default; add `"use client"` only where interactivity or browser APIs are required.
- Route-level metadata (`export const metadata`) lives in the route file; shared/default metadata lives in `app/layout.tsx`, sourced from `config/site.ts`.
- Read environment variables through `@/env`, not `process.env` — add new variables to the schema in `src/env.ts` so a missing/malformed value fails fast at startup instead of at runtime.
- Any new non-trivial module (utility, hook, or component with logic) should ship with a colocated `*.test.ts(x)` file.

## Available Scripts

- `npm run dev` — start the dev server (Turbopack)
- `npm run build` — production build
- `npm run start` — run the production build
- `npm run lint` — run ESLint
- `npm run typecheck` — generate Next.js route types and run `tsc --noEmit`
- `npm run format` / `npm run format:check` — Prettier write / check
- `npm run test` / `npm run test:watch` — run the Vitest suite
- `npm run verify` — the full gate: lint, typecheck, format check, test, build

Run `npm run verify` before considering any change done — it's the same gate CI enforces.

## Production Readiness

This project is set up so that both the current code and anything added later stay production-ready by construction:

- **Environment validation** — `src/env.ts` validates `process.env` with Zod at startup (see [Environment Variables](#environment-variables)).
- **Security headers** — `next.config.ts` sets `X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`, `Permissions-Policy`, and disables the `X-Powered-By` header.
- **Health check** — `GET /api/health` returns `{ "status": "ok" }` for uptime/load-balancer checks.
- **SEO/PWA file conventions** — `app/robots.ts`, `app/sitemap.ts`, `app/manifest.ts` are wired to `config/site.ts`, so adding a route to `siteConfig.nav` keeps the sitemap in sync.
- **Error/loading boundaries** — `app/error.tsx`, `app/not-found.tsx`, `app/loading.tsx` cover the states a production app must handle.
- **Automated tests** — Vitest + React Testing Library (`npm run test`), configured for jsdom with proper RTL cleanup between tests.
- **Pre-commit hook** (Husky + lint-staged) — lints and formats staged files before every commit.
- **Pre-push hook** (Husky) — runs `typecheck` and `test` before every push.
- **CI** (`.github/workflows/ci.yml`) — on every push/PR to `main`, runs lint, typecheck, format check, tests, and build. Treat a red CI run as blocking.

When adding new code: add tests alongside it, run `npm run verify`, and don't bypass the git hooks (`--no-verify`) except in a genuine emergency you intend to follow up on immediately.

## Global Theme

`/global-theme` is an internal component toolkit — not a real site page. It shows every `Button`/`ButtonLink` variant and size, the `Dropdown` component in both its `floating` (desktop nav) and `inline` (mobile nav) modes, and the color/typography tokens, each with a short usage snippet. It's excluded from the sitemap and marked `noindex`/disallowed in `robots.ts`, and it renders outside the `(marketing)` route group so it never picks up the site's nav/footer.

Check this page before hand-rolling a button or dropdown style — extend the shared component instead of writing a one-off.

## Environment Variables

Copy `.env.example` to `.env.local` and adjust as needed. Only variables prefixed with `NEXT_PUBLIC_` are exposed to the browser. Every variable must be declared in the schema in `src/env.ts`; an unset or invalid value throws at startup rather than failing silently later.

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
