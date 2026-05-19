import ClassHoverButton from '@/components/ClassHoverButton';
import React from 'react';
import Image from 'next/image';
import { interpolateColor } from '@/lib/colors';

const ArrowDown = '/images/icons/arrow-down.svg';

export function TypicalClassProgression({ children }: { children: React.ReactNode }) {
  return (
    <>
      <h2 className="text-center p-5">Typical Class Progression</h2>
      <div style={{ margin: 'auto', marginTop: '1rem', marginBottom: '6rem' }}>{children}</div>
    </>
  );
}

interface ClassItem {
  link: string;
  name: string;
}

interface ClassProgressionProps {
  items: ClassItem[];
  gradient?: string[];
}

export function ClassProgression({
  items,
  gradient = ['#66BB6A', '#67aeda', '#bf60bf'],
}: ClassProgressionProps) {
  return (
    <div className="progression-row">
      {items.map((item, i) => {
        const color =
          items.length <= 1
            ? gradient[0] || '#000'
            : interpolateColor(gradient, i / (items.length - 1));
        return (
          <ClassHoverButton key={item.link} link={item.link} color={color} className={item.name} />
        );
      })}
    </div>
  );
}

export function ClassProgressionDownArrow() {
  return (
    <div className="d-flex justify-content-center my-3">
      <Image
        alt=""
        src={ArrowDown}
        aria-hidden="true"
        width={48}
        height={80}
        style={{ width: '3rem', height: '5rem' }}
      />
    </div>
  );
}

export function ClassProgressionOr() {
  return <div className="d-flex justify-content-center my-1 fs-3 fw-semibold">OR</div>;
}
