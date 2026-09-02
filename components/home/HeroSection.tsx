'use client';
import { currentSemesterStatus } from '@/lib/constants';
import { Button, Col, Container, Row } from 'react-bootstrap';
const inperson1 = '/images/in-person/inperson1.jpeg';

function HeroSection() {
  const { registrationOpen } = currentSemesterStatus();

  return (
    <div
      className="hero-section flex min-h-[80vh] items-center bg-cover bg-center text-white"
      style={{
        background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url(${inperson1})`,
      }}
    >
      <Container>
        <Row className="py-5">
          <Col lg={7} className="py-5">
            <h1 className="display-3 fw-semibold mb-4">
              Inspiring the Next Generation of STEM Innovators
            </h1>
            <p className="lead mb-4">
              The Greater Boston STEM Program delivers free introductory computer science, math,
              engineering, and science enrichment to elementary and middle school students.
            </p>
            <div className="d-flex gap-3">
              <Button
                disabled={!registrationOpen}
                size="lg"
                href="https://portal.gbstem.org/signup"
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
              >
                {registrationOpen ? 'Register Here' : 'Registration Closed'}
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default HeroSection;
