'use client';
import Link from 'next/link';
const mathGraphic = '/images/homepage/math1.jpg';
const csGraphic = '/images/homepage/cs1.png';
const scienceGraphic = '/images/homepage/science1.svg';
const engineeringGraphic = '/images/homepage/eng4.png';

function WhatWeTeach() {
  const subjects = [
    {
      name: 'Computer Science',
      image: csGraphic,
      color: '#67aeda',
      link: '/cs',
      description: 'Learn programming fundamentals, algorithms, and software development',
    },
    {
      name: 'Mathematics',
      image: mathGraphic,
      color: '#aaaaaa',
      link: '/math',
      description: 'Explore mathematical concepts, problem-solving, and critical thinking',
    },
    {
      name: 'Engineering',
      image: engineeringGraphic,
      color: '#ffc819',
      link: '/engineering',
      description: 'Design, build, and test creative engineering solutions',
    },
    {
      name: 'Science',
      image: scienceGraphic,
      color: '#4CAF50',
      link: '/science',
      description: 'Discover principles of natural sciences through hands-on experiments',
    },
  ];

  return (
    <div className="bg-[aliceblue] py-12">
      <div className="site-container">
        <h2 className="mb-12 text-center font-semibold">What We Teach</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {subjects.map((subject, index) => (
            <div
              key={index}
              className="relative flex h-full min-w-0 flex-col overflow-hidden rounded-md bg-white wrap-break-word shadow-sm"
            >
              <div className="h-55 overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element -- next/image would recompress these */}
                <img
                  src={subject.image}
                  alt={subject.name}
                  className="size-full rounded-t-[calc(0.375rem-1px)] object-cover"
                />
              </div>
              <div className="flex flex-auto flex-col p-4">
                <h3
                  className="mb-4 text-h5 leading-heading font-semibold"
                  style={{ color: subject.color }}
                >
                  {subject.name}
                </h3>
                <p className="mb-6">{subject.description}</p>
                <div className="mt-auto">
                  {/* Colored per subject, so not the navy `btn`. */}
                  <Link
                    href={subject.link}
                    className="inline-block w-full rounded-[10px] border border-transparent px-3 py-1.5 text-center align-middle text-white no-underline transition-colors"
                    style={{ backgroundColor: subject.color }}
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default WhatWeTeach;
