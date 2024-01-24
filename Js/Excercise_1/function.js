/*
I am commenting it out due to the third type of function which is a necessary part of the topic


// First type of function

function launch (){
    prompt("Are you sure!!!");
    alert("starting in 2 seconds");
    alert("check the console".toUpperCase);
    console.log("The space ship has been launched and you missed it xd");

}



// Second type of function

function money(investment) {
    var firm = "you have invested " + investment + " Dollars.";
    console.log(firm);
}
money(22);


// Get Milk

function getMilk(money) {
    var noOfBottles = Math.floor( money/1.5);
    var moneySaved = money - Math.floor(noOfBottles * 1.5);
    console.log("you have " + noOfBottles + " bottles and a change of " + moneySaved + " Dollars." )
}

getMilk(5);


// Age Till 90 years old 


function yearsRemaining(age) {
    var totalYears = 90;
    var yearsleft = totalYears - age;
    var daysleft = yearsleft * 365;
    var monthsLeft = yearsleft * 12;

    alert("You have " + yearsleft + " years, OR " + monthsLeft + " months, OR " + daysleft + " days left.")
    
}
yearsRemaining(11);

*/

// This is the third type of function in which the return is used 
// due to the return value the function can be used in other function, named as function call, which will also store the data



function getMilk(money, costOfBottles) {
    var noOfBottles = Math.floor(money/ costOfBottles);
    var chillar = changeMoney(money, costOfBottles);
    

    console.log("You have " + noOfBottles + " bottles, and your change is " + chillar + "$.");
    
}

function changeMoney(money, costOfBottles) {
    var change = money % costOfBottles;
    return change;
}

getMilk(4,2)

var ahmed = "Who are you, Where have you come from, and most importantly describe youself without explaining your ethinicity, country, city, and sibiling information and work"

document.write(ahmed);
