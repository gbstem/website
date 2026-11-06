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
        <div style={{ backgroundColor: color }} className="p-12 text-center">
          <h1>{trackName} Track</h1>
          {subtitle && <h3>{subtitle}</h3>}
        </div>

        <div className="site-container my-12">{children}</div>
      </main>
    </div>
  );
}
