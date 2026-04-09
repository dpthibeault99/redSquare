let canvas = document.getElementById("myCanvas");
let context = canvas.getContext("2d"); 
// This gives you the drawing context

function drawBall() {
    context.beginPath();
    context.arc(x,y,radius,0,360*Math.PI/180,true)
    context.fillStyle = '#94008dff';
    context.fill();
    context.closePath();
    }

    drawBall();

