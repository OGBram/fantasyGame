// player.js
import { Bomb } from "./bomb.js"

export class Player {
    constructor(canvas, ctx) {
        this.ctx = ctx;
        this.canvas = canvas;
        this.width = 512;
        this.height = 320;
        this.spriteWidth = 320;
        this.spriteHeight = 475;
        this.x = 850;
        this.y = 25;
        this.speed = 3;
        this.dx = 0;
        this.dy = 0;
        this.frameX = 0;
        this.frameY = 0;
        this.maxFrame = 11;
        this.spriteTimer = 0;
        this.image = document.getElementById("bearPng");
        this.audio2 = document.getElementById("playerMove");
        this.isAttacking = false;
        this.bombPool = [];
        this.bomb = new Bomb(this);
    }

    draw(context){
        context.drawImage(
            this.image,
            this.frameX * this.spriteWidth,
            this.frameY * this.spriteHeight,
            this.spriteWidth,
            this.spriteHeight,
            this.x,
            this.y,
            this.width/3,
            this.height/2,
        );
    }
    update() {
        // Update player state
        if (this.frameY > 2) {
            this.maxFrame = 7;
        } else {
            this.maxFrame = 11;
        }
    
        if (this.isAttacking === true) {
            this.frameY = 3;
            this.bombPool.push(new Bomb(this));
        } else if (this.dx > 0) {
            this.frameY = 1;
        } else if (this.dx < 0) {
            this.frameY = 2;
        } else if (this.dx === 0) {
            this.frameY = 0;
        }
        
        if (this.dy > 0 && this.dx === 0) {
            this.frameY = 1;
        } else if (this.dy < 0 && this.dx === 0) {
            this.frameY = 1;
        }
    
        // Update bombs and remove those off canvas
        this.bombPool = this.bombPool.filter((bomb) => {
            bomb.update();
            // Check if bomb is within canvas boundaries
            return (
                bomb.x + bomb.width > 0 &&
                bomb.x < this.canvas.width &&
                bomb.y + bomb.height > 0 &&
                bomb.y < this.canvas.height
            );
        });
    
        // Update sprite animation
        this.spriteTimer++;
        if (this.spriteTimer === 3) {
            this.frameX < this.maxFrame ? this.frameX++ : this.frameX = 0;
            this.spriteTimer = 0;
        }
    
        // Move player
        this.x += this.dx;
        this.y += this.dy;
    
        // Ensure player stays within the canvas
        this.x = Math.max(0, Math.min(this.canvas.width - this.width, this.x));
        this.y = Math.max(0, Math.min(this.canvas.height - this.height, this.y));
    }
    
    }
