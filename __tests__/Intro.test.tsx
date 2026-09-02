import Intro from '@/components/home/Intro';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

/**
 * Intro reads the calendar through `currentSemesterStatus()` during render, so a test hands it a
 * status object and nothing else - no module-registry games, and in particular no
 * jest.resetModules(), which used to be needed here and handed react-bootstrap a second copy of
 * React (a null-dispatcher failure on every useContext).
 *
 * The dates are pinned rather than read from semesterDates.json so a semester rollover cannot
 * quietly change what these assertions mean.
 */
const mockStatus = {
  phase: 'registration-open' as string,
  registrationNotYetOpen: false,
  registrationOpen: true,
  instructorAppsNotYetOpen: false,
  instructorAppsOpen: true,
  semesterInProgress: false,
  semesterIsOver: false,
};

jest.mock('@/lib/constants', () => ({
  CURRENT_SEMESTER: 'Fall',
  NEXT_SEMESTER: 'Spring',
  GBSTEM_SIGNUP: 'https://portal.gbstem.org/signup',
  MAILING_LIST_FORM_LINK: 'https://example.com/mailing-list',
  SEMESTER_START_DATE: new Date('09/27/26'),
  SEMESTER_END_DATE: new Date('12/20/26'),
  REGISTRATION_OPEN_DATE: new Date('08/05/26'),
  REGISTRATION_ENDS_DATE: new Date('09/27/26'),
  INSTRUCTOR_APPS_DUE_DATE: new Date('09/18/26'),
  formatDate: (date: Date) =>
    date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
  currentSemesterStatus: () => mockStatus,
}));

const BASE_STATUS = { ...mockStatus };

function renderIntro(overrides: Partial<typeof BASE_STATUS> = {}) {
  Object.assign(mockStatus, BASE_STATUS, overrides);
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
      phase,
      registrationOpen: phase === 'registration-open',
      semesterInProgress: phase === 'classes-in-progress',
      semesterIsOver: phase === 'semester-over',
      instructorAppsOpen: false,
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
    renderIntro({ phase: 'registration-closed', registrationOpen: false });
    expect(screen.getByRole('alert')).toHaveTextContent(/\S/);
  });

  it('states the semester dates in the present tense while classes run', () => {
    renderIntro({ phase: 'classes-in-progress', semesterInProgress: true });
    expect(screen.getByText(/semester runs from September 27, 2026 to December 20, 2026/i));
  });

  it('drops the semester dates line once the semester is over', () => {
    renderIntro({ phase: 'semester-over', semesterIsOver: true });
    expect(screen.queryByText(/will run from/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/semester runs from/i)).not.toBeInTheDocument();
  });
});

describe('HomeIntro mailing list', () => {
  it('offers exactly one mailing-list link when the semester is over', () => {
    renderIntro({
      phase: 'semester-over',
      semesterIsOver: true,
      registrationOpen: false,
      instructorAppsOpen: false,
    });

    const links = screen.getAllByRole('link', { name: /mailing list/i });
    expect(links).toHaveLength(1);
    expect(links[0]).toHaveAttribute('href', 'https://example.com/mailing-list');
  });

  it('renders the link as a real anchor, not escaped markup', () => {
    renderIntro({ phase: 'semester-over', semesterIsOver: true });
    expect(screen.queryByText(/<a href=/)).not.toBeInTheDocument();
  });

  it('offers the mailing list while registration is shut but the semester is not over', () => {
    renderIntro({ phase: 'before-registration', registrationOpen: false });
    expect(screen.getAllByRole('link', { name: /mailing list/i })).toHaveLength(1);
  });
});

describe('HomeIntro call-to-action cards', () => {
  it('shows both cards while both windows are open', () => {
    renderIntro({ registrationOpen: true, instructorAppsOpen: true });
    expect(screen.getByRole('link', { name: 'Register' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Apply to teach' })).toBeInTheDocument();
  });

  // Instructor applications close nine days before registration does; the apply button used to
  // stay up for that whole window because both cards were gated on the registration window.
  it('drops the apply card once instructor applications close, keeping the register card', () => {
    renderIntro({ registrationOpen: true, instructorAppsOpen: false });
    expect(screen.getByRole('link', { name: 'Register' })).toBeInTheDocument();
    expect(screen.queryByRole('link', { name: 'Apply to teach' })).not.toBeInTheDocument();
  });

  it('shows no cards once both windows are shut', () => {
    renderIntro({
      phase: 'classes-in-progress',
      registrationOpen: false,
      instructorAppsOpen: false,
      semesterInProgress: true,
    });
    expect(screen.queryByRole('link', { name: 'Register' })).not.toBeInTheDocument();
    expect(screen.queryByRole('link', { name: 'Apply to teach' })).not.toBeInTheDocument();
  });
});
