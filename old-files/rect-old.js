class Rect{

    constructor(originX, originY, width, height, color = 'black'){

        this.originX = originX;
        this.originY = originY;
        this.width = width;
        this.height = height;
        this.color = color;

    }

    draw(ctx){
        ctx.strokeStyle = this.color;
        ctx.strokeRect(this.originX, this.originY, this.width, this.height)
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