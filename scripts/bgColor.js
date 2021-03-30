function changeBackground(color) {
    document.querySelector(".random-bg-color").style.backgroundColor = color;
}

function chooseBackground() {
    let bgColors = ["#0c55a2", "#a1201a", "#bf591c", "#58a25c", "#5c3186"]
    let bg = Math.floor(Math.random() * 5);
    changeBackground(bgColors[bg]);
}

window.onload = chooseBackground()