// main.js
import { Game } from './game.js';

console.log("hello world");

const canvas = document.getElementById("canvasMain");
const ctx = canvas.getContext("2d");
canvas.height = 600;
canvas.width = 800;

ctx.fillStyle = "white";
ctx.font = "100px monospace";

const tileWidth = 32;
const tileHeight = 32;

const game = new Game(canvas, ctx, tileWidth, tileHeight);  // Pass the canvas here

let x = 50;
let y = 50;

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
        game.player.update();  // Update the player's position
        game.player.draw(ctx); // Draw the player
        ctx.fillText("Hello World!", x, y);
        x += 0;
        y += .25;

        if (x > 300 || y > 600) {
            x = 25 + Math.random() * 100;
            y = 0;
        }

        lastTime = now;
    }
}
