import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { existsSync, readdirSync } from 'fs';
import path from 'path';

import courses from '@/lib/courses.json';
import CS from '@/app/cs/page';
import MathTrack from '@/app/math/page';
import Engineering from '@/app/engineering/page';
import Science from '@/app/science/page';
import Navigation from '@/components/Navigation';

// react-bootstrap's dropdowns touch matchMedia, which jsdom doesn't implement.
window.matchMedia =
  window.matchMedia ||
  function () {
    return {
      matches: false,
      addListener: function () {},
      removeListener: function () {},
    };
  };

/**
 * `lib/courses.json` is a verbatim copy of the admin repo's
 * `src/lib/data/courses.json` — the shared catalog of every course gbSTEM offers, mastered in
 * admin and copied here, into portal, and into curriculum the same way `semesterDates.json`
 * already is (see "Adding a New Semester" in the admin repo's README).
 *
 * The public site is the one copy nothing used to check. Admin and portal read the catalog at
 * runtime, and curriculum's `__tests__/courses.test.ts` fails when a course has no page there —
 * but a course added for a new semester could be registerable in the portal and absent from
 * gbstem.org indefinitely, because the only thing that would have caught it was someone
 * remembering the README. These tests are that check.
 *
 * Two kinds of drift are possible, and only one of them is catchable here:
 *
 *  - **Coverage** — the catalog offers a course this site never mentions (or still advertises one
 *    the catalog dropped). That is what this file tests, offline, from the copy in `lib/`.
 *  - **The copy itself** — `lib/courses.json` no longer matches admin's master. No test in this
 *    repo can see another repo, so that half is a CI job: "Shared catalog and dates match admin"
 *    in `.github/workflows/ci.yml`, which diffs both copied files against admin on every PR and
 *    nightly.
 */

/**
 * Where each catalog course is advertised on this site. Unlike curriculum — where portal derives
 * links mechanically as `/{track}/{id}`, so an id *is* a URL — this site's URLs are editorial and
 * follow no rule that could be derived from an id:
 *
 *  - Most tracks have one page per course covering both halves of the year, so the catalog's `A`
 *    (fall) and `B` (spring) ids share a page: `scratch1A` and `scratch1B` are both `/cs/scratch1`.
 *  - Math is the exception: its halves are separate pages, and the suffix is part of the slug
 *    (`math1A` → `/math/math1a`).
 *  - `legorobotics` sits in the `engineering` track in the catalog (which has no `robotics` track)
 *    but has its own top-level `/robotics` page here, and that track page *is* the course page —
 *    there is no per-course page under it.
 *  - Science's slugs don't resemble their ids at all: `environmental*` → `/science/science1`,
 *    `physics*` → `/science/physics1`.
 *
 * So this table is written by hand, and the tests below hold it to the catalog in both directions:
 * a course added in admin fails here until it is listed, and a listing whose course is gone fails
 * too. Adding a course means adding a page (copy a sibling under `app/<track>/`, per CLAUDE.md),
 * linking it from its track page's progression, and adding both its fall and spring ids here.
 */
const COURSE_PAGES: Record<string, string> = {
  scratch1A: '/cs/scratch1',
  scratch1B: '/cs/scratch1',
  scratch2A: '/cs/scratch2',
  scratch2B: '/cs/scratch2',
  scratch3A: '/cs/scratch3',
  scratch3B: '/cs/scratch3',
  python1A: '/cs/python1',
  python1B: '/cs/python1',
  python2A: '/cs/python2',
  python2B: '/cs/python2',
  python3A: '/cs/python3',
  python3B: '/cs/python3',
  webdevA: '/cs/webdev',
  webdevB: '/cs/webdev',
  math1A: '/math/math1a',
  math1B: '/math/math1b',
  math2A: '/math/math2a',
  math2B: '/math/math2b',
  math3A: '/math/math3a',
  math3B: '/math/math3b',
  math4A: '/math/math4a',
  math4B: '/math/math4b',
  math5A: '/math/math5a',
  math5B: '/math/math5b',
  engineering1A: '/engineering/engineering1',
  engineering1B: '/engineering/engineering1',
  engineering2A: '/engineering/engineering2',
  engineering2B: '/engineering/engineering2',
  engineering3A: '/engineering/engineering3',
  engineering3B: '/engineering/engineering3',
  legoroboticsA: '/robotics',
  legoroboticsB: '/robotics',
  environmentalA: '/science/science1',
  environmentalB: '/science/science1',
  physicsA: '/science/physics1',
  physicsB: '/science/physics1',
};

