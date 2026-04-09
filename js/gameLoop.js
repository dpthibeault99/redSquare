var canvas;
var context;
var player;
var timer;
var interval = 1000/60; //60 fps


canvas = document.getElementById("myCanvas");
context = canvas.getContext("2d");

player = new gameObject(200,600,this.w,this.h,'#ff00f2')
player.vx = 0; //horizontal movement
player.vy = 0; // vertical movement

npcONE = new gameObject(310,canvas.height/2,100,100,'#00ff00');
npcTWO = new gameObject(500,canvas.height/2,100,100,'#0d007e');
npcTHREE = new gameObject(900,canvas.height/2,100,100,'#ff0000');


timer = setInterval(animate, interval);

function animate()
{
    context.clearRect(0, 0, canvas.width, canvas.height);
    player.move();
    if (player.x > canvas.width + player.width/2) // if player moves off screen 
    {
         // uncomment one or the other to change movment
         // player.x = -player.width/2 //teleports player totally off the screen to the left // Turn this off before turning on bottom one
       player.vx *= -1 // reverse velocity to simulate bounce off right border //READ THIS LINE DANNY!!
    }

    player.drawCircle();
    // player.drawRect();
    npcONE.drawCircle();
    npcTWO.drawCircle();
    npcTHREE.drawCircle();
     // takes a pac-man bite out of the square
}