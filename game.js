// game.js
import { Player } from './player.js';

export class Game {
    constructor(canvas, ctx) {
        this.canvas = canvas;
        this.ctx = ctx;
        this.player = new Player(canvas, ctx);
    
    }

    drawColor(r, g, b) {
        this.ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;
    }
    

    draw(context){
        this.player.bombPool.forEach((bomb) => {
            bomb.draw(context); // Use bomb.draw(context) here
        });
        this.player.draw(context); // Draw the player
        context.fillText("Controls: up-down-left-right-space", 1500, 100, 500)
    }

    update(){
        this.player.update(); // Update the player
        this.player.bombPool.forEach((bomb) => {
            bomb.update(); // Use bomb.update() here
        });
    }
}
