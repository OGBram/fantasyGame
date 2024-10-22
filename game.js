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
}
