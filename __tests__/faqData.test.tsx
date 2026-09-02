import type { SemesterStatus } from '@/lib/constants';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

/**
 * The answers are built by `generalFaq(status)` / `otherFaq(status)` at render time, so *when*
 * you ask is just an argument. The *dates* are still module-scope in lib/faqData.tsx, so a case
 * that varies a date (the orientation pair below) still needs a fresh import behind a fresh mock.
 * That is safe in this file only because the answers are plain elements with no hooks, so the
 * second React instance a reset registry creates never has to render anything stateful.
 */
const BASE_CONSTANTS = {
  CURRENT_SEMESTER: 'Fall',
  NEXT_SEMESTER: 'Spring',
  GBSTEM_SIGNUP: 'https://portal.gbstem.org/signup',
  MAILING_LIST_FORM_LINK: 'https://example.com/mailing-list',
  SEMESTER_START_DATE: new Date('09/27/26'),
  SEMESTER_END_DATE: new Date('12/20/26'),
  REGISTRATION_OPEN_DATE: new Date('08/05/26'),
  REGISTRATION_ENDS_DATE: new Date('09/27/26'),
  INSTRUCTOR_APPS_OPEN_DATE: new Date('08/05/26'),
  INSTRUCTOR_APPS_DUE_DATE: new Date('09/18/26'),
  STUDENT_ORIENTATION_DATE: new Date('09/20/26'),
  PARENT_ORIENTATION_DATE: new Date('09/20/26'),
  formatDate: (date: Date) =>
    date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
};

const BASE_STATUS = {
  phase: 'registration-open' as string,
  registrationNotYetOpen: false,
  registrationOpen: true,
  instructorAppsNotYetOpen: false,
  instructorAppsOpen: true,
  semesterInProgress: false,
  semesterIsOver: false,
};

async function renderAnswer(
  section: 'general' | 'other',
  question: RegExp,
  statusOverrides: Partial<typeof BASE_STATUS> = {},
  constantOverrides: Partial<typeof BASE_CONSTANTS> = {}
) {
  jest.resetModules();
  jest.doMock('@/lib/constants', () => ({ ...BASE_CONSTANTS, ...constantOverrides }));
  const { generalFaq, otherFaq } = await import('@/lib/faqData');
  const status = { ...BASE_STATUS, ...statusOverrides } as SemesterStatus;
  const entry = (section === 'general' ? generalFaq(status) : otherFaq(status)).find((pair) =>
    question.test(pair.question)
  );
  expect(entry).toBeDefined();
  render(<>{entry!.answer}</>);
}

afterEach(() => {
  jest.resetModules();
  jest.dontMock('@/lib/constants');
});

const REGISTER = /^How do I register for the program\?$/;
const PROGRAM_DATES = /^When does the program start and end\?$/;
const INSTRUCTOR = /How can I apply to become an instructor/;

// The same five phases the home page switches on, so the two pages can't disagree.
describe('FAQ data: how do I register', () => {
  it('links to registration and gives the deadline while registration is open', async () => {
    await renderAnswer('general', REGISTER, { phase: 'registration-open' });

    expect(screen.getByRole('link', { name: /Register here/i })).toHaveAttribute(
      'href',
      'https://portal.gbstem.org/signup'
    );
    expect(screen.getByText(/open through September 27, 2026/i)).toBeInTheDocument();
  });

  it('gives the opening date before registration opens', async () => {
    await renderAnswer('general', REGISTER, { phase: 'before-registration' });

    expect(screen.queryByRole('link', { name: /Register here/i })).not.toBeInTheDocument();
    expect(screen.getByText(/opens on August 5, 2026/i)).toBeInTheDocument();
  });

  // The phase that used to have no answer of its own: registration has shut, but classes have
  // not started, so "registration is now closed" was paired with an opening date in the past.
  it('says classes are about to start in the registration-closed phase', async () => {
    await renderAnswer('general', REGISTER, { phase: 'registration-closed' });

    expect(
      screen.getByText(/has closed and classes begin on September 27, 2026/i)
    ).toBeInTheDocument();
    expect(screen.queryByText(/opens on August 5, 2026/i)).not.toBeInTheDocument();
  });

  // A bare "In the meantime... when it opens" reads as this semester's registration, which never
  // reopens once closed. These two phases have to name the next semester instead.
  it.each([['registration-closed'], ['classes-in-progress']])(
    'names the next semester rather than a vague "it" in the %s phase',
    async (phase) => {
      await renderAnswer('general', REGISTER, { phase: phase });

      expect(screen.getByText(/when Spring registration opens/i)).toBeInTheDocument();
      expect(screen.queryByText(/when it opens/i)).not.toBeInTheDocument();
    }
  );

  it('points at the following semester once classes are underway', async () => {
    await renderAnswer('general', REGISTER, { phase: 'classes-in-progress' });

    expect(screen.getByText(/closed until the Spring semester/i)).toBeInTheDocument();
  });

  it('points at the following semester once the semester is over', async () => {
    await renderAnswer('general', REGISTER, {
      phase: 'semester-over',
      semesterIsOver: true,
    });

    expect(screen.getByText(/The Fall semester is over/i)).toBeInTheDocument();
    expect(screen.getByText(/Spring semester has not opened yet/i)).toBeInTheDocument();
  });

  it.each([
    ['before-registration', false],
    ['registration-closed', false],
    ['classes-in-progress', false],
    ['semester-over', true],
  ])('offers the mailing list in the %s phase', async (phase, isOver) => {
    await renderAnswer('general', REGISTER, {
      phase,
      semesterIsOver: isOver,
    });

    expect(screen.getByRole('link', { name: /mailing list/i })).toHaveAttribute(
      'href',
      'https://example.com/mailing-list'
    );
  });
});

