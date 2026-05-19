import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Home from '@/app/page';
import HeroSection from '@/components/home/HeroSection';

// Mock Next.js constants and image components to simplify tests
jest.mock('@/lib/constants', () => ({
  REGISTRATION_OPEN: true,
  SEMESTER_START_DATE: new Date('2026-03-16'),
  SEMESTER_END_DATE: new Date('2026-06-14'),
  LATEST_SEMESTER: 'spring',
  UPCOMING_SEMESTER: 'fall',
  REGISTRATION_OPEN_DATE: new Date('2026-02-01'),
  INSTRUCTOR_APPS_DUE_DATE: new Date('2026-02-28'),
  REGISTRATION_ENDS_DATE: new Date('2026-03-16'),
  SEMESTER_IN_PROGRESS: false,
  FORM_LINK: 'https://example.com/form',
  GBSTEM_SIGNUP: 'https://portal.gbstem.org/signup',
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
