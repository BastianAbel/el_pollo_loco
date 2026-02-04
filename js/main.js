document.addEventListener("contextmenu", function (e) {
  if (
    e.target.closest(".top-controls .button, .bottom-controls button")
  ) {
    e.preventDefault();
  }
});

function toggleFullscreen() {
    if(!document.fullscreenElement) {
        openFullscreen();
    } else {
        closeFullscreen();
    }
}

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

function closeFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
    }
}

function toggleOverlay(id) {
    element = document.getElementById(id);
    element.classList.toggle('d-none');
}

function checkAndShowScreenInstruction() {
    if(screensizeMobile()) {
        showTurnScreenInstruction();
    }
}

function screensizeMobile() {
    const screenWidth = document.documentElement.clientWidth;
    const screenHeight = document.documentElement.clientHeight;
    const mobileMaxSize = 1024;
    return (screenWidth < mobileMaxSize) || (screenHeight < mobileMaxSize)
}

function screenIsHorizontal() {
    const screenWidth = document.documentElement.clientWidth;
    const screenHeight = document.documentElement.clientHeight;
    return (screenHeight < screenWidth)
}

function showTurnScreenInstruction() {
    const containerRef = document.getElementById('forceHorizontalScreenOverlay');
    if(!screenIsHorizontal()) {
        containerRef.classList.remove('d-none');
    }else {
        containerRef.classList.add('d-none');
    }
    console.log('process finished')
}

function toggleControls() {
    toggleOverlay('movement-controls-left');   
    toggleOverlay('movement-controls-right');   
    toggleOverlay('game-controls')
    element = document.getElementById('bottom-controls');
    element.classList.toggle('justify-content-center');
}