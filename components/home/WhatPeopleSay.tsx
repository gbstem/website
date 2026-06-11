'use client';
import Link from 'next/link';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { ArrowRight } from 'react-feather';

function WhatPeopleSay() {
  const testimonials = [
    {
      quote:
        'My child came into coding without knowing what it really is. Now she is so excited about it and wants to keep doing it. Thank you gbSTEM for awakening that passion.',
      author: 'Parent of 3rd Grader',
      role: 'Parent',
    },
    {
      quote:
        'gbSTEM is an innovative program that met a need for out-of-school time enrichment for children. My son has learned so much in the computer science course.',
      author: 'Parent of 2nd Grader',
      role: 'Parent',
    },
    {
      quote:
        'They create curriculum to motivate students to love their classes. My daughter now wants to pursue engineering after taking their engineering class.',
      author: 'Parent of 3rd Grader',
      role: 'Parent',
    },
  ];

  return (
    <section className="bg-[aliceblue] py-5">
      <Container>
        <Row className="mb-5">
          <Col className="text-center">
            <h2 className="fw-semibold mb-2">What People Say</h2>
            <p className="lead">Hear from our community of students, parents, and partners</p>
          </Col>
        </Row>

        <Row className="g-4">
          {testimonials.map((testimonial, index) => (
            <Col lg={4} key={index}>
              <Card className="testimonial-card h-100 border-0 shadow-sm">
                <Card.Body className="position-relative p-4">
                  <div className="position-absolute top-[-15px] right-5 text-[3rem] text-[#67aeda] opacity-20">
                    &quot;
                  </div>
                  <Card.Text className="fs-5 mb-4 leading-[1.7]">
                    &quot;{testimonial.quote}&quot;
                  </Card.Text>
                  <div className="d-flex mt-auto border-t border-[#eee] pt-3">
                    <div>
                      <div className="fw-semibold">{testimonial.author}</div>
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
            <Link href="/testimonials" className="btn btn-primary px-4 py-2">
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
