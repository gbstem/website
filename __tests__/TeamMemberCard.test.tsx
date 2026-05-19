import '@testing-library/jest-dom';
import { act, render, screen, fireEvent, waitFor } from '@testing-library/react';
import TeamMemberCard from '@/components/team/TeamMemberCard';

import { ImageProps } from 'next/image';

jest.mock('next/image', () => {
  return function MockImage(props: ImageProps) {
    const imgProps = { ...props } as React.ImgHTMLAttributes<HTMLImageElement> & {
      fill?: boolean | string;
    };
    delete imgProps.fill;
    // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
    return <img {...imgProps} />;
  };
});

const mockProps = {
  name: 'Jane Doe',
  school: 'Generic University',
  graduationYear: '2025',
  profilePic: 'default.png',
  bio: 'Jane is a great team member with a passion for coding.',
  role: 'Software Engineer',
};

describe('TeamMemberCard', () => {
  it('renders correctly with given props', () => {
    render(<TeamMemberCard {...mockProps} />);
    expect(screen.getByText('Jane Doe')).toBeInTheDocument();
    expect(screen.getByText('Software Engineer')).toBeInTheDocument();
    expect(screen.getByText('Generic University 2025')).toBeInTheDocument();

    // Check for the initial image placeholder
    expect(screen.getByText('JD')).toBeInTheDocument();

    // Bio button
    const bioButton = screen.getByRole('button', { name: /View bio for Jane Doe/i });
    expect(bioButton).toBeInTheDocument();
  });

  it('opens and closes the bio modal', async () => {
    render(<TeamMemberCard {...mockProps} />);

    // Click to open
    const bioButton = screen.getByRole('button', { name: /View bio for Jane Doe/i });
    fireEvent.click(bioButton);

    // Bio modal should show up
    await waitFor(() => {
      expect(
        screen.getByText('Jane is a great team member with a passion for coding.')
      ).toBeInTheDocument();
    });

    // Click the close button
    const closeBtns = screen.getAllByRole('button', { name: /Close/i });
    fireEvent.click(closeBtns[0]);

    // Bio should hide
    await waitFor(() => {
      expect(
        screen.queryByText('Jane is a great team member with a passion for coding.')
      ).not.toBeInTheDocument();
    });
  });

  it('handles image load event', async () => {
    render(<TeamMemberCard {...mockProps} />);

    // Fire load event on image
    const image = screen.getByAltText('Jane Doe');
    act(() => {
      fireEvent.load(image);
    });

    // After load, check style has updated
    await waitFor(() => {
      expect(image).toHaveStyle({ opacity: 1 });
    });
  });
});
