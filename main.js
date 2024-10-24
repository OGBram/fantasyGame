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
const audio1 = document.getElementById("mainSound");
audio1.play();
audio1.repeat = true;

// game.js
const game = new Game(canvas, ctx, tileWidth, tileHeight);  

// uses: inputHandler.js
setupInputListeners(game);

// Game Loop uses: player.js, game.js

let lastTime;
const requiredElapsed = 1000 / 50;

requestAnimationFrame(loop);

function loop(now) {
    requestAnimationFrame(loop);

    if (!lastTime) { lastTime = now; }
    const elapsed = now - lastTime;

    if (elapsed > requiredElapsed) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        game.player.update(); 
        game.player.draw(ctx); 

        lastTime = now;
    }
}
