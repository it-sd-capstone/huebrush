let box = document.getElementById("box");
let key = document.getElementById("key");
let gate = document.getElementById("gate");
let moveBy = 10;
let opacity = 1;

window.addEventListener('load', () => {
  box.style.position = 'absolute';
  box.style.left = 0;
  box.style.top = 0;
});


// function drainColor() {
//   if (opacity > 0) {
//     opacity -= 0.1;
//     box.style.backgroundColor = `rgba(0, 128, 0, ${opacity})`;
//   } else if (opacity <= 0) {
//     console.log("Game Over")
//   }
// }

document.addEventListener('keydown', (e) => {
  switch (e.key) {
    case 'ArrowUp':
    case 'w':
      console.log('Up arrow pressed');
      box.style.top = parseInt(box.style.top) - moveBy + 'px';
      checkKey();
      checkGate();
      break;
    case 'ArrowDown':
    case 's':
      console.log('Down arrow pressed');
      box.style.top = parseInt(box.style.top) + moveBy + 'px';
      checkKey();
      checkGate();
      break;
    case 'ArrowLeft':
    case 'a':
      console.log('Left arrow pressed');
      box.style.left = parseInt(box.style.left) - moveBy + 'px';
      checkKey();
      checkGate();
      break;
    case 'ArrowRight':
    case 'd':
      console.log('Right arrow pressed');
      box.style.left = parseInt(box.style.left) + moveBy + 'px';
      checkKey();
      checkGate();
      break;
  }
});

function checkKey() {
    if (box.style.top == key.style.top && box.style.left == key.style.left) {
        box.style.background = "green";
        key.remove();
    }
}

function checkGate() {
    if (box.style.background = gate.style.background) {
        gate.remove();
    }
}