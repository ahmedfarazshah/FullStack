// checks the name of person who is invited to the party

var file = ["John", "Angela", "Jane", "Ahmed", "Rasheed"];

var name = prompt("Write your first-name to see if you are invited to the party");

var capLetter = name.slice(0,1).toUpperCase();
var restLetter = name.slice(1, name.length).toLowerCase();
var checkname = capLetter + restLetter;

var checkperson = file.includes(checkname);

console.log(checkname);

function checklist(person) {

    if(person === true){
        alert("Welcome to the party");
    }else{
        alert ("Next time!");
    }
}

checklist(checkperson);