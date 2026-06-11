import ClassHoverButton from '@/components/ClassHoverButton';
import React from 'react';
import Image from 'next/image';
import { interpolateColor } from '@/lib/colors';

const ArrowDown = '/images/icons/arrow-down.svg';

export function TypicalClassProgression({ children }: { children: React.ReactNode }) {
  return (
    <>
      <h2 className="p-5 text-center">Typical Class Progression</h2>
      <div className="mx-auto mt-4 mb-24">{children}</div>
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
    <div
      className="w-full overflow-x-auto pb-4 text-center"
      style={{ '--item-count': items.length } as React.CSSProperties}
    >
      <div className="flex w-full min-w-fit flex-nowrap items-center justify-center">
        {items.map((item, i) => {
          const color =
            items.length <= 1
              ? gradient[0] || '#000'
              : interpolateColor(gradient, i / (items.length - 1));
          return (
            <ClassHoverButton
              key={item.link}
              link={item.link}
              color={color}
              className={item.name}
            />
          );
        })}
      </div>
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
        className="h-20 w-12"
      />
    </div>
  );
}

export function ClassProgressionOr() {
  return <div className="d-flex justify-content-center fs-3 fw-semibold my-1">OR</div>;
}
