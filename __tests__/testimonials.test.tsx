import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Testimonials from '@/app/testimonials/page';

describe('Testimonials Page', () => {
  it('renders the header correctly', () => {
    render(<Testimonials />);
    expect(screen.getByRole('heading', { name: /What People Say/i })).toBeInTheDocument();
    expect(screen.getByText('Hear from our community of parents and students')).toBeInTheDocument();
  });

  it('renders testimonials', () => {
    render(<Testimonials />);
    // Check for a specific quote excerpt
    expect(screen.getByText(/"gbSTEM gave my daughter the opportunity to take her first steps/i)).toBeInTheDocument();
    expect(screen.getByText('Parent of 3rd grade student', { exact: false })).toBeInTheDocument();
  });
});
