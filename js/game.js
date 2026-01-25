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
    world = 0;
    world = new World(canvas);
    world.startGame();
    toggleOverlay("start-and-stop-screen");
}

function openGameOverScreen() {
    world.stopGame();
    const gameoverTemplate = getGameOverTemplate();
    let gameoverlayRef = document.getElementById('start-and-stop-screen');
    gameoverlayRef.innerHTML = gameoverTemplate;
    toggleOverlay("start-and-stop-screen");   
}

function openWinScreen() {
    world.stopGame();
    const gameoverTemplate = getWinTemplate();
    let gameoverlayRef = document.getElementById('start-and-stop-screen');
    gameoverlayRef.innerHTML = gameoverTemplate;
    toggleOverlay("start-and-stop-screen");   
}