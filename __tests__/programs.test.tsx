import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import CS from '@/app/cs/page';
import Math from '@/app/math/page';
import Engineering from '@/app/engineering/page';
import Science from '@/app/science/page';
import Robotics from '@/app/robotics/page';

describe('Programs Pages', () => {
  it('renders CS track page', () => {
    render(<CS />);
    expect(screen.getByRole('heading', { name: /Computer Science Track/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Typical Class Progression/i })).toBeInTheDocument();
  });

  it('renders Math track page', () => {
    render(<Math />);
    expect(screen.getByRole('heading', { name: /Math Track/i })).toBeInTheDocument();
  });

  it('renders Engineering track page', () => {
    render(<Engineering />);
    expect(screen.getByRole('heading', { name: /Engineering Track/i })).toBeInTheDocument();
  });

  it('renders Science track page', () => {
    render(<Science />);
    expect(screen.getByRole('heading', { name: /Science Track/i })).toBeInTheDocument();
  });

  it('renders Robotics track page', () => {
    render(<Robotics />);
    expect(screen.getByRole('heading', { name: /Robotics/i })).toBeInTheDocument();
  });
});
