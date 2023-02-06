import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

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
        <div className="footer">Made with ❤️ and <img height="32" width="32" src={react_img} /> ©️ NoobScience {year()}</div>
        <div className="m_footer">©️ NoobScience {year()}</div>
      </>
  )
}

function App() {
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

export default App;
