import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card } from 'react-bootstrap';

function Counter() {
  const [counters, setCounters] = useState([
    { label: "Students", target: 2000, value: 0, suffix: "+" },
    { label: "Instructors", target: 400, value: 0, suffix: "+" },
    { label: "Courses Offered", target: 20, value: 0, suffix: "" },
    { label: "Volunteer Driven", target: 100, value: 0, suffix: "%" }
  ]);

  useEffect(() => {
    // Start animation after a slight delay for better user experience
    const timer = setTimeout(() => {
      const updateCounters = () => {
        setCounters(prevCounters => {
          return prevCounters.map(counter => {
            const { target, value } = counter;
            const step = Math.ceil(target / 100); // Increase the value in 100 steps
            const newValue = Math.min(value + step, target);
            return { ...counter, value: newValue };
          });
        });
      };

      const interval = setInterval(updateCounters, 20); // Update counters every 20 milliseconds

      return () => clearInterval(interval); // Clear the interval when the component unmounts
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-5" style={{ backgroundColor: '#f8f9fa', borderTop: '1px solid #e9ecef', borderBottom: '1px solid #e9ecef' }}>
      <Container>
        <Row className="mb-5">
          <Col className="text-center">
            <h2 className="fw-bold">Our Impact</h2>
            <p className="text-muted">Growing our community of STEM learners</p>
          </Col>
        </Row>
        <Row className="g-4">
          {counters.map((counter, index) => (
            <Col md={6} lg={3} key={index}>
              <Card className="border-0 shadow-sm h-100 text-center">
                <Card.Body className="d-flex flex-column justify-content-center p-4">
                  <div className="counter-value display-4 fw-bold mb-2" style={{ color: '#67aeda' }}>
                    {counter.value}{counter.suffix}
                  </div>
                  <Card.Title className="counter-label">{counter.label}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Counter;
