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

function toggleVolume() {
    volumeButton = document.getElementById('volume');
    if(volume) {
        volume = false;
        volumeButton.src = "img/controls/volume-off.svg";
    } else{
        volume = true;
        volumeButton.src = "img/controls/volume-on.svg";
    }
}

function toggleOverlay(id) {
    element = document.getElementById(id);
    element.classList.toggle('d-none');
}