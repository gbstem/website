'use client';
import { GBSTEM_SIGNUP, currentSemesterStatus } from '@/lib/constants';
const inperson1 = '/images/in-person/inperson1.jpeg';

function HeroSection() {
  const { registrationOpen } = currentSemesterStatus();

  return (
    <div
      className="flex min-h-[80vh] items-center bg-cover bg-center text-white"
      style={{
        background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url(${inperson1})`,
      }}
    >
      <div className="site-container">
        <div className="grid gap-x-6 py-12 lg:grid-cols-12">
          <div className="py-12 lg:col-span-7">
            <h1 className="mb-6 text-display-3 font-semibold">
              Inspiring the Next Generation of STEM Innovators
            </h1>
            <p className="mb-6 text-lead font-light">
              The Greater Boston STEM Program delivers free introductory computer science, math,
              engineering, and science enrichment to elementary and middle school students.
            </p>
            <div className="flex gap-4">
              {/* No href while closed, so the disabled link can't be followed from the keyboard. */}
              <a
                className="btn btn-lg"
                href={registrationOpen ? GBSTEM_SIGNUP : undefined}
                aria-disabled={!registrationOpen}
                target="_blank"
                rel="noopener noreferrer"
              >
                {registrationOpen ? 'Register Here' : 'Registration Closed'}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
