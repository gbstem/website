@AGENTS.md

# Codebase Conventions for AI Assistants

This supplements [README.md](README.md) (frameworks, dev commands, deploy) with code-level conventions the README doesn't cover. Read the README first. This repo is **independent** — no database, no env vars, no backend of any kind.

## SEO metadata: layout files exist to attach `metadata`

Most pages are client components (`'use client'`) and so can't export Next's `metadata` object themselves. The workaround used throughout: a thin server-component `layout.tsx` next to the page whose only job is `export const metadata = constructSEO({ title, description, image?, noIndex? })` (helper in `lib/seo.ts`), wrapping `children` with no other markup — see `app/faq/layout.tsx`, `app/reports/layout.tsx`, `app/testimonials/layout.tsx`. **Any new client-component page that needs custom SEO needs this same layout-file pattern**, not a `generateMetadata` function. There are no `generateMetadata` functions anywhere in the repo — all metadata is static per route.

## Bootstrap and Tailwind are mixed freely, not separated by rule

Existing components combine react-bootstrap components/utility classes (`<Row>`/`<Col>`, `display-3 fw-semibold d-flex gap-3`) and Tailwind classes (including arbitrary values and `!important` suffixes like `pt-[1rem]!`) in the same `className`, sometimes in the same component (see `components/home/HeroSection.tsx` vs `components/ClassPage.tsx`). There's no documented split — new layout/spacing work trends Tailwind, grid/interactive widgets trend react-bootstrap. Don't try to "clean up" this mixing as a side effect of an unrelated change.

## Two different content patterns — match the one that fits

- **Repeated, structured content** (FAQ, team bios, testimonials): centralized data array in `lib/` (`faqData.tsx`, `teamMembers.ts`, `testimonialsData.ts`) consumed by one generic component. Add new entries here, don't hand-code them into a page.
- **Course/track pages** (`app/cs/python1/page.tsx`, `app/math/math1a/page.tsx`, etc.): each page hand-declares its own `title`/`color`/`description`/`modules`/`slides` as top-level consts and passes them as props into the shared `ClassPage`/`TrackPage` component. **To add a new course page, copy an existing sibling page and edit its consts** — don't invent a new centralized data file for courses; that's not how this content type is organized.

Semester dates live in `lib/semesterDates.json` — **a verbatim copy of the admin repo's `src/lib/data/semesterDates.json`**, the shared source of truth that the admin, portal, and website repos all read so they never disagree about a date. It is replaced wholesale at each semester rollover (see "Adding a New Semester" in the admin repo's README); don't hand-edit a single field here, and don't add a website-only field — the next rollover's copy would overwrite it. `lib/constants.ts` parses that JSON into `Date` objects (`SEMESTER_START_DATE`, `REGISTRATION_ENDS_DATE`, ...) and derives two different kinds of condition from them, which are not interchangeable. The **booleans** (`REGISTRATION_OPEN`, `INSTRUCTOR_APPS_OPEN`, `SEMESTER_IN_PROGRESS`, ...) answer "is this window open right now?" and can overlap — use them to gate a link, a button, or a card. **`SEMESTER_PHASE`** is a five-value union (`before-registration` | `registration-open` | `registration-closed` | `classes-in-progress` | `semester-over`) that is mutually exclusive and exhaustive — `switch` on it for any prose describing where the semester stands, so a page renders exactly one message and never zero. Rendering a paragraph per boolean instead is a known trap: it once produced two contradictory messages on the day registration closed and an empty alert box for the six days between Spring 2026's registration deadline and its first day of classes. `semesterPhaseOn(date)` is the pure version, so tests can walk a whole calendar year. The file also holds the external links, `CURRENT_SEMESTER`/`NEXT_SEMESTER` season labels, and the `formatDate` prose helper. Reuse those exports rather than re-hardcoding a date or link — `lib/faqData.tsx` and `components/home/Intro.tsx` are the examples to copy. `__tests__/constants.test.ts` validates the copied JSON's shape, so a malformed or mis-copied date fails `yarn test` instead of rendering "Invalid Date" in production.

## Component conventions

`components/` is flat for site-wide pieces (`Footer.tsx`, `Navigation.tsx`, `ClassPage.tsx`, ...) with subfolders per page area for one-off sections (`components/home/`, `components/team/`, `components/donate/`). Props are typed via an adjacent `interface XProps { ... }` above the component, not inline-destructured types.

## Types

`@/*` maps to the repo root (`tsconfig.json`); `strict: true`; Cypress files are excluded from the main `tsconfig.json`.

## Lint is stricter than usual

ESLint (`eslint.config.mjs`) includes `eslint-plugin-prettier`, so **Prettier formatting violations fail `yarn lint`**, not just `yarn format` — don't assume lint and format are independent concerns.

## Testing

Jest + React Testing Library, `__tests__/*.test.tsx` named after the component/page under test. Pages/components are imported and rendered directly (`import Faq from '@/app/faq/page'`) with no routing or data-fetch mocking, since there's no backend — assertions use `screen.getByRole`/`getByText` and structural matchers like `toHaveStyle`/`toHaveAttribute`. `describe('<Name> Component'|'<Name> Page', ...)` / `it('renders ...')` naming.

## Misc gotcha

Image paths under `public/images/` include a directory literally named `penguin tiers` (with a space) — don't assume kebab-case for every asset folder.
