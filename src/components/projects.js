import { Link } from "react-router-dom"

const Projects = () => {
    return (
        <div>
            <h1 className="h1">Projects</h1>
            <div style={{ backgroundColor: "#f6ff00", }} className="nice_border">
                <h2>Before You Proceed</h2>
                <p style={{ marginTop: '1.2rem', }}>
                    As a hands-on learner, I have gained a wealth of experience through a diverse range of projects.
                    While not all of my endeavors have been successful, I believe that every experience has been valuable in helping me grow and improve.
                    The projects showcased on my portfolio are those that I am particularly proud of, but I invite you to explore my full range of work on my Github page.
                    There you will find a comprehensive collection of my projects, including updates and improvements made along the way. Thank you for considering my work.
                </p>
            </div>
            <div style={{ backgroundColor: "#dd5eff", }} className="nice_border">
                <h2>NoobPaste</h2>
                <p style={{ marginTop: '1.2rem', }}>
                    I am proud to introduce NoobPaste, my first independent web application development project. 
                    This application, which serves as a replica of pastebin.com, was built using Flask for the back-end and Bootstrap and jQuery for the user interface. 
                    One of the key features of NoobPaste is its emphasis on privacy, as it utilizes server-side encryption to ensure that neither I nor any other administrator can view users' private pastes. 
                    Additionally, I am currently working on developing an admin page to manage all pastes on the platform. 
                    This project is an ongoing effort and I welcome contributions on GitHub. 
                </p>
                <div style={{ textAlign: 'center' }}>
                    <button style={{ backgroundColor: '#f6ff00', margin: '1.8rem', }} className="download"><a href="https://www.youtube-nocookie.com/embed/RepoBnHNx_A"><i className="bi bi-youtube"></i> Watch the Showcase</a></button>
                    <button style={{ backgroundColor: '#8aff67', }} className="download"><a href="https://noobpaste.herokuapp.com">Visit the Site</a></button>
                </div>
            </div>
            <div style={{ backgroundColor: "#44fffd", }} className="nice_border">
                <h2>ShortPaw</h2>
                <p style={{ marginTop: '1.2rem', }}>
                    Shortpaw is a personal URL shortening service that I developed to have full control over my data. The application is written in Python and utilizes PostgreSQL for secure and efficient storage and delivery of URLs.
                    Shortpaw also features a robust API built using Flask, making it easily accessible from any location.
                    This project is an ongoing development, and I welcome contributions on GitHub.
                    If you're looking for a secure and customizable URL shortener, Shortpaw is the perfect solution.
                </p>
                <div style={{ textAlign: 'center' }}>
                    <button style={{ backgroundColor: '#f6ff00', margin: '1.8rem', }} className="download"><a href="https://www.youtube-nocookie.com/embed/z6C7a8BFCOQ"><i className="bi bi-youtube"></i> Watch the Showcase</a></button>
                    <button style={{ backgroundColor: '#8aff67', }} className="download"><a href="https://shortpaw.herokuapp.com">Visit the Site</a></button>
                </div>
            </div>
            <div style={{ backgroundColor: "#ff9cc7", }} className="nice_border">
                <h2>Notes for School</h2>
                <p style={{ marginTop: '1.2rem', }}>
                    Everytime I had a semester exam or a test, I would always start writing notes from the beginning of the semester.
                    I would write notes for every chapter and then I would revise them before the exam.
                    So I thought why not make a website where I can write notes and revise them whenever I want.
                    So I made this website where I write notes of most of my subjects and I can revise them whenever I want.
                    The website is made using HTML, CSS only.
                    You can find notes in a neat, simple UI.
                    Hope you like it.
                </p>
                <div style={{ textAlign: 'center' }}>
                    <button style={{ backgroundColor: '#f6ff00', margin: '1.8rem', }} className="download"><a href="/notes/"><i className="bi bi-journal"></i> Read the Notes</a></button>
                    <button style={{ backgroundColor: '#8aff67', }} className="download"><a href="https://github.com/newtoallofthis123/About/tree/main/public/notes">Contribute</a></button>
                </div>
            </div>
            <div style={{ backgroundColor: "#ff9c9c", }} className="nice_border">
                <h2>ReactSite</h2>
                <p style={{ marginTop: '1.2rem', }}>
                    Welcome to my portfolio website, which serves as a showcase of my skills in React development.
                    The site you are currently viewing is my latest creation, built using the latest React features such as useState and reactRouter.
                    My aim is to provide an enjoyable and user-friendly experience for visitors.
                    The design inspiration for this site comes from the clean and vibrant style of GumRoad.com.
                    I am continuously working to improve my skills in React and other web development technologies, and will be updating the site regularly with new features and improvements.
                    Be sure to check out my GitHub profile for the latest updates and projects.
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
                    It lets you search youtube.com from the ease of your terminal and if you like something, you can easily play it on your favorite media player.
                    This was my first attempt at creating a beautiful CLI using rich module in python. So hopefully, this makes your terminal experience better.
                </p>
                <div style={{ textAlign: 'center' }}>
                    <button style={{ backgroundColor: '#f6ff00', margin: '1.8rem', }} className="download"><a href="https://github.com/newtoallofthis123/ytps"><i className="bi bi-github"></i> GitHub</a></button>
                    <button style={{ backgroundColor: '#44fffd', }} className="download"><a href="https://newtoallofthis123.github.io/ReactSite">More About</a></button>
                </div>
            </div>
            <p className="text" style={{ textAlign: 'center', }}>Impressed with my projects? Check out my <Link to="/ReactSite/skills" className="text link hover_animation_underline">skills</Link> and resume. Thank You.</p>
        </div>
    )
}

export default Projects