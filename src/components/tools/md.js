import { marked } from "marked";
import { useState } from "react";

const Md = () => {
    const [md, setMd] = useState("");
    const [html, setHtml] = useState("");
    window.onload = () => {
        if (localStorage.getItem("md") === null) {
            localStorage.setItem("md", "");
        }
        else {
            setMd(localStorage.getItem("md"));
            setHtml(marked(localStorage.getItem("md")))
            window.alert("Your Session was restored")
        }
    }
    window.onbeforeunload = () => {
        localStorage.setItem("md", md)
    }
    const handleChange = (e) => {
        setMd(e.target.value)
        setHtml(marked(e.target.value))
    }
    const copyMd = () => {
        navigator.clipboard.writeText(md)
        window.alert("Copied Markdown")
    }
    const copyHtml = () => {
        navigator.clipboard.writeText(html)
        window.alert("Copied HTML")
    }
    return (
        <div>
            <h1 className="text">Markdown</h1>
            <p style={{margin: "0 2rem",}} className="text">
                Write markdown in the left box and see the converted HTML in the right box.
            </p>
            <div className="markdown"> 
                <div>
                    <textarea name="md" value={md} id="md" onChange={handleChange} cols="30"></textarea>
                    <div style={{textAlign: "center",}}>
                        <button onClick={copyMd}>Copy Markdown</button>
                        <button onClick={copyHtml}>Copy HTML</button>
                    </div>
                </div>
                <div className="converted_md" dangerouslySetInnerHTML={{ __html: html }}></div>
            </div>
        </div>
    )
}

export default Md