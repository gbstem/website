import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

/**
 * Unlike the faqData tests, this file must NOT call jest.resetModules(): Intro renders
 * react-bootstrap components that call useContext, and a reset registry hands them a second copy
 * of React while @testing-library/react still holds the first, which fails with a null
 * dispatcher. Intro reads its constants during render rather than at module load, so mutating
 * one shared mock object between renders is enough - and keeps a single React instance.
 */
const mockConstants: Record<string, unknown> = {};
jest.mock('@/lib/constants', () => mockConstants);

const BASE_CONSTANTS = {
  CURRENT_SEMESTER: 'Fall',
  NEXT_SEMESTER: 'Spring',
  GBSTEM_SIGNUP: 'https://portal.gbstem.org/signup',
  MAILING_LIST_FORM_LINK: 'https://example.com/mailing-list',
  SEMESTER_START_DATE: new Date('09/27/26'),
  SEMESTER_END_DATE: new Date('12/20/26'),
  REGISTRATION_OPEN_DATE: new Date('08/05/26'),
  REGISTRATION_ENDS_DATE: new Date('09/27/26'),
  INSTRUCTOR_APPS_DUE_DATE: new Date('09/18/26'),
  SEMESTER_PHASE: 'registration-open',
  REGISTRATION_OPEN: true,
  INSTRUCTOR_APPS_OPEN: true,
  SEMESTER_IN_PROGRESS: false,
  SEMESTER_IS_OVER: false,
  formatDate: (date: Date) =>
    date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
};

function renderIntro(overrides: Partial<typeof BASE_CONSTANTS>) {
  for (const key of Object.keys(mockConstants)) delete mockConstants[key];
  Object.assign(mockConstants, BASE_CONSTANTS, overrides);
  // Required lazily so the mock factory runs after BASE_CONSTANTS exists; the module cache is
  // deliberately left intact between tests (see the note above).
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const Intro = require('@/components/home/Intro').default;
  render(<Intro />);
}

// One probe per phase. Asserting the other four are absent is what proves the alert holds a
// single message - the previous version rendered a paragraph per boolean, so the phases could
// (and on two real dates did) appear together or not at all.
const PHASE_PROBES = {
  'before-registration': /has not opened yet/i,
  'registration-open': /Register to be a student by/i,
  'registration-closed': /Classes begin on/i,
  'classes-in-progress': /Registration is closed until the/i,
  'semester-over': /semester is now over/i,
};

describe('HomeIntro registration alert', () => {
  it.each(Object.keys(PHASE_PROBES))('shows only the %s message in that phase', (phase) => {
    renderIntro({
      SEMESTER_PHASE: phase,
      REGISTRATION_OPEN: phase === 'registration-open',
      SEMESTER_IN_PROGRESS: phase === 'classes-in-progress',
      SEMESTER_IS_OVER: phase === 'semester-over',
      INSTRUCTOR_APPS_OPEN: false,
    });

    for (const [candidate, probe] of Object.entries(PHASE_PROBES)) {
      if (candidate === phase) {
        expect(screen.getByText(probe, { exact: false })).toBeInTheDocument();
      } else {
        expect(screen.queryByText(probe, { exact: false })).not.toBeInTheDocument();
      }
    }
  });

  it('never renders an empty alert, including in the registration-closed phase', () => {
    renderIntro({ SEMESTER_PHASE: 'registration-closed', REGISTRATION_OPEN: false });
    expect(screen.getByRole('alert')).toHaveTextContent(/\S/);
  });

  it('states the semester dates in the present tense while classes run', () => {
    renderIntro({ SEMESTER_PHASE: 'classes-in-progress', SEMESTER_IN_PROGRESS: true });
    expect(screen.getByText(/semester runs from September 27, 2026 to December 20, 2026/i));
  });

  it('drops the semester dates line once the semester is over', () => {
    renderIntro({ SEMESTER_PHASE: 'semester-over', SEMESTER_IS_OVER: true });
    expect(screen.queryByText(/will run from/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/semester runs from/i)).not.toBeInTheDocument();
  });
});

describe('HomeIntro mailing list', () => {
  it('offers exactly one mailing-list link when the semester is over', () => {
    renderIntro({
      SEMESTER_PHASE: 'semester-over',
      SEMESTER_IS_OVER: true,
      REGISTRATION_OPEN: false,
      INSTRUCTOR_APPS_OPEN: false,
    });

    const links = screen.getAllByRole('link', { name: /mailing list/i });
    expect(links).toHaveLength(1);
    expect(links[0]).toHaveAttribute('href', 'https://example.com/mailing-list');
  });

  it('renders the link as a real anchor, not escaped markup', () => {
    renderIntro({ SEMESTER_PHASE: 'semester-over', SEMESTER_IS_OVER: true });
    expect(screen.queryByText(/<a href=/)).not.toBeInTheDocument();
  });

  it('offers the mailing list while registration is shut but the semester is not over', () => {
    renderIntro({ SEMESTER_PHASE: 'before-registration', REGISTRATION_OPEN: false });
    expect(screen.getAllByRole('link', { name: /mailing list/i })).toHaveLength(1);
  });
});

describe('HomeIntro call-to-action cards', () => {
  it('shows both cards while both windows are open', () => {
    renderIntro({ REGISTRATION_OPEN: true, INSTRUCTOR_APPS_OPEN: true });
    expect(screen.getByRole('link', { name: 'Register' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Apply to teach' })).toBeInTheDocument();
  });

  // Instructor applications close nine days before registration does; the apply button used to
  // stay up for that whole window because both cards were gated on REGISTRATION_OPEN.
  it('drops the apply card once instructor applications close, keeping the register card', () => {
    renderIntro({ REGISTRATION_OPEN: true, INSTRUCTOR_APPS_OPEN: false });
    expect(screen.getByRole('link', { name: 'Register' })).toBeInTheDocument();
    expect(screen.queryByRole('link', { name: 'Apply to teach' })).not.toBeInTheDocument();
  });

  it('shows no cards once both windows are shut', () => {
    renderIntro({
      SEMESTER_PHASE: 'classes-in-progress',
      REGISTRATION_OPEN: false,
      INSTRUCTOR_APPS_OPEN: false,
      SEMESTER_IN_PROGRESS: true,
    });
    expect(screen.queryByRole('link', { name: 'Register' })).not.toBeInTheDocument();
    expect(screen.queryByRole('link', { name: 'Apply to teach' })).not.toBeInTheDocument();
  });
});
