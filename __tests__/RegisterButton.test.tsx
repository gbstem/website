import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import RegisterButton from '@/components/RegisterButton';
import {
  GBSTEM_SIGNUP,
  MAILING_LIST_FORM_LINK,
  REGISTRATION_ENDS_DATE,
  REGISTRATION_OPEN_DATE,
} from '@/lib/constants';

/**
 * Unlike the other date-dependent tests on the site, this one does not `jest.mock('@/lib/constants')`
 * with a hand-written calendar. It moves the clock instead and reads the real dates out of
 * `lib/semesterDates.json`, because the thing being tested *is* that the button follows that file:
 * a mocked `currentSemesterStatus` would keep passing if the button were wired to the wrong field,
 * or to no field at all.
 *
 * `currentSemesterStatus()` reads `new Date()` inside the component body, so faking the system
 * clock is enough to render any day of the year.
 */
const DAY = 24 * 60 * 60 * 1000;

const renderOn = (when: Date) => {
  jest.useFakeTimers();
  jest.setSystemTime(when);
  const result = render(<RegisterButton />);
  return result;
};

afterEach(() => {
  jest.useRealTimers();
});

describe('RegisterButton', () => {
  it('sends parents to the portal on the day registration opens', () => {
    renderOn(REGISTRATION_OPEN_DATE);
    const link = screen.getByRole('link', { name: /Register For This Class/i });
    expect(link).toHaveAttribute('href', GBSTEM_SIGNUP);
    expect(GBSTEM_SIGNUP).toContain('portal.gbstem.org');
  });

  it('still offers the notification form the day before', () => {
    // The boundary is the point of the whole component: the button has to flip without a deploy,
    // so "one day earlier" is the case that would catch an off-by-one or a `>` for a `>=`.
    renderOn(new Date(REGISTRATION_OPEN_DATE.getTime() - DAY));
    const link = screen.getByRole('link', { name: /Get Notified When Registration Opens/i });
    expect(link).toHaveAttribute('href', MAILING_LIST_FORM_LINK);
  });

  it('keeps the portal link through the registration deadline', () => {
    renderOn(REGISTRATION_ENDS_DATE);
    expect(screen.getByRole('link', { name: /Register For This Class/i })).toHaveAttribute(
      'href',
      GBSTEM_SIGNUP
    );
  });

  it('falls back to the notification form once registration closes', () => {
    // `registrationOpen` is bounded at both ends. A button that only ever turned on would go on
    // sending parents to a portal that had stopped accepting them.
    renderOn(new Date(REGISTRATION_ENDS_DATE.getTime() + DAY));
    expect(
      screen.getByRole('link', { name: /Get Notified When Registration Opens/i })
    ).toHaveAttribute('href', MAILING_LIST_FORM_LINK);
  });

  it('opens in a new tab without leaking the referrer', () => {
    // The markup this replaced had `target="_blank"` and no `rel`, unlike every other external
    // link on the site.
    renderOn(REGISTRATION_OPEN_DATE);
    const link = screen.getByRole('link', { name: /Register For This Class/i });
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('never points at the retired forms.gle shortlink', () => {
    // It resolved to the same Google Form as MAILING_LIST_FORM_LINK, so it was a second spelling
    // of a link the site already had a constant for - invisible to anyone grepping for the one.
    for (const when of [
      new Date(REGISTRATION_OPEN_DATE.getTime() - DAY),
      REGISTRATION_OPEN_DATE,
      new Date(REGISTRATION_ENDS_DATE.getTime() + DAY),
    ]) {
      const { container, unmount } = renderOn(when);
      expect(container.innerHTML).not.toContain('forms.gle');
      unmount();
      jest.useRealTimers();
    }
  });
});
