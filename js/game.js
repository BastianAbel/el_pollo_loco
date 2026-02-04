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
    setGameControlButtons('lose') 
    toggleControls();
}

function openWinScreen() {
    world.stopGame();
    const gameWonTemplate = getWinBackgroundTemplate();
    let gameoverlayRef = document.getElementById('overlay');
    gameoverlayRef.innerHTML = gameWonTemplate;
    toggleOverlay('overlay');   
    setGameControlButtons('win')
    toggleControls();
}

function openHomeScreen() {
    world.stopGame();
    const gameWonTemplate = getHomeScreenTemplate();
    let gameoverlayRef = document.getElementById('overlay');
    gameoverlayRef.innerHTML = gameWonTemplate;
    setGameControlButtons('exit')
}

function setGameControlButtons(gamestate) {
    const buttonContainerRef = document.getElementById('game-controls');
    let buttonHTML;
    if(gamestate === 'exit'){
        buttonHTML = getStartButtonTemplate();
    }else if (gamestate === 'win') {
        buttonHTML = getWinButtonTemplate();
        buttonHTML += getExitButtonTemplate();
    }else if (gamestate === 'lose') {
        buttonHTML = getLoseButtonTemplate();
        buttonHTML += getExitButtonTemplate();
    }
    buttonContainerRef.innerHTML = buttonHTML; 
}  