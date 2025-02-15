class Keyboard {
    controls = {
        'KeyA': 'left',
        'KeyD': 'right',
        'KeyW': 'up',
        'KeyS': 'down',
        'KeyE': 'throw',
        'Space': 'jump'
    }

    left = false;
    right = false;
    up = false;
    down = false;
    jump = false;
    throw = false;

    constructor() {
        window.addEventListener('keydown', (event) => {this.setInput(event, true);});
        window.addEventListener('keyup', (event) => {this.setInput(event, false);});
    }

    setInput(event, state) {
        if(this.controls[event.code]) {
            this[this.controls[event.code]] = state;
        }
    }
}