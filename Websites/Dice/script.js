var firstPlayerRandom = Math.floor(Math.random()*6)+1;
var secPlayerRandom = Math.floor(Math.random()*6)+1;

// if(firstPlayerRandom === 1){document.querySelector(".dice1").setAttribute("src", "./Assets/Images/dice1.png")}
// if(firstPlayerRandom === 2){document.querySelector(".dice1").setAttribute("src", "./Assets/Images/dice2.png")}
// if(firstPlayerRandom === 3){document.querySelector(".dice1").setAttribute("src", "./Assets/Images/dice3.png")}
// if(firstPlayerRandom === 4){document.querySelector(".dice1").setAttribute("src", "./Assets/Images/dice4.png")}
// if(firstPlayerRandom === 5){document.querySelector(".dice1").setAttribute("src", "./Assets/Images/dice5.png")}
// if(firstPlayerRandom === 6){document.querySelector(".dice1").setAttribute("src", "./Assets/Images/dice6.png")}
// if(secPlayerRandom === 1){document.querySelector(".dice2").setAttribute("src", "./Assets/Images/dice1.png")}
// if(secPlayerRandom === 2){document.querySelector(".dice2").setAttribute("src", "./Assets/Images/dice2.png")}
// if(secPlayerRandom === 3){document.querySelector(".dice2").setAttribute("src", "./Assets/Images/dice3.png")}
// if(secPlayerRandom === 4){document.querySelector(".dice2").setAttribute("src", "./Assets/Images/dice4.png")}
// if(secPlayerRandom === 5){document.querySelector(".dice2").setAttribute("src", "./Assets/Images/dice5.png")}
// if(secPlayerRandom === 6){document.querySelector(".dice2").setAttribute("src", "./Assets/Images/dice6.png")}

// above is how I did before and below is how I had done after watching the tutorials

var imageSource1 = "Assets/Images/dice" + firstPlayerRandom + ".png";
document.querySelectorAll("img")[0].setAttribute("src", imageSource1);

var imageSource2 = "Assets/Images/dice" + secPlayerRandom + ".png";
var image2 = document.querySelector('.dice2');
image2.setAttribute("src", imageSource2);




if(firstPlayerRandom === secPlayerRandom){
    document.querySelector("h1").textContent = "It's a DRAW !!";
}
else if (firstPlayerRandom > secPlayerRandom){
    document.querySelector("h1").textContent = "🚩 Player 1 wins!"
}else{
    document.querySelector("h1").textContent = "Player 2 wins! 🚩";
}

