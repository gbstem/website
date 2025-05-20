import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function KeyStats() {
  return (
    <div className="py-5 bg-white" id="learn-more">
      <Container>
        <Row className="text-center mb-4">
          <Col>
            <h2 className="fw-bold">Making STEM Education Accessible</h2>
          </Col>
        </Row>
        <Row className="g-4 text-center">
          <Col md={4}>
            <div className="p-4 rounded h-100 shadow-sm border" style={{ backgroundColor: '#f8f9fa' }}>
              <div className="display-3 fw-bold mb-3 text-primary">FREE</div>
              <p className="mb-0">All our programs are completely free for students grades 1-8</p>
            </div>
          </Col>
          <Col md={4}>
            <div className="p-4 rounded h-100 shadow-sm border" style={{ backgroundColor: '#f8f9fa' }}>
              <div className="display-3 fw-bold mb-3 text-primary">4+</div>
              <p className="mb-0">STEM subjects taught by qualified instructors</p>
            </div>
          </Col>
          <Col md={4}>
            <div className="p-4 rounded h-100 shadow-sm border" style={{ backgroundColor: '#f8f9fa' }}>
              <div className="display-3 fw-bold mb-3 text-primary">K-8</div>
              <p className="mb-0">Programs designed for elementary and middle school students</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default KeyStats;
