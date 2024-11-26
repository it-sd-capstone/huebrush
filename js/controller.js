import { createLevel1, createLevel1End } from './level1.js';
import { createLevel2, createLevel2End, getLevel2Objects } from './level2.js';
import { spawnEnemy } from './enemy.js';
import { initializeGame } from './initializeController.js';
import { addToInventory } from './inventory.js';
import { levelXTransition, fadeIn, fadeOut  } from './animation.js';
import { getAmmo } from './inventory.js';


document.addEventListener('DOMContentLoaded', () => {
  // Initialize the game when DOM content is loaded
  initializeGame();
});

  let moveBy = 10;
  let hasFadedOut = false;

  let enemy = document.querySelector('#game_canvas #enemy');
  let moveSpeed = 50; //px per sec
  let lastTime = 0;

  // Prevent arrow keys from causing scroll action.
  window.addEventListener("keydown", function(e) {
    if(["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].indexOf(e.code) > -1) {
        e.preventDefault();
    }
  }, false);

  //Event listener to add items to inventory
  document.addEventListener('keydown', (e) => {
    let box = document.querySelector('#myBox');
    if (e.key.toLowerCase() === 'f') {
        checkProximityAroundBox(box, 10);
    }
});

function checkProximityAroundBox(box, radius) {
  const container = document.querySelector('.playArea'); // Ensure the container is defined
  const boxRect = getObjectsRelativeToContainer(container, '#myBox')[0];

  // Expand the box's dimensions by the radius for proximity detection
  const extendedBox = {
      top: boxRect.top - radius,
      bottom: boxRect.bottom + radius,
      left: boxRect.left - radius,
      right: boxRect.right + radius,
  };

  // Get all lakes relative to the container
  const lakes = getObjectsRelativeToContainer(container, '.lake');
  lakes.forEach(lake => {
      const lakeRect = {
          top: lake.top,
          bottom: lake.top + lake.height,
          left: lake.left,
          right: lake.left + lake.width,
      };

      // Check if the lake's rectangular border intersects with the extended box
      const isOverlapping = !(
          lakeRect.right < extendedBox.left ||
          lakeRect.left > extendedBox.right ||
          lakeRect.bottom < extendedBox.top ||
          lakeRect.top > extendedBox.bottom
      );

      if (isOverlapping) {
          addToInventory(lake); // Existing function to add the lake to the inventory
      }
  });
}

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
    let box = document.querySelector('.myBox');
    let container = document.querySelector('.playArea');
    let wasdFade = localStorage.getItem('wasd');
    let ammo = document.querySelector('#ammo');

    const keys = ['w', 'a', 's', 'd'];
    if (keys.includes(e.key) && wasdFade == '1') {
      localStorage.setItem('wasd', 0);

        let tutorialWASD = document.querySelector('#tutorialWASD');

        fadeOut(tutorialWASD);
    }

    let boxRect = box.getBoundingClientRect();
    let containerRect = container.getBoundingClientRect();
    let newTop = parseInt(box.style.top);
    let newLeft = parseInt(box.style.left);
    let newAmmoTop = parseInt(ammo.style.top);
    let newAmmoLeft = parseInt(ammo.style.left);

    switch (e.key) {
        case 'ArrowUp':
        case 'w':
        case 'W':
            if (boxRect.top - moveBy >= containerRect.top) {
                newTop -= moveBy;
                newAmmoTop -= moveBy;
            }
            break;
        case 'ArrowDown':
        case 's':
        case 'S':
            if (boxRect.bottom + moveBy <= containerRect.bottom) {
                newTop += moveBy;
                newAmmoTop += moveBy;
            }
            break;
        case 'ArrowLeft':
        case 'a':
        case 'A':
            if (boxRect.left - moveBy >= containerRect.left) {
                newLeft -= moveBy;
                newAmmoLeft -= moveBy;
            }
            break;
        case 'ArrowRight':
        case 'd':
        case 'D':
            if (boxRect.right + moveBy <= containerRect.right) {
                newLeft += moveBy;
                newAmmoLeft += moveBy;
            }
            break;
        default:
            return;
    }

    const simulatedBox = {
        top: newTop,
        bottom: newTop + boxRect.height,
        left: newLeft,
        right: newLeft + boxRect.width,
    };

    

    const walls = getObjectsRelativeToContainer(container, '.wallSolid');
    for (let wall of walls) {
        if (isColliding(simulatedBox, wall)) {
            return;
        }
    }

    box.style.top = `${newTop}px`;
    box.style.left = `${newLeft}px`;
    ammo.style.top = `${newAmmoTop}px`;
    ammo.style.left = `${newAmmoLeft}px`;

    let levelEnd = getObjectsRelativeToContainer(container, '.levelEnd');

    if (isColliding(simulatedBox, levelEnd[0])) {
      let currentLevel = parseInt(localStorage.getItem('Current Level'));

      removeObject('levelEnd');
  
      const currentLevelSelector = `#level${currentLevel}`;
      const nextLevelSelector = `#level${currentLevel + 1}`;
  
      const currentLevelDiv = document.querySelector(currentLevelSelector);
      const nextLevelDiv = document.querySelector(nextLevelSelector);
  
      if (!nextLevelDiv) {
        if (currentLevel + 1 === 2) {
            createLevel2(1,2,100); 
            createLevel2End();
            spawnEnemy();
            chaseBox();
        }
    }

    const myBox = document.querySelector('.myBox');
    let newLevel = document.querySelector(nextLevelSelector);
    let level1Objects = getLevel1Objects();
    let level2Objects = getLevel2Objects();
  
    levelXTransition(
      level1Objects,
      newLevel,
      level2Objects,
      myBox
    );
  
      localStorage.setItem('Current Level', currentLevel + 1);
  }
  });

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

    return Array.from(document.querySelectorAll(object)).map(obj => {
        const objectRect = obj.getBoundingClientRect();

        return {
            top: objectRect.top - containerRect.top,
            bottom: objectRect.bottom - containerRect.top,
            left: objectRect.left - containerRect.left,
            right: objectRect.right - containerRect.left,
            width: objectRect.width,
            height: objectRect.height,
            background: obj.style.background,
            element: obj
        };
    });
}


  //Move Enemy Program

  export function chaseBox(time) {
    const container = document.querySelector('.playArea');
    const enemy = document.querySelector('#game_canvas #enemy');

    let player = getObjectsRelativeToContainer(container, '.myBox');

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
    // if (Math.abs(enemyX - boxX) < 20 && Math.abs(enemyY - boxY) < 20) {
    //   alert('You have been caught!');
    //   return; 
    // }

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

  function removeObject(className) {
    const elements = document.getElementsByClassName(className);

    // Convert HTMLCollection to Array to avoid issues during removal
    const elementsArray = Array.from(elements);

    elementsArray.forEach(element => {
      element.remove(); 
    });
  }