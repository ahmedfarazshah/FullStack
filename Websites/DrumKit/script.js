// alert("hey I have done css and html by myself")
// event listerner is the method of EventTarget object
// just for the practice to add the event listener

document.querySelector(".w").addEventListener("click", function(){alert("hey 'w' have got click")}); // the function needs to be written in the eventlistner function/ method
document.querySelector(".a").addEventListener("click", function(){alert("hey 'a' have got click")});
document.querySelector(".s").addEventListener("click", function(){alert("hey 's' have got click")});
document.querySelector(".d").addEventListener("click", function(){alert("hey 'd' have got click")});
document.querySelector(".j").addEventListener("click", function(){alert("hey 'j' have got click")});
document.querySelector(".k").addEventListener("click", function(){alert("hey 'k' have got click")});
document.querySelector(".l").addEventListener("click", function(){alert("hey 'l' have got click")});




document.querySelector("h1").addEventListener("click", ifClicked) // if you add function parentheis the function gets called so we don't the ()
function ifClicked(){
    alert("New Click")
}