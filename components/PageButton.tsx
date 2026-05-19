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
      className="button"
      style={{
        borderRadius: '20px',
        padding: '1.5rem',
        backgroundColor: color,
        color: 'white',
        textDecoration: 'none',
        fontSize: '1.25rem',
      }}
    >
      {className}
    </Link>
  );
}
