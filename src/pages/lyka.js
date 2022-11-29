import lyka from './static/images/lyka.png'
import lyka_angry from './static/images/lyka_angry.png'

const Lyka = () => {
    const no_like = () => {
        const good_div = document.querySelector("#good")
        const bad_div = document.querySelector("#bad")
        good_div.style.display = "none"
        bad_div.style.display = "block"
    }
    const okay = () => {
        const good_div = document.querySelector("#good")
        const bad_div = document.querySelector("#bad")
        good_div.style.display = "block"
        bad_div.style.display = "none"
    }
    const boop = () => { 
        const thanks = document.querySelector("#thanks")
        thanks.style.display = "block"
    }

    return (
        <div>
            <div id="good">
                <h1>Lyka</h1>
                <h2>And The Conquest of Dogs!</h2>
                <div style={{ 'margin-left': '30%', width: '100%', }}>
                    <img src={lyka} className='lyka_mobile' alt="Lyka The Dog" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="lyka col-3">
                            <img src={lyka} className='lyka_pic' alt="Lyka The Dog" />
                            <p>Fig-1 [Lyka: The Friendly Dog]</p>
                        </div>
                        <div style={{ marginTop: '3.2rem', }} className="roll col">
                            <h2>The Royal Degree</h2>
                            <p>
                                You might have heard rumors, but I am here to confirm that it is true.
                                <mark>The Dogs are taking over!</mark>. This is exclusive information I got
                                from my dog Lyka. Yes! She told me this to save me and my family. It said that
                                dogs made a pact when humans first tamed them. It goes as below.
                            </p>
                            <div style={{ margin: '1.2rem', }}>
                                <code>
                                    "Humans will give us tasty treats and are clever enough to create pedigree.
                                    So let's join them, but the moment they stop saying 'awe...' every time they see us or stop the love and treats,
                                    we will show them who the superior species is.
                                    "
                                </code>
                            </div>
                            <p>
                                Yes! Lyka showed me the exact scripture. This knowledge has been passed
                                dog to pup for thousands of years.
                                So, my cute dog advices you all to start loving them with all your heart and soul.
                                And is it really hard? I mean look at that thing, I haven't seen a more beautiful thing.
                            </p>
                            <p id="thanks">Thank You! I ❤️ you too :)</p>
                            <div>
                                <button id="boop" onClick={boop} className="download">Boop My Nose!</button>
                                <button id="no_like" onClick={no_like} className="download">I don't Like Dogs!</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="bad">
                <div className="container">
                    <div className="row">
                        <div className="col-3">
                            <img src={lyka_angry} className='lyka_pic' alt="Lyka Angry" />
                        </div>
                        <div className="col">
                            <h1>You Don't <span style={{ color: "#ff0000", }}>like</span> DOGS?</h1>
                            <p style={{ marginTop: "5rem", }}>
                                Do you know dogs have an average bite force of 560N? Do you know what that does to a puny human like you?
                                Just because we are cute doesn't mean we can't hurt you. Well, we are so cute and nice.
                                We are harmless and only ever look for love.
                            </p>
                            <p>
                                Just try petting us once, with our owner and see the love you get. So, try loving us?
                                What Say?
                            </p>
                            <button className="download" onClick={okay} id="okay">Okay!</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Lyka