let canvas = document.getElementById("myCanvas");
let context = canvas.getContext("2d"); 
// This gives you the drawing context

function drawBall(x, y, radius) {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2); // Create a full 360-degree arc
    ctx.fillStyle = "blue";
    ctx.fill();
    ctx.closePath();
}

    drawBall();

