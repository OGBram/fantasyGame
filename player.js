// player.js
import { Projectile } from "./projectile.js"

export class Player {
    constructor(canvas, tileHeight, tileWidth, audio2) {
        this.canvas = canvas;
        this.tileWidth = tileWidth;
        this.tileHeight = tileHeight;
        this.audio2 = audio2;
        this.width = 512;
        this.height = 320;
        this.spriteWidth = 320;
        this.spriteHeight = 512;
        this.x = 5;
        this.y = 5;
        this.speed = 5;
        this.dx = 0;
        this.dy = 0;
        this.frameX = 0;
        this.frameY = 0;
        this.maxFrame = 11;
        this.spriteTimer = 0;
        this.image = document.getElementById("rightBear");
        this.audio2 = document.getElementById("playerMove");
        this.isAttacking = false;
        this.projectilePool = [];
        this.projectile = new Projectile(this.x, this.y, canvas);
    }

    draw(context){
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
            this.width/2,
            this.height/2,
        );
    }
    update(){
        if(this.image = document.getElementById("throwBear")){
            this.maxFrame = 7;
        }else{
            this.maxFrame = 11;
        }

        this.spriteTimer++;
        if(this.spriteTimer === 2){
            this.frameX < this.maxFrame ? this.frameX++ : this.frameX = 0;
            this.spriteTimer = 0;
        } 
        
        
        this.x += this.dx;
        this.y += this.dy;

        if (this.isAttacking === true){
            this.image = document.getElementById("throwBear");
            // this.projectilePool.push(new Projectile(this.x, this.y, this.projectilePool));
        }
        else if(this.dx > 0){
            this.image = document.getElementById("rightBear");
        }else if(this.dx < 0){
            this.image = document.getElementById("leftBear");
        }else if(this.dx === 0){
            this.image = document.getElementById("idleBear");
        }      
        if(this.dy > 0 && this.dx === 0){
            this.image = document.getElementById("rightBear");
        }else if(this.dy < 0 && this.dx === 0){
            this.image = document.getElementById("rightBear");
        }
        
        // this.projectilePool.forEach((projectile) => {
        //     this.projectile.draw(context);
        // });
        

        // Ensure the player does not move outside the canvas using this.canvas
        this.x = Math.max(0, Math.min(this.canvas.width - this.width, this.x));
        this.y = Math.max(0, Math.min(this.canvas.height - this.height, this.y));
    
    }
}