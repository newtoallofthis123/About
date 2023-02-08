import React from 'react'
import "./static/css/global.css"
import { Link } from 'react-router-dom'
import profile from "./static/images/profile-pic.png"
import Typewriter from "./typewriter";
// import Cli from "./cli";

const Home = () => {
    const toast_toggle = () => {
        document.getElementById("toast").style.display = "none"
    }
    const does = ["am a Student at GRIET", "am a Full Stack Dev", "am 19 this year!", "love open source", "love web technology"]
    return (
        <div className="full-div">
            <div id="toast" className="new">
                New Project 🥳 <a href="https://peep.noobscience.rocks">peep</a>! <i onClick={toast_toggle} style={{cursor: "pointer"}} className="bi bi-x"></i>
            </div>
            {/* <Cli></Cli> */}
            {/*<h1 className="header_title">{time()}! I am </h1>*/}
            <h1 className='main_title'><img src={profile} className="profile-pic" alt="Profile Pic" /><span style={{ color: "#75f0f3" }}>I</span>shan <span style={{ color: "#7bf57b" }}>J</span>oshi</h1>
            <p className="typewriter">
                and I <Typewriter data={does} />
            </p>
            <h3 className="sub_title"><Link to="/about" style={{ background: "#75f0f3" }}>Student</Link><Link to="/skills" style={{ background: "#95ee65" }}>Full Stack Dev</Link><Link to="/projects" style={{ background: "#f888d6" }}>Open Source</Link></h3>
            <h3 className="m_sub_title"><Link to="/about" style={{ background: "#75f0f3", borderRadius: "12px", padding: "12px", margin: "40px" }}>Student</Link></h3>
            <h3 className="m_sub_title"><Link to="/skills" style={{ background: "#95ee65", borderRadius: "12px", padding: "12px" }}>Full Stack Dev</Link></h3>
            <h3 className="m_sub_title"><Link to="/projects" style={{ background: "#f888d6", borderRadius: "12px", padding: "12px" }}>Open Source</Link></h3>
        </div>
    )
}

export default Home;