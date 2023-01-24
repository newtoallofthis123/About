import React from 'react'
import "./static/css/global.css"
import noobscience from "./static/images/noobscience.png"
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <h1 className='main_title'><span style={{ color: "#75f0f3" }}>I</span>shan <span style={{ color: "#7bf57b" }}>J</span>oshi</h1>
            <h3 className="sub_title"><Link to="/about" style={{ background: "#75f0f3" }}>Student</Link><Link to="/projects" style={{ background: "#f888d6" }}>Open Source</Link><Link to="/skills" style={{ background: "#95ee65" }}>Tech</Link></h3>
            <h3 className="m_sub_title"><Link to="/about" style={{ background: "#75f0f3", borderRadius: "24px", padding: "12px", margin: "40px" }}>Student</Link></h3>
            <h3 className="m_sub_title"><Link to="/projects" style={{ background: "#f888d6", borderRadius: "24px", padding: "12px" }}>Open Source</Link></h3>
            <h3 className="m_sub_title"><Link to="/skills" style={{ background: "#95ee65", borderRadius: "24px", padding: "12px" }}>Full Stack Dev</Link></h3>
            <div id="header">
                <div className="right">
                    <div style={{ textAlign: 'center', }}>
                        <img src={noobscience} id="profile123" style={{ verticalAlign: "middle", borderRadius: "24px", padding: '12px', width: '124px'}} alt="" />
                    </div>
                </div>
                <div className="left">
                    <h3 className="sub_title"><a className='website' href="https://github.com/newtoallofthis123/About"><span>Created with ❤️ and React</span></a></h3>
                </div>
            </div>
        </div>
    )
}

export default Home;