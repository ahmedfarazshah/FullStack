
var gamePattern = []
var userClickedPatterns = []

var buttonColors = ["red", "blue", "green", "yellow"]

var started = false;
var level = 0;

// 0n the keypress the game will start
$(document).keypress(function(){
    if(!started){
        nextSequence();
        started = true;
    }
})



$(".btn").click(function(){
    var userChoosenColor= this.id;
    userClickedPatterns.push(userChoosenColor);
    sound(userChoosenColor)
    animateOnPress(this.id)
})


function nextSequence(){
    var randomNumber = Math.floor(Math.random()*4)
    var randomChoosenColor = buttonColors[randomNumber]
    gamePattern.push(randomChoosenColor)

    $("#"+randomChoosenColor).fadeOut(100).fadeIn(100)

    sound(randomChoosenColor)
    level++;
    $("#level-title").text("level " + level)


}



function sound(name){
    var soundToPlay = new Audio("Assets/sounds/"+name+".mp3")
    soundToPlay.play()

}
function animateOnPress(currentColor){
    $("#"+currentColor).addClass("pressed")
    setTimeout(() => {
        $("#"+currentColor).removeClass('pressed')
    }, 80);
}