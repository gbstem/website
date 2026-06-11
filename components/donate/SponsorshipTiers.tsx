import Image from 'next/image';
import React from 'react';

const LittleBlue = '/images/penguin tiers/little-blue.png';
const Magellanic = '/images/penguin tiers/magellanic.png';
const King = '/images/penguin tiers/king.png';
const Emperor = '/images/penguin tiers/emperor.png';

// These are the columns in the table.
const tiers = [
  {
    name: 'Little Blue Tier',
    price: '$500+',
    image: LittleBlue,
    width: 112,
    height: 112,
    imgStyle: { width: '100%', height: 'auto', maxWidth: '7rem' },
    bgColor: '#eeeeee',
    alignItems: undefined,
  },
  {
    name: 'Magellanic Tier',
    price: '$1000+',
    image: Magellanic,
    width: 128,
    height: 128,
    imgStyle: { width: '100%', height: 'auto', maxWidth: '8rem' },
    bgColor: '#5CBF60',
    alignItems: 'baseline',
  },
  {
    name: 'King Tier',
    price: '$2000+',
    image: King,
    width: 144,
    height: 144,
    imgStyle: { width: '100%', height: 'auto', maxWidth: '9rem' },
    bgColor: '#ffd809',
    alignItems: 'baseline',
  },
  {
    name: 'Emperor Tier',
    price: '$5000+',
    image: Emperor,
    width: 160,
    height: 160,
    imgStyle: { width: '100%', height: 'auto', maxWidth: '10rem' },
    bgColor: '#67aeda',
    extraClass: 'sm',
    alignItems: 'baseline',
  },
];

// These are the rows in the table, where each of the checks corresponds to the columns
// defined above.
const benefits = [
  {
    name: "Your Logo on gbSTEM's Website",
    checks: [true, true, true, true],
  },
  {
    name: 'Your Logo on gbSTEM Merchandise',
    checks: [false, true, true, true],
  },
  {
    name: 'Annual Feature on gbSTEM Social Media',
    checks: [false, false, true, true],
  },
  {
    name: 'Byline in gbSTEM Logo',
    checks: [false, false, false, true],
  },
];

export default function SponsorshipTiers() {
  return (
    <div className="mx-auto mb-5 overflow-auto text-center text-[clamp(0.6rem,2vw,1.5rem)]">
      <div className="mx-auto grid min-w-[576px] grid-cols-5 gap-0">
        {/* Empty top-left cell */}
        <div className="border-[1px] border-solid border-black"></div>

        {/* Tier Headers */}
        {tiers.map((tier) => (
          <div
            key={tier.name}
            className="flex flex-col items-center justify-end border-[1px] border-solid border-black px-4 py-6 shadow-[0_0_5px_black]"
            style={{
              backgroundColor: tier.bgColor,
            }}
          >
            <Image
              alt={tier.name}
              src={tier.image}
              width={tier.width}
              height={tier.height}
              style={{ ...tier.imgStyle, marginBottom: '1rem' }}
            />
            <div className="fw-bold">{tier.name}</div>
            <div className="text-[0.85em] italic">{tier.price}</div>
          </div>
        ))}

        {/* Benefits Rows */}
        {benefits.map((benefit) => (
          <React.Fragment key={benefit.name}>
            {/* Row Header */}
            <div className="flex items-center justify-center border-[1px] border-solid border-black px-4 py-6 text-[0.85em]">
              {benefit.name}
            </div>

            {/* Benefit Checkmarks */}
            {benefit.checks.map((checked, index) => (
              <div
                key={index}
                className="flex items-center justify-center border-[1px] border-solid border-black p-4 text-[2.5em] font-semibold text-[#1d2256]"
              >
                {checked ? (
                  <>
                    <span aria-hidden="true">X</span>
                    <span className="visually-hidden">Included</span>
                  </>
                ) : (
                  ''
                )}
              </div>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
