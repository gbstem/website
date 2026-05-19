import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Home from '@/app/page';
import HeroSection from '@/components/home/HeroSection';

// Mock Next.js constants and image components to simplify tests
jest.mock('@/lib/constants', () => ({
  registrationOpen: true,
  semesterStartDate: new Date('2026-03-16'),
  semesterEndDate: new Date('2026-06-14'),
  latestSemester: 'spring',
  upcomingSemester: 'fall',
  registrationOpenDate: new Date('2026-02-01'),
  instructorAppsDueDate: new Date('2026-02-28'),
  registrationEndsDate: new Date('2026-03-16'),
  semesterInProgress: false,
  formLink: 'https://example.com/form',
  gbSTEMSignup: 'https://portal.gbstem.org/signup',
}));

describe('Home Page', () => {
  it('renders all sections', () => {
    const { container } = render(<Home />);

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
