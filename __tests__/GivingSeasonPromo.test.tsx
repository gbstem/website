import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import GivingSeasonPromo, {
  GIVING_PROMO_END,
  GIVING_PROMO_START,
} from '@/components/GivingSeasonPromo';
import { GIVING_CAMPAIGN_URL } from '@/lib/constants';

/**
 * Like `RegisterButton.test.tsx`, this moves the system clock rather than mocking the window:
 * the component reads `new Date()` during render, and what's under test is that it follows the
 * real campaign dates.
 */
const renderOn = (when: Date, variant: 'compact' | 'card' = 'compact') => {
  jest.useFakeTimers();
  jest.setSystemTime(when);
  return render(<GivingSeasonPromo variant={variant} />);
};

const heading = () =>
  screen.queryByRole('heading', { name: /Celebrate Giving Season with gbSTEM/i });

afterEach(() => {
  jest.useRealTimers();
});

describe('GivingSeasonPromo Component', () => {
  it('stays hidden until the campaign starts', () => {
    renderOn(new Date(GIVING_PROMO_START.getTime() - 1));
    expect(heading()).not.toBeInTheDocument();
  });

  it('renders from the first instant of the campaign', () => {
    renderOn(GIVING_PROMO_START);
    expect(heading()).toBeInTheDocument();
  });

  it('renders through the evening of December 25 in Boston', () => {
    renderOn(new Date('2026-12-25T23:59:00-05:00'));
    expect(heading()).toBeInTheDocument();
  });

  it('hides itself once December 25 is over', () => {
    renderOn(GIVING_PROMO_END);
    expect(heading()).not.toBeInTheDocument();
  });

  it('renders a button linking to the campaign in the compact variant', () => {
    renderOn(GIVING_PROMO_START);
    const link = screen.getByRole('link', { name: /Donate to Our Campaign/i });
    expect(link).toHaveAttribute('href', GIVING_CAMPAIGN_URL);
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
    expect(screen.queryByTitle('PayPal donate campaign card')).not.toBeInTheDocument();
  });

  it('renders the PayPal campaign card and a fallback link in the card variant', () => {
    renderOn(GIVING_PROMO_START, 'card');
    expect(screen.getByTitle('PayPal donate campaign card')).toHaveAttribute(
      'src',
      GIVING_CAMPAIGN_URL
    );
    expect(screen.getByRole('link', { name: /Open the campaign on PayPal/i })).toHaveAttribute(
      'href',
      GIVING_CAMPAIGN_URL
    );
  });
});
