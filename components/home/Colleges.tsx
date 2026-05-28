'use client';
import Image from 'next/image';
import { Col, Container, Row } from 'react-bootstrap';

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
    <section className="border-top bg-white py-5">
      <Container>
        <Row className="mb-5">
          <Col className="text-center">
            <h2 className="fw-semibold">Our Instructors Have Attended</h2>
            <p className="lead text-muted">Learn from talented high school students</p>
          </Col>
        </Row>

        <div className="relative mx-auto w-full overflow-hidden">
          <div className="flex w-full">
            <div className="flex animate-scroll pr-2">
              {colleges.map((college, index) => (
                <div key={`slide1-${index}`} className="min-w-[200px] flex-none">
                  <div
                    className="college-logo-wrapper d-flex align-items-center justify-content-center mx-2 rounded bg-white p-4 shadow-sm"
                    style={{ height: '120px', width: '200px' }}
                  >
                    <Image
                      src={college.logo}
                      alt={`${college.name} Logo`}
                      title={college.name}
                      className="img-fluid"
                      width={160}
                      height={80}
                      style={{
                        width: 'auto',
                        height: 'auto',
                        maxHeight: '80px',
                        maxWidth: '160px',
                        objectFit: 'contain',
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="flex animate-scroll pr-2">
              {colleges.map((college, index) => (
                <div key={`slide2-${index}`} className="min-w-[200px] flex-none">
                  <div
                    className="college-logo-wrapper d-flex align-items-center justify-content-center mx-2 rounded bg-white p-4 shadow-sm"
                    style={{ height: '120px', width: '200px' }}
                  >
                    <Image
                      src={college.logo}
                      alt={`${college.name} Logo`}
                      title={college.name}
                      className="img-fluid"
                      width={160}
                      height={80}
                      style={{
                        width: 'auto',
                        height: 'auto',
                        maxHeight: '80px',
                        maxWidth: '160px',
                        objectFit: 'contain',
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Colleges;