describe('FAQ data: when does the program start and end', () => {
  it.each([
    ['before-registration', false, /will run from September 27, 2026 to December 20, 2026/i],
    ['classes-in-progress', false, /runs from September 27, 2026 to December 20, 2026/i],
    ['semester-over', true, /ran from September 27, 2026 to December 20, 2026/i],
  ])('uses the right tense in the %s phase', async (phase, isOver, expected) => {
    await renderAnswer('general', PROGRAM_DATES, {
      phase,
      semesterIsOver: isOver,
    });

    expect(screen.getByText(expected)).toBeInTheDocument();
  });

  // The orientations are before classesStart, so they are already past once classes run - the
  // clause used to stay in the present tense next to a sentence that had switched to the past.
  it.each([
    [
      'before-registration',
      false,
      /orientations are held before classes begin, on September 20, 2026/i,
    ],
    [
      'classes-in-progress',
      false,
      /orientations were held before classes began, on September 20, 2026/i,
    ],
    ['semester-over', true, /orientations were held before classes began, on September 20, 2026/i],
  ])(
    'puts the orientation clause in the right tense in the %s phase',
    async (phase, isOver, expected) => {
      await renderAnswer('general', PROGRAM_DATES, {
        phase,
        semesterIsOver: isOver,
      });

      expect(screen.getByText(expected)).toBeInTheDocument();
    }
  );

  // Student and parent orientation have shared a date every semester so far, so the common case
  // must not read "on September 20, 2026 and September 20, 2026".
  it('names one date when both orientations fall on the same day', async () => {
    await renderAnswer('general', PROGRAM_DATES, {});

    expect(screen.getByText(/on September 20, 2026\./i)).toBeInTheDocument();
    expect(screen.queryByText(/respectively/i)).not.toBeInTheDocument();
  });

  it('names both dates when the orientations fall on different days', async () => {
    await renderAnswer(
      'general',
      PROGRAM_DATES,
      {},
      { PARENT_ORIENTATION_DATE: new Date('09/21/26') }
    );

    expect(
      screen.getByText(/on September 20, 2026 and September 21, 2026 respectively/i)
    ).toBeInTheDocument();
  });
});

describe('FAQ data: how do I apply to be an instructor', () => {
  it('links to the application and gives the deadline while applications are open', async () => {
    await renderAnswer('other', INSTRUCTOR, { instructorAppsOpen: true });

    expect(screen.getByRole('link', { name: /Apply to teach/i })).toHaveAttribute(
      'href',
      'https://portal.gbstem.org/signup'
    );
    expect(screen.getByText(/open through September 18, 2026/i)).toBeInTheDocument();
  });

  it('gives the opening date before applications open', async () => {
    await renderAnswer('other', INSTRUCTOR, {
      instructorAppsOpen: false,
      instructorAppsNotYetOpen: true,
    });

    expect(screen.queryByRole('link', { name: /Apply to teach/i })).not.toBeInTheDocument();
    expect(screen.getByText(/open on August 5, 2026/i)).toBeInTheDocument();
  });

  // Applications close nine days before registration does, so "closed" is a distinct state from
  // "not open yet" - it used to print the opening date in both.
  it('says applications have closed once the window has passed', async () => {
    await renderAnswer('other', INSTRUCTOR, {
      instructorAppsOpen: false,
      instructorAppsNotYetOpen: false,
    });

    expect(screen.getByText(/closed on September 18, 2026/i)).toBeInTheDocument();
    expect(screen.getByText(/Spring semester have not opened yet/i)).toBeInTheDocument();
    expect(screen.queryByText(/open on August 5, 2026/i)).not.toBeInTheDocument();
  });
});
