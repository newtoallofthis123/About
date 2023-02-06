import './static/css/buttons.css'
import resume from './static/pdf/resume.pdf'
import { Link } from "react-router-dom"

const Skills = () => {
    return (
        <div>
            <h1 className='h1'>Skills</h1>
            <div id="stack" style={{ "backgroundColor": "#f6ff00", }} className="nice_border">
                <h1 style={{ fontSize: '1.8rem', textAlign: 'center', }}>My Full Stack</h1>
                <ul>
                    <li>Python</li>
                    <li>Flask</li>
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>Jquery</li>
                    <li>Node</li>
                    <li>TypeScript</li>
                    <li>C</li>
                    <li>Postgresql</li>
                    <li>SQLite3</li>
                    <li>MongoDB</li>
                    <li>HTML</li>
                    <li>CSS</li>
                </ul>
            </div>
            <div id="idealogy" style={{ "backgroundColor": "#75f0f3", }} className="nice_border">
                <h1 style={{ fontSize: '1.8rem', textAlign: 'center', }}>Idealogy and Plans</h1>
                <p>
                    As a software developer, I am a strong advocate for the principles of simplicity and user-centered design, as espoused by the Linux philosophy of KISS (Keep It Simple, Stupid).
                    My portfolio showcases my ability to create intuitive and easy-to-use applications that prioritize both mobile and desktop usability.
                    I strive for high performance and a seamless user experience, as evidenced by my websites consistently scoring 90 or above on Lighthouse.

                    As a student with graduation in 2026, I am always looking for ways to improve and grow as a developer. I welcome suggestions and constructive feedback to help me achieve my goal of making a small impact in the dynamic world of software.
                    If you have any ideas or would like to collaborate, please don't hesitate to reach out. I am always open to new opportunities and eager to continue learning and expanding my skillset.
                </p>
            </div>
            <div id="resume" style={{ "backgroundColor": "#f888d6", }} className="nice_border">
                <h1 style={{ fontSize: '1.8rem', textAlign: 'center', }}>Resume</h1>
                <p>
                    Check out my <Link to="/ReactSite/projects">Projects</Link>. Impressed with my work and have something for me?
                    Please feel free to reach out to me. I am available on various platforms including <a href="https://twitter.com/noobscience1">twitter</a>, <a href="mailto:noobscience@duck.com">mail</a> among others.
                    You can check out my full <a href="https://newtoallofthis123.github.io/tree" className="link hover_animation_underline">link tree</a>
                </p>
                <div style={{ textAlign: 'center', }}>
                    <button className="download"><a href={resume}>Download My Resume!</a></button>
                </div>
            </div>
        </div>
    )
}

export default Skills