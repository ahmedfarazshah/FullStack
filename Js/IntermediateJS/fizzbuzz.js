// conditional statements and while loops 

var output = [];
var count = 1;

function fizzbuzz() {
    while(count <= 100) {
        if(count % 3 === 0 && count % 5=== 0){
            output.push("fizzBuzz");
        }else if(count % 3 === 0){
            output.push("Fizz");
        }else if(count % 5 === 0){
            output.push("Buzz");
        }else{
            output.push(count);
        }
    count++;
    }
    
    return "the while loop is completed and has worked perfectly"
}


//task 
// randomly picking names for lunch 
/*
var people = []

function addNames(name){
    var listed = prompt("list first peron's name")
    people.push(listed);
}

function list(){
    totalpeople = people.length;
    randomNumIndex = Math.floor(Math.random() * totalpeople);
    RandomName = people[randomNumIndex];

    return alert(RandomName + " will pay for the bills")
}

addNames();
addNames();
addNames();
addNames();

list();
*/

// using for loops for fizzbuzz


//  using for loops 
/*
var list = [];

function fizzbuzz(){
    for(var i = 1; i <= 100; i++){
        if(i % 3 === 0 && i % 5 === 0){
            list.push("FizzBuzz");
        }else if(i % 3 === 0){
            list.push("Fizz");
        }else if(i % 5 === 0){
            list.push("Buzz")
        }else {
            list.push(i);
        }   
    }
    console.log(list)
}
*/