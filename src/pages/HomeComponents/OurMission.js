import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { ArrowRight } from "react-feather";
import slide1 from "../../images/zoomScreenshots/Screenshot (1).png";

function OurMission() {
  return (
    <section className="py-5 bg-white">
      <Container>
        <Row className="align-items-center g-5">
          <Col lg={6}>
            <div className="position-relative">
              <div className="bg-primary rounded position-absolute" style={{ width: '90%', height: '90%', top: '10%', left: '10%', opacity: 0.1, zIndex: 0 }}></div>
              <img 
                src={slide1} 
                alt="STEM Learning" 
                className="img-fluid rounded shadow position-relative" 
                style={{ zIndex: 1 }}
              />
              <div className="position-absolute" style={{ top: '-15px', left: '-15px', background: '#67aeda', width: '70px', height: '70px', borderRadius: '50%', zIndex: 2, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span className="text-white fs-1">💡</span>
              </div>
            </div>
          </Col>
          <Col lg={6}>
            <div className="p-lg-4">
              <h2 className="fw-bold mb-4">Our Mission</h2>
              <p className="lead mb-4">
                We believe that everyone should have the opportunity to build strong foundational skills in
                the STEM fields of science, computer science, math, and engineering, no matter their background or location.
              </p>
              <p className="mb-5">
                Our program is designed to make STEM education accessible and engaging for students,
                preparing them for future academic and career success in an increasingly technological world.
              </p>
              <Link to="/mission" className="btn btn-primary px-4 py-2">
                <span className="d-flex align-items-center">
                  Learn More <ArrowRight size={18} className="ms-2" />
                </span>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default OurMission;
