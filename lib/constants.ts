import semesterDates from './semesterDates.json';

/**
 * The current semester's key dates. This file is the *same JSON file* that the admin and
 * portal repos read (`src/lib/data/semesterDates.json` in both) — it is copied here verbatim
 * at each semester rollover, so all three repos agree on one set of dates. See the
 * "Adding a New Semester" section of the admin repo's README for the rollover procedure.
 *
 * Values are `MM/DD/YY` strings, parsed below with `new Date(...)` (local midnight) exactly
 * the way the portal repo reads them, so a date means the same thing in every repo.
 */
export { semesterDates };

export const SEMESTER_START_DATE = new Date(semesterDates.classesStart);
export const SEMESTER_END_DATE = new Date(semesterDates.classesEnd);
export const REGISTRATION_OPEN_DATE = new Date(semesterDates.registrationsOpen);
export const REGISTRATION_ENDS_DATE = new Date(semesterDates.registrationsDue);
export const STUDENT_ORIENTATION_DATE = new Date(semesterDates.studentOrientation);
export const PARENT_ORIENTATION_DATE = new Date(semesterDates.parentOrientation);

// The public site only ever advertises the *new* instructor application window — returning
// instructors apply from inside the portal, which reads `returningInstructorApps*` itself.
export const INSTRUCTOR_APPS_OPEN_DATE = new Date(semesterDates.newInstructorAppsOpen);
export const INSTRUCTOR_APPS_DUE_DATE = new Date(semesterDates.newInstructorAppsDue);

/**
 * Which semester the dates above belong to — the one gbSTEM is currently operating, whether or
 * not its classes have started yet. Interpolate it wherever prose names a semester alongside one
 * of those dates ("the {CURRENT_SEMESTER} semester runs from {SEMESTER_START_DATE}..."), so the
 * label and the date can never describe different semesters.
 *
 * The admin and portal repos export the same concept as `currentSemester` from
 * `src/lib/data/collections.ts`; theirs is the full semester id (`'Fall26'`) since it builds
 * Firestore paths, while ours is just the season, because every use here is prose. Same word for
 * the same idea across all three repos, different shape for different jobs.
 *
 * Derived from `classesStart` rather than today's date, so it is stale exactly when the rest of
 * semesterDates.json is stale, and never disagrees with a date printed in the same sentence. The
 * July split has months of margin either way: fall semesters have started in September and spring
 * semesters in March.
 */
export const CURRENT_SEMESTER = SEMESTER_START_DATE.getMonth() >= 6 ? 'Fall' : 'Spring';

/**
 * The season after CURRENT_SEMESTER. A label only: semesterDates.json describes exactly one
 * semester, so we know this one's name and nothing else — never write a sentence that promises
 * one of its dates.
 */
export const NEXT_SEMESTER = CURRENT_SEMESTER === 'Fall' ? 'Spring' : 'Fall';

/**
 * "Is this window open right now?" — independent questions, so more than one can be true at
 * once (instructor applications close before registration does, and both are open together for
 * most of August). Use these to gate a link, a button, or a card. For prose that describes where
 * the semester as a whole stands, use SEMESTER_PHASE below instead: these overlap, and a page
 * that renders one paragraph per boolean will show two of them at the same time.
 */
export const REGISTRATION_NOT_YET_OPEN = new Date() < REGISTRATION_OPEN_DATE;
export const REGISTRATION_OPEN =
  new Date() >= REGISTRATION_OPEN_DATE && new Date() <= REGISTRATION_ENDS_DATE;
export const INSTRUCTOR_APPS_NOT_YET_OPEN = new Date() < INSTRUCTOR_APPS_OPEN_DATE;
export const INSTRUCTOR_APPS_OPEN =
  new Date() >= INSTRUCTOR_APPS_OPEN_DATE && new Date() <= INSTRUCTOR_APPS_DUE_DATE;
export const SEMESTER_IN_PROGRESS =
  new Date() >= SEMESTER_START_DATE && new Date() <= SEMESTER_END_DATE;
export const SEMESTER_IS_OVER = new Date() > SEMESTER_END_DATE;

/**
 * Where the semester stands, as exactly one value — the thing a visitor needs a single sentence
 * about. Unlike the booleans above these are mutually exclusive and exhaustive, so a `switch`
 * over them always produces one message and never zero.
 *
 * - `before-registration` — registration has not opened yet
 * - `registration-open` — registration is accepting students
 * - `registration-closed` — registration has closed but classes have not started. Easy to
 *   forget: Spring 2026 had six such days (registrations due 03/08, classes started 03/15).
 * - `classes-in-progress` — classes are running
 * - `semester-over` — classes have ended, and semesterDates.json has not rolled over yet
 */
export type SemesterPhase =
  | 'before-registration'
  | 'registration-open'
  | 'registration-closed'
  | 'classes-in-progress'
  | 'semester-over';

/**
 * Pure so `__tests__/constants.test.ts` can walk an entire calendar year and prove every day
 * lands in exactly one phase — the six-day hole above was invisible against the Fall 2026 dates,
 * where registration closes on the very day classes start.
 */
export const semesterPhaseOn = (now: Date): SemesterPhase => {
  if (now > SEMESTER_END_DATE) return 'semester-over';
  if (now < REGISTRATION_OPEN_DATE) return 'before-registration';
  if (now <= REGISTRATION_ENDS_DATE) return 'registration-open';
  if (now >= SEMESTER_START_DATE) return 'classes-in-progress';
  return 'registration-closed';
};

export const SEMESTER_PHASE = semesterPhaseOn(new Date());

/**
 * Long-form date for prose ("September 27, 2026"). The locale is pinned rather than left to
 * `toLocaleDateString()`'s default so the server render, the browser render, and unit tests
 * all produce the same string. This is appropriate because we're a US-based organization
 * and our audience is just the Boston area.
 */
export const formatDate = (date: Date) =>
  date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });

/**
 * A direct link to the Google Form for getting new semester notificatioons.
 */
export const MAILING_LIST_FORM_LINK =
  'https://docs.google.com/forms/u/3/d/e/1FAIpQLSfRe7CVWxhOLb7mN20zER94-le4Wt-PCNX3Xd1iAJ53Ljh0ow/viewform?usp=sf_link';

/**
 * Link to the sign-up page for the portal.
 */
export const GBSTEM_SIGNUP = 'https://portal.gbstem.org/signup';
