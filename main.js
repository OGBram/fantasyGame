console.log("hello world");
const canvas = document.getElementById("canvasMain");
const ctx = canvas.getContext("2d");
canvas.height = 600;
canvas.width = 800;
ctx.fillStyle = "white";
ctx.font = "100px monospace";
const tileWidth = 32;
const tileHeight = 32;

class Player {
    constructor(){
        this.width = 50;
        this.height = 50;
        this.color = "blue";
        this.x = 50;
        this.y = 450;
        this.speed = 5;  // Speed of movement
        this.dx = 0;     // Horizontal movement
        this.dy = 0;     // Vertical movement
    }
    
    draw(ctx) {
        ctx.save();
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
        ctx.restore();
    }

    update() {
        this.x += this.dx;
        this.y += this.dy;
        
        // Ensure the player does not move outside the canvas
        this.x = Math.max(0, Math.min(canvas.width - this.width, this.x));
        this.y = Math.max(0, Math.min(canvas.height - this.height, this.y));
    }
}

class Game {
    constructor(canvas, ctx, tileHeight, tileWidth) {
        this.canvas = canvas;
        this.ctx = ctx;
        this.player = new Player();
    }

    drawColor(r, g, b) {
        ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;
    }
}

const game = new Game(canvas, ctx, tileWidth, tileHeight);
let x = 50;
let y = 50;

// Key handling
const keys = {
    ArrowUp: false,
    ArrowDown: false,
    ArrowLeft: false,
    ArrowRight: false
};

document.addEventListener('keydown', (e) => {
    if (e.key in keys) {
        keys[e.key] = true;
    }
    updatePlayerDirection();
});

document.addEventListener('keyup', (e) => {
    if (e.key in keys) {
        keys[e.key] = false;
    }
    updatePlayerDirection();
});

function updatePlayerDirection() {
    game.player.dx = (keys.ArrowLeft ? -game.player.speed : 0) + (keys.ArrowRight ? game.player.speed : 0);
    game.player.dy = (keys.ArrowUp ? -game.player.speed : 0) + (keys.ArrowDown ? game.player.speed : 0);
}

// Game Loop
var lastTime;
var requiredElapsed = 1000 / 50;

requestAnimationFrame(loop);

function loop(now) {
    requestAnimationFrame(loop);

    if (!lastTime) { lastTime = now; }
    var elapsed = now - lastTime;

    if (elapsed > requiredElapsed) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        game.drawColor(50, 500, 50);
        game.player.update();
        game.player.draw(ctx);
        ctx.fillText("Hello World", x, y);
        x += 0;
        y += .25;

        if (x > 300 || y > 600) {
            x = 25 + Math.random() * 100;
            y = 0;
        }

        lastTime = now;
    }
}
