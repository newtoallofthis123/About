import React from 'react'
import "./static/css/global.css"
import { Link } from 'react-router-dom'
import profile from "./static/images/profile-pic-new.webp"
import profileDark from "./static/images/profile-pic-dark.png"
import Typewriter from "./typewriter";
import Cli from "./cli";

const Home = () => {
    const toast_toggle = () => {
        document.getElementById("toast").style.display = "none"
    }
    const scroll = () => { 
        document.getElementById("about").scrollIntoView({ behavior: "smooth" })
    }

    const does = ["am a Student at GRIET", "am a Full Stack Developer", "am 19 this year!", "love open source", "love web technology"]
    return (
        <div>
            <div id="toast" className="new">
                Currently Working on <a href="https://github.com/newtoallofthis123/pyblog">pyblog</a>. Wanna Help?<i onClick={toast_toggle} style={{ cursor: "pointer" }} className="bi bi-x"></i>
            </div>
            <div className="full-div">
                {/* <Cli></Cli> */}
                <h1 className='main_title'><img src={profile} className="profile-pic light-pfp" width="130" alt="Profile Pic" /><img src={profileDark} className="profile-pic dark-pfp" width="130" alt="Profile Pic" /><span style={{ color: "#75f0f3" }}>I</span>shan <span style={{ color: "#7bf57b" }}>J</span>oshi</h1>
                <p className="typewriter">
                    and I <Typewriter data={does} />
                </p>
                <h2 className="sub_title"><Link to="/about" style={{ background: "#75f0f3" }}>Student</Link><Link to="/skills" style={{ background: "#95ee65" }}>Full Stack Dev</Link><Link to="/projects" style={{ background: "#f888d6" }}>Open Source</Link></h2>
                <h2 className="m_sub_title"><Link to="/about" style={{ background: "#75f0f3", borderRadius: "12px", padding: "12px", margin: "40px" }}>Student</Link></h2>
                <h2 className="m_sub_title"><Link to="/skills" style={{ background: "#95ee65", borderRadius: "12px", padding: "12px" }}>Full Stack Dev</Link></h2>
                <h2 className="m_sub_title"><Link to="/projects" style={{ background: "#f888d6", borderRadius: "12px", padding: "12px" }}>Open Source</Link></h2>
                <div style={{textAlign: "center"}}>
                    <button className='scroll_btn' onClick={scroll} ><i class="bi bi-chevron-compact-down"></i></button>
                </div>
                <div id='about' style={{ backgroundColor: "var(--blue)" }} className='info_div'>
                    <h2 className="h2">Nice to meet you stranger</h2>
                    <p>
                        Hope we are not strangers for long though :)
                        Hi! I am Ishan. I am a student and tech enthusiast. Okay so I wanted
                        to create a SPA in react and I setup all the stuff and realised that
                        it was a bit too complex. So this site now has the beautiful nav bar
                        and also this short summary here. So if you are here for the fun, stay on
                        or navigate to the <Link className='link' to="/about">about</Link> page.
                        If you are here for the code, you can find it on <i className="bi bi-github"></i><Link className='link' to="/code">GitHub</Link>
                    </p>
                    <p>Site map for your convience</p>
                    <div className='center'>
                        <button>
                            <Link to="/">Home</Link>
                        </button><button>
                            <Link to="/about">About</Link>
                        </button><button>
                            <Link to="/projects">Projects</Link>
                        </button><button>
                            <Link to="/skills">Skills</Link>
                        </button><button>
                            <Link to="/resume">Resume</Link>
                        </button><button>
                            <Link to="/blog">Blog</Link>
                        </button><button>
                            <Link to="/notes">Notes</Link>
                        </button><button>
                            <Link to="/code">Code</Link>
                        </button>
                    </div>
                </div>    
                <div id='intro' style={{ backgroundColor: "var(--green)" }} className='info_div'>
                    <h2 className="h2">Hello! Do you know me?</h2>
                    <p>
                        I am a student and a full stack developer. I love to code and I love to learn new things.
                        I am primarily a web developer and I love to work with React and python.
                        I started programming about 3 years ago and never looked back since.
                        Well, living in the terminal is my thing and I love to work with linux.
                        BTW, like the terminal?
                    </p>
                    <Cli></Cli>
                    <p>
                        Under development <i className="bi bi-tools"></i> by the way.
                        One more thing, I love to contribute to open source and I am currently working on a project called <a className='link' href="https://github.com/newtoallofthis123/pyblog">pyblog</a>.
                        It is a blogging platform written in python and it is still in development.
                    </p>
                </div>
                <div id='projects' style={{ backgroundColor: "var(--red)" }} className='info_div'>
                    <h2 className="h2">School Stuff</h2>
                    <p>
                        I am currently in my 1st year of B.Tech in Computer Science and Engineering.
                        I study at <a href="https://griet.ac.in" className="link">GRIET</a>, Hyderabad.
                        Well, student life is fun and I love to code and learn new things.
                        WIP
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Home;