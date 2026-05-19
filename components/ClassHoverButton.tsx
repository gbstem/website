import Link from 'next/link';
import React from 'react';

interface ClassHoverButtonProps {
  link: string;
  color: string;
  className: string;
}

export default function ClassHoverButton({ link, color, className }: ClassHoverButtonProps) {
  return (
    <Link href={link} className="arrow-step" style={{ backgroundColor: color }}>
      <div className="arrow-button">{className}</div>
    </Link>
  );
}
