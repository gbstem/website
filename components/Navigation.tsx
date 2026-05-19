'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Navbar, Nav, NavDropdown, Modal } from 'react-bootstrap';
import { REGISTRATION_OPEN, FORM_LINK, GBSTEM_SIGNUP, SEMESTER_IN_PROGRESS } from '@/lib/constants';

export default function Navigation() {
  const [show, setShow] = useState(false);

  return (
    <>
      <Navbar variant="dark" expand="lg" style={{ backgroundColor: '#1D2256' }} collapseOnSelect>
        <Navbar.Brand as={Link} href="/" className="ms-5" style={{ fontWeight: 700 }}>
          <Image
            alt="gbSTEM logo"
            src="/images/icons/penguin.png"
            width={200}
            height={56} // approximate height to maintain aspect ratio
            className="d-inline-block align-center"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="me-auto align-items-center w-100 justify-content-end">
            <Nav.Link as={Link} href="/">
              Home
            </Nav.Link>

            <NavDropdown title="About" id="about-dropdown" className="text-center">
              <NavDropdown.Item as={Link} href="/team" className="text-center text-lg-start">
                Team
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                href="/testimonials"
                className="text-center text-lg-start"
              >
                Testimonials
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} href="/reports" className="text-center text-lg-start">
                Reports
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} href="/faq" className="text-center text-lg-start">
                FAQ
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Programs" id="programs-dropdown" className="text-center">
              <NavDropdown.Item as={Link} href="/cs" className="text-center text-lg-start">
                Computer Science
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} href="/math" className="text-center text-lg-start">
                Math
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} href="/engineering" className="text-center text-lg-start">
                Engineering
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} href="/science" className="text-center text-lg-start">
                Science
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} href="/robotics" className="text-center text-lg-start">
                Robotics
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="https://gbstem.myspreadshop.com/all" target="_blank" rel="noreferrer">
              Shop
            </Nav.Link>

            <Nav.Link
              href={REGISTRATION_OPEN ? GBSTEM_SIGNUP : FORM_LINK}
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-div-blue align-center">sign up</div>
            </Nav.Link>

            <Nav.Link
              href={
                SEMESTER_IN_PROGRESS
                  ? 'https://portal.gbstem.org'
                  : REGISTRATION_OPEN
                    ? GBSTEM_SIGNUP
                    : FORM_LINK
              }
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-div-gray align-center">
                {SEMESTER_IN_PROGRESS ? 'portal' : 'apply'}
              </div>
            </Nav.Link>

            <Link href="/donate" className="nav-link">
              <div className="rounded-div-green">Donate</div>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Modal show={show} backdrop="static" keyboard={false}>
        <Modal.Header closeButton onClick={() => setShow(false)}>
          <Modal.Title>
            Time is running out to help us keep STEM education accessible for all.
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            A similar for-profit program would cost anywhere from $1000 to over $1400 per student
            for one semester. We understand that this is unaffordable for many families, which is
            why it is so important for our program to remain accessible to all, regardless of their
            ability to pay. At gbSTEM, a contribution of just $200 can fund nearly 15% of our
            operating costs for one semester. All donations are tax-deductible. You can purchase our
            merchandise to support us{' '}
            <a href="https://gbstem.myspreadshop.com/all" target="_blank" rel="noreferrer">
              here
            </a>
            , make a donation{' '}
            <a
              href="https://paypal.com/us/fundraiser/charity/4605663"
              target="_blank"
              rel="noreferrer"
            >
              here
            </a>
            , or read more about the benefits of making a donation <Link href="/donate">here.</Link>
          </p>
        </Modal.Body>
      </Modal>
    </>
  );
}
