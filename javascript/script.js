let cities = ["Faisalabad", "Lahore", "Karachi", "Islamabad", "Peshawar", "Shaikhupura", "Kashmir"]

// Clear Input Text

function clearInput() {
    document.getElementById("input").value = " ";
    document.getElementById("clear-input-btn").innerHTML = " ";
}

// Clear Output Button
function clearOutput(){
    document.getElementById("output-div").innerHTML = " ";
}

// Simple Alert 
function simpleAlert() {
    alert("Simple Alert button is clicked");
    document.getElementById("output-div").innerHTML = "Simple Alert button is clicked";
}

// Print My Name 
function printName() {
    let userName = prompt("Enter Your Name Please");
    document.getElementById("output-div").innerHTML = userName;
}

// Print All Cities 
function printAllCities() {
    document.getElementById("output-div").innerHTML = " ";
    for (let i = 0; i < cities.length; i++) {
        document.getElementById("output-div").innerHTML += i + 1 + ") " + cities[i] + "<br />"
    }
}

// Add Cities in the List  
function addCity() {
    document.getElementById("output-div").innerHTML = " ";
    let newCity = prompt("Please Enter the City Name You Want to Add");
    cities.push(newCity);

    for (let i = 0; i < cities.length; i++) {
        document.getElementById("output-div").innerHTML += i + 1 + ")" + cities[i] + "<br />"
    }
}

// Generate Table

function generateTable() {
    let num = +prompt("Pleae Enter the Number, You Want to Generate Table");

    if (!isNaN(num)) {
        document.getElementById("output-div").innerHTML =
            "<h2 class='text-primary'>Table of" + " " + num + "</h2>";

        for (let i = 1; i <= 10; i++) {
            document.getElementById("output-div").innerHTML +=
                num + " * " + i + " = " + num * i + "<br>";
        }
    } else {
        alert("Please, Enter a Number");
    }
}