const canvas = document.getElementById('canvas1');

const ctx = canvas.getContext('2d');

for (let i = 0; i < 100; i++) {
    const r1 = Rect.random(canvas.width, canvas.height);

    r1.draw(ctx);
    
}