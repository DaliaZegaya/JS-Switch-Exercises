//תרגיל 1
let userNum= document.getElementById("num_input")
function printNum() {
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
function printName() {
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

function printUserResult() {
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

//תרגיל 4
let usertext= document.getElementById("user_text")
let userSize= document.getElementById("user_size")
let userColor= document.getElementById("user_color")
let userH1= document.getElementById("user_h1")

function printUserText() {
    switch (userSize.value) {
        case "20px": userH1.innerText= usertext.value
        userH1.style.color= userColor.value
        userH1.style.fontSize= userSize.value
        break;

        case "40px": userH1.innerText= usertext.value
        userH1.style.color= userColor.value
        userH1.style.fontSize= userSize.value
        break;

        case "60px": userH1.innerText= usertext.value
        userH1.style.color= userColor.value
        userH1.style.fontSize= userSize.value
        break;

        case "80px": userH1.innerText= usertext.value
        userH1.style.color= userColor.value
        userH1.style.fontSize= userSize.value
    }

}

//תרגיל 5 
let user5Corner= document.getElementById("user5_corner")
let user5Color= document.getElementById("user5_color")
let userDiv= document.getElementById("div_id")
function printDiv() {
    switch (user5Corner.value) {
        case "top-left": userDiv.style.background= user5Color.value
        break;

        case "top-right": userDiv.style.background= user5Color.value
        userDiv.style.float= "right"
        break;

        case "bottom-left": userDiv.style.background= user5Color.value
        userDiv.style.marginTop= "300px"
        break;

        case "bottom-right": userDiv.style.background= user5Color.value
        userDiv.style.marginTop= "300px"
        userDiv.style.marginLeft= "1000px"
    }

}
