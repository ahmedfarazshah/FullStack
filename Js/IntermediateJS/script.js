// love calculator by DR love
// Love Calculator



var firstName = prompt("What is your Name?");
var secondName = prompt("What is your Partner's name?")

var randomNum = Math.random();
randomNum = Math.floor((100 * randomNum)+ 1);
// === is used to compare 2 values
// == is used to check true or false aka comparsion operator
// = is for assigning the value

// the if else is called as control statements 

if (randomNum === 100){
    alert("Calculations by Dr Love : " + firstName.toUpperCase() + " & " +  secondName.toUpperCase() + " The love is " + randomNum + "%. Your love is like Kanye Loves Kanye" )
}else if (randomNum > 70 && randomNum <100){
    alert("Calculations by Dr Love : " + firstName.toUpperCase() + " & " +  secondName.toUpperCase() + " The love is " + randomNum + "%. God Bless You" )
}else if (randomNum > 50 && randomNum <= 70) {
    alert("Calculations by Dr Love : " + firstName.toUpperCase() + " & " +  secondName.toUpperCase() + " The love is " + randomNum + "%. Your have strong connection")
} else{
    alert("Calculations by Dr Love : " + firstName.toUpperCase() + " & " +  secondName.toUpperCase() + " The love is " + randomNum + "%. Your love is like oil and water.")
    
}