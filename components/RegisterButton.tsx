'use client';

import { GBSTEM_SIGNUP, MAILING_LIST_FORM_LINK, currentSemesterStatus } from '@/lib/constants';

/**
 * The call to action at the bottom of every course page.
 *
 * It used to be a hardcoded `forms.gle` link to the mailing-list form, labelled "Register For
 * This Class" all year round — so for the whole of the open registration window, the one button
 * on the page a parent would actually press sent them to a "we'll tell you about future
 * semesters" form instead of to the portal, where they could have registered that minute. (That
 * shortlink resolves to form id `1FAIpQLSfRe7…Ljh0ow`, the same form `MAILING_LIST_FORM_LINK`
 * points at, just spelled as a different URL — so it was also a second, un-greppable copy of a
 * link the site already had a constant for.)
 *
 * Now it follows `registrationsOpen`/`registrationsDue` from `lib/semesterDates.json`, the same
 * dates the nav bar and home page switch on, so the button goes live on the morning registration
 * opens and falls back to the notification form when the window closes — with no deploy on
 * either date. `registrationOpen` is bounded at both ends, which is the half that is easy to
 * forget: a button that only ever turned *on* would keep sending parents to a registration page
 * that had stopped accepting them.
 *
 * This is a client component, like every other date-dependent call to action on the site
 * (`Navigation`, `HeroSection`, `Intro`), so the value is recomputed in the browser on hydration.
 * Its server render is only ever as fresh as the last revalidation — an hour, per the root
 * layout — and the one hour that matters is the one on a boundary day.
 */
export default function RegisterButton() {
  const { registrationOpen } = currentSemesterStatus();

  return (
    <a
      href={registrationOpen ? GBSTEM_SIGNUP : MAILING_LIST_FORM_LINK}
      className="btn btn-primary"
      target="_blank"
      rel="noopener noreferrer"
    >
      {registrationOpen ? 'Register For This Class' : 'Get Notified When Registration Opens'}
    </a>
  );
}
