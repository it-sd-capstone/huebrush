import { createLevel1, createLevel1End } from './level1.js';
import { createLevel2, createLevel2End } from './level2.js';
import { spawnPlayer } from './player.js';
import { spawnEnemy } from './enemy.js';
import { createInventory } from './inventory.js';
import { chaseBox } from './controller.js';

export function initializeGame() {
  if (!localStorage.getItem('Current Level')) {
    localStorage.setItem('Current Level', 1);
  } else if (localStorage.getItem('Current Level') > 4) {
    localStorage.setItem('Current Level', 4);
  }

  if (!localStorage.getItem('wasd')) {
    localStorage.setItem('wasd', 1);
  }

  console.log("Starting Level: ", localStorage.getItem('Current Level'));

  createInventory();

  const currentLevel = Number(localStorage.getItem('Current Level'));
  loadLevel(currentLevel);
}

export function loadLevel(level) {
  switch (level) {
    case 1:
      createLevel1(2, 2);
      createLevel1End();
      spawnPlayer(2, 2, '300px', '300px');
      break;
    case 2:
      createLevel1(1, 2);
      createLevel2(1, 2, 50);
      spawnPlayer(1, 2, '260px', '440px');
      spawnEnemy();
      createLevel2End();
      chaseBox();
      break;
    case 3:
      console.log('Level 3 not implemented yet');
      break;
    case 4:
      console.log('Level 4 not implemented yet');
      break;
    default:
      console.log("Unknown level: ", level);
  }
}