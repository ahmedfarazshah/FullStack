// alert("hey I have done css and html by myself")

// event listerner is the method of Event object and value of the target property/key 
// just for the practice to add the event listener

/*

document.querySelector(".w").addEventListener("click", function(){alert("hey 'w' have got click")}); // the function needs to be written in the eventlistner function/ method
document.querySelector(".a").addEventListener("click", function(){alert("hey 'a' have got click")});
document.querySelector(".s").addEventListener("click", function(){alert("hey 's' have got click")});
document.querySelector(".d").addEventListener("click", function(){alert("hey 'd' have got click")});
document.querySelector(".j").addEventListener("click", function(){alert("hey 'j' have got click")});
document.querySelector(".k").addEventListener("click", function(){alert("hey 'k' have got click")});
document.querySelector(".l").addEventListener("click", function(){alert("hey 'l' have got click")});
use a loop so that you can save time

*/
var numOfDrums = document.querySelectorAll(".drum").length
for(var i = 0; i < numOfDrums; i++){
    document.querySelectorAll(".drum")[i].addEventListener('click', () => {
        alert("a drum instrument got clicked")
    })
}

// simply the while loop is long form of for loop or it used for checkbox until is clicked or a player is alive 
/*
var i = 0;
while(i<7){
    document.querySelectorAll(".drum")[i].addEventListener('click', () => {
        alert("using the while loop")
    })
    i++;
}
setTimeout(() => {
    console.log("time bomb started and don't exit the page")
}, 3000);
*/

