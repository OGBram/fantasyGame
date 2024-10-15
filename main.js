console.log("hello world");
const canvas = document.getElementById("canvasMain");
const ctx = canvas.getContext("2d");
canvas.height = 600;
canvas.width = 800;
ctx.fillStyle = "white";
ctx.font = "100px monospace";
const tileWidth = 32;
const tileHeight = 32;

class Game {
    constructor(canvas, ctx, tileHeight, tileWidth) {
        this.canvas = canvas;
        this.ctx = ctx;
    }
    drawColor(r,g,b){
        ctx.save;
        ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;
        ctx.restore;
    }
}

const game = new Game(canvas, ctx, tileWidth, tileHeight);
let x = 50;
let y = 50;

//Game Loop
var lastTime;
    var requiredElapsed = 1000 / 50; 

    requestAnimationFrame(loop);

    function loop(now) {
        requestAnimationFrame(loop);

        if (!lastTime) { lastTime = now; }
        var elapsed = now - lastTime;

        if (elapsed > requiredElapsed) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            game.drawColor(500,500,0);
            ctx.fillText("Hello World", x, y);
            x += 0;
            y += 1;
            if (x > 300 || y > 600) {
                x = 25 + Math.random()*100;
                y = 0;
            };
            
            lastTime = now;
        }
    }
