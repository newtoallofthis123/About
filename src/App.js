import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import React from 'react';

import Home from './components/home'
import About from './components/about'
import Skills from './components/skills'
import Projects from './components/projects'
import Navbar from './components/nav';
import resume from './components/static/pdf/resume.pdf'
import react_img from './components/static/images/react.svg'

const Resume = () => {
  return (
    <iframe src={resume} style={{width: "100vw", height: "100vh"}} title="resume" frameborder="0"></iframe>
  )
}

const year = () => {
  return new Date().getFullYear()
}

const Footer = () => {
  return (
      <>
        <div className="footer">Made with ❤️ and <img height="32" width="32" alt="React Img" src={react_img} /> ©️ NoobScience {year()}</div>
        <div className="m_footer">©️ NoobScience {year()}</div>
      </>
  )
}

function App() {
    return (
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />}>
          </Route>
          <Route exact path="/about" element={<About />}/>
          <Route exact path="/projects" element={<Projects />} />
          <Route exact path="/skills" element={<Skills />} />
          <Route exact path="/resume" element={<Resume />} />
          <Route exact path="/notes" element={<Navigate replace to="/notes/index.html" />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    );
  }

export default App;
