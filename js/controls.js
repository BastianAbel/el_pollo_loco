// muss dann mit dem unteren part noch verbunden werden
function controlButtonDown(control) {
    world.keyboard[control] = true;
}

function controlButtonUp(control) {
    world.keyboard[control] = false;
}


// vorgenerierter code, wird noch verarbeitet zur button control
{/* <button id="hold-button">Gedrückt halten</button>

<script>
const button = document.getElementById('hold-button');

button.addEventListener('mousedown', () => {
  console.log("Button wird gehalten");
  // Starte z. B. eine Funktion oder setInterval
});

button.addEventListener('mouseup', () => {
  console.log("Button wurde losgelassen");
  // Stoppe z. B. die Funktion oder setInterval
});

// Optional für Touch-Geräte
button.addEventListener('touchstart', () => {
  console.log("Touch startet");
});

button.addEventListener('touchend', () => {
  console.log("Touch endet");
});
</script> */}
