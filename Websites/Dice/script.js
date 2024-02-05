var firstPlayerRandom = Math.floor(Math.random()*6)+1;
var secPlayerRandom = Math.floor(Math.random()*6)+1;


if(firstPlayerRandom === secPlayerRandom){
    document.querySelector("h1").textContent = "It's a DRAW !!";
}else if (firstPlayerRandom > secPlayerRandom){
    document.querySelector("h1").textContent = "Player 1 wins &#128681"
}else{
    document.querySelector("h1").textContent = "Player 2 wins";
}
