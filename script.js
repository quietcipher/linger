let idle = 0;
let lastMove = Date.now();

document.addEventListener('mousemove', () => {
    lastMove = Date.now();
    // maybe say something here later
});

setInterval(() => {
    idle = Date.now() - lastMove;
}, 1000);
