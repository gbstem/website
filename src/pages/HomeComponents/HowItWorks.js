import React from "react";
import { Container, Row, Col, Card } from 'react-bootstrap';
import glance from "../../images/glance.png";
import { Link } from "react-router-dom";
import { ArrowRight } from "react-feather";

function HowItWorks() {
  return (
    <section className="py-5 bg-white">
      <Container>
        <Row className="mb-4">
          <Col className="text-center">
            <h2 className="fw-bold">How It Works</h2>
            <p className="text-muted">Our approach to engaging STEM education</p>
          </Col>
        </Row>
        
        <Row className="align-items-center g-5">
          <Col lg={6}>
            <Card className="border-0 shadow-sm h-100">
              <Card.Body className="p-4">
                <p className="lead mb-4">
                  All classes are 100% free and will be conducted either remotely via Zoom or in-person in groups of about
                  5-10 students. Each class will meet for two 45-60 minute sessions every week.
                </p>
                <p className="mb-4">
                  We emphasize creativity, problem-solving, and collaboration in order to foster a welcoming environment where
                  students can form lasting friendships while building valuable STEM skills.
                </p>
                
                <div className="d-flex flex-wrap gap-3 mt-4">
                  <Link to="/faq" className="btn btn-primary">
                    <span className="d-flex align-items-center">
                      Learn More <ArrowRight size={18} className="ms-2" />
                    </span>
                  </Link>
                  
                  <Link to="/team" className="btn btn-primary">
                    <span className="d-flex align-items-center">
                      Meet Our Team <ArrowRight size={18} className="ms-2" />
                    </span>
                  </Link>
                </div>
              </Card.Body>
            </Card>
          </Col>
          
          <Col lg={6} className="text-center">
            <div className="position-relative">
              <div className="bg-primary rounded position-absolute" style={{ width: '90%', height: '90%', top: '5%', left: '5%', opacity: 0.05, zIndex: 0 }}></div>
              <img 
                src={glance} 
                alt="How our program works" 
                className="img-fluid rounded shadow position-relative" 
                style={{ maxHeight: '400px', zIndex: 1 }}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default HowItWorks;
