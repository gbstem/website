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
    imgStyle: { width: '7rem', height: '7rem' },
    bgColor: '#eeeeee',
    alignItems: undefined,
  },
  {
    name: 'Magellanic Tier',
    price: '$1000+',
    image: Magellanic,
    width: 128,
    height: 128,
    imgStyle: { width: '8rem', height: '8rem' },
    bgColor: '#5CBF60',
    alignItems: 'baseline',
  },
  {
    name: 'King Tier',
    price: '$2000+',
    image: King,
    width: 144,
    height: 144,
    imgStyle: { width: '9rem', height: '9rem' },
    bgColor: '#ffd809',
    alignItems: 'baseline',
  },
  {
    name: 'Emperor Tier',
    price: '$5000+',
    image: Emperor,
    width: 160,
    height: 160,
    imgStyle: { width: '10rem', height: '10rem' },
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
    <div
      className="container"
      style={{
        fontSize: '1.5rem',
        paddingLeft: '5rem',
        paddingRight: '7rem',
        textAlign: 'center',
        margin: 'auto',
      }}
    >
      <div
        className="row"
        style={{ borderColor: 'black', borderWidth: '0px', borderStyle: 'solid' }}
      >
        {/* Empty top-left cell */}
        <div style={{ borderWidth: '1px', width: '10rem' }}></div>

        {/* Tier Headers */}
        {tiers.map((tier) => (
          <div
            key={tier.name}
            className={`col ${tier.extraClass || ''}`.trim()}
            style={{
              borderColor: 'black',
              borderWidth: '1px',
              borderStyle: 'solid',
              backgroundColor: tier.bgColor,
              boxShadow: '0px 0px 5px black',
              alignItems: tier.alignItems,
            }}
          >
            <div
              style={{
                display: 'flex',
                height: '100%',
                alignItems: 'end',
                justifyContent: 'center',
              }}
            >
              <div style={{ display: 'block' }}>
                <Image
                  alt={tier.name}
                  src={tier.image}
                  width={tier.width}
                  height={tier.height}
                  style={tier.imgStyle}
                />
                <div>{tier.name}</div>
                <div style={{ fontStyle: 'italic', fontSize: '1.25rem' }}>{tier.price}</div>
              </div>
            </div>
          </div>
        ))}

        {/* Benefits Rows */}
        {benefits.map((benefit) => (
          <React.Fragment key={benefit.name}>
            <div className="w-100"></div>
            {/* Row Header */}
            <div
              style={{
                borderColor: 'black',
                borderWidth: '1px',
                borderStyle: 'solid',
                width: '10rem',
                height: '10rem',
              }}
            >
              <div
                style={{
                  height: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.25rem',
                }}
              >
                {benefit.name}
              </div>
            </div>

            {/* Benefit Checkmarks */}
            {benefit.checks.map((checked, index) => (
              <div
                key={index}
                className="col"
                style={{
                  borderColor: 'black',
                  borderWidth: '1px',
                  borderStyle: 'solid',
                }}
              >
                <div
                  style={{
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#1d2256',
                    fontSize: '5rem',
                    fontWeight: '600',
                  }}
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
              </div>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
