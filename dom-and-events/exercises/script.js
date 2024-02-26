function init () {
    const missionAbort = document.getElementById("abortMission");
    const button = document.getElementById("liftoffButton");
    const paragraph = document.getElementById("statusReport");

    // Put your code for the exercises here.
    
    button.addEventListener("click", Event => {
        paragraph.innerHTML = "Houston, we have liftoff!"
    }); 

    missionAbort.addEventListener("mouseover", Event => {
        Event.target.style.backgroundColor = "red";
    });

    missionAbort.addEventListener("mouseout", Event => {
        Event.target.style.backgroundColor = "";
    });

    missionAbort.addEventListener("click", Event => {
        let text;
        if (confirm("Are you sure you want to abort the mission?") == true) {
           paragraph.innerHTML = "Mission aborted! Space shuttle returning home."; 
           setTimeout(function(){
            location.reload();
           }, 5000);
        }
    });
}

window.addEventListener("load", init);
