'use client';
import { GIVING_CAMPAIGN_URL } from '@/lib/constants';

/*
 * A time-boxed fundraising campaign. Its dates live here rather than in `lib/semesterDates.json`
 * (a verbatim copy of admin's, never hand-edited) because each campaign brings its own link and
 * copy anyway.
 *
 * TODO(next campaign): replace the window and copy below and GIVING_CAMPAIGN_URL in
 * lib/constants.ts, or delete this component and its two call sites (components/home/Intro.tsx,
 * app/donate/page.tsx) if there is none.
 */
// Explicit Boston offsets, so the window opens and closes at the same instant whatever timezone
// the server prerendering the page (UTC on Vercel) or the visitor's browser is in.
export const GIVING_PROMO_START = new Date('2026-11-19T00:00:00-05:00');
/** Exclusive: the promo runs through the whole of December 25. */
export const GIVING_PROMO_END = new Date('2026-12-26T00:00:00-05:00');

/** Pure, so tests can ask whether the promo shows on any given instant. */
export const givingPromoActiveOn = (now: Date) =>
  now >= GIVING_PROMO_START && now < GIVING_PROMO_END;

interface GivingSeasonPromoProps {
  /** `compact` is a box with a button; `card` adds PayPal's embedded campaign card. */
  variant: 'compact' | 'card';
  className?: string;
}

function GivingSeasonPromo({ variant, className = '' }: GivingSeasonPromoProps) {
  // Read during render, never at module scope: the site is prerendered, and only a per-render
  // check lets revalidation and hydration hide the promo after the campaign ends without a deploy.
  if (!givingPromoActiveOn(new Date())) return null;

  return (
    <section
      aria-labelledby="giving-season-heading"
      className={`rounded-md border border-divider bg-light p-6 text-center shadow-sm ${className}`}
    >
      <h2 id="giving-season-heading" className="mb-4">
        Celebrate Giving Season with gbSTEM
      </h2>
      <p className="mb-4">
        This giving season, a tax-deductible gift helps keep gbSTEM&apos;s classes free for
        Boston-area students.
      </p>
      {variant === 'card' ? (
        <>
          <iframe
            src={GIVING_CAMPAIGN_URL}
            title="PayPal donate campaign card"
            width={382}
            height={550}
            loading="lazy"
            className="mx-auto block max-w-full border-0"
          />
          {/* For visitors whose browser or blocker hides the embedded frame. */}
          <p className="mt-4 mb-0">
            <a href={GIVING_CAMPAIGN_URL} target="_blank" rel="noopener noreferrer">
              Open the campaign on PayPal
            </a>
          </p>
        </>
      ) : (
        <a className="btn" href={GIVING_CAMPAIGN_URL} target="_blank" rel="noopener noreferrer">
          Donate to Our Campaign
        </a>
      )}
    </section>
  );
}

export default GivingSeasonPromo;
