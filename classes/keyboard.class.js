/**
 * represents the keyboard element for further control management
 */
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

    /**
     * sets eventlistener to detect keyboard input
     */
    constructor() {
        window.addEventListener('keydown', (event) => {this.setInput(event, true);});
        window.addEventListener('keyup', (event) => {this.setInput(event, false);});
    }

    /**
     * updates input states
     * @param {event} event 
     * @param {boolean} state 
     */
    setInput(event, state) {
        if(this.controls[event.code]) {
            this[this.controls[event.code]] = state;
        }
    }
}