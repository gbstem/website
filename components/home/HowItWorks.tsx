'use client';
import React from 'react';
const glance = '/images/glance.png';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'react-feather';

function HowItWorks() {
  return (
    <div>
      <div className="container pt-5 pb-5">
        <div className="row">
          <div className="col-md-6">
            <div className="m-4 flex h-full grow flex-col justify-between pt-8 pb-16">
              <h1 className="text-center">How It Works</h1>
              <p className="lead">
                All classes are 100% free and will be conducted either remotely via Zoom or
                in-person in groups of about 5-10 students. Each class will meet for one 45-60
                minute session per week. We emphasize creativity, problem-solving, and collaboration
                in order to foster a welcoming environment where students can form lasting
                friendships.
              </p>
              <div className="flex justify-end gap-4">
                <Link
                  href="/faq"
                  className="text-decoration-none btn btn-primary flex! items-center"
                >
                  Learn More
                  <ArrowRight />
                </Link>

                <div>
                  <Link
                    href="/team"
                    className="text-decoration-none btn btn-primary flex! items-center"
                  >
                    Meet Our Team
                    <ArrowRight />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="mt-4 flex justify-center">
              <Image
                src={glance}
                alt="At a Glance"
                className="img-fluid h-auto w-full max-w-[500px]"
                width={500}
                height={480}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowItWorks;
