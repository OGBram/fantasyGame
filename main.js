//main.js
import { Game } from './game.js';
import { setupInputListeners } from './inputHandler.js';
window.onload = function() {
    const canvas = document.getElementById("canvasMain");
    const ctx = canvas.getContext("2d");
    canvas.height = 3000;
    canvas.width = 3000;
    ctx.fillStyle = "white";
    ctx.font = "100px monospace";
    const tileWidth = 32;
    const tileHeight = 32;
    const audio1 = document.getElementById("mainSound");
    audio1.play();
    audio1.repeat = true;
    const idle = document.getElementById("idleBear");
    const walkLeft =  document.getElementById("leftBear");
    const walkRight = document.getElementById("rightBear");
    const attack = document.getElementById("throwBear");

    const game = new Game(canvas, ctx);  
    setupInputListeners(game);

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
            game.update()
            game.draw(ctx) 

            lastTime = now;
        }
    }
}
