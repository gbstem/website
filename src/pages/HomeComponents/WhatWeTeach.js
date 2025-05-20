import React from "react";
import { Container, Row, Col, Card } from 'react-bootstrap';
import mathGraphic from '../../images/homepage/math1.jpg';
import csGraphic from '../../images/homepage/cs1.png';
import scienceGraphic from '../../images/homepage/science1.svg';
import engineeringGraphic from '../../images/homepage/eng4.png';
import { Link } from 'react-router-dom';
import '../../styles.css';

function WhatWeTeach() {
  const subjects = [
    {
      name: "Computer Science",
      image: csGraphic,
      color: "#67aeda",
      link: "/cs",
      description: "Learn programming fundamentals, algorithms, and software development"
    },
    {
      name: "Mathematics",
      image: mathGraphic,
      color: "#aaaaaa",
      link: "/math",
      description: "Explore mathematical concepts, problem-solving, and critical thinking"
    },
    {
      name: "Engineering",
      image: engineeringGraphic,
      color: "#ffc819",
      link: "/engineering",
      description: "Design, build, and test creative engineering solutions"
    },
    {
      name: "Science",
      image: scienceGraphic,
      color: "#4CAF50",
      link: "/science",
      description: "Discover principles of natural sciences through hands-on experiments"
    }
  ];

  return (
    <div className="py-5" style={{ backgroundColor: 'aliceblue' }}>
      <Container>
        <h2 className="text-center fw-bold mb-5">What We Teach</h2>
        <Row className="g-4">
          {subjects.map((subject, index) => (
            <Col md={6} key={index}>
              <Card className="h-100 shadow-sm hover-shadow border-0 overflow-hidden">
                <div style={{ height: "220px", overflow: "hidden" }}>
                  <Card.Img 
                    variant="top" 
                    src={subject.image} 
                    alt={subject.name} 
                    style={{ objectFit: "cover", height: "100%", width: "100%" }}
                  />
                </div>
                <Card.Body className="d-flex flex-column">
                  <Card.Title 
                    className="fw-bold mb-3" 
                    style={{ color: subject.color }}
                  >
                    {subject.name}
                  </Card.Title>
                  <Card.Text className="mb-4">
                    {subject.description}
                  </Card.Text>
                  <div className="mt-auto">
                    <Link 
                      to={subject.link} 
                      className="btn w-100" 
                      style={{ backgroundColor: subject.color, color: "white" }}
                    >
                      Learn More
                    </Link>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default WhatWeTeach;