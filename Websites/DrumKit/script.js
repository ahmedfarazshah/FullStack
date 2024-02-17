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
// var sound = new Audio("./sounds/tom-1.mp3")
// sound.play();


var numOfDrums = document.querySelectorAll(".drum").length

for(var i = 0; i < numOfDrums; i++){
    document.querySelectorAll(".drum")[i].addEventListener('click', function() {
        var selec = this.textContent;
        switch (selec) {
            case 'w':
                var sound = new Audio("./sounds/tom-1.mp3")
                sound.play();
            
            break;   // if break is not used then it will also apply all the cases to the event that happened

            case 'a':
                var tom2 = new Audio("sounds/tom-2.mp3" )
                tom2.play();
            
                break;
            case 's':
                var tom3 = new Audio('sounds/tom-3.mp3')
                tom3.play();
                break;

            case 'd':
                var tom4 = new Audio("sounds/tom-4.mp3")
                tom4.play()

                break;
            case 'j':
                var crash = new Audio('sounds/crash.mp3')
                crash.play();
                break;
            case "k":
                var kickBass = new Audio("sounds/kick-bass.mp3")
                kickBass.play();
                break;

            case 'l':
                var snare = new Audio('sounds/snare.mp3')
                snare.play()
                break;

             default:
                alert("something fishy fishy")
        }
        // this.style.color= 'white' // this keyword selects the current item
        // e.target.style.color = 'blue' // can also do using arrow functions
    })
}








/*
instead of switch if we have used if else statements then this was the code 

        if(selec ===  'w'){
            var tom1 = new Audio("./sounds/tom-1.mp3")
            tom1.play();
        }
        else if(selec === 'a'){
            var tom2 = new Audio("./sounds/tom-2.mp3")
            tom2.play();x
        }
        else if (selec === 's'){
            var tom3 = new Audio("./sounds/tom-3.mp3")
            tom3.play();    
        }
        else if (selec === 'd'){
            var tom4 = new Audio("./sounds/tom-3.mp3")
            tom4.play();    
        }
        else if (selec === 'j'){
            var crash = new Audio("./sounds/crash.mp3")
            crash.play();    
        }        
        else if (selec === 'k'){
            var kickBass = new Audio("./sounds/kick-bass.mp3")
            kickBass.play();    
        }
        else if(selec === 'l'){
            var snare = new Audio('sounds/snare.mp3')
            snare.play();
        }
        else{
            alert('nothing but a button was pressed')
        }
        
*/

// document.addEventListener('keypress', function(e){
//     console.log(e)
// })
// document.addEventListener('click', (e) => {
//     console.log(e)
// }) // log the event that is happening



