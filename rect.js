class Rect{

    constructor(originX, originY, width, height, color = 'black'){

        this.originX = originX;
        this.originY = originY;
        this.width = width;
        this.height = height;
        this.color = color;
        this.velocityX = (2 * Math.random()) -1;
        this.velocityY = (2 * Math.random()) -1;
    }

    animate(){
        // if (Math.random()>0.8){
        //     this.velocityX = (2 * Math.random()) -1;
        // }
        // if (Math.random()>0.8){
        //     this.velocityY = (2 * Math.random()) -1;
        // }
        // this.originX += this.velocityX;
        // this.originY += this.velocityY;

        if (this.originX < 0 || this.originX + this.width > canvasWidth){
            this.velocityX = this.velocityX * -1;
        }
        if (this.originY < 0 || this.originY + this.height > canvasHeight){
            this.velocityY = this.velocityY * -1;
        }
    }

    draw(ctx){
        ctx.fillStyle = this.color;
        ctx.fillRect(this.originX, this.originY, this.width, this.height)
    }

    static random(canvasWidth, canvasHeight){

        const randomRed = Math.floor(256 * Math.random());
        const randomGreen = Math.floor(256 * Math.random());
        const randomBlue = Math.floor(256* Math.random());

        const rgbString = 'rgb(' + randomRed + ',' + randomGreen + ',' + randomBlue + ')';

        const randomWidth = 500 * Math.random();
        const randomHeight = 500 * Math.random();

        const randomX = canvasWidth * Math.random();
        const randomy = canvasHeight* Math.random();

        const newRect = new Rect(randomX, randomy, randomWidth, randomHeight, rgbString);

        return newRect;
    }
}