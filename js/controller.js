document.addEventListener('DOMContentLoaded', () => {

  window.addEventListener('load', () => {
    if (localStorage.getItem('Current Level') == null) {
      localStorage.setItem('Current Level',1);
    } else if (localStorage.getItem('Current Level') > 4) {
      localStorage.setItem('Current Level',4);
    }

    console.log(localStorage.getItem('Current Level'))
    switch (Number(localStorage.getItem('Current Level'))) {
      case 1:
        createLevel1(2,2);
        createLevel1End();
        spawnPlayer(2, 2, '300px', '300px');
        break;
      case 2:
        createLevel1(1,2);
        createLevel2(1,2,50);
        spawnPlayer(1 , 2 , '260px', '440px');
        spawnEnemy();
        createLevel2End();
        requestAnimationFrame(chaseBox);
        break;
      case 3:
        createLevel3();
        break;
      case 4:
        createLevel4();
        break;
      default:
        console.log("Unknown level");
    }

    createInventory();
  });

  let moveBy = 5;
  let hasFadedOut = false;

  //Move Enemy Variables
  let enemy = document.querySelector('#game_canvas #enemy');
  let moveSpeed = 50; //px per sec
  let lastTime = 0;

  // Prevent arrow keys from causing scroll action.
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
    let box = document.querySelector('.myBox');
    let container = document.querySelector('.playArea');

    const keys = ['w', 'a', 's', 'd'];
    if (keys.includes(e.key) && !hasFadedOut) {
        hasFadedOut = true;

        let tutorialWASD = document.querySelector('#tutorialWASD');

        setTimeout(() => {
          tutorialWASD.style.transition = 'opacity 1s ease';
          tutorialWASD.style.opacity = '0';
      }, 5000);
    }

    let boxRect = box.getBoundingClientRect();
    let containerRect = container.getBoundingClientRect();
    let newTop = parseInt(box.style.top);
    let newLeft = parseInt(box.style.left);

    // Compute new position without applying it
    switch (e.key) {
        case 'ArrowUp':
        case 'w':
        case 'W':
            if (boxRect.top - moveBy >= containerRect.top) {
                newTop -= moveBy;
            }
            break;
        case 'ArrowDown':
        case 's':
        case 'S':
            if (boxRect.bottom + moveBy <= containerRect.bottom) {
                newTop += moveBy;
            }
            break;
        case 'ArrowLeft':
        case 'a':
        case 'A':
            if (boxRect.left - moveBy >= containerRect.left) {
                newLeft -= moveBy;
            }
            break;
        case 'ArrowRight':
        case 'd':
        case 'D':
            if (boxRect.right + moveBy <= containerRect.right) {
                newLeft += moveBy;
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

    // Get walls' positions relative to the container
    const walls = getObjectsRelativeToContainer(container, '.wallSolid');
    // Check for collisions
    for (let wall of walls) {
        if (isColliding(simulatedBox, wall)) {
            // Collision detected; stop movement
            return;
        }
    }

    box.style.top = `${newTop}px`;
    box.style.left = `${newLeft}px`;

    let levelEnd = getObjectsRelativeToContainer(container, '.levelEnd');

    if (isColliding(simulatedBox, levelEnd[0])) {
      let currentLevel = parseInt(localStorage.getItem('Current Level'));

      removeObject('levelEnd');
  
      // Get references to current and next levels
      const currentLevelSelector = `#level${currentLevel}`;
      const nextLevelSelector = `#level${currentLevel + 1}`;
  
      const currentLevelDiv = document.querySelector(currentLevelSelector);
      const nextLevelDiv = document.querySelector(nextLevelSelector);
  
      // Ensure the next level is created but hidden
      if (!nextLevelDiv) {
        if (currentLevel + 1 === 2) {
            createLevel2(); 
            createLevel2End();
            spawnEnemy();
        }
    }

    const myBox = document.querySelector('.myBox');
  
    // Perform the level transition animation
    levelXTransition(
      [currentLevelDiv],
      [myBox, ...Array.from(currentLevelDiv.querySelectorAll('*'))]
    );
  
      // Update the current level
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
    return Array.from(document.querySelectorAll(object)).map((obj) => {
        const objectRect = obj.getBoundingClientRect();
        return {
            top: objectRect.top - containerRect.top,
            bottom: objectRect.bottom - containerRect.top,
            left: objectRect.left - containerRect.left,
            right: objectRect.right - containerRect.left,
            width: objectRect.width,
            height: objectRect.height,
        };
    });
  }


  //Move Enemy Program

  function chaseBox(time) {
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
});