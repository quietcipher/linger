let idle = 0;
let lastMove = Date.now();
let fragments = [];
let whisper = document.getElementById('whisper');

// load fragments
fetch('fragments.txt')
    .then(r => r.text())
    .then(t => {
        fragments = t.split('\n').filter(x => x.trim().length > 0);
        // feels too direct. maybe randomize later.
    });

// idle detection
document.addEventListener('mousemove', () => {
    lastMove = Date.now();
});

setInterval(() => {
    idle = Date.now() - lastMove;

    if (idle > 5000) {
        sayRandom();
        // too sharp. soften later.
    }
}, 1200);

function sayRandom() {
    if (fragments.length === 0) return;
    let line = fragments[Math.floor(Math.random() * fragments.length)];
    whisper.textContent = line;
    setTimeout(() => whisper.textContent = '', 4000);
}
