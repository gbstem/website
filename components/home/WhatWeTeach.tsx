'use client';
import Link from 'next/link';
import { Card, Col, Container, Row } from 'react-bootstrap';
const mathGraphic = '/images/homepage/math1.jpg';
const csGraphic = '/images/homepage/cs1.png';
const scienceGraphic = '/images/homepage/science1.svg';
const engineeringGraphic = '/images/homepage/eng4.png';

function WhatWeTeach() {
  const subjects = [
    {
      name: 'Computer Science',
      image: csGraphic,
      color: '#67aeda',
      link: '/cs',
      description: 'Learn programming fundamentals, algorithms, and software development',
    },
    {
      name: 'Mathematics',
      image: mathGraphic,
      color: '#aaaaaa',
      link: '/math',
      description: 'Explore mathematical concepts, problem-solving, and critical thinking',
    },
    {
      name: 'Engineering',
      image: engineeringGraphic,
      color: '#ffc819',
      link: '/engineering',
      description: 'Design, build, and test creative engineering solutions',
    },
    {
      name: 'Science',
      image: scienceGraphic,
      color: '#4CAF50',
      link: '/science',
      description: 'Discover principles of natural sciences through hands-on experiments',
    },
  ];

  return (
    <div className="bg-[aliceblue] py-5">
      <Container>
        <h2 className="fw-semibold mb-5 text-center">What We Teach</h2>
        <Row className="g-4">
          {subjects.map((subject, index) => (
            <Col md={6} key={index}>
              <Card className="hover-shadow h-100 overflow-hidden border-0 shadow-sm">
                <div className="h-[220px] overflow-hidden">
                  <Card.Img
                    variant="top"
                    src={subject.image}
                    alt={subject.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <Card.Body className="d-flex flex-column">
                  <Card.Title className="fw-semibold mb-3" style={{ color: subject.color }}>
                    {subject.name}
                  </Card.Title>
                  <Card.Text className="mb-4">{subject.description}</Card.Text>
                  <div className="mt-auto">
                    <Link
                      href={subject.link}
                      className="btn w-100 text-white"
                      style={{ backgroundColor: subject.color }}
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
