// player.js
export class Player {
    constructor(canvas, tileHeight, tileWidth) {
        this.canvas = canvas;  // Store the canvas reference
        this.tileWidth = tileWidth;
        this.tileHeight = tileHeight;
        this.width = tileWidth;
        this.height = tileHeight;
        this.color = "yellow";
        this.x = 50;
        this.y = 50;
        this.speed = 5;
        this.dx = 0;
        this.dy = 0;
    }

    draw(ctx) {
        ctx.save();
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
        ctx.restore();
    }

    update() {
        //flashing player colors
        if(this.color === "yellow"){
                this.color = "red";
            }else if(this.color === "red"){
                this.color = "yellow";
            }

        this.x += this.dx;
        this.y += this.dy;

        // Ensure the player does not move outside the canvas using this.canvas
        this.x = Math.max(0, Math.min(this.canvas.width - this.width, this.x));
        this.y = Math.max(0, Math.min(this.canvas.height - this.height, this.y));
    }
}
