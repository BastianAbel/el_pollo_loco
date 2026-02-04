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
    toggleOverlay('overlay');   
    toggleControls();
}

function restart() {
    world = 0;
    world = new World(canvas);
    world.startGame();
    toggleOverlay('overlay');   
    toggleControls();
}

function openGameOverScreen() {
    world.stopGame();
    const gameoverTemplate = getGameOverBackgroundTemplate();
    let gameoverlayRef = document.getElementById('overlay');
    gameoverlayRef.innerHTML = gameoverTemplate;
    toggleOverlay('overlay');   
    toggleControls();
}
function openWinScreen() {
    world.stopGame();
    const gameoverTemplate = getWinBackgroundTemplate();
    let gameoverlayRef = document.getElementById('overlay');
    gameoverlayRef.innerHTML = gameoverTemplate;
    toggleOverlay('overlay');   
    toggleControls();
}