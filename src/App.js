import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
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

function App() {
  return (

    <Router>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand as={Link} to="/">gbSTEM</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <NavDropdown title="About" id="about-dropdown">
              <NavDropdown.Item as={Link} to="/team">Team</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/mission">Missions</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/testimonials">Testimonials</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/faq">FAQ</Nav.Link>
            <NavDropdown title="Programs" id="programs-dropdown">
              <NavDropdown.Item as={Link} to="/cs">Computer Science</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/math">Math</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/engineering">Engineering</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/science">Science</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="https://instructor.gbstem.org">
              <div className="rounded-div-blue">
                Apply to Teach
              </div>
            </Nav.Link>
            <Nav.Link as={Link} to="https://student.gbstem.org">
              <div className="rounded-div-blue">
                Register
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
    </Router>




  );
}

export default App;
