import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import React from 'react';

import Home from './components/home'
import About from './components/about'
import Skills from './components/skills'
import Md from './components/tools/md';
import Qr from './components/tools/qr';
import Editor from './components/tools/editor';
import Git from './components/tools/git';
import RanGen from './components/tools/rangen';
import Tools from './components/tools';
import Projects from './components/projects'
import Navbar from './components/nav';
import resume from './components/static/pdf/resume.pdf'
import react_img from './components/static/images/react.svg'
import taken from "./components/static/images/taken.svg"

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

const Notes = () => { 
  window.location = "https://noobscience.rocks/notes/index.html"
  return (
    <div>
      <h1>Redirecting...</h1>
    </div>
  )
}

const Blog = () => {
  window.location = "https://noobscience.rocks/blog/index.html"
  return (
    <div>
      <h1>Redirecting...</h1>
    </div>
  )
}

const BlogLatest = () => {
  window.location = "https://noobscience.rocks/blog/articles/social-media-1.html"
  return (
    <div>
      <h1 className='text'>Redirecting...</h1>
    </div>
  )
}

const NotFound = () => {
  return (
    <div style={{ color: "var(--color)",}}>
      <h1 style={{fontSize: "5.2rem",}}>Not Found</h1>
      <div style={{ display: "flex", margin: "2vw 10vw",}}>
        <div style={{ textAlign: 'center' }}>
          <img src={taken} className='normal-img' width="320" alt="Dog lying in dirt" />
        </div>
        <div>
          <p style={{ margin: "1.2rem", }}>
            Just leaving the page here for you to read. I am not sure how you got here, but you are not supposed to be here.
            Yeah. This is a 404 page. Not exactly 404, but close enough.
            Anyway if you are a developer and this is a bug, please let me know by opening an issue.
            This is the link to the issue tracker: <a className='textlink' href="https://github.com/newtoallofthis123/About">https://github.com/newtoallofthis123/About</a>
          </p>
        </div>
      </div>
    </div>
  )
}

function App({location}) {
    return (
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route exact path="/" element={<Home />}/>
          <Route exact path="/about" element={<About />}/>
          <Route exact path="/projects" element={<Projects />} />
          <Route exact path="/skills" element={<Skills />} />
          <Route exact path="/write" element={<Md />} />
          <Route exact path="/resume" element={<Resume />} />
          <Route exact path="/notes" element={<Notes />} />
          <Route exact path="/blog" element={<Blog />} />
          <Route exact path="/blog/latest" element={<BlogLatest />} />
          <Route exact path="/tools" element={<Tools />} />
          <Route exact path="/tools/qr" element={<Qr />} />
          <Route exact path="/tools/editor" element={<Editor />} />
          <Route exact path="/tools/git" element={<Git />} />
          <Route exact path="/tools/random" element={<RanGen />} />

          <Route exact path="/hi" element={<Navigate to="/about" replace />} />
          <Route exact path="/me" element={<Navigate to="/about" replace />} />
          <Route exact path="/md" element={<Navigate to="/write" replace />} />
          
        </Routes>
        <Footer />
      </BrowserRouter>
    );
  }

export default App;
