import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import { HashRouter } from "react-router-dom";
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './styles.css'


// Import your page components
import Home from './pages/Home';
import Team from './pages/Team';
import Mission from './pages/Mission';
import Testimonials from './pages/Testimonials';
import FAQ from './pages/Faq';
import CS from './pages/CS';
import Math from './pages/Math';
import Engineering from './pages/Engineering';
import Science from './pages/Science';
import Donate from './pages/Donate';
import Footer from './pages/Footer';
import penguin from './images/icons/penguin.png';
import ScrollToTop from './ScrollToTop';


function App() {
  return (

    <HashRouter>
      <Navbar variant="dark" expand="lg" style={{ backgroundColor: '#1D2256' }}>
        <Navbar.Brand as={Link} to="/" className="ms-5" style={{ fontWeight: 700 }}>
          <img
            alt=""
            src={penguin}
            width="200"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="mr-auto align-items-end">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <NavDropdown title="About" id="about-dropdown" className="text-end">
              <NavDropdown.Item as={Link} to="/team">Team</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/mission">Mission</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/testimonials">Testimonials</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/faq">FAQ</Nav.Link>
            <NavDropdown title="Programs" id="programs-dropdown" className="text-end" >
              <NavDropdown.Item as={Link} to="/cs">Computer Science</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/math">Math</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/engineering">Engineering</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/science">Science</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link as={Link} to="https://portal.gbstem.org/signup"
              target='_blank'
            >
              <div className="rounded-div-blue">
                apply
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
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/team" element={<Team />} />
        <Route path="/mission" element={<Mission />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/cs" element={<CS />} />
        <Route path="/math" element={<Math />} />
        <Route path="/engineering" element={<Engineering />} />
        <Route path="/science" element={<Science />} />
        <Route path="/donate" element={<Donate />} />
      </Routes>
      <Footer />
      <ScrollToTop />
    </HashRouter >
  );
}

export default App;
