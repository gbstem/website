import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

/**
 * faqData builds its answers at module load, so - unlike the Intro tests, which mutate one shared
 * mock - each case here needs a fresh import behind a fresh mock. That is safe in this file only
 * because the answers are plain elements with no hooks, so the second React instance a reset
 * registry creates never has to render anything stateful.
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
  SEMESTER_PHASE: 'registration-open',
  INSTRUCTOR_APPS_OPEN: true,
  INSTRUCTOR_APPS_NOT_YET_OPEN: false,
  SEMESTER_IS_OVER: false,
  formatDate: (date: Date) =>
    date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
};

async function renderAnswer(
  section: 'general' | 'other',
  question: RegExp,
  overrides: Partial<typeof BASE_CONSTANTS>
) {
  jest.resetModules();
  jest.doMock('@/lib/constants', () => ({ ...BASE_CONSTANTS, ...overrides }));
  const faqData = await import('@/lib/faqData');
  const entry = faqData[section].find((pair) => question.test(pair.question));
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
    await renderAnswer('general', REGISTER, { SEMESTER_PHASE: 'registration-open' });

    expect(screen.getByRole('link', { name: /Register here/i })).toHaveAttribute(
      'href',
      'https://portal.gbstem.org/signup'
    );
    expect(screen.getByText(/open through September 27, 2026/i)).toBeInTheDocument();
  });

  it('gives the opening date before registration opens', async () => {
    await renderAnswer('general', REGISTER, { SEMESTER_PHASE: 'before-registration' });

    expect(screen.queryByRole('link', { name: /Register here/i })).not.toBeInTheDocument();
    expect(screen.getByText(/opens on August 5, 2026/i)).toBeInTheDocument();
  });

  // The phase that used to have no answer of its own: registration has shut, but classes have
  // not started, so "registration is now closed" was paired with an opening date in the past.
  it('says classes are about to start in the registration-closed phase', async () => {
    await renderAnswer('general', REGISTER, { SEMESTER_PHASE: 'registration-closed' });

    expect(
      screen.getByText(/has closed and classes begin on September 27, 2026/i)
    ).toBeInTheDocument();
    expect(screen.queryByText(/opens on August 5, 2026/i)).not.toBeInTheDocument();
  });

  it('points at the following semester once classes are underway', async () => {
    await renderAnswer('general', REGISTER, { SEMESTER_PHASE: 'classes-in-progress' });

    expect(screen.getByText(/closed until the Spring semester/i)).toBeInTheDocument();
  });

  it('points at the following semester once the semester is over', async () => {
    await renderAnswer('general', REGISTER, {
      SEMESTER_PHASE: 'semester-over',
      SEMESTER_IS_OVER: true,
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
      SEMESTER_PHASE: phase,
      SEMESTER_IS_OVER: isOver,
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
      SEMESTER_PHASE: phase,
      SEMESTER_IS_OVER: isOver,
    });

    expect(screen.getByText(expected)).toBeInTheDocument();
  });

  it('names the orientation dates', async () => {
    await renderAnswer('general', PROGRAM_DATES, {});

    expect(screen.getByText(/student orientation on September 20, 2026/i)).toBeInTheDocument();
    expect(screen.getByText(/parent orientation on September 20, 2026/i)).toBeInTheDocument();
  });
});

describe('FAQ data: how do I apply to be an instructor', () => {
  it('links to the application and gives the deadline while applications are open', async () => {
    await renderAnswer('other', INSTRUCTOR, { INSTRUCTOR_APPS_OPEN: true });

    expect(screen.getByRole('link', { name: /Apply to teach/i })).toHaveAttribute(
      'href',
      'https://portal.gbstem.org/signup'
    );
    expect(screen.getByText(/open through September 18, 2026/i)).toBeInTheDocument();
  });

  it('gives the opening date before applications open', async () => {
    await renderAnswer('other', INSTRUCTOR, {
      INSTRUCTOR_APPS_OPEN: false,
      INSTRUCTOR_APPS_NOT_YET_OPEN: true,
    });

    expect(screen.queryByRole('link', { name: /Apply to teach/i })).not.toBeInTheDocument();
    expect(screen.getByText(/open on August 5, 2026/i)).toBeInTheDocument();
  });

  // Applications close nine days before registration does, so "closed" is a distinct state from
  // "not open yet" - it used to print the opening date in both.
  it('says applications have closed once the window has passed', async () => {
    await renderAnswer('other', INSTRUCTOR, {
      INSTRUCTOR_APPS_OPEN: false,
      INSTRUCTOR_APPS_NOT_YET_OPEN: false,
    });

    expect(screen.getByText(/closed on September 18, 2026/i)).toBeInTheDocument();
    expect(screen.getByText(/Spring semester have not opened yet/i)).toBeInTheDocument();
    expect(screen.queryByText(/open on August 5, 2026/i)).not.toBeInTheDocument();
  });
});
