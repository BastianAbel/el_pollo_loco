document.addEventListener("contextmenu", function (e) {
  if (
    e.target.closest(".top-controls .button, .bottom-controls button")
  ) {
    e.preventDefault();
  }
});

/**
 * toggles fullscreen of the game window
 */
function toggleFullscreen() {
    if(!document.fullscreenElement) {
        openFullscreen();
    } else {
        closeFullscreen();
    }
}

/**
 * sets the game window in fullscreen mode
 */
function openFullscreen() {
    let elem = document.getElementById('container');
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) {
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) {
        elem.msRequestFullscreen();
    }    
}

/**
 * exits the fullscreen mode
 */
function closeFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
    }
}

/**
 * toggles visibility of elements by id
 * @param {string} id - element id
 */
function toggleOverlay(id) {
    element = document.getElementById(id);
    element.classList.toggle('d-none');
}

/**
 * shows and hides the turn screen instruction
 */
function checkAndShowScreenInstruction() {
    if(screensizeMobile()) {
        showTurnScreenInstruction();
    }
}

/**
 * checks if the screen size is in mobile/tablet range
 * @returns boolean
 */
function screensizeMobile() {
    const screenWidth = document.documentElement.clientWidth;
    const screenHeight = document.documentElement.clientHeight;
    const mobileMaxSize = 1024;
    return (screenWidth < mobileMaxSize) || (screenHeight < mobileMaxSize)
}

/**
 * checks if screen is horizontal
 * @returns boolean
 */
function screenIsHorizontal() {
    const screenWidth = document.documentElement.clientWidth;
    const screenHeight = document.documentElement.clientHeight;
    return (screenHeight < screenWidth)
}

/**
 * toggles turn screen instruction if needet
 */
function showTurnScreenInstruction() {
    const containerRef = document.getElementById('forceHorizontalScreenOverlay');
    if(!screenIsHorizontal()) {
        containerRef.classList.remove('d-none');
    }else {
        containerRef.classList.add('d-none');
    }
    console.log('process finished')
}

/**
 * toggles control visibility
 */
function toggleControls() {
    toggleOverlay('movement-controls-left');   
    toggleOverlay('movement-controls-right');   
    toggleOverlay('game-controls')
    element = document.getElementById('bottom-controls');
    element.classList.toggle('justify-content-center');
}