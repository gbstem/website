import type { Metadata } from 'next';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  noIndex?: boolean;
}

export function constructSEO({
  title,
  description = 'Inspiring the Next Generation of STEM Innovators. The Greater Boston STEM Program delivers free introductory computer science, math, engineering, and science enrichment.',
  image = '/images/icons/penguin.png',
  noIndex = false,
}: SEOProps = {}): Metadata {
  const fullTitle = title ? `${title} | gbSTEM` : 'gbSTEM - Greater Boston STEM Program';
  return {
    title: fullTitle,
    description,
    openGraph: {
      title: fullTitle,
      description,
      type: 'website',
      url: 'https://gbstem.org',
      images: [{ url: image }],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [image],
    },
    metadataBase: new URL('https://gbstem.org'),
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  };
}
