import './static/css/buttons.css'
import { Link } from "react-router-dom"

const Skills = () => {
    return (
        <div>
            <h1>Skills</h1>
            <div id="stack" style={{ "backgroundColor": "#f6ff00", }} className="nice_border">
                <h1 style={{ fontSize: '1.8rem', textAlign: 'center', }}>My Full Stack</h1>
                <ul>
                    <li>Python</li>
                    <li>Flask</li>
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>Jquery</li>
                    <li>Node</li>
                    <li>C</li>
                    <li>C++</li>
                    <li>Postgresql</li>
                    <li>SQLite3</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Inkscape</li>
                    <li>GIMP</li>
                    <li>Video Editing</li>
                </ul>
            </div>
            <div id="idealogy" style={{ "backgroundColor": "#75f0f3", }} className="nice_border">
                <h1 style={{ fontSize: '1.8rem', textAlign: 'center', }}>Idealogy and Plans</h1>
                <p>
                    I am a huge believer in the software idealogies promoted by linux, the one I really like to follow is
                    KISS - Keep It Simple Stupid. All my applications have very easy user flows and are quite well designed with a lot
                    of time put into thinking about mobile and desktop first implications. Most of my websites score 90 or above on lighthouse.
                    I make sure to put in enough effort to make the website experience as seamless as possible.
                    If you think your suggestion can help me out in any way or form possible, please hit me up.
                    I am always open to suggestions and critical feedback. I am currently a student and I am to graduate in 2026.
                    So till then, I will keep up the work and try my best, to have a small impact, on the vast and ever changing world of software.
                </p>
            </div>
            <div id="resume" style={{ "backgroundColor": "#f888d6", }} className="nice_border">
                <h1 style={{ fontSize: '1.8rem', textAlign: 'center', }}>Resume</h1>
                <p>
                    Check out my <Link to="/About/projects">Projects</Link>. Impressed with my work and have something for me?
                    Please feel free to reach out to me. I am available on various platforms including <a href="https://twitter.com/noobscience1">twitter</a>, <a href="mailto:noobscience@duck.com">mail</a> among others.
                    You can check out my full <a href="https://newtoallofthis123.github.io/tree" className="link">link tree</a>
                </p>
                <div style={{ textAlign: 'center', }}>
                    <button className="download"><a href="https://drive.google.com/file/d/17MwEseENNiL-Dqe9p0zis3KpISGr7dFd/view">Download My Resume!</a></button>
                </div>
            </div>
        </div>
    )
}

export default Skills