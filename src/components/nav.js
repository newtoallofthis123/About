import { Link } from "react-router-dom"
import { useState} from "react"
import "./static/css/global.css"
import icon from "./static/images/noobscience.png"

const Nav = () => {
    const [op_toggle, toggle_set] = useState(0)
    const update_toggle = () => { 
        const options = document.querySelector("#options")
        const op_close = document.querySelector("#nav_icon")
        if (op_toggle === 0) {
            toggle_set(1)
            document.getElementById("options").style.display = "block"
            options.classList.add("animate__animated", "animate__fadeIn")
            options.style.setProperty('--animate-duration', '1s');
            options.addEventListener('animationend', () => {
                options.classList.remove("animate__animated", "animate__fadeIn")
            });
            op_close.classList.add("animate__animated", "animate__fadeOut")
            op_close.style.setProperty('--animate-duration', '0.5s');
            op_close.addEventListener('animationend', () => {
                op_close.classList.remove("animate__animated", "animate__fadeOut")
                op_close.classList.remove("bi-list")
                op_close.classList.add("bi-x")
            });
        }
        if (op_toggle === 1) {
            toggle_set(0)
            document.getElementById("options").style.display = "none"
            options.classList.add("animate__animated", "animate__fadeIn")
            options.style.setProperty('--animate-duration', '1s');
            options.addEventListener('animationend', () => {
                options.classList.remove("animate__animated", "animate__fadeIn")
            });
            op_close.classList.add("animate__animated", "animate__fadeOut")
            op_close.style.setProperty('--animate-duration', '0.5s');
            op_close.addEventListener('animationend', () => {
                op_close.classList.remove("animate__animated", "animate__fadeOut")
                op_close.classList.remove("bi-x")
                op_close.classList.add("bi-list")
            });
        }
    }
    return (
        <div>
            <div className="nav">
                <ul>
                    <li id="nav_title"><img src={icon} width="32" height="32" style={{verticalAlign: "middle", borderRadius: "24px" }} alt="NoobScience Icon" /> <span onClick={() => {window.location = "/"}}>NoobScience</span></li>
                    {/* <li><Link className="hover_animation_underline" to={"/"}>Home</Link></li> */}
                    <li><Link className="hover_animation_underline" to={"/about"}>About</Link></li>
                    <li><Link className="hover_animation_underline" to={"/projects"}>Projects</Link></li>
                    <li><a className="hover_animation_underline" href={"/blog/index.html"}>Blog</a></li>
                    <li><Link className="hover_animation_underline" to={"/tools"}>Tools</Link></li>
                    <li><Link className="hover_animation_underline" to={"/skills"}>Skills</Link></li>
                    <li><Link className="hover_animation_underline" to={"/resume"}>Resume</Link></li>
                    <li><a className="hover_animation_underline" href="https://github.com/newtoallofthis123"><i className="bi bi-github"></i> Github</a></li>
                    <li><a className="hover_animation_underline" href="https://links.noobscience.rocks">🔗 Social</a></li>
                </ul>
                <hr />
            </div>
            <div className="m_nav">
                <ul>
                    <li id="nav_title"><img width="32" height="32" src={icon} style={{verticalAlign: "middle", borderRadius: "24px" }} alt="NoobScience Icon" /> <span onClick={() => {window.location = "/"}}>NoobScience</span> <i className="bi bi-arrow-right"></i> <button onClick= {update_toggle} className="animate__animated animate__wobble animate__delay-1s animate__slow" id="op_toggle"><i id="nav_icon" className="bi bi-list"></i></button></li>
                    <div id="options">
                        {/* <li><Link to={"/"}>Home</Link></li> */}
                        <li><Link to={"/about"}>About</Link></li>
                        <li><Link to={"/projects"}>Projects</Link></li>
                        <li><a href={"/blog/index.html"}>Blog</a></li>
                        <li><Link to={"/skills"}>Skills</Link></li>
                        <li><Link to={"/tools"}>Tools</Link></li>
                        <li><Link to={"/resume"}>Resume</Link></li>
                        <li><a href="https://github.com/newtoallofthis123">Github</a></li>
                        <li><a href="https://links.noobscience.rocks">Social</a></li>
                    </div>
                </ul>
            </div>
        </div>
    )
}

export default Nav