'use client';

const STATS = [
  { value: 'FREE', description: 'All our programs are completely free for students grades 1-8' },
  { value: '4+', description: 'STEM subjects taught by qualified instructors' },
  { value: 'K-8', description: 'Programs designed for elementary and middle school students' },
];

function KeyStats() {
  return (
    <div className="bg-white py-12" id="learn-more">
      <div className="site-container">
        <div className="mb-6 flow-root text-center">
          <h2 className="font-semibold">Making STEM Education Accessible</h2>
        </div>
        <div className="grid gap-6 text-center md:grid-cols-3">
          {STATS.map(({ value, description }) => (
            <div
              key={value}
              className="h-full rounded-md border border-divider bg-light p-6 shadow-sm"
            >
              <div className="mb-4 text-display-3 font-semibold text-primary">{value}</div>
              <p className="mb-0">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default KeyStats;
