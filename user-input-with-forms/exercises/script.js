//Code Your Solution Below

let form = document.querySelector("form");
let button = document.getElementById("submitForm");


// button.addEventListener("click", function() {
    // let formInputs = document.querySelectorAll("input, select");
    // console.log(formInputs.values());
// });


window.addEventListener("load", function() {
    form.addEventListener(("submit"), (event) => {
    let testNameInput = document.querySelector("input[name=testName]");
    let testDateInput = document.querySelector("input[name=testDate]");
    let rocketTypeInput = document.querySelector("select[name=rocketType]"); 
    let boosterCountInput = document.querySelector("input[name=boosterCount]");
    let windRatingInput = document.querySelector("input[name=windRating]");
    let productionServers = document.querySelector("input[name=productionServers]");
    console.log(`testNameInput => ${testNameInput.value}`);
    console.log(`testDateInput => ${testDateInput.value}`);
    console.log(`rocketTypeInput => ${rocketTypeInput.value}`);
    console.log(`boosterCountInput => ${boosterCountInput.value}`);
    console.log(`windRatingInput => ${windRatingInput.value}`);
    console.log(`productionServers => ${productionServers.value}`);
    if ( ( testNameInput.value === "" ) || ( testDateInput.value === "" ) || ( rocketTypeInput.value === "" ) || ( boosterCountInput.value === "" ) || ( windRatingInput.required === false) || ( productionServers.checked === false )  ) {
        alert("All fields are required!");
        event.preventDefault();
    }
    });
});

// form.addEventListener("submit", (event) => {
    //let formInput = document.getElementById("form");
        // if (form.validity() === false) {
            // event.preventDefault();
            // document.getElementById("log").innerHTML = "Missing inputs. Please complete form.";
        // }     
// });

//onsubmit

//BONUS: Use an event handler and the submit event to validate that all inputs have values. Do NOT let the form be submitted if inputs are