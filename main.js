//תרגיל 1
let userNum= document.getElementById("num_input")
function printNum () {
    switch (userNum.value) {
        case "3": console.log("hello");
        break;
        case "5": console.log("goodbye");
        break;
        case "7": console.log("thank you");
        break;
        default: console.log("nothing");
    }
}

//תרגיל 2
let userName= document.getElementById("name_input")
let h1Name= document.getElementById("h1_id")
function printName () {
    switch (userName.value) {
        case "jacob": h1Name.innerText= userName.value
        break;
        case "nathan": h1Name.innerText= userName.value.toUpperCase() 
        break;
        case "DALIA": h1Name.innerText= userName.value.toLowerCase()
        break;
        default: h1Name.innerText= "nothing"
    }

}

//תרגיל 3
let num1= document.getElementById("num1")
let num2= document.getElementById("num2")
let userSign= document.getElementById("user_sign")

function printUserResult () {
    switch (userSign.value) {
        case "+": console.log(+num1.value+ +num2.value);
        break;
        case "-": console.log(+num1.value-+num2.value);
        break;
        case "/": console.log(+num1.value/+num2.value);
        break;
        case "*": console.log(+num1.value*+num2.value);
    }

}
