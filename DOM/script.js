function player1(){
    var imgPlayer1 = Math.floor(Math.random()*6)+1;
    if(imgPlayer1 = 1){
        document.querySelector(".img1").innerHTML = "./images/dice1.png";
    }else if(imgPlayer1 = 2){
         document.querySelector(".img1").innerHTML = "./images/dice2.png";
    }else if(imgPlayer1 = 3){
         document.querySelector(".img1").innerHTML = "./images/dice3.png";
    }else if(imgPlayer1 = 4){
         document.querySelector(".img1").innerHTML = "./images/dice4.png";
    }else if(imgPlayer1 = 5){
         document.querySelector(".img1").innerHTML = "./images/dice5.png";
    }else if(imgPlayer1 = 6){
         document.querySelector(".img1").innerHTML = "./images/dice6.png";
    }
    return imgPlayer1;
}

function player2(){
    var imgPlayer2 = Math.floor(Math.random()*6)+1;
    if(imgPlayer2 = 1){
    document.querySelector(".img2").innerHTML = "./images/dice1.png";
}else if(imgPlayer2 = 2){
    document.querySelector(".img2").innerHTML = "./images/dice2.png";
}else if(imgPlayer2 = 3){
    document.querySelector(".img2").innerHTML = "./images/dice3.png";
}else if(imgPlayer2 = 4){
    document.querySelector(".img2").innerHTML = "./images/dice4.png";
}else if(imgPlayer2 = 5){
    document.querySelector(".img2").innerHTML = "./images/dice5.png";
}else if(imgPlayer2 = 6){
    document.querySelector(".img2").innerHTML = "./images/dice6.png";
}
    return imgPlayer2;
}


var player1Num = player1();
var player2Num = player2();

if(player1Num > player2Num){
    document.querySelector("h1").innerHTML = "Player 1 Wins"; 
    
}else if(player2Num > player2Num){
    document.querySelector("h1").innerHTML = "Player 2 Wins";
}else{
    document.querySelector("h1").innerHTML = "Refresh Me";
}



 