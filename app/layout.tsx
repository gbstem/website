import Footer from '@/components/Footer';
import HashRedirect from '@/components/HashRedirect';
import Navigation from '@/components/Navigation';
import { constructSEO } from '@/lib/seo';
import 'bootstrap/dist/css/bootstrap.min.css';
import type { Metadata } from 'next';
import { Montserrat, Space_Mono } from 'next/font/google';
import './globals.css';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
});

const spaceMono = Space_Mono({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-space-mono',
});

export const metadata: Metadata = constructSEO();

/**
 * Regenerate every hour. Without this every route is prerendered once at build time and the HTML
 * is frozen until the next deploy - which matters because `components/Navigation.tsx` (rendered
 * here, on every page) and the home and FAQ pages all show copy that depends on today's date. A
 * semester rolling over between deploys would otherwise leave the site advertising a registration
 * window that had already closed until someone happened to push.
 *
 * Set here in the root layout rather than per page because Navigation puts date-dependent links on
 * every route. An hour is far below the resolution of what changes - the phase boundaries in
 * semesterDates.json are whole days - while keeping every page CDN-cached.
 */
export const revalidate = 3600;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${spaceMono.variable}`}>
      <body>
        <HashRedirect />
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
