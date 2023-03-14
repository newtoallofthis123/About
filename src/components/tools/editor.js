import { useState } from "react"

const Editor = () => {
    const [text, setText] = useState("");
    const [file, setFile] = useState("");
    window.onload = () => {
        if (localStorage.getItem("editor") === null | localStorage.getItem("texts") === null | localStorage.getItem("current", "") === null) {
            localStorage.setItem("texts", ",");
            localStorage.setItem("editor", "");
            localStorage.setItem("current", "");
        }
        else {
            setText(localStorage.getItem("editor"));
            window.alert("Your Session was restored")
        }
    }
    window.onbeforeunload = () => {
        if (file !== "") {
            localStorage.setItem(file, text)
        }
        else {
            localStorage.setItem("editor", text)
        }
    }
    const handleChange = (e) => {
        setText(e.target.value)
        localStorage.setItem("editor", e.target.value)
    }
    const save = () => {
        let filename = prompt("Enter your file name: ")
        if (filename != null) {
            localStorage.setItem(filename + ".txt", text)
            let texts = localStorage.getItem("texts")
            texts = texts + filename + ".txt,"
            localStorage.setItem("texts", texts)
            setFile(filename + ".txt")
            setText(localStorage.getItem(filename + ".txt"))
        }
    }
    const getItems = () => {
        let texts = localStorage.getItem("texts")
        texts = texts.split(",")
        texts = texts.filter((text) => text !== "")
        return texts
    }
    const loadFile = (f) => {
        setText(localStorage.getItem(f))
        setFile(f)
    }
    const deleteFile = () => {
        if (file === "") {
            window.alert("Name a file to delete")
        }
        else {
            let texts = localStorage.getItem("texts")
            texts = texts.split(",")
            texts = texts.filter((text) => text !== file)
            texts = texts.join(",")
            localStorage.setItem("texts", texts)
            localStorage.removeItem(file)
            setFile("")
            setText("Deleted file")
        }
    }
    return (
        <div>
            <h1 className="text">Editor</h1>
            <p className="center text">
                This is a text editor. You can write text in the left box and stuff is saved in your browser's local storage.
            </p>
            <div className="editor">
                <div className="files">
                    <h2 className="center text">Files</h2>
                    <p className="center text">
                        Here are the files that you have saved.
                    </p>
                    {getItems().map((file) => {
                        return (
                            <div key={file} className="text">
                                <button onClick={() => { loadFile(file) }}>
                                    <p>{file}</p>
                                </button>
                            </div>
                        )
                    })}
                </div>
                <div className="text center">
                    <p className="center">In file : {file}</p>
                    <textarea name="editor" value={text} onChange={handleChange} id="editor" cols="30"></textarea>
                    <div className="center">
                        <button onClick={save}>Save</button>
                        <button onClick={deleteFile}>Delete</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Editor