/** Track pages that host per-course pages, so a course link can be checked against one. */
const TRACK_PAGES = {
  '/cs': CS,
  '/math': MathTrack,
  '/engineering': Engineering,
  '/science': Science,
} as const;

const pageUrls = [...new Set(Object.values(COURSE_PAGES))];

/** `/cs/python1` → `/cs`; `/robotics` → `/robotics` (its own track page). */
const trackOf = (url: string) => `/${url.split('/')[1]}`;

const hrefsIn = (container: HTMLElement) =>
  new Set(
    [...container.querySelectorAll('a[href]')].map(
      // The science track page links both halves of Environmental Science at the same page with
      // a `#b` anchor to keep React keys unique, so compare paths and ignore the fragment.
      (a) => a.getAttribute('href')!.split('#')[0]
    )
  );

describe('shared course catalog', () => {
  it('advertises every course the catalog offers', () => {
    const unlisted = courses.filter((c) => !(c.id in COURSE_PAGES)).map((c) => c.id);
    expect(unlisted).toEqual([]);
  });

  it('advertises no course the catalog has dropped', () => {
    const ids = new Set(courses.map((c) => c.id));
    expect(Object.keys(COURSE_PAGES).filter((id) => !ids.has(id))).toEqual([]);
  });

  it('sends every course to a page that exists', () => {
    const broken = pageUrls.filter(
      (url) => !existsSync(path.join(process.cwd(), 'app', url, 'page.tsx'))
    );
    expect(broken).toEqual([]);
  });

  it('has no course page the catalog does not offer', () => {
    // Every subdirectory of a track directory is a course page, so one the table doesn't name is
    // either a retired course still linked from its track page or a new page nobody mapped.
    const orphans = Object.keys(TRACK_PAGES).flatMap((track) =>
      readdirSync(path.join(process.cwd(), 'app', track), { withFileTypes: true })
        .filter((entry) => entry.isDirectory())
        .map((entry) => `${track}/${entry.name}`)
        .filter((url) => !pageUrls.includes(url))
    );
    expect(orphans).toEqual([]);
  });
});

describe('course pages are reachable', () => {
  // A page that exists but is linked from nowhere is as invisible to a family as a missing one,
  // and that is the likelier slip: adding the page under `app/` is the memorable half, wiring it
  // into the track page's progression is the half that gets forgotten.
  it.each(Object.entries(TRACK_PAGES))(
    'links every %s course from its track page',
    (track, Page) => {
      const { container } = render(<Page />);
      const hrefs = hrefsIn(container);
      const missing = pageUrls.filter((url) => trackOf(url) === track && url !== track);
      expect(missing.filter((url) => !hrefs.has(url))).toEqual([]);
    }
  );

  it('links every track that hosts a course from the site navigation', () => {
    // `/robotics` is the one course URL no track page links, because it *is* its track page — the
    // nav's Programs menu is the only route to it, so that menu is what has to list it. Bootstrap
    // renders a dropdown's items only once it is open.
    const { container } = render(<Navigation />);
    fireEvent.click(screen.getByRole('button', { name: /Programs/i }));
    const hrefs = hrefsIn(container);
    const tracks = [...new Set(pageUrls.map(trackOf))];
    expect(tracks.filter((track) => !hrefs.has(track))).toEqual([]);
  });
});

describe('courses.json', () => {
  // Mirrors the admin repo's own checks so a mis-copied or hand-edited file fails `yarn test`
  // here rather than quietly disagreeing with what the portal offers.
  it('gives every course exactly the fields the admin repo defines', () => {
    for (const course of courses) {
      expect(Object.keys(course).sort()).toEqual(['id', 'name', 'semester', 'track']);
      expect(course.id).toMatch(/^\w+$/);
      expect(course.name.length).toBeGreaterThan(0);
      expect(['cs', 'math', 'engineering', 'science']).toContain(course.track);
      expect(['fall', 'spring']).toContain(course.semester);
    }
  });

  it('has no duplicate ids', () => {
    expect(new Set(courses.map((c) => c.id)).size).toBe(courses.length);
  });

  it('offers the same number of courses each semester', () => {
    // Adding a course means adding both its fall and its spring entry.
    const fall = courses.filter((c) => c.semester === 'fall');
    const spring = courses.filter((c) => c.semester === 'spring');
    expect(fall.length).toBe(spring.length);
    expect(fall.length).toBeGreaterThan(0);
  });

  it('names each course uniquely within a semester', () => {
    // `name` is the exact string stored on class, registration and application documents, and the
    // portal looks a course up by it within the current semester.
    for (const semester of ['fall', 'spring']) {
      const names = courses.filter((c) => c.semester === semester).map((c) => c.name);
      expect(new Set(names).size).toBe(names.length);
    }
  });
});
