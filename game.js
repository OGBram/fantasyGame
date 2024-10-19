// game.js
import { Player } from './player.js';

export class Game {
    constructor(canvas, ctx, tileHeight, tileWidth) {
        this.canvas = canvas;
        this.ctx = ctx;
        this.player = new Player(canvas, tileHeight, tileWidth);
        this.tileHeight = tileHeight;
        this.tileWidth = tileWidth     
    }

    drawColor(r, g, b) {
        this.ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;
    }
}
