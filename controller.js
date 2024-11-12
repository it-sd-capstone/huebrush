let box = document.getElementById("#myBox");
let moveBy = 10;
let opacity = 1;

window.addEventListener('load', () => {
  box.style.position = 'absolute';
  box.style.left = 0;
  box.style.top = 0;
});


// function drainColor() {
//   let boxColorGrabber = window.getComputedStyle(box);
//   let boxColor = boxColorGrabber.backgroundColor;

//   if (opacity > 0) {
//     opacity -= 0.0;

//     let rgbValues = boxColor.match(/\d+/g); 
//     if (rgbValues) {
//       box.style.backgroundColor = `rgba(${rgbValues[0]}, ${rgbValues[1]}, ${rgbValues[2]}, ${opacity})`;
//     }

//   } else if (opacity <= 0) {
//     console.log("Game Over");
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