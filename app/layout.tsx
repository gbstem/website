import type { Metadata } from "next";
import { Montserrat, Space_Mono } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-space-mono",
});

export const metadata: Metadata = {
  title: "gbSTEM - Greater Boston STEM Program",
  description: "Inspiring the Next Generation of STEM Innovators. The Greater Boston STEM Program delivers free introductory computer science, math, engineering, and science enrichment.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${spaceMono.variable}`}
    >
      <body>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
