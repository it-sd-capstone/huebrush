document.addEventListener('DOMContentLoaded', () => {
  createLevel1();
  //createLevel2();
  //createLevel3();
  //createLevel4();
  const box = document.querySelector('#myBox');
  const container = document.querySelector('#game_canvas');
  const ammo = document.querySelector('#ammo');
  const projectile = document.querySelector('#projectile');
  const moveBy = 10;

  //Move Enemy Variables
let enemy = document.querySelector('#game_canvas #enemy');
let moveSpeed = 50; //px per sec
let lastTime = 0;


window.addEventListener('load', () => {
  let level1Objects = getLevel1Objects();
  //levelTransition(['#level1'],level1Objects, true, false, '#level2', '500px','600px');
  //levelTransition(['#level1', '#level2'],level1Objects, false, true, '#level3','1000px','300px');
  //levelTransition(['#level3'],level1Objects, true, false, '#level4', '500px', '300px');

  enemy.style.position = 'absolute';
  enemy.style.left = '1000px'; 
  enemy.style.top = '0px';
  requestAnimationFrame(chaseBox);
});

window.addEventListener("keydown", function(e) {
  if(["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].indexOf(e.code) > -1) {
      e.preventDefault();
  }
}, false);

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
      let newTop = parseInt(box.style.top);
      let newLeft = parseInt(box.style.left);
      
      //ammo
      let ammoRect = ammo.getBoundingClientRect();
      let newAmmoTop = parseInt(ammo.style.top);
      let newAmmoLeft = parseInt(ammo.style.left);

      // Compute new position without applying it
      switch (e.key) {
          case 'ArrowUp':
          case 'w':
              if (boxRect.top - moveBy >= containerRect.top) {
                  newTop -= moveBy;
                  newAmmoTop -= moveBy;
              }
              break;
          case 'ArrowDown':
          case 's':
              if (boxRect.bottom + moveBy <= containerRect.bottom) {
                  newTop += moveBy;
                  newAmmoTop += moveBy;
              }
              break;
          case 'ArrowLeft':
          case 'a':
              if (boxRect.left - moveBy >= containerRect.left) {
                  newLeft -= moveBy;
                  newAmmoLeft -= moveBy;
              }
              break;
          case 'ArrowRight':
          case 'd':
              if (boxRect.right + moveBy <= containerRect.right) {
                  newLeft += moveBy;
                  newAmmoLeft += moveBy;
              }
              break;
          default:
              return;
      }

      // Simulate new box position
      const simulatedBox = {
          top: newTop,
          bottom: newTop + boxRect.height,
          left: newLeft,
          right: newLeft + boxRect.width,
      };

      //Simulate new ammo position
      const simulatedAmmo = {
          top: newAmmoTop,
          bottom: newAmmoTop + ammoRect.height,
          left: newAmmoLeft,
          right: newAmmoLeft + ammoRect.width
      };

      // Get walls' positions relative to the container
      const walls = getWallsRelativeToContainer(container);

      // Check for collisions
      for (let wall of walls) {
          if (isColliding(simulatedBox, wall)) {
              // Collision detected; stop movement
              return;
          }
      }

      // No collisions; apply the new position
      box.style.top = `${newTop}px`;
      box.style.left = `${newLeft}px`;
      ammo.style.top = `${newAmmoTop}px`;
      ammo.style.left = `${newAmmoLeft}px`;
  });

function getWallsRelativeToContainer(container) {
    const containerRect = container.getBoundingClientRect();
    return Array.from(document.querySelectorAll('.wallSolid')).map((wall) => {
        const wallRect = wall.getBoundingClientRect();
        return {
            top: wallRect.top - containerRect.top,
            bottom: wallRect.bottom - containerRect.top,
            left: wallRect.left - containerRect.left,
            right: wallRect.right - containerRect.left,
            width: wallRect.width,
            height: wallRect.height,
        };
    });
}

function isColliding(rect1, rect2) {
  return !(
      rect1.bottom <= rect2.top ||
      rect1.top >= rect2.bottom ||
      rect1.right <= rect2.left ||
      rect1.left >= rect2.right
  );
}

function getObjectsRelativeToContainer(container, object) {
  const containerRect = container.getBoundingClientRect();
  return Array.from(document.querySelectorAll('.myBox')).map((wall) => {
      const wallRect = wall.getBoundingClientRect();
      return {
          top: wallRect.top - containerRect.top,
          bottom: wallRect.bottom - containerRect.top,
          left: wallRect.left - containerRect.left,
          right: wallRect.right - containerRect.left,
          width: wallRect.width,
          height: wallRect.height,
      };
  });
}


//Move Enemy Program

function chaseBox(time) {
  let player = getObjectsRelativeToContainer(container, box);

  if (!lastTime) lastTime = time; 

  // Calculate time since last frame
  let delta = (time - lastTime) / 1000;
  lastTime = time;
  
  // Get the current position of the box 
  let boxX = parseFloat(player[0].left);
  let boxY = parseFloat(player[0].top);
  
  // Get the current position of the enemy element
  let enemyX = parseFloat(enemy.style.left);
  let enemyY = parseFloat(enemy.style.top);

  // Calculate the difference in position
  let dx = boxX - enemyX;
  let dy = boxY - enemyY;

  // Vector Math
  let distance = Math.sqrt((dx * dx) + (dy * dy));
  
   if (distance > 0) {
    dx /= distance;
    dy /= distance;

    // Move the enemy
    enemyX += dx * moveSpeed * delta;
    enemyY += dy * moveSpeed * delta;
    
    enemy.style.left = `${enemyX}px`;
    enemy.style.top = `${enemyY}px`;

  } 

  // Catch the box
  if (Math.abs(enemyX - boxX) < 20 && Math.abs(enemyY - boxY) < 20) {
    alert('You have been caught!');
    return; 
  }

  // Continue the chase
  requestAnimationFrame(chaseBox);
}

// TODO: Needs reworked.
// function checkKey() {
//   if (parseInt(box.style.left) == parseInt(key.style.left) && parseInt(box.style.top) == parseInt(key.style.top)) {
//     box.style.background = "purple";
//     key.remove();
//   }
// }

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
});

