import React from 'react';

interface TrackPageProps {
  trackName: string;
  color: string;
  subtitle?: React.ReactNode;
  children: React.ReactNode;
}

export default function TrackPage({ trackName, color, subtitle, children }: TrackPageProps) {
  return (
    <div>
      <main>
        <div style={{ backgroundColor: color }} className="p-5 text-center">
          <h1>{trackName} Track</h1>
          {subtitle && <h3 className="font-extralight">{subtitle}</h3>}
        </div>

        <div className="container my-5">{children}</div>
      </main>
    </div>
  );
}
