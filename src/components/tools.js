import { Link } from "react-router-dom"

const Tool = () => {
    return (
        <div style={{ margin: "0.5rem 10rem", lineHeight: "2rem", }} className="text">
            <h1>Tools</h1>
            <p>
                Here are some tools that I have made. You can 
                access them by clicking on the links below in the site itself.
            </p>
            <ol>
                <li>
                    <a className="text-link link" href="notes/index.html">Notes</a> - Notes for all of my classes.
                </li>
                <li>
                    <a className="text-link link" href="blog/index.html">Blog</a> - My blog.
                </li>
                <li>
                    <Link className="text-link link" to="/write">HTMLER</Link> - Convert Markdown to HTML.
                </li>
                <li>
                    <Link className="text-link link" to="/tools/qr">QrCode</Link> - Generate QR Codes.
                </li>
                <li>
                    <Link className="text-link link" to="/tools/editor">Editor</Link> - A simple text editor.
                </li>
                <li>
                    <Link className="text-link link" to="/tools/git">Git Info</Link> - Get info about a GitHub repo.
                </li>
                <li>
                    <Link className="text-link link" to="/tools/random">Random Generator</Link> - Generate random identity.
                </li>
            </ol>
            <p className="center">
                All of these tools are made using ReactJS.
                They are all open source and you can find them on my
                <a className="text-link link" href="https://github.com/newtoallofthis123/About">GitHub</a>.
                If you want to contribute, you can open an issue or a pull request. Meanwhile, these are free to use. Enjoy :)
            </p>
        </div>
    )
}

export default Tool