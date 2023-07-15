const canvas = document.getElementById("canvas1");

const ctx = canvas.getContext("2d");


// const r1 = new Rect(400, 400, 100, 100);

// r1.draw(ctx);

// function moveRect() {
//     ctx.clearRect(0, 0, canvas.width, canvas.height)
//     r1.animate(canvas.width, canvas.height);
//     r1.draw(ctx);
// }

// setInterval(moveRect, 1);

const rectArray = [];

for (let i = 0; i < 10000; i++) {
    const rect = Rect.random(canvas.width, canvas.height);
    rectArray.push(rect);  
}

console.log(rectArray);

function moveAll(){
    for (const rect of rectArray) {
        rect.animate(canvas.width, canvas.height);
        rect.draw(ctx);
    }
    requestAnimationFrame(moveAll);
}

requestAnimationFrame(moveAll);


//1) creare una classe circle che faccia la stessa cosa della classe Rect
//2) create un'opera d'arte