//Code Your Solution Below

let form = document.getElementById("form");
//let formSubmit = document.getElementById("submit");


form.addEventListener("submit", (event) => {
    let formInput = document.getElementById("form");
        if (formInput.validity() === false) {
            event.preventDefault();
            document.getElementById("log").innerHTML = "Missing inputs. Please complete form.";
        }     
});

//BONUS: Use an event handler and the submit event to validate that all inputs have values. Do NOT let the form be submitted if inputs are