# Semester dates and signup calls to action

## `lib/semesterDates.json` and `lib/constants.ts`

Semester dates live in `lib/semesterDates.json` — **a verbatim copy of the admin repo's `src/lib/data/semesterDates.json`**, the shared source of truth that the admin, portal, and website repos all read so they never disagree about a date. It is replaced wholesale at each semester rollover (see "Adding a New Semester" in the admin repo's README); don't hand-edit a single field here, and don't add a website-only field — the next rollover's copy would overwrite it. `__tests__/constants.test.ts` validates the copied JSON's shape, so a malformed or mis-copied date fails `yarn test` instead of rendering "Invalid Date" in production.

`lib/constants.ts` parses that JSON into `Date` objects (`SEMESTER_START_DATE`, `REGISTRATION_ENDS_DATE`, ...), which are static and safe at module scope. The file also holds the external links, `CURRENT_SEMESTER`/`NEXT_SEMESTER` season labels, and the `formatDate` prose helper. Reuse those exports rather than re-hardcoding a date or link — `lib/faqData.tsx` and `components/home/Intro.tsx` are the examples to copy.

## `currentSemesterStatus()` goes inside a component body

Everything that depends on _when you ask_ comes from **`currentSemesterStatus()`**, which you must call **inside a component body, never at module scope**. The site is statically prerendered (`yarn build` marks every route "prerendered as static content"), and module scope runs once per process, so a module-scope const like `export const REGISTRATION_OPEN = new Date() >= ...` is frozen into the HTML on deploy day and only corrected after the client bundle rehydrates — a visitor sees deploy-day copy until then. Re-rendering does not re-run module scope, so no revalidation setting can fix a value computed there.

`app/layout.tsx` sets `revalidate` so the prerendered HTML is regenerated rather than frozen until the next deploy; `components/Navigation.tsx` renders there and shows date-dependent links on every route.

## Booleans gate; `phase` describes

The returned status carries two kinds of condition, which are not interchangeable:

- The **booleans** (`registrationOpen`, `instructorAppsOpen`, `semesterInProgress`, ...) answer "is this window open right now?" and can overlap. Use them to gate a link, a button, or a card.
- **`phase`** is a five-value union (`before-registration` | `registration-open` | `registration-closed` | `classes-in-progress` | `semester-over`) that is mutually exclusive and exhaustive. `switch` on it for any prose describing where the semester stands, so a page renders exactly one message and never zero.

Rendering a paragraph per boolean instead is a known trap: it once produced two contradictory messages on the day registration closed and an empty alert box for the six days between Spring 2026's registration deadline and its first day of classes. `semesterStatusOn(date)` and `semesterPhaseOn(date)` are the pure versions, so tests can walk a whole calendar year.

## Signup calls to action

**Every signup call to action gates on `registrationOpen`, and none of them writes its own href.** Open, they go to `GBSTEM_SIGNUP`; closed, to `MAILING_LIST_FORM_LINK` ("get notified"), so the site flips on the dates in `semesterDates.json` with no deploy on either day.

`components/RegisterButton.tsx` is the whole of that for the course pages — `ClassPage` renders it and takes no link prop, so a new course page gets the behaviour for free and has nothing to hardcode. It is a client component, like `Navigation` and `HeroSection`, so hydration corrects it in the browser instead of leaving it as stale as the last revalidation; a date-dependent CTA rendered only on the server is the trap here. Note `registrationOpen` is bounded at **both** ends: a CTA wired to turn on and never off keeps sending parents to a portal that has stopped accepting them.

`__tests__/RegisterButton.test.tsx` is the pattern to copy for testing one — it moves the system clock and reads the real dates rather than `jest.mock`ing `@/lib/constants`, because a mocked calendar keeps passing when a button is wired to the wrong field.
