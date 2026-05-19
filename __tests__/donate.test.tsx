import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Donate from '@/app/donate/page';
import DonationCalculator from '@/components/donate/DonationCalculator';
import { fireEvent } from '@testing-library/react';

jest.mock('rc-slider', () => {
  return function MockSlider({ onChange }: { onChange: (value: number) => void }) {
    return (
      <button data-testid="slider" onClick={() => onChange(300)}>
        Slide
      </button>
    );
  };
});

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

  it('updates donation amount on slider change', () => {
    render(<DonationCalculator />);
    fireEvent.click(screen.getByTestId('slider'));
    expect(screen.getByText('Donation Amount: $300')).toBeInTheDocument();
    expect(screen.getByText('Semester Funded: 20%')).toBeInTheDocument();
  });
});
