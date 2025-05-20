import React from "react";
import { Container, Row, Col, Card, Alert } from 'react-bootstrap';

function HomeIntro() {
  return (
    <div className="py-5 bg-white">
      <Container>
        <Row className="justify-content-center mb-4">
          <Col md={10} lg={8}>
            <Card className="border-0 shadow-sm">
              <Card.Body className="p-4">
                <h2 className="text-center mb-4">Registration Information</h2>
                <Alert variant="info">
                  <p className="mb-0">The Spring Semester registration is now closed. Registrations for the Fall semester will open in August.</p>
                </Alert>
                <p className="mb-4">
                  If you are interested in gbSTEM's programs or hope to apply next semester as an instructor, please join our mailing list <a href="https://docs.google.com/forms/d/e/1FAIpQLSdKlEDGGKCc7bB7Xvlm3zOnhgh37MusQ_uU_6paHAhpHIDgXw/viewform?usp=sf_link" className="fw-bold">here</a>.
                </p>
                <Row className="g-4">
                  <Col md={6}>
                    <div className="text-center p-4 h-100 bg-light rounded">
                      <h5 className="mb-3">Parents and 1-8 Students</h5>
                      <a className="btn btn-primary" href="https://portal.gbstem.org/signup" target="_blank" rel="noopener noreferrer">
                        Register
                      </a>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="text-center p-4 h-100 bg-light rounded">
                      <h5 className="mb-3">Instructor Applicants<br/>(High School or Older)</h5>
                      <a className="btn btn-primary" href="https://portal.gbstem.org/signup" target="_blank" rel="noopener noreferrer">
                        Apply to teach
                      </a>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default HomeIntro;

