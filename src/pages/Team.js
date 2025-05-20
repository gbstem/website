import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Modal } from 'react-bootstrap';
import teamMembers from './teamMembers';
import '../styles.css';
import '../teamStyles.css';

const teams = ['presidents', 'advisors', 'outreach & events', 'math', 'engineering', 'computer science', 'science'];

// Profile component with improved UI
const TeamMemberCard = ({ name, school, graduationYear, profilePic, bio, role }) => {
  const [showModal, setShowModal] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  // Handle bio modal
  const handleClick = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  // Track image loading
  const handleImageLoad = () => setImageLoaded(true);

  return (
    <Card className="team-member-card h-100 border-0 shadow-sm hover-effect" style={{ maxWidth: '300px' }}>
      <div className="profile-circle mx-auto mt-4 mb-3">
        <div className="team-image-container">
          <Card.Img 
            variant="top" 
            src={profilePic} 
            alt={name}
            onLoad={handleImageLoad}
            className="team-member-image"
            style={{ 
              opacity: imageLoaded ? 1 : 0,
              transition: 'opacity 0.3s ease-in-out',
            }}
          />
          {!imageLoaded && (
            <div className="image-placeholder" style={{ 
              position: 'absolute', 
              top: 0, 
              left: 0, 
              width: '100%', 
              height: '100%', 
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#f1f1f1',
              color: '#67aeda',
              fontSize: '1.5rem',
              fontWeight: 'bold'
            }}>
              {name.split(' ').map(word => word[0]).join('')}
            </div>
          )}
        </div>
      </div>

      <Card.Body className="text-center pb-4">
        <Card.Title as="h4" className="fw-bold mb-1">{name}</Card.Title>
        <p className="text-muted mb-1">{role}</p>
        <p className="small mb-3">{`${school} ${graduationYear}`}</p>
        <Button 
          onClick={handleClick} 
          className="rounded-pill px-4 py-1">
          View Bio
        </Button>
      </Card.Body>

      {/* Bio Modal */}
      <Modal show={showModal} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>
            <div className="d-flex flex-column">
              <span>{name}</span>
              <small className="text-muted">{role}</small>
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p style={{ lineHeight: '1.6' }}>{bio}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Card>
  );
};

// Team Section component
const TeamSection = ({ teamName, members }) => {
  return (
    <div className="team-section py-5">
      <Container>
        <h2 className="text-center mb-5" style={{ 
          textTransform: 'capitalize',
          position: 'relative',
          paddingBottom: '15px',
        }}>
          {teamName} {teamName === "presidents" || teamName === "advisors" ? "" : "Team"}
          <div style={{ 
            position: 'absolute', 
            bottom: 0, 
            left: '50%', 
            transform: 'translateX(-50%)', 
            width: '80px', 
            height: '3px', 
            backgroundColor: '#67aeda' 
          }}></div>
        </h2>
        
        <Row xs={1} sm={2} md={2} lg={3} xl={4} className="g-4 justify-content-center">
          {members.map((member, index) => (
            <Col key={index} className="d-flex justify-content-center">
              <TeamMemberCard
                name={member.name}
                school={member.school}
                graduationYear={member.graduationYear}
                profilePic={member.profilePic}
                bio={member.bio}
                role={member.role}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

// Main Team component
const Team = () => {
  return (
    <div className="team-page bg-light">
      <Container fluid className="py-5 bg-primary text-white text-center" style={{ backgroundColor: '#67aeda !important' }}>
        <h1 className="display-4 fw-bold">Our Team</h1>
        <p className="lead">Meet the dedicated people behind gbSTEM</p>
      </Container>

      {/* Display all teams in sections */}
      {teams.map((team) => (
        <TeamSection key={team} teamName={team} members={teamMembers.filter(member => member.team === team)} />
      ))}

      {/* Add custom CSS for animations */}
      <style jsx="true">{`
        .hover-effect {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .hover-effect:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 20px rgba(0, 0, 0, 0.1);
        }
        .team-member-image {
          transition: transform 0.5s ease;
        }
        .team-member-card:hover .team-member-image {
          transform: scale(1.08);
        }
      `}</style>
    </div>
  );
};

export default Team;
