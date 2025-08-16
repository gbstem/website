import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import inperson1 from '../../images/in-person/inperson1.jpeg';
import { semesterStartDate } from '../../Constants';

function HeroSection() {
  return (
    <div className="hero-section" style={{
      background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url(${inperson1})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      color: 'white',
      minHeight: '80vh',
      display: 'flex',
      alignItems: 'center',
    }}>
      <Container>
        <Row className="py-5">
          <Col lg={7} className="py-5">
            <h1 className="display-3 fw-bold mb-4">Inspiring the Next Generation of STEM Innovators</h1>
            <p className="lead mb-4">The Greater Boston STEM Program delivers free introductory computer science, math, engineering, and science enrichment to elementary and middle school students.</p>
            <div className="d-flex gap-3">
              <Button disabled={new Date() < semesterStartDate} size="lg" href="https://portal.gbstem.org/signup" target="_blank" rel="noopener noreferrer" variant="primary">{new Date() < semesterStartDate ? "Registration Closed" : "Register Here"}</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default HeroSection;
