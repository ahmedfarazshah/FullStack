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

// for the displaying the reasult

var allButtons, numbers , operands, display;

display = document.querySelector("pre")
allButtons = document.querySelectorAll(".calculatorButtons button").length
numbers = document.querySelectorAll(".numberSection button").length
operands = document.querySelectorAll(".operandSection button").length


var selectedNums, selectedNumsLength, result;

selectedNums = [];
selectedNumsLength = selectedNums.length
result;

// for displaying
for(let i =0 ; i < allButtons; i++){
    document.querySelectorAll(".calculatorButtons button")[i].addEventListener('click', function(){
        this.textContent === "AC" ? display.textContent = 0 : display.textContent = this.textContent;
    })
}
for (let i = 0; i < numbers ; i++){
    document.querySelectorAll(".numberSection button")[i].addEventListener('click', function(){
        selectedNums.push(this.textContent)
    })
}
for (let i = 0 ; i< operands; i++){
    document.querySelectorAll(".operandSection button")[i].addEventListener('click', function(){
        console.log(choosingOperators(this.textContent, selectedNums[selectedNumsLength -2], selectedNums[selectedNumsLength -1])
        )
    })
}
// for the keypress

// for (var k = 0; k < allButtons )
// 



function choosingOperators(argue, a , b){
    
    switch (argue){
        case "+":
            addX(a,b);
            break;
        case "-":
            subtractX(a,b)
            break;
        case "*":
            multiplyX(a, b)
            break;
        case "/":
            divideX(a,b);
            break;

    }
}