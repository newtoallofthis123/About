import { Link } from "react-router-dom"

const Projects = () => {
    return (
        <div>
            <h1>Projects</h1>
            <div style={{ backgroundColor: "#f6ff00", }} className="nice_border">
                <h2>Before You Proceed</h2>
                <p style={{ marginTop: '1.2rem', }}>I am a staunch believer in learning practically. So over the course of my journey, I have done various projects.
                    Not all of them were a success. The ones that were, I keep them updated over on <a href="https://github.com/newtoallofthis123" className="link"><i className="bi bi-github"></i> github</a>.
                    The ones showcased below are the ones I consider my best, but I request you to please check out my other projects on github as well.
                </p>
            </div>
            <div style={{ backgroundColor: "#dd5eff", }} className="nice_border">
                <h2>NoobPaste</h2>
                <p style={{ marginTop: '1.2rem', }}>
                    NoobPaste was my first attempt to create a full fledged web application on my own.
                    It is an attempt to recreate <a href="https://pastebin.com">pastebin.com</a> in flask and create 
                    a simple UI in bootstrap and jquery. It is private and I also implemented server side encryption of the content.
                    So neither me nor any other administrator can view your private pastes. 
                </p>
                <div style={{ textAlign: 'center' }}>
                    <button style={{ backgroundColor: '#f6ff00', margin: '1.8rem', }} className="download"><a href="https://www.youtube-nocookie.com/embed/RepoBnHNx_A"><i className="bi bi-youtube"></i> Watch the Showcase</a></button>
                    <button style={{ backgroundColor: '#8aff67', }} className="download"><a href="https://noobpaste.herokuapp.com">Visit the Site</a></button>
                </div>
                <p style={{ marginTop: '1.2rem', }}>
                    I also tried implementing an admin page to manage all the pastes on NoobPaste.
                    This project is still on going and is being actively developed over at <a href="https://github.com/newtoallofthis123/NoobPaste" className="link"><i className="bi bi-github"></i> GitHub</a>.
                    Please feel free to contribute.
                </p>
            </div>
            <div style={{ backgroundColor: "#44fffd", }} className="nice_border">
                <h2>ShortPaw</h2>
                <p style={{ marginTop: '1.2rem', }}>
                    Shortpaw was born purely out of my desire for my very own private url shortener that I was in full control over my data.
                    Shortpaw is written in python and uses postgresql to store your url's and deliver then fastly and securely.
                </p>
                <div style={{ textAlign: 'center' }}>
                    <button style={{ backgroundColor: '#f6ff00', margin: '1.8rem', }} className="download"><a href="https://www.youtube-nocookie.com/embed/z6C7a8BFCOQ"><i className="bi bi-youtube"></i> Watch the Showcase</a></button>
                    <button style={{ backgroundColor: '#8aff67', }} className="download"><a href="https://shortpaw.herokuapp.com">Visit the Site</a></button>
                </div>
                <p style={{ marginTop: '1.2rem', }}>
                    Shortpaw also has a rich flask powered API that can be easily called from anywhere. This project is still on going and is being actively developed over at <a href="https://github.com/newtoallofthis123/NoobPaste" className="link"><i className="bi bi-github"></i> GitHub</a>.
                    Please feel free to contribute.
                </p>
            </div>
            <div style={{ backgroundColor: "#ff9c9c", }} className="nice_border">
                <h2>About</h2>
                <p style={{ marginTop: '1.2rem', }}>
                    In fact, this site you are currently on, is my latest and greatest attempt to apply the react I learnt.
                    This site uses all the stuff like useState, reactRouter and all the other good react stuff.
                    Hope you have a pleasurable experience using this site. BTW, the plain and colorful inspiration to this site is 
                    from the design implemented on <a href="https://gumroad.com">GumRoad.com</a>.
                    I plan on improving on more topics of react in the future and keep updating my site. So stay tuned on github for more updates.
                </p>
                <div style={{ textAlign: 'center' }}>
                    <button style={{ backgroundColor: '#f6ff00', margin: '1.8rem', }} className="download"><a href="https://github.com/newtoallofthis123/ReactSite"><i className="bi bi-github"></i> GitHub</a></button>
                    <button style={{ backgroundColor: '#8aff67', }} className="download"><a href="https://newtoallofthis123.github.io/ReactSite">Visit the Site</a></button>
                </div>
            </div>
            <div style={{ backgroundColor: "#8aff67", }} className="nice_border">
                <h2>YTPS</h2>
                <p style={{ marginTop: '1.2rem', }}>
                    YTPS stands for YouTube Terminal Search and Play and this is a simple CLI that does exactly what it says it does.
                    It lets you search <a href="https://youtube.com">youtube.com</a> from the ease of your terminal and if you like something, you can easily play it on your favorite
                    media player. This was my first attempt at creating a beautiful CLI using rich module in python.
                    So hopefully, this makes your terminal experience better.
                </p>
                <div style={{ textAlign: 'center' }}>
                    <button style={{ backgroundColor: '#f6ff00', margin: '1.8rem', }} className="download"><a href="https://github.com/newtoallofthis123/ytps"><i className="bi bi-github"></i> GitHub</a></button>
                    <button style={{ backgroundColor: '#44fffd', }} className="download"><a href="https://newtoallofthis123.github.io/ytps">More About</a></button>
                </div>
            </div>
            <p style={{ textAlign: 'center', }}>Impressed with my projects? Check out my <Link to="/ReactSite/skills" className="link">skills</Link> and resume. Thank You.</p>
        </div>
    )
}

export default Projects