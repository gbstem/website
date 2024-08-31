import { React, useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import { HashRouter } from "react-router-dom";
import { Navbar, Nav, NavDropdown, Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './styles.css'

// Import your page components
import Home from './pages/Home';
import Team from './pages/Team';
import Mission from './pages/Mission';
import Testimonials from './pages/Testimonials';
import FAQ from './pages/Faq';
import CS from './pages/CS/CS';
import PythonI from './pages/CS/PythonI';
import Scratch from './pages/CS/Scratch';
import Math from './pages/Math/Math';
import Engineering from './pages/Engineering/Engineering';
import Engineering1 from './pages/Engineering/Engineering1';
import Engineering2 from './pages/Engineering/Engineering2';
import Engineering3 from './pages/Engineering/Engineering3';
import ScienceTrack from './pages/Science/ScienceTrack';
import ScienceClass from './pages/Science/ScienceClass';
import Donate from './pages/Donate';
import Footer from './pages/Footer';
import penguin from './images/icons/penguin.png';
import ScrollToTop from './ScrollToTop';
import Java from './pages/CS/Java';
import WebDev from './pages/CS/WebDev';
import PythonII from './pages/CS/PythonII';
import Math1A from './pages/Math/Math1A';
import Math1B from './pages/Math/Math1B';
import Math2A from './pages/Math/Math2A';
import Math2B from './pages/Math/Math2B';
import Math3A from './pages/Math/Math3A';
import Math3B from './pages/Math/Math3B';
import Math4A from './pages/Math/Math4A';
import Math4B from './pages/Math/Math4B';
import Math5A from './pages/Math/Math5A';
import Math5B from './pages/Math/Math5B';
import Robotics from './pages/Robotics/Robotics';
import Reports from './pages/Reports';

function App() {
  const [show, setShow] = useState(false);
  const banners = [
    {
    text: "Student registrations are now open! Register",
    link: "https://portal.gbstem.org",
    linkText: "here",
    onClick: true,
    color: '#ffc819'
  },
  {
    text: "gbSTEM merchandise is now available for purchase! Support us by checking out",
    link: "https://gbstem.myspreadshop.com/all",
    linkText: "our Spreadshop store.",
    onClick: false,
    color: '#4CAF50'
  },
  {
    text: "Applications to teach for instructors are now open! Apply",
    link: "https://portal.gbstem.org",
    linkText: "here.",
    onClick: false,
    color: '#67aeda'
  },
  {
    text: "NEW FOR FALL 2024: gbSTEM is now offering a Lego Robotics program! Learn more",
    link: "/#/robotics",
    linkText: "here.",
    onClick: false,
    color: '#bf60bf'
  }
  ]
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % banners.length);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [banners.length]);

  return (
    <HashRouter>
      <Navbar variant="dark" expand="lg" style={{ backgroundColor: '#1D2256' }}>
        <Navbar.Brand as={Link} to="/" className="ms-5" style={{ fontWeight: 700 }}>
          <img
            alt=""
            src={penguin}
            width="200"
            className="d-inline-block align-center"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="mr-auto align-items-center">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <NavDropdown title="About" id="about-dropdown" className="text-center">
              <NavDropdown.Item as={Link} to="/team" className="text-center text-lg-start">Team</NavDropdown.Item>
              {/* <NavDropdown.Item as={Link} to="/mission" className="text-center text-lg-start">Mission</NavDropdown.Item> */}
              <NavDropdown.Item as={Link} to="/testimonials" className="text-center text-lg-start">Testimonials</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/reports" className="text-center text-lg-start">Reports</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/faq" className="text-center text-lg-start">FAQ</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Programs" id="programs-dropdown" className="text-center" >
              <NavDropdown.Item as={Link} to="/cs" className="text-center text-lg-start">Computer Science</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/math" className="text-center text-lg-start">Math</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/engineering" className="text-center text-lg-start">Engineering</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/science" className="text-center text-lg-start">Science</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/robotics" className="text-center text-lg-start">Robotics</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="https://gbstem.myspreadshop.com/all">Shop</Nav.Link>
            {/* <Nav.Link as={Link} to="https://forms.gle/ejSvEu2cwwdovUg18"
              target='_blank'
            >
              <div className="rounded-div-blue align-center">
                sign up
              </div>
            </Nav.Link> */}
            <Nav.Link as={Link} to="https://portal.gbstem.org/signup"
              target='_blank'
            >
              <div className="rounded-div-blue align-center">
                sign up
              </div>
            </Nav.Link>
            <Nav.Link as={Link} to="/donate">
              <div className="rounded-div-green">
                Donate
              </div>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>      
      <div className = "donation-banner" style = {{backgroundColor: `${banners[index].color}`}}> {banners[index].text} {banners[index].onClick ? <Link onClick = {() => setShow(true)}>{banners[index].linkText}</Link> : <a href={banners[index].link} rel="noreferrer" target="_blank">{banners[index].linkText}</a> }</div>
       <Modal 
       show={show}
        backdrop="static"
        keyboard={false}>
        <Modal.Header closeButton onClick={() => setShow(false)}>
          <Modal.Title>Time is running out to help us keep STEM education accessible for all.</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>A similar for-profit program would cost anywhere from $1000 to over $1400 per student for one semester. We understand that this is unaffordable for many families, which is why it is so important for our program to remain accessible to all, regardless of their ability to pay. At gbSTEM, a contribution of just $200 can fund nearly 15% of our operating costs for one semester. All donations are tax-deductible. You can purchase our merchandise to support us <a href="https://gbstem.myspreadshop.com/all">here</a>, make a donation <a href = "https://paypal.com/us/fundraiser/charity/4605663">here</a>, or read more about the benefits of making a donation <a href = "/donate">here.</a></p>
        </Modal.Body>
      </Modal>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/team" element={<Team />} />
        <Route path="/mission" element={<Mission />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/cs" element={<CS />} />
          <Route path="/cs/scratch" element={<Scratch />} />
          <Route path="/cs/python1" element={<PythonI />} />
          <Route path="/cs/java" element={<Java />} />
          <Route path="/cs/webdev" element={<WebDev />} />
          <Route path="/cs/python2" element={<PythonII />} />
        <Route path="/math" element={<Math />} />
          <Route path="/math/math1a" element={<Math1A />} />
          <Route path="/math/math1b" element={<Math1B />} />
          <Route path="/math/math2a" element={<Math2A />} />
          <Route path="/math/math2b" element={<Math2B />} />
          <Route path="/math/math3a" element={<Math3A />} />
          <Route path="/math/math3b" element={<Math3B />} />
          <Route path="/math/math4a" element={<Math4A />} />
          <Route path="/math/math4b" element={<Math4B />} />
          <Route path="/math/math5a" element={<Math5A />} />
          <Route path="/math/math5b" element={<Math5B />} />
        <Route path="/engineering" element={<Engineering />} />
          <Route path="/engineering/engineering1" element={<Engineering1 />} />
          <Route path="/engineering/engineering2" element={<Engineering2 />} />
          <Route path="/engineering/engineering3" element={<Engineering3 />} />
        <Route path="/science" element={<ScienceTrack />} />
          <Route path="/science/science1" element={<ScienceClass />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/robotics" element={<Robotics />} />
      </Routes>
      <Footer />
      <ScrollToTop />
    </HashRouter >
  );
}

export default App;
