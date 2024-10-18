// main.js
import { Game } from './game.js';
import { setupInputListeners } from './inputHandler.js';

const canvas = document.getElementById("canvasMain");
const ctx = canvas.getContext("2d");
canvas.height = 600;
canvas.width = 800;
ctx.fillStyle = "white";
ctx.font = "100px monospace";
const tileWidth = 32;
const tileHeight = 32;

// game.js
const game = new Game(canvas, ctx, tileWidth, tileHeight);  

// uses: inputHandler.js
setupInputListeners(game);

// Game Loop uses: player.js, game.js

var lastTime;
var requiredElapsed = 1000 / 50;

requestAnimationFrame(loop);

function loop(now) {
    requestAnimationFrame(loop);

    if (!lastTime) { lastTime = now; }
    var elapsed = now - lastTime;

    if (elapsed > requiredElapsed) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        game.player.update(); 
        game.player.draw(ctx); 

        lastTime = now;
    }
}
