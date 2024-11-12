let box = document.querySelector('#myBox');
let moveBy = 10;
let opacity = 1;

window.addEventListener('load', () => {
  box.style.position = 'absolute';
  box.style.left = 0;
  box.style.top = 0;
});

function drainColor() {
  let boxColorGrabber = window.getComputedStyle(box);
  let boxColor = boxColorGrabber.backgroundColor;

  if (opacity > 0) {
    opacity -= 0.0;

    let rgbValues = boxColor.match(/\d+/g); 
    if (rgbValues) {
      box.style.backgroundColor = `rgba(${rgbValues[0]}, ${rgbValues[1]}, ${rgbValues[2]}, ${opacity})`;
    }

  } else if (opacity <= 0) {
    console.log("Game Over");
  }
}

document.addEventListener('keydown', (e) => {
  switch (e.key) {
    case 'ArrowUp':
    case 'w':
      box.style.top = parseInt(box.style.top) - moveBy + 'px';
      drainColor();
      checkKey()
      break;
    case 'ArrowDown':
    case 's':
      box.style.top = parseInt(box.style.top) + moveBy + 'px';
      drainColor();
      checkKey()
      break;
    case 'ArrowLeft':
    case 'a':
      box.style.left = parseInt(box.style.left) - moveBy + 'px';
      drainColor();
      checkKey()
      break;
    case 'ArrowRight':
    case 'd':
      box.style.left = parseInt(box.style.left) + moveBy + 'px';
      drainColor();
      checkKey()
      break;
  }
});


function checkKey() {
  if (parseInt(box.style.left) == parseInt(key.style.left) && parseInt(box.style.top) == parseInt(key.style.top)) {
    box.style.background = "purple";
    key.remove();
  }
}