var imgPlayer1 = Math.floor(Math.random()*6)+1;

var imgpath = "images/dice" + imgPlayer1 + ".png";

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src",imgpath);

