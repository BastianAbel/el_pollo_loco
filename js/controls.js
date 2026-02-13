touchControls = {
  'btn-left' : 'left',
  'btn-right' : 'right',
  'btn-jump' : 'jump',
  'btn-throw' : 'throw'
}

/**
 * sets input of control to true
 * @param {string} control 
 */
function controlButtonDown(control) {
    world.keyboard[control] = true;
}

/**
 * sets input of control to false
 * @param {string} control 
 */
function controlButtonUp(control) {
    world.keyboard[control] = false;
}

/**
 * sets eventlistener for mobile button inputs
 */
function setMobileButtonEventlisteners() {
  for(b in touchControls) {
    setTouchEventlistener(b);
    setTouchEndEventlistener(b);
  }
}

/**
 * sets eventlistener to detect mobile button touch
 * @param {string} buttonId 
 */
function setTouchEventlistener(buttonId) {
  const button = document.getElementById(buttonId);
  button.addEventListener('touchstart', (e) => {
    e.preventDefault();
    world.keyboard[touchControls[buttonId]] = true;
  })
}

/**
 * sets eventlistener to detect mobile button touch release
 * @param {string} buttonId 
 */
function setTouchEndEventlistener(buttonId) {
  const button = document.getElementById(buttonId);
  button.addEventListener('touchend', (e) => {
    e.preventDefault();
    world.keyboard[touchControls[buttonId]] = false;
  })
}