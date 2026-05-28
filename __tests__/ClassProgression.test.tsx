import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import {
  TypicalClassProgression,
  ClassProgression,
  ClassProgressionDownArrow,
  ClassProgressionOr,
} from '@/components/ClassProgression';

describe('ClassProgression Components', () => {
  it('renders TypicalClassProgression', () => {
    render(
      <TypicalClassProgression>
        <div data-testid="child-element">Child Content</div>
      </TypicalClassProgression>
    );
    expect(screen.getByRole('heading', { name: /Typical Class Progression/i })).toBeInTheDocument();
    expect(screen.getByTestId('child-element')).toBeInTheDocument();
  });

  it('renders ClassProgression with correct items and gradient', () => {
    render(
      <ClassProgression
        gradient={['#000000', '#ffffff']}
        items={[
          { link: '/test1', name: 'Test Class 1' },
          { link: '/test2', name: 'Test Class 2' },
          { link: '/test3', name: 'Test Class 3' },
        ]}
      />
    );

    expect(screen.getByText('Test Class 1')).toBeInTheDocument();
    expect(screen.getByText('Test Class 2')).toBeInTheDocument();
    expect(screen.getByText('Test Class 3')).toBeInTheDocument();

    const links = screen.getAllByRole('link');
    expect(links).toHaveLength(3);
    expect(links[0]).toHaveAttribute('href', '/test1');
    expect(links[1]).toHaveAttribute('href', '/test2');
    expect(links[2]).toHaveAttribute('href', '/test3');

    expect(links[0]).toHaveStyle({ backgroundColor: '#000000' });
    expect(links[1]).toHaveStyle({ backgroundColor: '#808080' });
    expect(links[2]).toHaveStyle({ backgroundColor: '#ffffff' });
  });

  it('handles single item without failing', () => {
    render(
      <ClassProgression
        gradient={['#ff0000']}
        items={[{ link: '/single', name: 'Single Class' }]}
      />
    );
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', '/single');
    expect(link).toHaveStyle({ backgroundColor: '#ff0000' });
  });

  it('renders ClassProgressionDownArrow', () => {
    const { container } = render(<ClassProgressionDownArrow />);
    expect(container.querySelector('img')).toBeInTheDocument();
  });

  it('renders ClassProgressionOr', () => {
    render(<ClassProgressionOr />);
    expect(screen.getByText('OR')).toBeInTheDocument();
  });
});
