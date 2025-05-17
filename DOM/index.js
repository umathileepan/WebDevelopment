var imgPlayer1 = Math.floor(Math.random()*6)+1;

var imgpath = "images/dice" + imgPlayer1 + ".png";

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src",imgpath);

var imgPlayer2 = Math.floor(Math.random()*6)+1;

var imgpath2 = "images/dice" + imgPlayer2 + ".png";

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src",imgpath2);

if(imgPlayer1 > imgPlayer2){
    document.querySelector("h1").innerHTML = "Player 1 Wins"; 
}else if(imgPlayer2 > imgPlayer1){
    document.querySelector("h1").innerHTML = "Player 2 Wins";
}else{
    document.querySelector("h1").innerHTML = "Draw";
}



