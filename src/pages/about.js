import profile from './static/images/profile.jpg'
import { Link } from "react-router-dom"

const About = () => {
    return (
        <div className="about_div">
            <div style={{ "backgroundColor": "#75f0f3", }} className="nice_border">
                <h1>Who are you?</h1>
                <p>
                    Hello! I am Ishan, I am a student and tech enthusiast. I go by <a href="https://github.com/newtoallofthis123" className="link">NoobScience</a> online.
                    I love software and I am an huge fan of open source software. I am currently a college freshman, studying computer science and engineering.
                    I love coding in <a href="https://python.org" className="link">python</a> and it is my primary language, although I am warming up to javascript. I am huge linux fan I love running virtual machines. I am love deep dives into how a application is built and
                    decoding software. I also like open source projects that aim to replace their proprietary alternatives.
                </p>
            </div>
            <div style={{ "backgroundColor": "#83f583", }} className="nice_border">
                <h1>Interests</h1>
                <p>
                    I am into a lot of stuff. I am mostly on my computer, the rest of the time, I am with my friends or with my furry friend. I love playing <a href="https://minetest.net" className="link">Minetest</a> and Rocket League.
                    I love dogs and I love my furry doggo {<Link to="/About/lyka" className="link">Lyka</Link>}. I am a huge fan of esports and keep up with the latest and greatest there.
                    You can always find me on my <a href="https://twitter.com">twitter</a> and I am quite active there. Sometimes, the author in me prowls and I write neat blog articles.
                    I have been pretty much in love with software and I enjoy building stuff.
                </p>
            </div>
            <div style={{ "backgroundColor": "#f888d6", }} id="random" className="nice_border">
                <h1>Random</h1>
                <div style={{ textAlign: 'center', }}>
                    <img src={profile} id="profile" style={{verticalAlign: "middle", borderRadius: "24px", padding: '12px', }} alt="" />
                </div>
                <p>
                    I am quite into photos now a days. Maybe it is because I am learning GIMP, but be prepared to see a lot of photos.
                    You can talk to me about pretty much anything. I am a big fan of sitcoms and minecraft.
                    The Tech I use?
                    I use a Lenovo ideapad3 laptop, a Samsung M13 Andriod Phone and a fitness tracker.
                    I am a huge sucker for software customization and each and software I use are highly customized
                    to suit my taste.
                    I am looking to contribute to some open source projects and looking for contributors to mine as well.
                    If you are interested in that, just hit me up on my <a href="mailto:noobscience@duck.com" className='link'>mail</a>.
                </p>
            </div>
        </div>
    )
} 

export default About