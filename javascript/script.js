let cities = ["Faisalabad", "Lahore", "Karachi", "Islamabad", "Peshawar", "Shaikhupura", "Kashmir"]

// Clear Output Button 
function clearOutput() {
    document.getElementById("output").innerHTML = " "
}

// Simple Alert 
function simpleAlert() {
    alert("Alert Button is Clicked")
    document.getElementById("output").innerHTML = "Alert button is clicked"
}

// Print My Name 
function printName() {
    let userName = prompt("please enter your name")
    document.getElementById("output").innerHTML = userName;
}

// Print All Cities 
function printAllCities() {
    document.getElementById("output").innerHTML = " "
    for (let i = 0; i < cities.length; i++) {
        document.getElementById("output").innerHTML += i + 1 + ") " + cities[i] + "<br />"
    }
}

// Add Cities in the List  
function addCity() {
    document.getElementById("output").innerHTML = " "
    let newCity = prompt("please enter city name you want to add")
    cities.push(newCity)

    for (let i = 0; i < cities.length; i++) {
        document.getElementById("output").innerHTML += i + 1 + ")" + cities[i] + "<br />"
    }
}

// Generate Table
function generateTable() {
    tableNumber = +prompt("please enter table number that use want to generate")
    document.getElementById("output").innerHTML = `<h3>Table of ${tableNumber}<h3/> <hr />`
    for (let i = 1; i < 11; i++) {
        let table = tableNumber + " * " + i + " = " + tableNumber * i + "<br />"
        document.getElementById("output").innerHTML += table;
    }
}