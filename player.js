// player.js
export class Player {
    constructor(canvas, tileHeight, tileWidth, audio2) {
        this.canvas = canvas;
        this.tileWidth = tileWidth;
        this.tileHeight = tileHeight;
        this.audio2 = audio2;
        this.width = tileWidth;
        this.height = tileHeight;
        this.spriteWidth = 48;
        this.spriteHeight = 48;
        this.x = 50;
        this.y = 50;
        this.speed = 5;
        this.dx = 0;
        this.dy = 0;
        this.frameX = 0;
        this.frameY = 0;
        this.maxFrame = 93;
        this.spriteTimer = 0;
        this.image = document.getElementById("earthImage");
        this.audio2 = document.getElementById("playerMove");

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
            this.width*3,
            this.height*3,
        );
    }
    update(){
        this.spriteTimer++;
        if(this.spriteTimer === 4){
            this.frameX < this.maxFrame ? this.frameX++ : this.frameX = 0;
            this.spriteTimer = 0;
        } 
        
        
        this.x += this.dx;
        this.y += this.dy;
        if(this.dx || this.dy > 0){
            this.audio2.play();
        }


        // Ensure the player does not move outside the canvas using this.canvas
        this.x = Math.max(0, Math.min(this.canvas.width - this.width, this.x));
        this.y = Math.max(0, Math.min(this.canvas.height - this.height, this.y));
    
    }
}