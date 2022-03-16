// An anime.js typing animation for the home page that cycles through the uses.

const uses = [
    "moderation",
    "fun",
    "utility",
    "games",
    "reaction roles",
    "economy",
    "server management"
]

function getPercentageOfString(string, percentage) {
    return string.substring(0, Math.floor(string.length * percentage));
}

let currentUse = 0;

anime({
    targets: "#typing-anim",
    color: "#000",
    duration: 2000,
    easing: "linear",
    loop: true,
    direction: "alternate",
    update: function(anim) {
        const percentage = anim.progress / 50;
        document.getElementById("typing-anim").innerHTML = getPercentageOfString(uses[Math.floor(currentUse/2)], percentage);
    },
    loopComplete: function(anim) {
        if (currentUse === uses.length*2 - 1) {
            currentUse = 0;
        } else {
            currentUse++;
        }
    }
})