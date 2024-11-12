let box = document.querySelector('#myBox');
let moveBy = 10;
let opacity = 1;

window.addEventListener('load', () => {
  box.style.position = 'absolute';
  box.style.left = 0;
  box.style.top = 0;
});

document.addEventListener('keydown', (e) => {
  switch (e.key) {
    case 'ArrowUp':
    case 'w':
      box.style.top = parseInt(box.style.top) - moveBy + 'px';
      break;
    case 'ArrowDown':
    case 's':
      box.style.top = parseInt(box.style.top) + moveBy + 'px';
      break;
    case 'ArrowLeft':
    case 'a':
      box.style.left = parseInt(box.style.left) - moveBy + 'px';
      break;
    case 'ArrowRight':
    case 'd':
      box.style.left = parseInt(box.style.left) + moveBy + 'px';
      break;
  }
});
