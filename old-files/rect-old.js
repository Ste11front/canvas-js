class Rect{

    constructor(originX, originY, width, height, color = '#000000'){

        this.originX = originX;
        this.originY = originY;
        this.width = width;
        this.height = height;
        this.color = color;

    }

    draw(ctx){
        ctx.fillStyle = this.color;
        ctx.fillRect(this.originX, this.originY, this.width, this.height)
    }


    static random(canvasWidth, canvasHeight){

        const randomRed = Math.floor(256 * Math.random());
        const randomGreen = Math.floor(256 * Math.random());
        const randomBlue = Math.floor(256 * Math.random());

        const rgbString = 'rgba(' + randomRed + ', ' + randomGreen + ', ' + randomBlue + ', ' + Math.random() + ')'

        const randomWidth = 200 * Math.random();
        const randomHeight = 200 * Math.random();

        const randomX = (canvasWidth  - randomWidth) * Math.random();
        const randomy = (canvasHeight - randomHeight) * Math.random();

        const newRect = new Rect(randomX, randomy, randomWidth, randomHeight, rgbString);

        return newRect;

    }


}