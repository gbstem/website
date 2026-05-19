'use client';
import Image from 'next/image';
import { Col, Container, Row } from 'react-bootstrap';
const slide1 = '/images/zoomScreenshots/Screenshot (1).png';

function OurMission() {
  return (
    <section className="py-5 bg-white">
      <Container>
        <Row className="align-items-center g-5">
          <Col lg={6}>
            <div className="position-relative">
              <div
                className="bg-primary rounded position-absolute"
                style={{
                  width: '90%',
                  height: '90%',
                  top: '10%',
                  left: '10%',
                  opacity: 0.1,
                  zIndex: 0,
                }}
              ></div>
              <Image
                src={slide1}
                alt="STEM Learning"
                className="img-fluid rounded shadow position-relative"
                width={600}
                height={400}
                style={{ zIndex: 1, width: '100%', height: 'auto' }}
              />
              <div
                className="position-absolute"
                style={{
                  top: '-15px',
                  left: '-15px',
                  background: '#67aeda',
                  width: '70px',
                  height: '70px',
                  borderRadius: '50%',
                  zIndex: 2,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                aria-hidden="true"
              >
                <span className="text-white fs-1">💡</span>
              </div>
            </div>
          </Col>
          <Col lg={6}>
            <div className="p-lg-4">
              <h2 className="fw-semibold mb-4">Our Mission</h2>
              <p className="lead mb-4">
                We believe that everyone should have the opportunity to build strong foundational
                skills in the STEM fields of science, computer science, math, and engineering, no
                matter their background or location.
              </p>
              <p className="mb-5">
                Our program is designed to make STEM education accessible and engaging for students,
                preparing them for future academic and career success in an increasingly
                technological world.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default OurMission;
