import React from 'react'
import './static/css/global.css'
import bg from './static/videos/bg.mp4'
import dog from './static/images/dog.jpg'
import dog1 from './static/images/dog.png'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <video src={bg} id='bg' autoPlay muted loop></video>
            <h1 className='main_title'><span style={{ color: "#75f0f3" }}>I</span>shan <span style={{ color: "#7bf57b" }}>J</span>oshi</h1>
            <h3 className="sub_title"><span style={{ background: "#75f0f3" }}>Student</span><span style={{ background: "#f888d6" }}>Open Source</span><span style={{ background: "#95ee65" }}>Tech</span></h3>
            <h3 className="m_sub_title"><span style={{ background: "#75f0f3" }}>Student</span></h3>
            <h3 className="m_sub_title"><span style={{ background: "#f888d6" }}>Open Source</span></h3>
            <h3 className="m_sub_title"><span style={{ background: "#95ee65" }}>Full Stack Dev</span></h3>
            <div id="header">
                <div className="right">
                    <Link to="/About/lyka">
                        <img src={ dog } className="animate__animated animate__fadeIn animate__delay-1s animate__slow" alt="Dog"></img>
                    </Link>
                </div>
                <div className="left">
                    <h3 className="sub_title"><a href="https://github.com/newtoallofthis123/About"><span style={{ background: "#f2ff00", fontSize: "18px", }}>This Website is Open Source!</span></a></h3>
                </div>
            </div>
            <footer className="mobile_footer">
                <div style={{ textAlign: 'right', }}>
                    <Link to="/About/lyka">
                        <img src={ dog1 } className="animate__animated animate__fadeIn animate__delay-1s animate__slow" width="120px" alt="Dog"></img>
                    </Link>
                </div>
            </footer>
        </div>
    )
}

export default Home;