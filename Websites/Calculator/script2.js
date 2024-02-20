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
// callback function
function operation (num1, num2, callback){
    return callback(num1, num2)
}



var display = document.querySelector("pre")
// for the displaying the reasult

var nums_operands = document.querySelectorAll(".calculatorButtons button").length
var nums = document.querySelectorAll(".numberSection button").length
var operands = document.querySelectorAll(".operandSection button").length

var selectedNums = [];
var operators = [];
var result;


for (var i = 0; i < nums_operands; i++){
    document.querySelectorAll(".container button")[i].addEventListener("click", function(){
        display.textContent = this.textContent;
        if(this.textContent === "AC")
            display.textContent = 0;
    
        })
}
for (var i = 0; i < nums; i++){
    document.querySelectorAll(".numberSection button")[i].addEventListener("click", function(){
        selectedNums.push(this.textContent);        
    })
}
for (var i = 0; i < operands; i++){
    document.querySelectorAll(".operandSection button")[i].addEventListener("click", function(){
        operators.push(this.textContent);
        if(this.textContent === 'AC'){
            display = 0        }
    })
}

