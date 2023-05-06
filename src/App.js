import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import './index.css';

function Projects() {
  return (
    <div>
    </div>
  );
}

function Contact() {
  return (
    <div>
    </div>
  );
}


function App() {
  return (
    <div className='container'>
      <Router>
        <header>
        <Navbar fixed='top' expand='lg' className="navbar-nav">
          <Nav>
            <Nav.Link as={Link} to="/">Grace Kim</Nav.Link>
            <Nav.Link as={Link} to="/projects"> <h4>Projects</h4></Nav.Link>
            <Nav.Link as={Link} to="/contact"> <h4>Contact</h4></Nav.Link>
          </Nav>
        </Navbar>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

function Home() {
  return (
    <div>
      <img src="../public/meinfrance.png" alt = " "/>
      <h2>Welcome to my home page</h2>
      <p>Home page content goes here...</p>
    </div>
  );
}

export default App;

