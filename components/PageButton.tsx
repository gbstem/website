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
      className="rounded-[20px] p-6 text-xl font-bold text-black no-underline! transition-opacity hover:opacity-50"
      style={{
        backgroundColor: color,
      }}
    >
      {className}
    </Link>
  );
}
