
// Leap Year Solution

function leapYear(year) {

    if(year % 4 === 0){
        if(year % 100 === 0){
            if(year % 400 === 0){
                return "Happy leap year";
            }else{
                return 'Not a leap year';
            }
        }else{
            return "Happy leap year";
        }
    }else{
        return "Not a Leap year";
    }
}

var yearListed = prompt("Which is the year you want to check?")
alert(leapYear(yearListed));
console.log(yearListed);