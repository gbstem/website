'use client';
import Link from 'next/link';
import { ArrowRight } from 'react-feather';

function WhatPeopleSay() {
  const testimonials = [
    {
      quote:
        'My child came into coding without knowing what it really is. Now she is so excited about it and wants to keep doing it. Thank you gbSTEM for awakening that passion.',
      author: 'Parent of 3rd Grader',
      role: 'Parent',
    },
    {
      quote:
        'gbSTEM is an innovative program that met a need for out-of-school time enrichment for children. My son has learned so much in the computer science course.',
      author: 'Parent of 2nd Grader',
      role: 'Parent',
    },
    {
      quote:
        'They create curriculum to motivate students to love their classes. My daughter now wants to pursue engineering after taking their engineering class.',
      author: 'Parent of 3rd Grader',
      role: 'Parent',
    },
  ];

  return (
    <section className="bg-[aliceblue] py-12">
      <div className="site-container">
        <div className="mb-12 flow-root text-center">
          <h2 className="mb-2 font-semibold">What People Say</h2>
          <p className="text-lead font-light">
            Hear from our community of students, parents, and partners
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative flex h-full min-w-0 flex-col rounded-md bg-white wrap-break-word shadow-sm"
            >
              <div className="relative flex-auto p-6">
                <div className="absolute top-[-15px] right-5 text-5xl text-[#67aeda] opacity-20">
                  &quot;
                </div>
                <p className="mb-6 text-h5">&quot;{testimonial.quote}&quot;</p>
                <div className="mt-auto flex border-t border-[#eee] pt-4">
                  <div>
                    <div className="font-semibold">{testimonial.author}</div>
                    <div className="text-[0.875em] text-muted">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/testimonials" className="btn px-6 py-2">
            <span className="flex items-center justify-center">
              Read More Testimonials <ArrowRight size={18} className="ms-2" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default WhatPeopleSay;
