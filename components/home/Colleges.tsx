'use client';
import Image from 'next/image';

function Colleges() {
  // For each of these, find the image on the web, then download them into our images/colleges folder
  // so we don't break if those images are deleted or moved, and so we can get the benefits of
  // next/image optimization.
  const colleges = [
    { name: 'Harvard', logo: '/images/colleges/harvard.png' },
    {
      name: 'MIT',
      logo: '/images/colleges/mit.png',
    },
    {
      name: 'Tufts University',
      logo: '/images/colleges/tufts.png',
    },
    {
      name: 'University of Chicago',
      logo: '/images/colleges/uchicago.png',
    },
    {
      name: 'Brown University',
      logo: '/images/colleges/brown.jpg',
    },
    {
      name: 'Boston University',
      logo: '/images/colleges/bu.png',
    },
    {
      name: 'Northwestern University',
      logo: '/images/colleges/northwestern.png',
    },
    {
      name: 'Georgetown',
      logo: '/images/colleges/georgetown.jpg',
    },
    {
      name: 'NYU',
      logo: '/images/colleges/nyu.jpg',
    },
    {
      name: 'Worcester Polytechnic Institute',
      logo: '/images/colleges/wpi.jpg',
    },
    {
      name: 'Swarthmore College',
      logo: '/images/colleges/swarthmore.png',
    },
    { name: 'UCLA', logo: '/images/colleges/ucla.png' },
    {
      name: 'Columbia',
      logo: '/images/colleges/columbia.png',
    },
    {
      name: 'Princeton',
      logo: '/images/colleges/princeton.png',
    },
    {
      name: 'UMass Amherst',
      logo: '/images/colleges/umass.png',
    },
  ];

  return (
    <section className="border-t border-divider bg-white py-12">
      <div className="site-container">
        <div className="mb-12 flow-root text-center">
          <h2 className="font-semibold">Our Instructors Have Attended</h2>
          <p className="text-lead font-light text-muted">
            Learn from talented high school students
          </p>
        </div>

        <div className="relative mx-auto w-full overflow-hidden">
          <div className="flex w-full">
            <div className="flex animate-scroll pr-2">
              {colleges.map((college, index) => (
                <div key={`slide1-${index}`} className="min-w-50 flex-none">
                  <div className="mx-2 flex h-30 w-1/2 items-center justify-center rounded-md bg-white p-6 shadow-sm">
                    <Image
                      src={college.logo}
                      alt={`${college.name} Logo`}
                      title={college.name}
                      className="size-auto max-h-20 max-w-full object-contain"
                      width={160}
                      height={80}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="flex animate-scroll pr-2">
              {colleges.map((college, index) => (
                <div key={`slide2-${index}`} className="min-w-50 flex-none">
                  <div className="mx-2 flex h-30 w-1/2 items-center justify-center rounded-md bg-white p-6 shadow-sm">
                    <Image
                      src={college.logo}
                      alt={`${college.name} Logo`}
                      title={college.name}
                      className="size-auto max-h-20 max-w-full object-contain"
                      width={160}
                      height={80}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Colleges;
