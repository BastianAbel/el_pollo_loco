let canvas;
let world;
let resizeTimer;


function init() {
    canvas = document.getElementById('canvas');
    world = new World(canvas);
    checkAndShowScreenInstruction()
    setMobileButtonEventlisteners()
    addEventlistenerForFirstInteraction()
    window.addEventListener('resize', checkAndShowScreenInstruction);
}

function start() {
    world.startGame();
    toggleOverlay('start-and-stop-screen');   
    toggleOverlay('movement-button-overlay');   
}

function restart() {
    world = 0;
    world = new World(canvas);
    world.startGame();
    toggleOverlay('start-and-stop-screen');   
    toggleOverlay('movement-button-overlay');   
}

function openGameOverScreen() {
    world.stopGame();
    const gameoverTemplate = getGameOverTemplate();
    let gameoverlayRef = document.getElementById('start-and-stop-screen');
    gameoverlayRef.innerHTML = gameoverTemplate;
    toggleOverlay('start-and-stop-screen');   
    toggleOverlay('movement-button-overlay');   
}

function openWinScreen() {
    world.stopGame();
    const gameoverTemplate = getWinTemplate();
    let gameoverlayRef = document.getElementById('start-and-stop-screen');
    gameoverlayRef.innerHTML = gameoverTemplate;
    toggleOverlay('start-and-stop-screen');   
    toggleOverlay('movement-button-overlay');   
}