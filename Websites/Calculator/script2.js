var zero = document.querySelector(".zero");
var one = document.querySelector(".one");
var two = document.querySelector(".two")
var three = document.querySelector(".three")
var four = document.querySelector(".four")
var five = document.querySelector(".five")
var six = document.querySelector(".six")
var seven = document.querySelector(".seven")
var eight = document.querySelector(".eight")
var nine = document.querySelector(".nine")  
var dot = document.querySelector(".dot")

var add = document.querySelector(".add")
var subtract = document.querySelector(".subtract")
var multiply = document.querySelector(".multiply")
var divide = document.querySelector(".divie")
var ac = document.querySelector(".ac")
var assignment = document.querySelector(".assignment")

var firstOperand;
var secondOperand;
var result;


function add(num1 , num2){
    return num1 + num2
}
function subtract (num1 , num2){
    return num1 - num2
}
function multiply (num1 , num2){
    return num1 * num2
}
function divide(num1 , num2){
    return num1 / num2
}
function removeContent(){
    display.textContent = 0
}



// for the display
var display = document.querySelector("pre")

var nums_operands = document.querySelectorAll(".calculatorButtons button").length

for (var i = 0; i < nums_operands; i++){
    document.querySelectorAll(".container button")[i].addEventListener("firstclick", function(e){
        
    })


}

