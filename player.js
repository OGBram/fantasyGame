// player.js
import { Bomb } from "./bomb.js"

export class Player {
    constructor(canvas, audio2, idle, walkLeft, walkRight, attack) {
        this.canvas = canvas;
        this.audio2 = audio2;
        this.width = 512;
        this.height = 320;
        this.spriteWidth = 320;
        this.spriteHeight = 512;
        this.x = 850;
        this.y = 25;
        this.speed = 3;
        this.dx = 0;
        this.dy = 0;
        this.frameX = 0;
        this.frameY = 0;
        this.maxFrame = 11;
        this.spriteTimer = 0;
        this.image = idle;
        this.audio2 = document.getElementById("playerMove");
        this.isAttacking = false;
        this.bombPool = [];
        this.bomb = new Bomb(this);
    }

    draw(context){
        context.save();
        if(this.image === null){
            this.image = document.getElementById("rightBear");
        }
        context.globalAlpha = 1.0;
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
        if (this.image === document.getElementById("throwBear")) {
            this.maxFrame = 7;
        } else {
            this.maxFrame = 11;
        }
    
        if (this.isAttacking === true) {
            this.image = document.getElementById("throwBear");
            this.bombPool.push(new Bomb(this));
        } else if (this.dx > 0) {
            this.image = document.getElementById("rightBear");
        } else if (this.dx < 0) {
            this.image = document.getElementById("leftBear");
        } else if (this.dx === 0) {
            this.image = document.getElementById("idleBear");
        }
        
        if (this.dy > 0 && this.dx === 0) {
            this.image = document.getElementById("rightBear");
        } else if (this.dy < 0 && this.dx === 0) {
            this.image = document.getElementById("rightBear");
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
