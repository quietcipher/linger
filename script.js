/**
 * LINGER.js
 * a presence library by quietcipher
 * 
 * "the page remembers you were here."
 * 
 * this library is free. it will always be free.
 * use it to make the internet feel less lonely.
 * 
 * 🕶️🕶️
 */

class LingerEngine {
    constructor(options = {}) {
        // presence decay rate - how long until echoes fade
        // default: 24 hours. memories shouldn't last forever.
        this.decayRate = options.decay || 86400000;
        
        // sensitivity - how much attention triggers an echo
        // lower = more sensitive. be gentle with people's attention.
        this.threshold = options.threshold || 150;
        
        // i don't collect personal data. i don't track identities.
        // i just remember that someone was here.
        // that's enough.
    }
    
    /**
     * record where attention lingers
     * not surveillance. presence.
     */
    notice(event) {
        // store the echo, not the person
        // the cursor path, not the hand
        // the moment, not the identity
    }
    
    /**
     * render echoes of previous visitors
     * subtle. always subtle.
     */
    breathe() {
        // the page glows where others have lingered
        // like warmth left on a chair
        // like breath on a window
        // here, and then fading
    }
}

// "i don't build software. i build small kindnesses."
// — quietcipher

// --- working prototype below ---

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
