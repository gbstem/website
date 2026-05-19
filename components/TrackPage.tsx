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
        <div style={{ backgroundColor: color }} className="text-center p-5">
          <h1>{trackName} Track</h1>
          {subtitle && <h3 style={{ fontWeight: '200' }}>{subtitle}</h3>}
        </div>

        <div className="container my-5">{children}</div>
      </main>
    </div>
  );
}
