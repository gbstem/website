import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Faq from '@/app/faq/page';

describe('FAQ Page', () => {
  it('renders the FAQ header', () => {
    render(<Faq />);
    expect(screen.getByRole('heading', { name: /Frequently Asked Questions/i })).toBeInTheDocument();
  });

  it('renders all sections', () => {
    render(<Faq />);
    expect(screen.getByRole('heading', { name: 'General' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Computer Science' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Mathematics' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Engineering' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Science' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Other' })).toBeInTheDocument();
  });

  it('renders a specific question', () => {
    render(<Faq />);
    expect(screen.getByText(/What subjects does gbSTEM offer\?/i)).toBeInTheDocument();
  });
});
