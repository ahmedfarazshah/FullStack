// the first letter of the text will be capatalized and the rest will be displayed in lowercase.

var name = prompt("What is your name?");

var firstletter = name.slice(0,1).toUpperCase();
console.log(firstletter);

var restName = name.slice(1, name.length).toLowerCase();

alert("Hellow, " + firstletter + restName);


// to calculate dog age if it was a human

var age = prompt("What is your dog's age");

var inHuman = (age - 2 ) *4 +21 ;

alert( inHuman);

