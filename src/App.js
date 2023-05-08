import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import './index.css';
import meinfrance from './meinfrance.png';
import project1img from './project1.png';
import project2img from './project2.png';
import project3img from './project3.png';
import { useState } from 'react';
import MatterGravity from './components/Physics';



function ExpandableSection({ initialContent, additionalContent }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => setIsExpanded((prevState) => !prevState);

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
      <button className={`expand-button ${isExpanded ? 'rotate' : ''}`} onClick={toggleExpand}>
        {isExpanded ? '▼' : '▲'}
      </button>
        <div className = 'circle-text'>{initialContent}</div>
      </div>
      <div className={`additional-content ${isExpanded ? 'expanded' : ''}`}>
      {additionalContent}
      </div>
    </div>
  );
}

function Projects() {
  const project1 = "Rates of Competitive Success in High School Debate Between Private and Public Schools";
  const addproj1 = (
    <div className='additional-text-container'>
      <img src={project1img} alt=" " className='img'/>
      <p>The question we wanted to answer with our project was, what is the 
          difference in competitive success between private and public schools 
          in high school debate? There is a huge disparity in the number of 
          resources offered to students at public and private schools. We think 
          that comparing the competitive outcomes between these two groups 
          could give policy makers key insight about resource disparities and 
          educational inequality. Our hypothesis is that Private schools have 
          statistically significant higher rates of competitive success in high school 
          debate than public schools. 
          <br></br>
          <br></br>

          <a href = "https://github.com/gracekim27/debatedisparities" className = 'a2'>Project Github Here</a> </p>
    </div>
  );

  const project2 = "Changes in Polarization Before and After the 2016 Presidential Election";

  const addproj2 = (
    <div className='additional-text-container'>
      <img src={project2img} alt=" " className='img'/>
      <p>The question we want to answer with our project is, how polarization has 
        taken place within US politics before and after the 2016 Presidential Election?
        We will analyze roll-call voting data of the House and Senate in the 113th, 
        115th, and 117th sessions of Congress to analyze the effects of the 2016 
        Presidential Election. Our hypothesis is that Donald Trump’s 2016 campaign 
        increased polarization within the United States.  </p>
    </div>
  );

  const project3 = "Touching Pitch with Professor William Cheng";

  const addproj3 = (
    <>
    <div className='additional-text-container'>
      <img src={project3img} alt=" " className='img2'/>
      <p>Touching Pitch is a multimodal project led by William Cheng that explores 
        the role of improvisation in classical music. William Cheng is a professor 
        of music at Dartmouth College. His project, which is still ongoing, has 3 
        parts - an album, visual novel, and memoir. In my role as one of Professor 
        Cheng’s Research Assistants, I helped to create a cipher to generate musical 
        melodies, create a landing site for the project, and secure/set up recording 
        equipment. 

        <br></br>
        <br></br>

        <a href = "https://touchingpitch.com" className = 'a2'>Project Github Here</a></p>
    </div>
    </>
  );
  return (
    <div>
      <div className='divider'>
        <h1> Personal Projects </h1>
      </div>
      <div className="bullet-container">
        <h3b><ExpandableSection initialContent={project1} additionalContent={addproj1} /></h3b>
      </div>
      <div className="bullet-container">
        <h3b><ExpandableSection initialContent= {project2} additionalContent={addproj2} /></h3b>
      </div>
      <div className='divider'>
        <h1> Assistant Projects </h1>
      </div>
      <div className="bullet-container">
        <h3b><ExpandableSection initialContent= {project3} additionalContent={addproj3} /></h3b>
      </div>
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
              <div className='header-container'>
              <div class="rotate-flower">
                <h2>✿</h2>
              </div>
              <h2>Grace Kim</h2>
              <div class="rotate-flower">
                <h2>✿</h2>
              </div>
              </div>
              </Nav.Link>
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
      <div className='matter-gravity-container'><MatterGravity/></div>
    <div className="circle-text-container">
      <img src={meinfrance} alt = " " className="circle-img"/>
      <p className="circle-text" >hello! i'm grace, welcome to my website!</p>
    </div>
    </div>
  );
}

export default App;

