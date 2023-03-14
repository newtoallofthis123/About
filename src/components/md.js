import { marked } from "marked";
import { useState } from "react";

const Md = () => {
    const [md, setMd] = useState("");
    const [html, setHtml] = useState("");
    const handleChange = (e) => {
        setMd(e.target.value)
        setHtml(marked(e.target.value))
    }
    return (
        <div>
            <h1 className="text">Markdown</h1>
            <p style={{margin: "0 2rem",}} className="text">
                Write markdown in the left box and see the converted HTML in the right box.
            </p>
            <div className="markdown"> 
                <div>
                    <textarea name="md" id="md" onChange={handleChange} cols="30">{md}</textarea>
                </div>
                <div className="converted_md" dangerouslySetInnerHTML={{ __html: html }}></div>
            </div>
        </div>
    )
}

export default Md