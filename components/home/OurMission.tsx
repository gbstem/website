'use client';
import Image from 'next/image';
const slide1 = '/images/zoomScreenshots/Screenshot (1).png';

function OurMission() {
  return (
    <section className="bg-white py-12">
      <div className="site-container">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <div className="relative">
              <div className="absolute top-[10%] left-[10%] z-0 size-[90%] rounded-md bg-primary opacity-10"></div>
              <Image
                src={slide1}
                alt="STEM Learning"
                className="relative z-1 h-auto w-full rounded-md shadow-md"
                width={600}
                height={400}
              />
              <div
                className="absolute top-[-15px] left-[-15px] z-2 flex size-[70px] items-center justify-center rounded-full bg-[#67aeda]"
                aria-hidden="true"
              >
                <span className="text-h1 text-white">💡</span>
              </div>
            </div>
          </div>
          <div>
            <div className="lg:p-6">
              <h2 className="mb-6 font-semibold">Our Mission</h2>
              <p className="mb-6 text-lead font-light">
                We believe that everyone should have the opportunity to build strong foundational
                skills in the STEM fields of science, computer science, math, and engineering, no
                matter their background or location.
              </p>
              <p className="mb-12">
                Our program is designed to make STEM education accessible and engaging for students,
                preparing them for future academic and career success in an increasingly
                technological world.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurMission;
