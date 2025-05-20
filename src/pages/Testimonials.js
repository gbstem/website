import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

// Define all testimonials
const testimonials = [
  {
    "text": "gbSTEM gave my daughter the opportunity to take her first steps in computer science and safe, welcoming, and fun environment. You sparked interest and curiosity in her. Every week she spent hours outside class working on her own Scratch projects in addition to the class projects. Thank you!",
    "author": "Parent of 3rd grade student"
  },
  {
    "text": "The program provided extra practice for my child. He learned so much more. We have been very fortunate to be assigned to awesome instructors.",
    "author": "Parent of 5th grade student"
  },
  {
    "text": "Thanks gbSTEM for building student’s interests and confidence on coding/pythons, building 3-D projects and slide-presentations in engineering sessions.   All staffs are very kind, helpful and encouraging.",
    "author": "Parent of 7th grade student"
  },
  {
    "text": "Thank you for providing opportunities for all children to get exposed to STEM! Your work helps alleviate hesitations toward technical topics and better prepare kids to love STEM. We love this program and hope to continue utilizing this resource in the future!",
    "author": "Parent of 7th grade student"
  },
  {
    "text": "gbSTEM was providing live lessons long before PSB [the Public Schools of Brookline] were able to, and I especially appreciated the structure that provided during a time of great uncertainty and stress.",
    "author": "Parent of a 6th grade student"
  },
  {
    "text": "I'm super impressed that this was all put together by high school students and that all instructors are teaching for free. gbSTEM provided some much-needed intellectual stimulation for my kids, especially during this period of remote learning when the curriculum being provided by school (especially in math) has not been challenging. Thank you gbSTEM!",
    "author": "Parent of 2nd and 4th grade students"
  },
  {
    "text": "My daughter really enjoyed her Scratch class. The instructor provided extra help when needed, and she understood that the students enrolled were very young. She tried to accommodate everyone and taught at a slower pace. Thank you for introducing my daughter to Scratch! It was a wonderful experience.",
    "author": "Parent of a 3rd grade student"
  },
  {
    "text": "gbSTEM is an innovative program that met a need for out-of-school time enrichment for children by rallying the knowledge and skills of some truly amazing high school students.",
    "author": "Parent of a 2nd grade student"
  },
  {
    "text": "It's a great opportunity for my son to work with a high school student and work on coding. He really enjoys working with his tutor!",
    "author": "Jennifer M., parent of a 7th grade student"
  },
  {
    "text": "gbSTEM is fantastic! The tutors are kind and engaging, and the curriculum is tailored to each student's individual needs. My daughter is beginning to love computer science, and her math grades have improved as well!",
    "author": "Parent of a 7th grade student"
  },
  {
    "text": "My kids are having great fun creating their own code and running their own computer programs. It gives them a great deal of satisfaction when their programs run successfully. I am very glad that they are able to pick up some programming skills in just a few weeks. My daughter likes math and it is great that gbSTEM provides the opportunity for her to learn more and be challenged.",
    "author": "Parent of 5th and 7th grade students"
  },
  {
    "text":
      "Elena and Yuen Ler are passionate about and dedicated to making a difference in the community and fostering a love for math and computer science. They create curriculum to motivate students to love their classes and want to learn more.",
    "author": "Parent of a 3rd grade student"
  },
  {
    "text": "Thank you for mentoring younger students, you are setting a great example. My son loved his gbSTEM CS sessions and looked forward for the weekend hackathon. Math CS session was engaging and supported learning in a safe fun way. We are is awe of how professionally you all are managing gbSTEM! It is a great program and we will continue supporting you.",
    "author": "Parent of a 3rd grade student"
  },
  {
    "text": "The gbSTEM helped our children stay on schedule with a purpose weekly. It helped them to learn materials beyond what the school teaches them. It also boost their confidence and make them believe in themselves. Overall, we are extremely impressed with the organization and the instructors.",
    "author": "Parent of a 4th grade student"
  },
  {
    "text": "Teachers are very professional",
    "author": "Parent of a 3rd grade student"
  },
  {
    "text": "I am amazed you provide this for free! I really hope that you will keep an online class option even as COVID rates fall.",
    "author": "Parent of a 4th grade student"
  },
  {
    "text": "My child came into coding without knowing what it really is. Now she is so excited about it and wants to keep doing it. Thank you gbSTEM for awakening that passion.",
    "author": "Parent of a 3rd grade student"
  },
  {
    "text": "A fabulous introduction to coding for young children!",
    "author": "Parent of a 2nd grade student"
  }
]

// Testimonial card component
function TestimonialCard({ text, author }) {
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
          <p className="mb-0 fw-bold text-dark">{author}</p>
        </div>
      </Card.Body>
    </Card>
  );
}

// Main Testimonials component
function Testimonials() {

  return (
    <Container className="py-5">
      <Row className="mb-5">
        <Col className="text-center">
          <h2 className="fw-bold mb-3">What People Say</h2>
          <p className="lead text-muted mb-5">Hear from our community of parents and students</p>
        </Col>
      </Row>
      
      <Row className="g-4">
        {testimonials.map((testimonial, index) => (
          <Col key={index} md={6} lg={4} className="mb-4">
            <TestimonialCard
              text={testimonial.text}
              author={testimonial.author}
            />
          </Col>
        ))}
      </Row>

      {/* Add custom CSS for animations */}
      <style jsx="true">{`
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

export default Testimonials;
