document.addEventListener('DOMContentLoaded', () => {
  createLevel1();
  createLevel2();
  createLevel3();
  createLevel4();
  const box = document.querySelector('#myBox');
  const container = document.querySelector('#game_canvas');
  const moveBy = 10;

  // Initialize box position
  box.style.position = 'absolute';
  box.style.left = 0;
  box.style.top = 0;

window.addEventListener('load', () => {
  box.style.position = 'absolute';
  box.style.left = 0;
  box.style.top = 0;
  let level1Objects = getLevel1Objects();
  levelTransition(['#level1'],level1Objects, true, false, '#level2', '500px','600px');
  levelTransition(['#level1', '#level2'],level1Objects, false, true, '#level3','1000px','300px');
  levelTransition(['#level3'],level1Objects, true, false, '#level4', '500px', '300px');
});

// ##### TODO rework where color drain occurs ######
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
  let boxRect = box.getBoundingClientRect();
  let containerRect = container.getBoundingClientRect();


  switch (e.key) {
    case 'ArrowUp':
    case 'w':
      if (boxRect.top - moveBy >= containerRect.top) {
        box.style.top = parseInt(box.style.top) - moveBy + 'px';
        checkKey();
      }
      break;
    case 'ArrowDown':
    case 's':
      if (boxRect.bottom + moveBy <= containerRect.bottom) {
        box.style.top = parseInt(box.style.top) + moveBy + 'px';
        checkKey();
      }
      break;
    case 'ArrowLeft':
    case 'a':
      if (boxRect.left - moveBy >= containerRect.left) {
        box.style.left = parseInt(box.style.left) - moveBy + 'px';
        checkKey();
      }
      break;
    case 'ArrowRight':
    case 'd':
      if (boxRect.right + moveBy <= containerRect.right) {
        box.style.left = parseInt(box.style.left) + moveBy + 'px';
        checkKey();
      }
      break;
  }
});

function checkKey() {
  if (parseInt(box.style.left) == parseInt(key.style.left) && parseInt(box.style.top) == parseInt(key.style.top)) {
    box.style.background = "purple";
    key.remove();
  }
}

function levelTransition(levels = [], objects = [], xAxis = false, yAxis = false, newLevel, width, height) {
  let speed = 1.75;

  levels.forEach((level) => {
    let canvasToTransition = document.querySelector(level);
    let canvasWidth = canvasToTransition.getBoundingClientRect().width;
    let canvasHeight =canvasToTransition.getBoundingClientRect().height;

    canvasToTransition.style.transition = 'width ' + speed + 's ease, height ' + speed + 's ease';
    console.log(canvasToTransition)

    if (xAxis == true) {
      canvasToTransition.style.width = (canvasWidth / 2) + 'px';
      levelIn(newLevel,width,height);
    }
    if (yAxis == true) {
      canvasToTransition.style.height = (canvasHeight / 2) + 'px';
      levelIn(newLevel,width,height);
    }
  })

  objects.forEach((object) => {
    let objectWidth = object.getBoundingClientRect().width;
    let objectHeight = object.getBoundingClientRect().height;
    let currentTransform = window.getComputedStyle(object).transform;

    object.style.transition = 'width ' + speed + 's ease, height ' + speed + 's ease, transform ' + speed + 's ease';

    if (xAxis == true) {
      object.style.width = (objectWidth / 2) + 'px';
      let objectXPosition = object.offsetLeft;
      let newxposition = -(objectXPosition / 2);
      updateTransform(object, 'translateX', newxposition + 'px)');
    }
    if (yAxis == true) {
      object.style.height = (objectHeight / 2) + 'px';
      let objectYPosition = object.offsetTop;
      let newyposition = -(objectYPosition / 2);
      updateTransform(object, 'translateY', newyposition + 'px');
    }
  });
}

function updateTransform(object, key, value) {
  let current = window.getComputedStyle(object).transform;
  console.log(current)
  let transform = current !== 'none' ? current : '';
  let regex = new RegExp(`${key}\\([^)]+\\)`, 'g');

  transform = transform.replace(regex, '').trim();

  transform += ` ${key}(${value})`;
  object.style.transform = transform.trim();
}

function levelIn(level, width, height) {
  let canvasToSlideIn = document.querySelector(level);
  let speed = 1.75
  canvasToSlideIn.style.transition = 'width ' + speed + 's ease';

  canvasToSlideIn.style.width = width;
  canvasToSlideIn.style.height = height;
}
});