'use client';

import { FORM_LINK, GBSTEM_SIGNUP, REGISTRATION_OPEN, SEMESTER_IN_PROGRESS } from '@/lib/constants';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Modal, Nav, Navbar, NavDropdown } from 'react-bootstrap';

export default function Navigation() {
  const [show, setShow] = useState(false);

  return (
    <>
      <Navbar variant="dark" expand="md" className="bg-[#1D2256]" collapseOnSelect>
        <Navbar.Brand as={Link} href="/" className="ms-xl-5 ms-2 font-bold">
          <Image
            alt="gbSTEM logo"
            src="/images/icons/penguin.png"
            width={200}
            height={79}
            className="d-inline-block align-center"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="align-items-center justify-content-end me-auto w-100">
            <Nav.Link as={Link} href="/">
              Home
            </Nav.Link>

            <NavDropdown title="About" id="about-dropdown" className="text-center">
              <NavDropdown.Item as={Link} href="/team" className="text-md-start text-center">
                Team
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                href="/testimonials"
                className="text-md-start text-center"
              >
                Testimonials
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} href="/reports" className="text-md-start text-center">
                Reports
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} href="/faq" className="text-md-start text-center">
                FAQ
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Programs" id="programs-dropdown" className="text-center">
              <NavDropdown.Item as={Link} href="/cs" className="text-md-start text-center">
                Computer Science
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} href="/math" className="text-md-start text-center">
                Math
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} href="/engineering" className="text-md-start text-center">
                Engineering
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} href="/science" className="text-md-start text-center">
                Science
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} href="/robotics" className="text-md-start text-center">
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
              <div className="align-center inline-block rounded-[20px] bg-[#67aeda] p-2.5 whitespace-nowrap max-[850px]:px-2 max-[850px]:py-1.5">
                sign up
              </div>
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
              <div className="align-center inline-block rounded-[20px] bg-[#aaaaaa] p-2.5 whitespace-nowrap max-[850px]:px-2 max-[850px]:py-1.5">
                {SEMESTER_IN_PROGRESS ? 'portal' : 'apply'}
              </div>
            </Nav.Link>

            <Link href="/donate" className="nav-link">
              <div className="inline-block rounded-[20px] bg-[#4caf50] p-2.5 whitespace-nowrap max-[850px]:px-2 max-[850px]:py-1.5">
                Donate
              </div>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      {/* This doesn't actually show up anywhere. */}
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
            operating costs for one semester. All donations are tax-deductible. You can{' '}
            <a href="https://gbstem.myspreadshop.com/all" target="_blank" rel="noreferrer">
              purchase our merchandise
            </a>{' '}
            to support us,{' '}
            <a
              href="https://paypal.com/us/fundraiser/charity/4605663"
              target="_blank"
              rel="noreferrer"
            >
              make a donation
            </a>
            , or <Link href="/donate">read more about the benefits of making a donation.</Link>
          </p>
        </Modal.Body>
      </Modal>
    </>
  );
}
