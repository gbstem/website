import { render } from '@testing-library/react';
import { useRouter } from 'next/navigation';
import HashRedirect from '@/components/HashRedirect';

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}));

describe('HashRedirect', () => {
  const mockReplace = jest.fn();

  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({
      replace: mockReplace,
    });
    // Clear mock calls
    mockReplace.mockClear();

    // Reset hash
    window.location.hash = '';
  });

  it('does nothing if no hash is present', () => {
    render(<HashRedirect />);
    expect(mockReplace).not.toHaveBeenCalled();
  });

  it('does nothing if hash does not start with #/', () => {
    window.location.hash = '#some-anchor';
    render(<HashRedirect />);
    expect(mockReplace).not.toHaveBeenCalled();
  });

  it('redirects to the correct path when hash starts with #/', () => {
    window.location.hash = '#/team';
    render(<HashRedirect />);
    expect(mockReplace).toHaveBeenCalledWith('/team');
  });

  it('redirects nested paths correctly', () => {
    window.location.hash = '#/cs/python1';
    render(<HashRedirect />);
    expect(mockReplace).toHaveBeenCalledWith('/cs/python1');
  });

  it('does not redirect a protocol-relative host in the hash (open redirect)', () => {
    window.location.hash = '#//evil.example/login';
    render(<HashRedirect />);
    expect(mockReplace).not.toHaveBeenCalled();
  });

  it('does not redirect a backslash-prefixed host in the hash (open redirect)', () => {
    window.location.hash = '#/\\evil.example/login';
    render(<HashRedirect />);
    expect(mockReplace).not.toHaveBeenCalled();
  });

  it('does not redirect a path embedding a URL scheme in the hash (open redirect)', () => {
    window.location.hash = '#/redirect://evil.example';
    render(<HashRedirect />);
    expect(mockReplace).not.toHaveBeenCalled();
  });
});
