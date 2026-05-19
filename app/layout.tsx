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
