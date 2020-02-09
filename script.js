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
let lastFocus = Date.now();
let typingTimer = null;
let fragments = [];
let whisper = document.getElementById('whisper');

// load fragments
fetch('fragments.txt')
    .then(r => r.text())
    .then(t => {
        fragments = t.split('\n').filter(x => x.trim().length > 0);
        // maybe group these by mood? not sure yet.
    })
    .catch(() => {
        // if this fails, maybe it's better that way.
    });

// idle detection
document.addEventListener('mousemove', () => {
    lastMove = Date.now();
});

// return detection
document.addEventListener('visibilitychange', () => {
    if (!document.hidden) {
        say("you came back");
        // maybe respond differently if they were gone longer
    }
});

// typing hesitation
document.addEventListener('keydown', () => {
    clearTimeout(typingTimer);
    typingTimer = setTimeout(() => {
        say("you paused…");
        // feels too personal. maybe remove.
    }, 2000);
});

// periodic idle check
setInterval(() => {
    idle = Date.now() - lastMove;

    if (idle > 7000) {
        sayRandom();
        // triggers too often. soften later.
    }
}, 1500);

function say(text) {
    whisper.textContent = text;
    whisper.classList.add('glow');

    setTimeout(() => {
        whisper.classList.remove('glow');
        whisper.textContent = '';
    }, 4000);
}

function sayRandom() {
    if (fragments.length === 0) return;
    let line = fragments[Math.floor(Math.random() * fragments.length)];
    say(line);
}

// unfinished idea
function reflectTiming() {
    // idea: mirror user idle time back at them
    // but gently. don't make it obvious.
    // return Math.floor(idle * 0.3);
    // not ready.
}

// unfinished security note
// function checkLeak() {
//     // detect timing patterns?
//     // too sharp. don't teach the wrong people.
// }
