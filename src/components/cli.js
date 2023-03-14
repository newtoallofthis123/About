import React from "react";
import "./static/css/global.css"
import { Link } from "react-router-dom";

export default function Cli() {
    const commands = ["help", "about", "git", "talk", "projects", "skills", "resume", "clear", "exit", "ls", "man", "blog"]
    const targets = {
        "help": "Available Commands: help, about, git, talk, projects, skills, resume, clear, exit",
        'about': () => {
            return (
                <div>
                    Want to learn more about me? Navigate to <Link to="/about">/about</Link>
                </div>
            )
        },
        'git': () => {
            return (
                <div>
                    <p>Check out my Github here:
                    <a style={{ color: "#fff", textDecoration: "underline", }} href='https://github.com/newtoallofthis123'>https://github.com/newtoallofthis123</a>
                    </p>
                    <p>
                        Actually, this website is open source. You can find the get the code by running this command
                    </p>
                    <code>
                        <i className="bi bi-clipboard"></i> git clone https://github.com/newtoallofthis123/About.git
                    </code>
                </div>
            )
        },
        'talk': () => {
            return (
                <div>
                    Want to talk to me? Send me an email at <a href="mailto:noobscience@duck.com">noobscience@duck.com</a>
                </div>
            )
        },
        'projects': () => {
            setTimeout(() => { 
                window.location = "/projects"
            }, 2000)
            return (
                <div>
                    Okay I make a lot of projects. Navigating to <Link to="/projects">/projects</Link>
                </div>
            )
        },
        'skills': () => {
            setTimeout(() => {
                window.location = "/skills"
            }, 2000)
            return (
                <div>
                    First off, thanks for the interest. Navigating to <Link to="/skills">/skills</Link>
                </div>
            )
        },
        'resume': () => {
            setTimeout(() => {
                window.location = "/resume"
            }, 2000)
            return (
                <div>
                    Hello potential employer. Navigating to <Link to="/resume">/resume</Link>
                </div>
            )
        },
        'links': () => {
            setTimeout(() => {
                window.location = "https://links.noobscience.rocks"
            }, 2000)
            return (
                <div>
                    Check out my social links. Navigating to <Link to="https://links.noobscience.rocks">links.noobscience.rocks</Link>
                </div>
            )
        },
        'blog': () => {
            setTimeout(() => {
                window.location = "/blog"
            }, 2000)
            return (
                <div>
                    Thanks for reading my blog. I also write at <a href="https://blog.noobscience.rocks">hashnode</a>. Navigating to <Link to="/blog">/blog</Link>
                </div>
            )
        },
    }
    const [output, setOutput] = React.useState("")

    const process = (cmd) => {
        return commands.includes(cmd) ? targets[cmd] : "Command not found"
    }
    const handleChange = (e) => {
        e.preventDefault()
        if (e.key === "Enter") {
            setOutput(process(e.target.value))
        }
        if (e.target.value === "") {
            setOutput("")
        }
    }
    return (
        <div className="cli_div">
            <p>🔴🟡🟢</p>
            <div>
                <button>
                    <i className="bi bi-terminal"></i>
                </button>
                <input type="text" onKeyUp={handleChange} onChange={handleChange} className="cli" />
            </div>
            <div className="cli_output">
                <div>{ output }</div>
            </div>
        </div>
    )
}