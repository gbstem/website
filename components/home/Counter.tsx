'use client';
import { useEffect, useState } from 'react';

function Counter() {
  const [counters, setCounters] = useState([
    { label: 'Students', target: 2000, value: 0, suffix: '+' },
    { label: 'Instructors', target: 400, value: 0, suffix: '+' },
    { label: 'Courses Offered', target: 20, value: 0, suffix: '' },
    { label: 'Volunteer Driven', target: 100, value: 0, suffix: '%' },
  ]);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | undefined;
    // Start animation after a slight delay for better user experience
    const timer = setTimeout(() => {
      // Count up in 100 steps of 20ms, then stop.
      let steps = 0;
      interval = setInterval(() => {
        setCounters((prevCounters) =>
          prevCounters.map((counter) => {
            const step = Math.ceil(counter.target / 100);
            return { ...counter, value: Math.min(counter.value + step, counter.target) };
          })
        );
        if (++steps >= 100) clearInterval(interval);
      }, 20);
    }, 500);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, []);

  return (
    <section className="border-y border-[#e9ecef] bg-light py-12">
      <div className="site-container">
        <div className="mb-12 flow-root text-center">
          <h2 className="font-semibold">Our Impact</h2>
          <p className="text-muted">Growing our community of STEM learners</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {counters.map((counter, index) => (
            <div
              key={index}
              className="relative flex h-full min-w-0 flex-col rounded-md bg-white text-center wrap-break-word shadow-sm"
            >
              <div className="flex flex-auto flex-col justify-center p-6">
                <div className="mb-2 text-display-4 font-semibold text-[#67aeda]">
                  {counter.value}
                  {counter.suffix}
                </div>
                <h3 className="mb-2 text-h5 leading-heading">{counter.label}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Counter;
