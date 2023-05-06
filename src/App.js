import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import './index.css';
import meinfrance from './meinfrance.png';
import me from './me.png';


function Projects() {
  return (
    <div>
       <p>currently under construction! visit again soon ~~ </p>
    </div>
  );
}

function Contact() {
  return (
    <div>
      <p>currently under construction! visit again soon ~~ </p>
    </div>
  );
}


function App() {
  return (
    <div className='container'>
      <Router basename={process.env.PUBLIC_URL}>
        <header>
        <Navbar fixed='top' expand='lg' className="navbar-nav">
          <Nav>
            <Nav.Link as={Link} to="/">
              <img src={me} alt = " " className="mini-img"/>
              Grace Kim
            </Nav.Link>
            <Nav.Link as={Link} to="/projects"> <h4>Projects</h4></Nav.Link>
            <Nav.Link as={Link} to="https://drive.google.com/file/d/12BEEyUkY2FJpYsjYOI6UHXwf8nqm5YfC/view?usp=sharing"> <h4>Resume</h4></Nav.Link>
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
    <div className="circle-text-container">
      <img src={meinfrance} alt = " " className="circle-img"/>
      <p className="circle-text" >hello! i'm grace, welcome to my website!</p>
    </div>
  );
}

export default App;

