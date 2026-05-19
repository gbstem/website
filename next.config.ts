import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* Image optimization settings for Vercel next/image */
  images: {
    unoptimized: process.env.NODE_ENV === 'development',
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.gbstem.org',
        port: '',
        pathname: '/**',
        search: '',
      },
      {
        protocol: 'https',
        hostname: 'gbstem.org',
        port: '',
        pathname: '/**',
        search: '',
      },
    ],
  },
  /* Enable this if you want to deploy the site as static pages,
     but then the dev site will require manual reloading to pick up
     changes
  cacheComponents: true, */
  staticPageGenerationTimeout: 120,
};

export default nextConfig;
