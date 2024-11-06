//projectile.js
export class Projectile {
    constructor(player, canvas, projectilePool) {
        this.projectilePool = projectilePool;
        this.canvas = canvas;
        this.width = 320; 
        this.height = 512;
        this.spriteWidth = 320;
        this.spriteHeight = 512;
        this.x = player.x;
        this.y = player.y;
        this.speed = 7; 
        this.dx = player.dx !== 0 ? player.dx * this.speed : this.speed; // Direction based on player movement
        this.dy = player.dy !== 0 ? player.dy * this.speed : 0;
        this.frameX = 0;
        this.frameY = 0;
        this.maxFrame = 11;
        this.spriteTimer = 0;
        this.image = document.getElementById(""); // Use a different image for the projectile
    }

    draw(context) {
        context.save();
        context.globalAlpha = 1.0;
        context.drawImage(
            this.image,
            this.frameX * this.spriteWidth,
            this.frameY * this.spriteHeight,
            this.spriteWidth,
            this.spriteHeight,
            this.x,
            this.y,
            this.width,
            this.height
        );
        context.restore();
    }

    update() {
        this.projectilePool.forEach((projectile) => {
            projectile.draw(context);
        });
        
        this.x += this.dx;
        this.y += this.dy;

        this.spriteTimer++;
        if (this.spriteTimer === 2) {
            this.frameX = this.frameX < this.maxFrame ? this.frameX + 1 : 0;
            this.spriteTimer = 0;
        }

        // Remove projectile if it goes outside canvas bounds
        if (this.x < 0 || this.x > this.canvas.width || this.y < 0 || this.y > this.canvas.height) {
            this.markedForDeletion = true; // Flag to be removed from array
        }
    }
}
