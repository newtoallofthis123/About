import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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
  setTimeout(() => {
    setLoading(false)
  }, 1500)
  const [loading, setLoading] = React.useState(true)
  const quotes = ["I ❤️ React", "You look cool 😎", "Let's Connect!🙂"]
  if (loading) {
    return (
      <div style={{
        flex: 1,
        marginTop: 240,
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <section class="loader">
          <div style={{"--i":0}} className="slider">
          </div>
          <div style={{"--i":1}} className="slider">
          </div>
          <div style={{"--i":2}} className="slider">
          </div>
          <div style={{"--i":3}} className="slider">
          </div>
          <div style={{"--i":4}} className="slider">
          </div>
        </section>
        <h1 className='title' style={{ color: "var(--color)", }}>{quotes[Math.floor(Math.random() * quotes.length)]}</h1>
      </div>
    )
  }
  else {
    return (
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/projects">
            <Projects />
          </Route>
          <Route exact path="/skills">
            <Skills />
          </Route>
          <Route exact path="/resume">
            <Resume />
          </Route>
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default App;
