import { getLevel1Objects } from './level1.js';
import { createLevel2, createLevel2End, getLevel2Objects } from './level2.js';
import { createLevel3, createLevel3End, getLevel3Objects } from './level3.js';
import { createLevel4, createLevel4End} from './level4.js';
import { spawnEnemy, updateHealth } from './enemy.js';
import { magicScoutAudio, troubleTribalsAudio } from './initializeController.js';
import { addToInventory, getSlotArray } from './inventory.js';
import { levelXTransition, fadeIn, fadeOut, levelYTransition  } from './animation.js';
import { createSwitches, monitorSwitches } from './switches.js';
import { createEndMenu, createGameOverMenu } from './menu.js';

//Watch for page activity
document.addEventListener('visibilitychange', () => {
  isPageVisible = !document.hidden;

  if(!isPageVisible){
    enemyPause = true;
    isEnemyChasing = false;
  }else{
    enemyPause = false;
    lastTime = 0;
    if (!isEnemyChasing) {
      isEnemyChasing = true;
    requestAnimationFrame(chaseBox);
    }
  }
});

let moveBy = 10;


let moveSpeed = 50; //px per sec
let lastTime = 0;


  //Pause movement for the enemy if the page is not active variables
  let isPageVisible = true;
  let enemyPause = false;
  let isEnemyChasing = false;

  // Prevent arrow keys from causing scroll action.
  window.addEventListener("keydown", function(e) {

    if(["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].indexOf(e.code) > -1) {
        e.preventDefault();
    }
}, false);

//Event listener to add items to inventory
document.addEventListener('keydown', (e) => {
    let box = document.querySelector('#myBox');
    if (e.code === 'KeyF') {
        checkProximityAroundBox(box, 10);
    }
});

// Event listener to check gate proximity and color
document.addEventListener('keydown', (e) => {
    let box = document.querySelector('#myBox');
    let gate1 = document.querySelector('#gate1');
    let gate2 = document.querySelector('#gate2');
    if (e.code === 'KeyG') {
        if(parseInt(localStorage.getItem('Current Level')) == 1 && checkGateProximity(box, 1) && checkGateColor(box, 1)) {
          gate1.style.transform = 'rotate(-180deg)';
          gate1.style.transformOrigin = 'top right';
          localStorage.setItem('warn', 1);
          let tutorialG = document.querySelector('#tutorialG');
          fadeOut(tutorialG);
        } else if (parseInt(localStorage.getItem('Current Level')) == 2  && checkGateProximity(box, 2) && checkGateColor(box, 2)) {
          gate2.style.transform = 'rotate(-180deg)';
          gate2.style.transformOrigin = 'bottom left';
        }
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
  for (let i = 0; i < lakes.length; i++) {
      const lakeRect = {
          top: lakes[i].top,
          bottom: lakes[i].top + lakes[i].height,
          left: lakes[i].left,
          right: lakes[i].left + lakes[i].width,
      };

      // Check if the lake's rectangular border intersects with the extended box
      const isOverlapping = !(
          lakeRect.right < extendedBox.left ||
          lakeRect.left > extendedBox.right ||
          lakeRect.bottom < extendedBox.top ||
          lakeRect.top > extendedBox.bottom
      );

      if (isOverlapping) {
          addToInventory(lakes[i]); // Existing function to add the lake to the inventory
          return;
      } 
  }
}

function checkGateProximity(box, levelNum) {
    if (levelNum == 1 && box.style.left == '780px') {
      return true;
    } else if (levelNum == 2 && box.style.left == '920px' && box.style.top >= '440px' && box.style.top <= '480px') {
      return true;
    }
    return false;
}

function checkGateColor(box, levelNum) {
    if (levelNum == 1 && box.style.background == 'rgb(128, 0, 128)') {
        return true;
    }  else if (levelNum == 2 && box.style.background == 'rgb(0, 128, 0)') {
        return true;
    }
    return false;
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

    const keys = ['KeyW', 'KeyA', 'KeyS', 'KeyD'];
    if (keys.includes(e.code) && wasdFade == '1') {
      localStorage.setItem('wasd', 0);
      localStorage.setItem('f', 1);
      localStorage.setItem('f2', 1);

      let tutorialWASD = document.querySelector('#tutorialWASD');
      let tutorialF = document.querySelector('#tutorialF');
      let tutorialF2 = document.querySelector('#tutorialF2');
      let tutorialG = document.querySelector('#tutorialG');

      fadeOut(tutorialWASD);
      fadeIn(tutorialF);
      fadeIn(tutorialF2);
      fadeIn(tutorialG);
    }

    let boxRect = box.getBoundingClientRect();
    let containerRect = container.getBoundingClientRect();
    let newTop = parseInt(box.style.top);
    let newLeft = parseInt(box.style.left);
    let newAmmoTop = parseInt(ammo.style.top);
    let newAmmoLeft = parseInt(ammo.style.left);

    switch (e.code) {
      case "KeyW":
      case "ArrowUp":
        if (boxRect.top - moveBy >= containerRect.top) {
          newTop -= moveBy;
          newAmmoTop -= moveBy;
        }
        break;
      case "KeyS":
      case "ArrowDown":
        if (boxRect.bottom + moveBy <= containerRect.bottom) {
            newTop += moveBy;
            newAmmoTop += moveBy;
        }
        break;
      case "KeyA":
      case "ArrowLeft":
        if (boxRect.left - moveBy >= containerRect.left) {
          newLeft -= moveBy;
          newAmmoLeft -= moveBy;
        }
        break;
      case "KeyD":
      case "ArrowRight":
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

    if (isColliding(simulatedBox, levelEnd[0]) && (parseInt(localStorage.getItem('Current Level')) < 5)) {
      let currentLevel = parseInt(localStorage.getItem('Current Level'));

      removeObject('levelEnd');
  
      const oldLevelSelector = `#level${currentLevel}`;
      const nextLevelSelector = `#level${currentLevel + 1}`;
  
      const nextLevelDiv = document.querySelector(nextLevelSelector);

      if (!nextLevelDiv) {
        if (currentLevel + 1 === 2) {
          let tutorialF = document.querySelector('#tutorialF');
          let tutorialF2 = document.querySelector('#tutorialF2');
          let tutorialWarn = document.querySelector('#tutorialWarn');
          createLevel2(1,2,100); 
          createLevel2End();
          spawnEnemy();
          chaseBox();
          fadeOut(tutorialF);
          fadeOut(tutorialF2);
          fadeIn(tutorialWarn);
        } else if (currentLevel + 1 === 3) {
          createLevel3(2,1,100,0);
          createLevel3End();
          spawnEnemy();
          chaseBox();
        } else if (currentLevel + 1 === 4) {
          createLevel4(1,1,50,-50);
          createLevel4End();
          spawnEnemy();
          chaseBox();
        }
    }

    const myBox = document.querySelector('.myBox');
    const ammo = document.querySelector('#ammo');
    let oldLevel = document.querySelector(oldLevelSelector);
    let newLevel = document.querySelector(nextLevelSelector);
    let level1Objects = getLevel1Objects();
  
    if (currentLevel + 1 === 2) {
      levelXTransition(
        level1Objects,
        oldLevel,
        newLevel,
        `right`,
        myBox,
        ammo
      );
    } else if  (currentLevel + 1 === 3) {
      let level2Objects = getLevel2Objects();
      levelYTransition(
        [level1Objects, level2Objects],
        newLevel,
        myBox,
        ammo
      );
      createSwitches(1, 2);
      setInterval(monitorSwitches, 100);
    } else if (currentLevel + 1 === 4) {
      let level3Objects = getLevel3Objects();
      levelXTransition(
        level3Objects,
        oldLevel,
        newLevel,
        `left`,
        myBox,
        ammo
      );
    } else if (currentLevel >= 4) {
      createEndMenu();
      if (document.querySelector('.enemy')) {
        document.querySelector('.enemy').remove();
        onEnemyDefeat();
      }
    }
  
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

  function adjustAudioBasedOnDistance(distance) {
    let maxDistance = 500;
    console.log(distance)
    let intensity = 1.0 - Math.min(1.0, distance / maxDistance);
    if (localStorage.getItem('muted') == '1') {
      troubleTribalsAudio.volume = intensity;
      magicScoutAudio.volume = 1.0 - intensity;
    }
}

  export function chaseBox(time) {
    if (!isPageVisible || enemyPause) {
      isEnemyChasing = false;
      return;
    }
    
    isEnemyChasing = true;
    const container = document.querySelector('.playArea');
    const enemy = document.querySelector('#game_canvas #enemy');

    if(!enemy) return;

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

      adjustAudioBasedOnDistance(distance);

    } 

    // Catch the box
    if (Math.abs(enemyX - boxX) < 20 && Math.abs(enemyY - boxY) < 20) {
      const hearts = document.querySelectorAll('#player-hearts .heart');
    if (hearts.length > 0) {
        hearts[hearts.length - 1].remove(); // Remove one heart
    } else {
        createGameOverMenu();
      return; 
    }

    const directionX = enemyX - boxX > 0 ? 1 : -1; // Determine push direction
    const directionY = enemyY - boxY > 0 ? 1 : -1;
    const bounceDistance = 50;

    enemy.style.left = `${parseFloat(enemy.style.left) + directionX * bounceDistance}px`;
    enemy.style.top = `${parseFloat(enemy.style.top) + directionY * bounceDistance}px`;
  }

    // Continue the chase
    if(isPageVisible && !enemyPause){
      requestAnimationFrame(chaseBox);
    }
  }

  function removeObject(className) {
    const elements = document.getElementsByClassName(className);

    // Convert HTMLCollection to Array to avoid issues during removal
    const elementsArray = Array.from(elements);

    elementsArray.forEach(element => {
      element.remove(); 
    });
  }

export function enemyLife() {
  // Set up a loop to check for collisions
  let tutorialWarn = document.querySelector('#tutorialWarn');
  setInterval(() => {
    const projectiles = document.querySelectorAll('#projectile'); // All projectiles
    const enemies = document.querySelectorAll('.enemy'); // All active enemies

    projectiles.forEach(projectile => {
      const projectileX = parseFloat(projectile.style.left);
      const projectileY = parseFloat(projectile.style.top);

      enemies.forEach(enemy => {
        const enemyX = parseFloat(enemy.style.left);
        const enemyY = parseFloat(enemy.style.top);

        // Check if projectile is within specified range of the enemy
        const distance = Math.sqrt(
          (projectileX - enemyX) ** 2 + (projectileY - enemyY) ** 2
        );

        if (distance < 60) { // Adjust for specified range

          // Reduce enemy health
          if (typeof enemy.enemyHealth === 'number') {
            enemy.enemyHealth -= 15; // Adjust this for more or less damage
            updateHealth(enemy, enemy.enemyHealth);
          } else {
            console.error('Enemy health is not initialized');
          }
          projectile.style.background = 'rgba(0,0,0,0)';
          // Check if enemy is defeated
          if (enemy.enemyHealth <= 0) {
            console.log("enemy was x: ", enemyX, "and y: " , enemyY)
            console.log("Projectile was: ", projectileX, "and y: " , projectileY )
            createExplosion(enemy);
            onEnemyDefeat();
            enemy.remove();
            if(tutorialWarn != null){
              fadeOut(tutorialWarn);
            } else {
              return;
            }
            
          }
        }
      });
    });
  }, 100); // Check every 100ms

  // Create an explosion effect
  function createExplosion(enemy) {
    const explosion = document.createElement('div');
    explosion.style.position = 'absolute';
    explosion.style.left = enemy.style.left;
    explosion.style.top = enemy.style.top;
    explosion.style.width = '50px';
    explosion.style.height = '50px';
    explosion.style.background = 'radial-gradient(circle, rgba(0, 0, 0, 0) 0%, orange 100%)';
    explosion.style.borderRadius = '50%';
    explosion.style.zIndex = '5';
    explosion.style.opacity = '1';

    document.querySelector('.playArea').appendChild(explosion);

    // Remove explosion after animation
    setTimeout(() => explosion.remove(), 500);
  }
}

function onEnemyDefeat() {
  let interval = setInterval(() => {
      if (troubleTribalsAudio.volume > 0 && localStorage.getItem('muted', 0)) {
          troubleTribalsAudio.volume = Math.max(0, troubleTribalsAudio.volume - 0.1);
          magicScoutAudio.volume = Math.min(1.0, magicScoutAudio.volume + 0.1);
      } else {
          troubleTribalsAudio.pause();
          clearInterval(interval);
      }
  }, 500);
}

window.addEventListener('beforeunload', () => {
  localStorage.setItem('inventory', getSlotArray());
});

