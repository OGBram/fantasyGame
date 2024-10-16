// player.js
export class Player {
    constructor(canvas) {
        this.canvas = canvas;  // Store the canvas reference
        this.width = 50;
        this.height = 50;
        this.color = "blue";
        this.x = 50;
        this.y = 450;
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
        this.x += this.dx;
        this.y += this.dy;

        // Ensure the player does not move outside the canvas using this.canvas
        this.x = Math.max(0, Math.min(this.canvas.width - this.width, this.x));
        this.y = Math.max(0, Math.min(this.canvas.height - this.height, this.y));
    }
}
