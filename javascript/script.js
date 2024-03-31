let cities = ["Faisalabad", "Lahore", "Karachi", "Islamabad", "Peshawar", "Shaikhupura", "Kashmir"]

// Clear Input Text

function clearInput(){
    document.getElementById("clear-input-btn").innerHTML = " ";
}
// Clear Output Button
function clearOutput(){
    document.getElementById("output-div").innerHTML = " ";
}

// Simple Alert 
function simpleAlert() {
    alert("Alert Button is Clicked");
    document.getElementById("output-div").innerHTML = "Alert button is Clicked";
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
    tableNumber = +prompt("Please Enter The Table Number That You Want to Generate")
    document.getElementById("output-div").innerHTML = `<h3>Table of ${tableNumber}<h3/> <hr />`
    for (let i = 1; i < 11; i++) {
        let table = tableNumber + " * " + i + " = " + tableNumber * i + "<br />"
        document.getElementById("output-div").innerHTML += table;
    }
}