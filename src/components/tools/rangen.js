import { useState } from "react"

const RanGen = () => {
    // Uses randomuser.me
    const [data, setData] = useState({})
    const [loading, setLoading] = useState(true)
    const getData = () => {
        fetch("https://randomuser.me/api/")
            .then(res => res.json())
            .then(data => {
                setData(data.results[0])
                setLoading(false)
            })
            .catch(err => console.log(err))
    }
    window.onload = getData
    if (loading === true) {
        return (
            <div className="text">
                <h1>Loading...</h1>
                <p className="center">
                    Please wait while we fetch your data.
                </p>
            </div>
        )
    }
    else {
        return (
            <div className="text">
                <h1>Random Identity Generator</h1>
                <div className="result-card">
                    <div>
                        <img style={{ margin: "5vw 0", borderRadius: "12px", }} src={data.picture.large} width="256" alt="" />
                        <p>--Representation only--</p>
                    </div>
                    <div style={{ margin: "1vw 3vw", }}>
                        <p>Name: {data.name.title} {data.name.first} {data.name.last}</p>
                        <p>Email: {data.email}</p>
                        <p>Mobile: {data.cell}</p>
                        <p>Gender: {data.gender}</p>
                        <p>Age: {data.dob.age}</p>
                        <p>Birthday: {(data.dob.date).split("T")[0]}</p>
                        <p>Username: {data.login.username}</p>
                        <p>Password: {data.login.password}</p>
                        <p>Location: {data.location.street.number} {data.location.street.name} {data.location.city} {data.location.state}</p>
                        <p>Country:  {data.location.country} {data.location.postcode}</p>
                        <p>Powered by <a className="text-link link" href="https://randomuser.me/">randomuser.me</a></p>
                    </div>
                </div>
            </div>
        )
    }
}

export default RanGen