var canvas;
var context;
var player;

canvas = document.getElementById("myCanvas");
context = canvas.getContext("2d"); 

player = new Player();

player.draw();
