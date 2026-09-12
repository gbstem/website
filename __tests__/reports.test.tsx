import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { existsSync, statSync } from 'fs';
import path from 'path';
import Reports from '@/app/reports/page';

describe('Reports Page', () => {
  it('renders the reports header', () => {
    render(<Reports />);
    expect(screen.getByRole('heading', { name: /Reports & Posts/i })).toBeInTheDocument();
    expect(screen.getByText(/gbSTEM is pleased to present our Impact Report/i)).toBeInTheDocument();
  });
});

/**
 * The Impact Report button 404'd on the live site from the Next.js migration (9db8975) until this
 * was fixed: that commit deleted `public/reports/gbstem-impact.pdf` while leaving the link
 * pointing at `https://gbstem.org/reports/gbstem-impact.pdf`, a path nothing served any more. The
 * link was absolute even before the migration, which is why nothing caught it — on the old site it
 * happened to resolve to that same domain's real file, so the URL looked fine right up until the
 * file went away.
 *
 * A test that only checked the href would have passed throughout. These check both halves: the
 * link is relative, and the file it names is actually in the repo.
 */
describe('Impact Report download', () => {
  const HREF = '/reports/gbstem-impact.pdf';

  it('links the report by a relative path', () => {
    render(<Reports />);
    // react-bootstrap's `Button href=` renders an anchor carrying `role="button"`, so query it
    // the way home.test.tsx queries HeroSection's button rather than by the "link" role.
    const link = screen.getByRole('button', { name: /Impact Report 2023-2024/i });
    // Not `toHaveAttribute('href', HREF)` alone: the point is that it is relative, so a future
    // absolute URL to our own domain fails here even if it happens to resolve today.
    expect(link.getAttribute('href')).toBe(HREF);
    expect(link.getAttribute('href')).not.toMatch(/^https?:/);
  });

  it('ships the file that path serves', () => {
    const file = path.join(process.cwd(), 'public', HREF);
    expect(existsSync(file)).toBe(true);
    // A git-lfs pointer or a truncated checkout would still "exist" at a few hundred bytes.
    expect(statSync(file).size).toBeGreaterThan(100_000);
  });
});
