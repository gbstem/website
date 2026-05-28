import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import KeyStats from '@/components/home/KeyStats';

describe('KeyStats', () => {
  it('renders the key statistics correctly', () => {
    render(<KeyStats />);

    expect(screen.getByText('Making STEM Education Accessible')).toBeInTheDocument();
    expect(screen.getByText('FREE')).toBeInTheDocument();
    expect(
      screen.getByText('All our programs are completely free for students grades 1-8')
    ).toBeInTheDocument();

    expect(screen.getByText('4+')).toBeInTheDocument();
    expect(screen.getByText('STEM subjects taught by qualified instructors')).toBeInTheDocument();

    expect(screen.getByText('K-8')).toBeInTheDocument();
    expect(
      screen.getByText('Programs designed for elementary and middle school students')
    ).toBeInTheDocument();
  });
});
