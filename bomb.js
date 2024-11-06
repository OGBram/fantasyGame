//bomb.js
export class Bomb  {
    constructor(player){
        this.spriteWidth = 32;
        this.spriteHeight = 64; 
        this.width = this.spriteWidth;
        this.height = this.spriteHeight;
        this.x = player.x+100;
        this.y = player.y-25;
        this.dx = 2.5 + Math.random();
        this.dy = Math.random()*1.5;
        this.frameX = 0;
        this.frameY = 0;
        this.maxFrame = 100;
        this.image = document.getElementById("bomb");
        this.spriteTimer = 0;        
    }
    draw(context) {
        context.drawImage(
        this.image,
        this.frameX * this.spriteWidth,
        this.frameY * this.spriteHeight,
        this.spriteWidth,
        this.spriteHeight,
        this.x,
        this.y,
        this.width*2,
        this.height*2,
        );
    }
    update(){
        this.spriteTimer++;
        if(this.spriteTimer === 25){
            this.frameX < this.maxFrame ? this.frameX++ : this.frameX = 0;
            this.spriteTimer = 0;
        }     
        this.x += this.dx;
        this.y += this.dy;
    }
}