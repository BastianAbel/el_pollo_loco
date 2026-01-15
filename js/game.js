let canvas;
let world;


function init() {
    canvas = document.getElementById('canvas');
    world = new World(canvas);
    setMobileButtonEventlisteners()
    addEventlistenerForFirstInteraction()
}

function start() {
    world.startGame();
    toggleOverlay("start-and-stop-screen");
}

function restart() {
    world = new World(canvas);
    world.startGame();
}

function openGameOverScreen() {
    world.stopGame();
    toggleOverlay("start-and-stop-screen");
}