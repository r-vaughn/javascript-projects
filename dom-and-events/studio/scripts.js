// Write your JavaScript code here.
// Remember to pay attention to page loading!

function init () {

    const flightStatus = document.getElementById("flightStatus");
    const flightDisplay = document.getElementById("flightDisplay");
    const shuttleBackground = document.getElementById("shuttleBackground");
    const upButton = document.getElementById("up");
    const downButton = document.getElementById("down");
    const rightButton = document.getElementById("right");
    const leftButton = document.getElementById("left");
    const spaceShuttleHeight = document.getElementById("spaceShuttleHeight"); 
    const takeOff = document.getElementById("takeoff"); 
    const landingButton = document.getElementById("landing"); 
    const missionAbort = document.getElementById("missionAbort");
    const rocket = document.getElementById("rocket");


    takeOff.addEventListener("click", Event => {
        if (confirm("Confirm that the shuttle is ready for takeoff.") == true) {
           flightStatus.innerHTML = "Shuttle in flight.";
           shuttleBackground.style.backgroundColor = "blue";
           spaceShuttleHeight.innerHTML = "10,000"        
        };
    });

    landingButton.addEventListener('click', Event => {
        alert("The shuttle is landing. Landing gear engaged.");
        flightStatus.innerHTML = "The shuttle has landed."; 
        shuttleBackground.style.backgroundColor = "blue"; 
        spaceShuttleHeight.innerHTML = "0";
    });

    missionAbort.addEventListener('click', Event => {
        if (confirm("Confirm you want to abort the mission.") === true) {
            flightStatus.innerHTML = "Mission aborted.";
            shuttleBackground.style.backgroundColor = "green"; 
            spaceShuttleHeight.innerHTML = '0';
        };
    });

    upButton.addEventListener('click', Event => {
        

    })
} 

window.addEventListener("load", init);