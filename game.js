// game.js
import { Player } from './player.js';

export class Game {
    constructor(canvas, audio2, ctx, idle, walkLeft, walkRight, attack) {
        this.canvas = canvas;
        this.ctx = ctx;
        this.audio2 = audio2;
        this.player = new Player(ctx,canvas, idle, walkLeft, walkRight, attack);
    
    }

    drawColor(r, g, b) {
        this.ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;
    }
    
    // Updated draw function
    draw(context){
        this.player.bombPool.forEach((bomb) => {
            bomb.draw(context); // Use bomb.draw(context) here
        });
        this.player.draw(context); // Draw the player
    }
    
    // Updated update function
    update(){
        this.player.update(); // Update the player
        this.player.bombPool.forEach((bomb) => {
            bomb.update(); // Use bomb.update() here
        });
    }
}
