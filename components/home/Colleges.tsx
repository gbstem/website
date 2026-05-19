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
    <section className="py-5 bg-white border-top">
      <Container>
        <Row className="mb-5">
          <Col className="text-center">
            <h2 className="fw-semibold">Our Instructors Have Attended</h2>
            <p className="lead text-muted">Learn from talented high school students</p>
          </Col>
        </Row>

        <div className="logo-carousel-container">
          <div className="logo-carousel">
            <div className="logo-slide">
              {colleges.map((college, index) => (
                <div key={`slide1-${index}`} className="logo-item">
                  <div
                    className="college-logo-wrapper bg-white rounded shadow-sm p-4 mx-2 d-flex align-items-center justify-content-center"
                    style={{ height: '120px', width: '200px' }}
                  >
                    <Image
                      src={college.logo}
                      alt={`${college.name} Logo`}
                      title={college.name}
                      className="img-fluid"
                      width={160}
                      height={80}
                      style={{ maxHeight: '80px', maxWidth: '160px', objectFit: 'contain' }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="logo-slide">
              {colleges.map((college, index) => (
                <div key={`slide2-${index}`} className="logo-item">
                  <div
                    className="college-logo-wrapper bg-white rounded shadow-sm p-4 mx-2 d-flex align-items-center justify-content-center"
                    style={{ height: '120px', width: '200px' }}
                  >
                    <Image
                      src={college.logo}
                      alt={`${college.name} Logo`}
                      title={college.name}
                      className="img-fluid"
                      width={160}
                      height={80}
                      style={{ maxHeight: '80px', maxWidth: '160px', objectFit: 'contain' }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <style jsx>{`
          .logo-carousel-container {
            width: 100%;
            overflow: hidden;
            margin: 0 auto;
            position: relative;
          }

          .logo-carousel {
            display: flex;
            width: 100%;
          }

          .logo-slide {
            display: flex;
            animation: scroll 30s linear infinite;
            padding-right: 0.5rem;
          }

          .logo-item {
            flex: 0 0 auto;
            min-width: 200px;
          }

          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-100%);
            }
          }
        `}</style>
      </Container>
    </section>
  );
}

export default Colleges;
