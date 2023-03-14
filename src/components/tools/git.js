import { useState } from "react"

const Git = () => {
    const [username, setUsername] = useState("");
    const [repo, setRepo] = useState("");
    const [data, setData] = useState({});
    const handleUsername = (e) => {
        setUsername(e.target.value)
    }
    const handleRepo = (e) => {
        setRepo(e.target.value)
    }
    const getInfo = () => {
        fetch(`https://api.github.com/repos/${username}/${repo}`)
            .then(res => res.json())
            .then(data => {
                setData(data)
                console.log(data)
            })
            .catch(err => console.log(err))
    }
    return (
        <div className="text">
            <h1>Git Info</h1>
            <p style={{fontSize: "1.2rem",}} className="center">
                Get Info of any github repository. <br />
                Just enter the username and the repository name.
            </p>
            <div className="center git">
                <div>
                    <input type="text" value={username} onChange={handleUsername} placeholder="Username" /><p></p>
                    <input type="text" value={repo} onChange={handleRepo} placeholder="Repository Name" /><p></p>
                    <button onClick={getInfo}>Get Info</button>
                </div>
            </div>
            {/* <div className="result">
                <h2>Result</h2>
                <p>Full Name: {data.full_name}</p>
                <p>Owner: {data.owner?.login}</p>
                <p>Owner URL: {data.owner?.html_url}</p>
            </div> */}
            <div>
                <h2>Result</h2>
                <div className="result-card">
                    <div>
                        <img src={data.owner?.avatar_url} width="256" alt="" />
                    </div>
                    <div style={{margin: "1vw 3vw",}}>
                        <p>Full Repo Name: <a href={data.full_name} className="link text-link">{data.full_name}</a></p>
                        <p>Owner: <a href={data.owner?.login} className="text-link link">{data.owner?.login}</a></p>
                        <p>Description: {data.description}</p>
                        <p>Major Language: {data.language}</p>
                        <p>License: {data.license?.name === null ? data.license?.name : "UnKnown"}</p>
                        <p>Created At: {data.created_at}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Git