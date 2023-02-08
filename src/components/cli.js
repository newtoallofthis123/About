import React from "react";
import "./static/css/global.css"

export default function Cli() {
    const commands = ["help", "about", "git", "talk", "projects", "skills", "resume", "clear", "exit"]
    const targets = {
        "help": "Available Commands: help, about, git, talk, projects, skills, resume, clear, exit",
        'about': "Want to learn more about me? Navigate to /about"
    }
    const [output, setOutput] = React.useState("")

    const process = (cmd) => {
        return commands.includes(cmd) ? targets[cmd] : "Command not found"
    }
    const handleChange = (e) => {
        e.preventDefault()
        if (e.key === "Enter"){
            setOutput(process(e.target.value))
        }
        if (e.target.value === ""){
            setOutput("")
        }
    }
    return (
        <div className="cli_div">
            <div style={{textAlign: "center",}}>
                <button>
                    <i className="bi bi-terminal"></i>
                </button>
                <input type="text" onKeyUp={handleChange} onChange={handleChange} className="cli"/>
            </div>
            <div className="cli_output">
                <p>{output}</p>
            </div>
        </div>
    )
}