'use client';
import { Col, Container, Row } from 'react-bootstrap';

function KeyStats() {
  return (
    <div className="bg-white py-5" id="learn-more">
      <Container>
        <Row className="mb-4 text-center">
          <Col>
            <h2 className="fw-semibold">Making STEM Education Accessible</h2>
          </Col>
        </Row>
        <Row className="g-4 text-center">
          <Col md={4}>
            <div
              className="h-100 rounded border p-4 shadow-sm"
              style={{ backgroundColor: '#f8f9fa' }}
            >
              <div className="display-3 fw-semibold text-primary mb-3">FREE</div>
              <p className="mb-0">All our programs are completely free for students grades 1-8</p>
            </div>
          </Col>
          <Col md={4}>
            <div
              className="h-100 rounded border p-4 shadow-sm"
              style={{ backgroundColor: '#f8f9fa' }}
            >
              <div className="display-3 fw-semibold text-primary mb-3">4+</div>
              <p className="mb-0">STEM subjects taught by qualified instructors</p>
            </div>
          </Col>
          <Col md={4}>
            <div
              className="h-100 rounded border p-4 shadow-sm"
              style={{ backgroundColor: '#f8f9fa' }}
            >
              <div className="display-3 fw-semibold text-primary mb-3">K-8</div>
              <p className="mb-0">Programs designed for elementary and middle school students</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default KeyStats;
