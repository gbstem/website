'use client';
import Image from 'next/image';
import { useState } from 'react';
import { Button, Card, Modal } from 'react-bootstrap';

interface TeamMemberCardProps {
  name: string;
  school: string;
  graduationYear: string;
  profilePic: string;
  bio: string;
  role: string;
}

export default function TeamMemberCard({
  name,
  school,
  graduationYear,
  profilePic,
  bio,
  role,
}: TeamMemberCardProps) {
  const [showModal, setShowModal] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  // Handle bio modal
  const handleClick = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  // Track image loading
  const handleImageLoad = () => setImageLoaded(true);

  return (
    <Card
      className="group team-member-card h-100 border-0 shadow-sm transition-[transform,box-shadow] duration-300 ease-out hover:-translate-y-2 hover:shadow-[0_12px_20px_rgba(0,0,0,0.1)]"
      style={{ width: '300px' }}
    >
      <div className="relative mx-auto mt-4 mb-3 flex h-[180px] w-[180px] items-center justify-center overflow-hidden rounded-full bg-[#f8f9fa]">
        <div className="relative mx-auto aspect-square h-full w-full max-w-[180px] overflow-hidden rounded-full">
          <Image
            src={`/images/headshots/${profilePic}`}
            alt={name}
            fill
            sizes="180px"
            onLoad={handleImageLoad}
            className="h-full w-full max-w-[300px]! object-cover group-hover:scale-108"
            style={{
              opacity: imageLoaded ? 1 : 0,
              transition: 'opacity 0.3s ease-in-out, transform 0.5s ease',
            }}
          />
          {!imageLoaded && (
            <div
              className="image-placeholder"
              aria-hidden="true"
              style={{
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
                fontWeight: 'bold',
                borderRadius: '50%',
              }}
            >
              {name
                .split(' ')
                .map((word) => word[0])
                .join('')}
            </div>
          )}
        </div>
      </div>

      <Card.Body className="d-flex flex-column justify-content-between pb-4 text-center">
        <div style={{ height: '140px' }}>
          <Card.Title as="h4" className="fw-semibold mb-1">
            {name}
          </Card.Title>
          <p className="text-muted mb-1">{role}</p>
          <p className="small mb-3">{`${school} ${graduationYear}`}</p>
        </div>
        <div>
          <Button
            onClick={handleClick}
            className="rounded-pill px-4 py-1"
            style={{ backgroundColor: '#1D2256', borderColor: '#1D2256' }}
            aria-label={`View bio for ${name}`}
          >
            View Bio
          </Button>
        </div>
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
}
