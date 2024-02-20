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


function addX(num1 , num2){
    return num1 + num2
}
function subtractX (num1 , num2){
    return num1 - num2
}
function multiplyX (num1 , num2){
    return num1 * num2
}
function divideX(num1 , num2){
    return num1 / num2
}
function removeContentX(){
    display.textContent = 0
}
// callback function
function operationX (num1, num2, callback){
    return callback(num1, num2)
}



var display = document.querySelector("pre")
// for the displaying the reasult

var nums_operands = document.querySelectorAll(".calculatorButtons button").length
var nums = document.querySelectorAll(".numberSection button").length
var operands = document.querySelectorAll(".operandSection button").length

var selectedNums = [];
var result;


for (var i = 0; i < nums_operands; i++){
    document.querySelectorAll(".container button")[i].addEventListener("click", function(){
        display.textContent = this.textContent;

        })
}


for (var i = 0; i < nums; i++){
    document.querySelectorAll(".numberSection button")[i].addEventListener("click", function(){
        selectedNums.push(this.textContent);
    })
}


for (var i = 0; i < operands; i++){
    document.querySelectorAll(".operandSection button")[i].addEventListener("click", function(){
        var selc = selectedNums.length
        switch(this.textContent){
            case '+':
                var file = addX(selectedNums[selc -1], selectedNums[selc -2])
                    display.textContent = file;
                    
                



            }        
    
    
    })
}
