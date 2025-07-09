let canvas;
let world;
let volume = true;


function init() {
    canvas = document.getElementById('canvas');
    world = new World(canvas);
}