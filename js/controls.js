touchControls = {
  'btn-left' : 'left',
  'btn-right' : 'right',
  'btn-jump' : 'jump',
  'btn-throw' : 'throw'
}

function controlButtonDown(control) {
    world.keyboard[control] = true;
}

function controlButtonUp(control) {
    world.keyboard[control] = false;
}

function setMobileButtonEventlisteners() {
  for(b in touchControls) {
    setTouchEventlistener(b);
    setTouchEndEventlistener(b);
  }
}

function setTouchEventlistener(buttonId) {
  const button = document.getElementById(buttonId);
  button.addEventListener('touchstart', (e) => {
    e.preventDefault();
    world.keyboard[touchControls[buttonId]] = true;
  })
}

function setTouchEndEventlistener(buttonId) {
  const button = document.getElementById(buttonId);
  button.addEventListener('touchend', (e) => {
    e.preventDefault();
    world.keyboard[touchControls[buttonId]] = false;
  })
}