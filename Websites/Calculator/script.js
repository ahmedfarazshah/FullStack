function add(num1, num2){
    return num1 + num2;
}
function subtract(num1, num2){
    return num1 - num2;
}
function multiply(num1, num2){
    return num1 * num2;
}
function divide(num1, num2){
    return num1 / num2;
}
function operation(num1, num2, operator){
    return operator(num1, num2)
}
var pre = document.querySelector("pre")

zero  = document.querySelector(".zero")
one  = document.querySelector(".one")
two  = document.querySelector(".two")
three  = document.querySelector(".three")
four  = document.querySelector(".four")
five  = document.querySelector(".five")
six  = document.querySelector(".six")
seven  = document.querySelector(".seven")
eight  = document.querySelector(".eight")
nine  = document.querySelector(".nine")

var ac = document.querySelector(".ac")
var add = document.querySelector(".add")
var subtract = document.querySelector(".subtrack")
var multiply = document.querySelector(".multiply")
var divide = document.querySelector(".divide")
var assignment = document.querySelector(".assignment")

function text(){
    document.querySelector("pre").textContent= "ia ir "    
}
function removetext(){
    pre.textContent = ''
}

ac.addEventListener('click', removetext)
one.addEventListener('click' , text)
zero.addEventListener('click', text)


// function globalEvent(type , selector, callback){
    // document.querySelector(selector).addEventListener(type, )
// }

var file = document.querySelectorAll("button").length;

var number1 ;
var number2 ;

for (var i = 0; i < file ; i++){
    document.querySelectorAll(".container button")[i].addEventListener('click', e =>{
        pre.textContent = e.target.textContent;
    })
}

