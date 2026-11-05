'use client';
import React from 'react';
const glance = '/images/glance.png';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'react-feather';

function HowItWorks() {
  return (
    <div>
      <div className="site-container grid gap-x-6 py-12 md:grid-cols-2">
        <div>
          <div className="m-6 flex h-full grow flex-col justify-between pt-8 pb-16">
            <h1 className="text-center">How It Works</h1>
            <p className="text-lead font-light">
              All classes are 100% free and will be conducted either remotely via Zoom or in-person
              in groups of about 5-10 students. Each class will meet for one 45-60 minute session
              per week. We emphasize creativity, problem-solving, and collaboration in order to
              foster a welcoming environment where students can form lasting friendships.
            </p>
            <div className="flex justify-end gap-6">
              <Link href="/faq" className="btn flex items-center">
                Learn More
                <ArrowRight />
              </Link>

              <div>
                <Link href="/team" className="btn flex items-center">
                  Meet Our Team
                  <ArrowRight />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="mt-6 flex justify-center">
            <Image
              src={glance}
              alt="At a Glance"
              className="h-auto w-full"
              width={500}
              height={480}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowItWorks;
