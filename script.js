let display = document.getElementById("display");


function appendToDisplay(value) {
    display.value += value;
}


function clearDisplay() {
    display.value = "";
}


function backspace() {
    display.value = display.value.slice(0, -1);
}


function calculateResult() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        alert("Invalid Expression!");
        display.value = "";
    }
}


function fetchLogo() {
    fetch("https://api.logo.com/v1/logo")
    .then(response => response.json())
    .then(data => {
        document.getElementById("logo").src = data.image; 
    })
    .catch(error => console.log("Error fetching logo:", error));
}


fetchLogo();
