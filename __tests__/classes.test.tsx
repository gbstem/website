import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

import ClassPage0 from '@/app/cs/python1/page';
import ClassPage1 from '@/app/cs/python2/page';
import ClassPage2 from '@/app/cs/python3/page';
import ClassPage3 from '@/app/cs/scratch1/page';
import ClassPage4 from '@/app/cs/scratch2/page';
import ClassPage5 from '@/app/cs/scratch3/page';
import ClassPage6 from '@/app/cs/webdev/page';
import ClassPage7 from '@/app/math/math1a/page';
import ClassPage8 from '@/app/math/math1b/page';
import ClassPage9 from '@/app/math/math2a/page';
import ClassPage10 from '@/app/math/math2b/page';
import ClassPage11 from '@/app/math/math3a/page';
import ClassPage12 from '@/app/math/math3b/page';
import ClassPage13 from '@/app/math/math4a/page';
import ClassPage14 from '@/app/math/math4b/page';
import ClassPage15 from '@/app/math/math5a/page';
import ClassPage16 from '@/app/math/math5b/page';
import ClassPage17 from '@/app/engineering/engineering1/page';
import ClassPage18 from '@/app/engineering/engineering2/page';
import ClassPage19 from '@/app/engineering/engineering3/page';
import ClassPage20 from '@/app/science/science1/page';

describe('Class Specific Pages', () => {
  it('renders @/app/cs/python1', () => {
    const { container } = render(<ClassPage0 />);
    expect(container).toBeInTheDocument();
  });

  it('renders @/app/cs/python2', () => {
    const { container } = render(<ClassPage1 />);
    expect(container).toBeInTheDocument();
  });

  it('renders @/app/cs/python3', () => {
    const { container } = render(<ClassPage2 />);
    expect(container).toBeInTheDocument();
  });

  it('renders @/app/cs/scratch1', () => {
    const { container } = render(<ClassPage3 />);
    expect(container).toBeInTheDocument();
  });

  it('renders @/app/cs/scratch2', () => {
    const { container } = render(<ClassPage4 />);
    expect(container).toBeInTheDocument();
  });

  it('renders @/app/cs/scratch3', () => {
    const { container } = render(<ClassPage5 />);
    expect(container).toBeInTheDocument();
  });

  it('renders @/app/cs/webdev', () => {
    const { container } = render(<ClassPage6 />);
    expect(container).toBeInTheDocument();
  });

  it('renders @/app/math/math1a', () => {
    const { container } = render(<ClassPage7 />);
    expect(container).toBeInTheDocument();
  });

  it('renders @/app/math/math1b', () => {
    const { container } = render(<ClassPage8 />);
    expect(container).toBeInTheDocument();
  });

  it('renders @/app/math/math2a', () => {
    const { container } = render(<ClassPage9 />);
    expect(container).toBeInTheDocument();
  });

  it('renders @/app/math/math2b', () => {
    const { container } = render(<ClassPage10 />);
    expect(container).toBeInTheDocument();
  });

  it('renders @/app/math/math3a', () => {
    const { container } = render(<ClassPage11 />);
    expect(container).toBeInTheDocument();
  });

  it('renders @/app/math/math3b', () => {
    const { container } = render(<ClassPage12 />);
    expect(container).toBeInTheDocument();
  });

  it('renders @/app/math/math4a', () => {
    const { container } = render(<ClassPage13 />);
    expect(container).toBeInTheDocument();
  });

  it('renders @/app/math/math4b', () => {
    const { container } = render(<ClassPage14 />);
    expect(container).toBeInTheDocument();
  });

  it('renders @/app/math/math5a', () => {
    const { container } = render(<ClassPage15 />);
    expect(container).toBeInTheDocument();
  });

  it('renders @/app/math/math5b', () => {
    const { container } = render(<ClassPage16 />);
    expect(container).toBeInTheDocument();
  });

  it('renders @/app/engineering/engineering1', () => {
    const { container } = render(<ClassPage17 />);
    expect(container).toBeInTheDocument();
  });

  it('renders @/app/engineering/engineering2', () => {
    const { container } = render(<ClassPage18 />);
    expect(container).toBeInTheDocument();
  });

  it('renders @/app/engineering/engineering3', () => {
    const { container } = render(<ClassPage19 />);
    expect(container).toBeInTheDocument();
  });

  it('renders @/app/science/science1', () => {
    const { container } = render(<ClassPage20 />);
    expect(container).toBeInTheDocument();
  });
});
