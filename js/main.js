function toggleFullscreen() {
    let element = document.getElementById('container');
    if(window.screenTop && window.screenY) {
        element.requestFullscreen();
    } else {
        document.exitFullscreen();
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