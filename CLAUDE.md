@AGENTS.md

# Codebase Conventions for AI Assistants

Read [README.md](README.md) first (frameworks, dev commands, deploy). This file holds the rules every change must follow; the `docs/` pages it links hold the details. This repo is **independent**: no database, no env vars, no backend of any kind.

## SEO metadata: layout files exist to attach `metadata`

Most pages are client components (`'use client'`) and can't export Next's `metadata`. Instead, a thin server-component `layout.tsx` next to the page does only `export const metadata = constructSEO({ title, description, image?, noIndex? })` (from `lib/seo.ts`) and renders `children` (see `app/faq/layout.tsx`). **A new client page that needs custom SEO uses this layout-file pattern, not `generateMetadata`**; all metadata is static per route.

## Styling is Tailwind only

Bootstrap is gone and lint rejects unknown classes. Widgets are Headless UI or plain HTML. Tokens (colors, heading sizes, Bootstrap-sized breakpoints, so `lg:` is 992px), `.btn` and `site-container` live in `app/globals.css`: add a token rather than repeating an arbitrary value. Don't accept eslint's Tailwind autofix for `leading-*`/`text-*` without checking the layout. Details and traps: [docs/styling.md](docs/styling.md).

## Two different content patterns — match the one that fits

- **Repeated, structured content** (FAQ, team bios, testimonials): a data array in `lib/` (`faqData.tsx`, `teamMembers.ts`, `testimonialsData.ts`) consumed by one generic component. Add entries there, not hand-coded into a page.
- **Course/track pages** (`app/cs/python1/page.tsx`, `app/math/math1a/page.tsx`, ...): each page declares its own `title`/`color`/`description`/`modules`/`slides` consts and passes them to the shared `ClassPage`/`TrackPage`. **To add a course page, copy a sibling page and edit its consts**; don't invent a centralized course data file.

`lib/courses.json` is a verbatim copy of admin's catalog that **nothing on the site reads**; it exists only so `__tests__/courses.test.tsx` can check every offered course has a linked page. **Adding a course is four things**: the page, a link from its track page's `ClassProgression`, both `…A` and `…B` ids in `COURSE_PAGES`, and the catalog entries in admin. Never hand-edit the copy. Details: [docs/courses-catalog.md](docs/courses-catalog.md).

## Semester dates: call `currentSemesterStatus()` inside a component

`lib/semesterDates.json` is a verbatim copy of admin's (never hand-edit it); `lib/constants.ts` parses it and holds the external links and season labels, so reuse those rather than hardcoding a date or link.

- **Call `currentSemesterStatus()` inside a component body, never at module scope**: the site is prerendered, and a module-scope value freezes on deploy day.
- Gate a link, button or card on the **booleans** (`registrationOpen`, ...). For prose about where the semester stands, **`switch` on `phase`**, so exactly one message renders.
- **Signup CTAs gate on `registrationOpen` and never write their own href**; course pages get this from `components/RegisterButton.tsx` via `ClassPage`. Test them by moving the system clock, not by mocking `@/lib/constants` (see `__tests__/RegisterButton.test.tsx`).

Details and the reasons: [docs/semester-dates.md](docs/semester-dates.md).

## Component conventions

`components/` is flat for site-wide pieces (`Footer.tsx`, `Navigation.tsx`, `ClassPage.tsx`, ...) with subfolders per page area for one-off sections (`components/home/`, `components/team/`, `components/donate/`). Props are typed via an adjacent `interface XProps { ... }` above the component, not inline-destructured types.

## Types

`@/*` maps to the repo root (`tsconfig.json`); `strict: true`; Cypress files are excluded from the main `tsconfig.json`.

## Lint is stricter than usual

ESLint includes `eslint-plugin-prettier`, so **Prettier formatting violations fail `yarn lint`**, not just `yarn format`.

## Testing

Jest + React Testing Library, `__tests__/*.test.tsx` named after the component/page under test. Pages and components are rendered directly (`import Faq from '@/app/faq/page'`) with no routing or data mocking; assertions use `screen.getByRole`/`getByText` and matchers like `toHaveStyle`/`toHaveAttribute`. Name blocks `describe('<Name> Component'|'<Name> Page', ...)` / `it('renders ...')`.

## Misc gotcha

Image paths under `public/images/` include a directory literally named `penguin tiers` (with a space); don't assume kebab-case for every asset folder.
