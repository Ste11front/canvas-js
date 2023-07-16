class Circle{

    constructor(originX, originY, radius, color = '#000000'){

        this.originX = originX;
        this.originY = originY;
        this.radius = radius;
        this.color = color;

    }

    draw(ctx){
        ctx.beginPath();
        ctx.arc(this.originX, this.originY, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
    }


    static random(canvasWidth, canvasHeight){

        const randomRed = Math.floor(256 * Math.random());
        const randomGreen = Math.floor(256 * Math.random());
        const randomBlue = Math.floor(256 * Math.random());

        const rgbString = 'rgba(' + randomRed + ', ' + randomGreen + ', ' + randomBlue + ', ' + Math.random() + ')'

        const radius = 100 * Math.random();

        const randomX = (canvasWidth  - radius) * Math.random();
        const randomy = (canvasHeight - radius) * Math.random();

        const newCircle = new Circle(randomX, randomy, radius, rgbString);

        return newCircle;

    }


}