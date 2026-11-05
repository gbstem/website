'use client';

import { testimonials } from '@/lib/testimonialsData';

// Testimonial card component
function TestimonialCard({ text, author }: { text: string; author: string }) {
  return (
    <div className="relative flex h-full min-w-0 flex-col rounded-md bg-white wrap-break-word shadow-sm transition-[transform,box-shadow] duration-300 ease-out hover:translate-y-[-5px]">
      <div className="flex flex-auto flex-col p-6">
        <div className="relative mb-6">
          <div className="absolute top-[-30px] left-[-10px] z-0 font-[Georgia,serif] text-[72px] text-light">
            &quot;
          </div>
          <p className="relative z-1 mb-0 text-base italic">&quot;{text}&quot;</p>
        </div>
        <div className="mt-auto border-t border-[#eee] pt-4">
          <p className="mb-0 font-semibold text-dark">{author}</p>
        </div>
      </div>
    </div>
  );
}

// Main Testimonials component
export default function Testimonials() {
  return (
    <div className="site-container py-12">
      <div className="mb-12 flow-root text-center">
        <h2 className="mb-4 font-semibold">What People Say</h2>
        <p className="mb-12 text-lead font-light text-muted">
          Hear from our community of parents and students
        </p>
      </div>

      <div className="grid gap-x-6 gap-y-12 pb-6 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} text={testimonial.text} author={testimonial.author} />
        ))}
      </div>
    </div>
  );
}
