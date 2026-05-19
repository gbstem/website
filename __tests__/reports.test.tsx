import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Reports from '@/app/reports/page';

describe('Reports Page', () => {
  it('renders the reports header', () => {
    render(<Reports />);
    expect(screen.getByRole('heading', { name: /Reports & Posts/i })).toBeInTheDocument();
    expect(screen.getByText(/gbSTEM is pleased to present our Impact Report/i)).toBeInTheDocument();
  });
});
