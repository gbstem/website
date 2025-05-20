import React from "react";
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { ArrowRight } from "react-feather";

function WhatPeopleSay() {
  const testimonials = [
    {
      quote: "My child came into coding without knowing what it really is. Now she is so excited about it and wants to keep doing it. Thank you gbSTEM for awakening that passion.",
      author: "Parent of 3rd Grader",
      role: "Parent"
    },
    {
      quote: "gbSTEM is an innovative program that met a need for out-of-school time enrichment for children. My son has learned so much in the computer science course.",
      author: "Parent of 2nd Grader",
      role: "Parent"
    },
    {
      quote: "They create curriculum to motivate students to love their classes. My daughter now wants to pursue engineering after taking their engineering class.",
      author: "Parent of 3rd Grader",
      role: "Parent"
    }
  ];

  return (
    <section className="py-5" style={{ backgroundColor: 'aliceblue' }}>
      <Container>
        <Row className="mb-5">
          <Col className="text-center">
            <h2 className="fw-bold mb-2">What People Say</h2>
            <p className="lead">Hear from our community of students, parents, and partners</p>
          </Col>
        </Row>

        <Row className="g-4">
          {testimonials.map((testimonial, index) => (
            <Col lg={4} key={index}>
              <Card className="h-100 border-0 shadow-sm testimonial-card">
                <Card.Body className="position-relative p-4">
                  <div className="position-absolute" style={{ top: -15, right: 20, fontSize: '3rem', color: '#67aeda', opacity: 0.2 }}>
                    "
                  </div>
                  <Card.Text className="mb-4 fs-5" style={{ lineHeight: 1.7 }}>
                    "{testimonial.quote}"
                  </Card.Text>
                  <div className="d-flex mt-auto pt-3" style={{ borderTop: '1px solid #eee' }}>
                    <div>
                      <div className="fw-bold">{testimonial.author}</div>
                      <div className="text-muted small">{testimonial.role}</div>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <Row className="mt-5">
          <Col className="text-center">
            <Link to="/testimonials" className="btn btn-primary px-4 py-2">
              <span className="d-flex align-items-center justify-content-center">
                Read More Testimonials <ArrowRight size={18} className="ms-2" />
              </span>
            </Link>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default WhatPeopleSay;
