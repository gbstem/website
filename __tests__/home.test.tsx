import Home from '@/app/page';
import Counter from '@/components/home/Counter';
import HeroSection from '@/components/home/HeroSection';
import '@testing-library/jest-dom';
import { act, render, screen } from '@testing-library/react';

// Mock Next.js constants and image components to simplify tests. Every constant Intro, Navigation
// and HeroSection read has to appear here: the factory replaces the whole module, so a missing key
// arrives as `undefined`, reads as falsy, and silently switches off the branch it gates - which is
// why the calendar arrives as one `currentSemesterStatus()` object rather than loose booleans.
jest.mock('@/lib/constants', () => ({
  CURRENT_SEMESTER: 'Spring',
  NEXT_SEMESTER: 'Fall',
  SEMESTER_START_DATE: new Date('03/16/26'),
  SEMESTER_END_DATE: new Date('06/14/26'),
  REGISTRATION_OPEN_DATE: new Date('02/01/26'),
  REGISTRATION_ENDS_DATE: new Date('03/16/26'),
  INSTRUCTOR_APPS_OPEN_DATE: new Date('02/01/26'),
  INSTRUCTOR_APPS_DUE_DATE: new Date('02/28/26'),
  STUDENT_ORIENTATION_DATE: new Date('03/09/26'),
  PARENT_ORIENTATION_DATE: new Date('03/09/26'),
  currentSemesterStatus: () => ({
    phase: 'registration-open',
    registrationNotYetOpen: false,
    registrationOpen: true,
    instructorAppsNotYetOpen: false,
    instructorAppsOpen: true,
    semesterInProgress: false,
    semesterIsOver: false,
  }),
  MAILING_LIST_FORM_LINK: 'https://example.com/form',
  GBSTEM_SIGNUP: 'https://portal.gbstem.org/signup',
  formatDate: (date: Date) =>
    date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
}));

describe('Home Page', () => {
  it('renders all sections', () => {
    render(<Home />);

    // Test Hero Section presence
    expect(
      screen.getByText('Inspiring the Next Generation of STEM Innovators')
    ).toBeInTheDocument();

    // Test WhatWeTeach section
    expect(screen.getByText('What We Teach')).toBeInTheDocument();

    // Test OurMission section
    expect(screen.getByText('Our Mission')).toBeInTheDocument();
  });
});

describe('HeroSection Component', () => {
  it('renders properly with registration open', () => {
    render(<HeroSection />);
    expect(
      screen.getByRole('heading', { name: /Inspiring the Next Generation of STEM Innovators/i })
    ).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Register Here/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Register Here/i })).toHaveAttribute(
      'href',
      'https://portal.gbstem.org/signup'
    );
  });
});

describe('Counter Component', () => {
  it('increments counters on interval', () => {
    jest.useFakeTimers();
    render(<Counter />);

    // Advance timers past the initial setTimeout (500) and one setInterval (20)
    act(() => {
      jest.advanceTimersByTime(520);
    });

    // Students target is 2000, step is 20, so value should be 20+.
    expect(screen.getByText(/20\+/)).toBeInTheDocument();
    // Courses Offered target is 20, step is 1, so value should be 1.
    expect(screen.getAllByText(/1/)[0]).toBeInTheDocument();

    jest.useRealTimers();
  });
});
