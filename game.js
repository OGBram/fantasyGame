// game.js
import { Player } from './player.js';

export class Game {
    constructor(canvas, ctx, tileHeight, tileWidth, audio2) {
        this.canvas = canvas;
        this.ctx = ctx;
        this.audio2 = audio2;
        this.player = new Player(canvas, tileHeight, tileWidth);
        this.tileHeight = tileHeight;
        this.tileWidth = tileWidth;     
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
