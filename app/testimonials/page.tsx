"use client";

import { testimonials } from '@/lib/testimonialsData';
import { Card, Col, Container, Row } from 'react-bootstrap';

// Testimonial card component
function TestimonialCard({ text, author }: { text: string; author: string }) {
  return (
    <Card className="h-100 border-0 shadow-sm testimonial-card hover-effect">
      <Card.Body className="p-4 d-flex flex-column">
        <div className="position-relative mb-4">
          <div style={{
            fontSize: '72px',
            position: 'absolute',
            top: '-30px',
            left: '-10px',
            color: '#f8f9fa',
            zIndex: 0,
            fontFamily: 'Georgia, serif'
          }}>
            "
          </div>
          <Card.Text
            className="position-relative"
            style={{
              zIndex: 1,
              lineHeight: 1.6,
              fontSize: '1rem',
              fontStyle: 'italic'
            }}
          >
            "{text}"
          </Card.Text>
        </div>
        <div className="mt-auto pt-3" style={{ borderTop: '1px solid #eee' }}>
          <p className="mb-0 fw-semibold text-dark">{author}</p>
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
          <Col key={index} md={6} lg={4} className="mb-4 d-flex">
            <div className="w-100">
              <TestimonialCard
                text={testimonial.text}
                author={testimonial.author}
              />
            </div>
          </Col>
        ))}
      </Row>
      <style jsx>{`
        .hover-effect {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .hover-effect:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
        }
      `}</style>
    </Container>
  );
}
