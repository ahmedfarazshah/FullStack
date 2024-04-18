/*
var age = prompt("What is your dog's age");

var inHuman = (age - 2 ) *4 +21 ;

alert( inHuman);

*/
// BMI = body mass Index

function calcBmi (weight, height) {
    var data = weight / (height * height);
    var file = weight / Math.pow(height, 2);
    // or you can do math.pow(number, exponent)

    // to round-off the number you have to use a property math.round
    // You can use file or data as per your need
    return Math.round(data);
}

console.log("Your BMI is " + calcBmi(44, 1.2) + " kg/m^2")

