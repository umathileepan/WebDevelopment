function player1(){
    var imgPlayer1 = Math.floor(Math.random(10)*6)+1;
    return imgPlayer1;
}

function player2(){
    var imgPlayer2 = Math.floor(Math.random(10)*6)+1;
    return imgPlayer2;
}
while(true){
var player1 = player1();
var player2 = player2();



if(player1 > player2){
    document.querySelector("h1").innerHTML = "Player 1 Wins"; 
    document.querySelector(".img1").innerHTML = "./images/dice1.png";
}else{
    document.querySelector("h2").innerHTML = "Player 2 Wins";
    document.querySelector(".img2").innerHTML = "./images/dice1.png";
}
}

 