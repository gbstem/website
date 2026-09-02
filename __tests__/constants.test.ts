import {
  CURRENT_SEMESTER,
  NEXT_SEMESTER,
  INSTRUCTOR_APPS_DUE_DATE,
  INSTRUCTOR_APPS_OPEN_DATE,
  PARENT_ORIENTATION_DATE,
  REGISTRATION_ENDS_DATE,
  REGISTRATION_OPEN_DATE,
  SEMESTER_END_DATE,
  SEMESTER_START_DATE,
  STUDENT_ORIENTATION_DATE,
  formatDate,
  semesterDates,
} from '@/lib/constants';

// `lib/semesterDates.json` is hand-copied from the admin repo at each semester rollover (see
// "Adding a New Semester" in that repo's README). These assertions mirror the admin repo's
// `__tests__/collections.test.ts` so a malformed date or a missing/renamed field fails loudly
// here at `yarn test` time rather than silently rendering "Invalid Date" on the live site.
describe('semesterDates.json', () => {
  const entries = Object.entries(semesterDates) as Array<[string, string]>;

  it('has exactly the fields the admin and portal repos define', () => {
    expect(Object.keys(semesterDates).sort()).toEqual(
      [
        'classesEnd',
        'classesStart',
        'instructorOrientation',
        'newInstructorAppsDue',
        'newInstructorAppsOpen',
        'parentOrientation',
        'registrationsDue',
        'registrationsOpen',
        'returningInstructorAppsDue',
        'returningInstructorAppsOpen',
        'studentOrientation',
      ].sort()
    );
  });

  it.each(entries)('%s is a valid MM/DD/YY date', (_field, value) => {
    expect(value).toMatch(/^\d{2}\/\d{2}\/\d{2}$/);
    expect(new Date(value).toString()).not.toBe('Invalid Date');
  });

  // Every field describes a single semester, so a stray year is a copy/paste slip.
  it('has every date in the same year', () => {
    const years = new Set(entries.map(([, value]) => value.slice(-2)));
    expect(years.size).toBe(1);
  });

  it('orders the semester milestones sensibly', () => {
    expect(REGISTRATION_OPEN_DATE.getTime()).toBeLessThan(REGISTRATION_ENDS_DATE.getTime());
    expect(INSTRUCTOR_APPS_OPEN_DATE.getTime()).toBeLessThan(INSTRUCTOR_APPS_DUE_DATE.getTime());
    expect(SEMESTER_START_DATE.getTime()).toBeLessThan(SEMESTER_END_DATE.getTime());
    expect(INSTRUCTOR_APPS_DUE_DATE.getTime()).toBeLessThanOrEqual(SEMESTER_START_DATE.getTime());
  });
});

describe('derived date constants', () => {
  it('read the JSON field each one names', () => {
    expect(SEMESTER_START_DATE).toEqual(new Date(semesterDates.classesStart));
    expect(SEMESTER_END_DATE).toEqual(new Date(semesterDates.classesEnd));
    expect(REGISTRATION_OPEN_DATE).toEqual(new Date(semesterDates.registrationsOpen));
    expect(REGISTRATION_ENDS_DATE).toEqual(new Date(semesterDates.registrationsDue));
    expect(STUDENT_ORIENTATION_DATE).toEqual(new Date(semesterDates.studentOrientation));
    expect(PARENT_ORIENTATION_DATE).toEqual(new Date(semesterDates.parentOrientation));
    expect(INSTRUCTOR_APPS_OPEN_DATE).toEqual(new Date(semesterDates.newInstructorAppsOpen));
    expect(INSTRUCTOR_APPS_DUE_DATE).toEqual(new Date(semesterDates.newInstructorAppsDue));
  });
});

describe('CURRENT_SEMESTER', () => {
  // It labels the dates in semesterDates.json, so it has to be read out of those dates rather
  // than off today's calendar - otherwise the label and the date beside it in a sentence can
  // name different semesters.
  it('names the semester that classesStart falls in', () => {
    expect(CURRENT_SEMESTER).toBe(SEMESTER_START_DATE.getMonth() >= 6 ? 'Fall' : 'Spring');
  });

  it('is one of the two season labels the prose interpolates', () => {
    expect(['Fall', 'Spring']).toContain(CURRENT_SEMESTER);
  });

  // Real rollovers to date: Spring26 started 03/15/26, Fall26 starts 09/27/26 - months of margin
  // on either side of the July split, so a shifted start date can't flip the label.
  it.each([
    ['03/15/26', 'Spring'],
    ['09/27/26', 'Fall'],
  ])('classifies a %s start as the %s semester', (classesStart, expected) => {
    expect(new Date(classesStart).getMonth() >= 6 ? 'Fall' : 'Spring').toBe(expected);
  });
});

describe('NEXT_SEMESTER', () => {
  it('is the season after CURRENT_SEMESTER', () => {
    expect(NEXT_SEMESTER).toBe(CURRENT_SEMESTER === 'Fall' ? 'Spring' : 'Fall');
  });
});

