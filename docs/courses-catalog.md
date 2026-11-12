# `lib/courses.json` and adding a course

`lib/courses.json` is not an exception to the hand-declared course pages: **nothing on the site reads it**, and no page should start to. It is a verbatim copy of the admin repo's `src/lib/data/courses.json`, the shared catalog of which courses gbSTEM offers that admin, portal and curriculum all copy, and it is here purely so `__tests__/courses.test.tsx` can hold this site to it.

Admin and portal read the catalog at runtime and curriculum's own test fails when a course has no page there, so the public site was the one copy nothing checked — a course could be registerable in the portal and unmentioned on gbstem.org for a whole semester.

## What the test checks

The test's `COURSE_PAGES` table maps each catalog id to the URL that advertises it, and fails in both directions: a course added in admin fails until it is listed, and a listing whose course is gone fails too. It also checks that each mapped URL has a real `page.tsx` and that its track page links to it, since a page nothing links to is as invisible as a missing one.

## Adding a course is four things, not one

1. The page under `app/<track>/` (copy a sibling page and edit its consts).
2. A link from its track page's `ClassProgression`.
3. Both the fall (`…A`) and spring (`…B`) ids in `COURSE_PAGES`.
4. In the admin repo, which owns the file, the catalog entries themselves.

## Keeping the copy in sync

Replace `lib/courses.json` wholesale at a rollover (`cp ../admin/src/lib/data/courses.json lib/courses.json`); never hand-edit an entry, and never add a website-only field. `.github/workflows/shared-data.yml` diffs both this file and `lib/semesterDates.json` against admin on every PR and nightly, so a hand-edit or a skipped copy step fails CI rather than going unnoticed.
