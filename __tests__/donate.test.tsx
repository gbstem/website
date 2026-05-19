import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Donate from '@/app/donate/page';

describe('Donate Page', () => {
  it('renders support header', () => {
    render(<Donate />);
    expect(screen.getByRole('heading', { name: /Support Us/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Make A Contribution/i })).toHaveAttribute(
      'href',
      'https://www.paypal.com/fundraiser/charity/4605663'
    );
  });

  it('renders DonationCalculator correctly', () => {
    render(<Donate />);
    expect(screen.getByRole('heading', { name: /Donation Calculator/i })).toBeInTheDocument();
    expect(screen.getByText(/Semester Funded/i)).toBeInTheDocument();
  });
});