// The phases exist so a page can render one message per state without gaps or overlaps. These
// walk a whole calendar year against both real semesters gbSTEM has run, because the Fall 2026
// dates hide the interesting case: registration closes the same day classes start, so the
// "registration closed, classes not started yet" phase is empty there and only shows up against
// Spring 2026, where those dates are a week apart.
describe('semesterPhaseOn', () => {
  const FALL_26 = {
    classesEnd: '12/20/26',
    classesStart: '09/27/26',
    instructorOrientation: '09/20/26',
    newInstructorAppsDue: '09/18/26',
    newInstructorAppsOpen: '08/05/26',
    parentOrientation: '09/20/26',
    registrationsDue: '09/27/26',
    registrationsOpen: '08/05/26',
    returningInstructorAppsDue: '09/18/26',
    returningInstructorAppsOpen: '08/05/26',
    studentOrientation: '09/20/26',
  };
  const SPRING_26 = {
    ...FALL_26,
    classesEnd: '06/13/26',
    classesStart: '03/15/26',
    newInstructorAppsDue: '03/05/26',
    newInstructorAppsOpen: '02/01/26',
    registrationsDue: '03/08/26',
    registrationsOpen: '01/31/26',
  };

  async function walkTheYear(dates: typeof FALL_26) {
    jest.resetModules();
    jest.doMock('@/lib/semesterDates.json', () => dates);
    const { semesterPhaseOn } = await import('@/lib/constants');
    const days: Array<{ date: Date; phase: string }> = [];
    for (const d = new Date('01/01/26'); d <= new Date('12/31/26'); d.setDate(d.getDate() + 1)) {
      const date = new Date(d);
      days.push({ date, phase: semesterPhaseOn(date) });
    }
    return days;
  }

  afterEach(() => {
    jest.resetModules();
    jest.dontMock('@/lib/semesterDates.json');
  });

  const PHASES = [
    'before-registration',
    'registration-open',
    'registration-closed',
    'classes-in-progress',
    'semester-over',
  ];

  it.each([
    ['Fall 2026', FALL_26],
    ['Spring 2026', SPRING_26],
  ])('gives every day of %s exactly one known phase', async (_name, dates) => {
    const days = await walkTheYear(dates);
    expect(days).toHaveLength(365);
    for (const { phase } of days) {
      expect(PHASES).toContain(phase);
    }
  });

  it.each([
    ['Fall 2026', FALL_26],
    ['Spring 2026', SPRING_26],
  ])('never contradicts the dates it was given, across %s', async (_name, dates) => {
    for (const { date, phase } of await walkTheYear(dates)) {
      const on = (field: keyof typeof dates) => new Date(dates[field]);
      switch (phase) {
        case 'before-registration':
          expect(date.getTime()).toBeLessThan(on('registrationsOpen').getTime());
          break;
        case 'registration-open':
          expect(date.getTime()).toBeGreaterThanOrEqual(on('registrationsOpen').getTime());
          expect(date.getTime()).toBeLessThanOrEqual(on('registrationsDue').getTime());
          break;
        case 'registration-closed':
          expect(date.getTime()).toBeGreaterThan(on('registrationsDue').getTime());
          expect(date.getTime()).toBeLessThan(on('classesStart').getTime());
          break;
        case 'classes-in-progress':
          expect(date.getTime()).toBeGreaterThanOrEqual(on('classesStart').getTime());
          expect(date.getTime()).toBeLessThanOrEqual(on('classesEnd').getTime());
          break;
        case 'semester-over':
          expect(date.getTime()).toBeGreaterThan(on('classesEnd').getTime());
          break;
      }
    }
  });

  // The regression this whole type exists for: six days that previously matched no condition at
  // all and rendered an empty alert box on the home page.
  it('covers the Spring 2026 gap between registration closing and classes starting', async () => {
    const days = await walkTheYear(SPRING_26);
    const gap = days.filter(({ phase }) => phase === 'registration-closed');
    expect(gap.map(({ date }) => date.toLocaleDateString('en-US'))).toEqual([
      '3/9/2026',
      '3/10/2026',
      '3/11/2026',
      '3/12/2026',
      '3/13/2026',
      '3/14/2026',
    ]);
  });

  // The other half: Fall 2026's registration deadline falls on the first day of classes, which
  // used to satisfy both the "register by" and "semester underway" conditions at once.
  it('picks registration-open, not classes-in-progress, on Fall 2026 boundary day', async () => {
    const days = await walkTheYear(FALL_26);
    const boundary = days.find(({ date }) => date.toLocaleDateString('en-US') === '9/27/2026');
    expect(boundary?.phase).toBe('registration-open');
  });
});

describe('formatDate', () => {
  it('renders a MM/DD/YY date as long-form prose', () => {
    expect(formatDate(new Date('09/27/26'))).toBe('September 27, 2026');
  });
});
