//Main
function EnableDM(){
    //Variables
    const Body = document.getElementById("body")
    const DarkModeB = document.getElementById("darkmode")
    const NDarkModeB = document.getElementById("ndarkmode")

    //Main
    DarkModeB.style = "background-color: #1c1c1c; color: white;"
    NDarkModeB.style = "background-color: #1c1c1c; color: white;"
    Body.style = "background-color: #1c1c1c;"
}

function DisableDM(){
    //Variables
    const Body = document.getElementById("body")
    const DarkModeB = document.getElementById("darkmode")
    const NDarkModeB = document.getElementById("ndarkmode")

    //Main
    DarkModeB.style = "background-color: white; color: black;"
    NDarkModeB.style = "background-color: white; color: black;"
    Body.style = "background-color: white;"
}