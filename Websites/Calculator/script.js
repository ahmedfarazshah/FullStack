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
pre = document.querySelector("pre")
// zero.addEventListner("click", ()=>{
//     document.querySelector(".container pre").textContent = "is it woe";
// })
function text(){
    document.querySelector("pre").textContent= "ia ir "    
}

document.querySelector(".zero").addEventListener("click", e =>{
    document.querySelector('pre').textContent = zero.textContent
})

document.querySelector(".one").addEventListener("click", e =>{
    document.querySelector('pre').textContent = one.textContent
})
two.addEventListener('click', text)

function globalEvent(type , selector, callback){
    document.querySelector(selector).addEventListener(type, )
}

var file = document.querySelectorAll("button").length


for (var i = 0; i < file ; i++){
    document.querySelector
}

