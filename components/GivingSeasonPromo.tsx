'use client';
import Image from 'next/image';
import { GIVING_CAMPAIGN_CARD_URL, GIVING_CAMPAIGN_URL } from '@/lib/constants';

/*
 * A time-boxed fundraising campaign. Its dates live here rather than in `lib/semesterDates.json`
 * (a verbatim copy of admin's, never hand-edited) because each campaign brings its own link and
 * copy anyway.
 *
 * TODO(next campaign): replace the window and copy below and the GIVING_CAMPAIGN_* URLs in
 * lib/constants.ts, or delete this component and its two call sites (components/home/Intro.tsx,
 * app/donate/page.tsx) if there is none.
 */
// Explicit Boston offsets, so the window opens and closes at the same instant whatever timezone
// the server prerendering the page (UTC on Vercel) or the visitor's browser is in.
export const GIVING_PROMO_START = new Date('2026-11-19T00:00:00-05:00');
/** Exclusive: the promo runs through the whole of December 25. */
export const GIVING_PROMO_END = new Date('2026-12-26T00:00:00-05:00');

/** The last day the promo shows ("December 25"), derived so the badge can't disagree with it. */
export const GIVING_PROMO_LAST_DAY = new Date(GIVING_PROMO_END.getTime() - 1).toLocaleDateString(
  'en-US',
  { month: 'long', day: 'numeric', timeZone: 'America/New_York' }
);

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
    // Navy with gold accents (the penguin's colors) so it stands out against the white page and
    // the white Registration Information card beside it on the home page.
    <section
      aria-labelledby="giving-season-heading"
      className={`rounded-md bg-navy p-8 text-center text-white shadow-md ${className}`}
    >
      {/* The logo's wordmark is white, so it only works on a dark background like this one. */}
      <Image
        src="/images/icons/penguin.png"
        alt=""
        width={152}
        height={60}
        className="mx-auto mb-4 h-auto"
      />
      <span className="mb-3 inline-block rounded-full bg-amber-400 px-3 py-1 text-sm font-semibold text-navy">
        Ends {GIVING_PROMO_LAST_DAY}
      </span>
      <h2 id="giving-season-heading" className="mb-4 text-white">
        Celebrate Giving Season with gbSTEM
      </h2>
      <p className="mb-6">
        This giving season, a tax-deductible gift helps keep gbSTEM&apos;s classes free for
        Boston-area students.
      </p>
      {variant === 'card' ? (
        <>
          <iframe
            src={GIVING_CAMPAIGN_CARD_URL}
            title="PayPal donate campaign card"
            width={382}
            height={550}
            loading="lazy"
            className="mx-auto block max-w-full rounded-md border-0"
          />
          {/* For visitors whose browser or blocker hides the embedded frame. */}
          <p className="mt-4 mb-0">
            <a
              href={GIVING_CAMPAIGN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-300 hover:text-amber-200"
            >
              Open the campaign on PayPal
            </a>
          </p>
        </>
      ) : (
        <a
          href={GIVING_CAMPAIGN_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block rounded-full bg-amber-400 px-8 py-3 text-lg font-bold text-navy no-underline hover:bg-amber-300"
        >
          Donate to Our Campaign
        </a>
      )}
    </section>
  );
}

export default GivingSeasonPromo;
