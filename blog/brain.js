const main = () => {

    // Theme
    const getTheme = () => { return localStorage.getItem("theme") || "system" }
    const setTheme = (theme) => {
        localStorage.setItem("theme", theme)
        // document.documentElement.setAttribute("data-theme", theme)
        if(theme === "system") {
            document.documentElement.setAttribute("data-theme", window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
        } else {
            document.documentElement.setAttribute("data-theme", theme)
        }
    }
    setTheme(getTheme())

    document.getElementById("light").addEventListener("click", () => { setTheme("light") })
    document.getElementById("dark").addEventListener("click", () => { setTheme("dark") })
    document.getElementById("system").addEventListener("click", () => { setTheme("system") })

    //Font
    const getFont = () => { return localStorage.getItem("font") || "serif" }
    const setFont = (font) => {
        localStorage.setItem("font", font)
        document.documentElement.setAttribute("data-font", font)
    }
    setFont(getFont())

    document.getElementById("serif").addEventListener("click", () => { setFont("serif") })
    document.getElementById("sans-serif").addEventListener("click", () => { setFont("sans-serif") })
    document.getElementById("monospace").addEventListener("click", () => { setFont("monospace") })

    // Settings
    document.getElementById("settings-container").style.display = "none";
    var settings_var = false
    document.getElementById("settings").addEventListener("click", function () {
        if (!settings_var) {
            document.getElementById("settings-container").style.display = "block";
            settings_var = true
        } else {
            document.getElementById("settings-container").style.display = "none";
            settings_var = false
        }
    })

    // Audio
    var playing = false
    document.getElementById("play").addEventListener("click", function () {
        if(!playing) {
            document.getElementById("audio").play()
            playing = true
        } else {
            document.getElementById("audio").pause()
            playing = false
        }
     })

}

window.onload = main