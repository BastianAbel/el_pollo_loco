function toggleFullscreen() {
    let element = document.getElementById('container');
    if(window.screenTop && window.screenY) {
        element.requestFullscreen();
    } else {
        document.exitFullscreen();
    }
}