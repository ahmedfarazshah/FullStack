
var gamePattern = []


var userClickedPatterns = []


var buttonColors = ["red", "blue", "green", "yellow"]



function nextSequence(){
    var randomNumber = Math.floor(Math.random()*4)
    var randomChoosenColor = buttonColors[randomNumber]
    gamePattern.push(randomChoosenColor)

    $("#"+randomChoosenColor).fadeOut(100).fadeIn(100)

    sound(randomChoosenColor)

}

$(".btn").click(function(){
    var userChoosenColor= this.id;
    userClickedPatterns.push(userChoosenColor);
    sound(userChoosenColor)
    animateOnPress(this.id)
})

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