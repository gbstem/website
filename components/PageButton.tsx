import Link from 'next/link';
import React from 'react';

interface PageButtonProps {
  link: string;
  color: string;
  className: string;
}

export default function PageButton({ link, color, className }: PageButtonProps) {
  return (
    <Link
      href={link}
      className="rounded-[20px] p-6 leading-(--text-xl--line-height) font-bold text-black no-underline transition-opacity"
      style={{
        backgroundColor: color,
      }}
    >
      {className}
    </Link>
  );
}
