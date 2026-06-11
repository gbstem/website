'use client';

import { testimonials } from '@/lib/testimonialsData';
import { Card, Col, Container, Row } from 'react-bootstrap';

// Testimonial card component
function TestimonialCard({ text, author }: { text: string; author: string }) {
  return (
    <Card className="testimonial-card h-100 border-0 shadow-sm transition-[transform,box-shadow] duration-300 ease-out hover:translate-y-[-5px] hover:shadow-[0_10px_20px_rgba(0,0,0,0.1)]">
      <Card.Body className="d-flex flex-column p-4">
        <div className="position-relative mb-4">
          <div className="absolute top-[-30px] left-[-10px] z-0 font-[Georgia,serif] text-[72px] text-[#f8f9fa]">
            &quot;
          </div>
          <Card.Text className="position-relative z-1 text-base! leading-[1.6] italic">
            &quot;{text}&quot;
          </Card.Text>
        </div>
        <div className="mt-auto border-t border-[#eee] pt-3">
          <p className="fw-semibold text-dark mb-0">{author}</p>
        </div>
      </Card.Body>
    </Card>
  );
}

// Main Testimonials component
export default function Testimonials() {
  return (
    <Container className="py-5">
      <Row className="mb-5">
        <Col className="text-center">
          <h2 className="fw-semibold mb-3">What People Say</h2>
          <p className="lead text-muted mb-5">Hear from our community of parents and students</p>
        </Col>
      </Row>

      <Row className="g-4">
        {testimonials.map((testimonial, index) => (
          <Col key={index} md={6} lg={4} className="d-flex mb-4">
            <div className="w-100">
              <TestimonialCard text={testimonial.text} author={testimonial.author} />
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
