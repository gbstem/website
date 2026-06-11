'use client';
import Image from 'next/image';
import { Col, Container, Row } from 'react-bootstrap';
const slide1 = '/images/zoomScreenshots/Screenshot (1).png';

function OurMission() {
  return (
    <section className="bg-white py-5">
      <Container>
        <Row className="align-items-center g-5">
          <Col lg={6}>
            <div className="position-relative">
              <div className="bg-primary position-absolute top-[10%] left-[10%] z-0 h-[90%] w-[90%] rounded opacity-10"></div>
              <Image
                src={slide1}
                alt="STEM Learning"
                className="img-fluid position-relative z-1 h-auto w-full rounded shadow"
                width={600}
                height={400}
              />
              <div
                className="position-absolute top-[-15px] left-[-15px] z-2 flex h-[70px] w-[70px] items-center justify-center rounded-full bg-[#67aeda]"
                aria-hidden="true"
              >
                <span className="fs-1 text-white">💡</span>
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
