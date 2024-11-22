function levelTransition(levels = [], objects = [], xAxis = false, yAxis = false, newLevel, width, height) {
  let speed = 1.75;

  levels.forEach((level) => {
    let canvasToTransition = document.querySelector(level);
    let canvasWidth = canvasToTransition.getBoundingClientRect().width;
    let canvasHeight =canvasToTransition.getBoundingClientRect().height;

    canvasToTransition.style.transition = 'width ' + speed + 's ease, height ' + speed + 's ease';

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