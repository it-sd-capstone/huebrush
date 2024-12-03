import { createLevel1, createLevel1End, openGateOne } from './level1.js';
import { createLevel2, createLevel2End, openGateTwo } from './level2.js';
import { createLevel3 } from './level3.js';
import { spawnPlayer } from './player.js';
import { spawnEnemy } from './enemy.js';
import { createInventory } from './inventory.js';
import { setInvEmpty } from './inventory.js';
import { setInvFull } from './inventory.js';
import { createAmmo } from './ammo.js';
import { createProjectile } from './ammo.js';
import { chaseBox, enemyLife } from './controller.js';
import { createMouseEnterDetection } from './inventory.js';

export function initializeGame() {
  alert("Use 'w, a, s, d' keys to move around the level.\nPress 'f' near a color pool to collect the color.\n Press 'q' and 'e' to cycle through your inventory.\nPress 'spacebar' to shoot your currently selected color toward your cursor.\nLocal save states will trigger upon completing a level (touching the blue box on the right). \n")
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
      createAmmo('rgba(128,128,128,0.35)', level);
      createProjectile('rgba(0,0,0,0)', level);
      setInvFull();
      setInvEmpty();
      break;
    case 2:
      createLevel1(1, 2);
      createLevel2(1, 2, 50);
      openGateOne();
      spawnPlayer(1, 2, '260px', '440px');
      spawnEnemy();
      enemyLife(enemy);
      createLevel2End();
      createAmmo('rgba(0,0,0,0)', level);
      createProjectile('rgba(0,0,0,0)', level);
      chaseBox();
      setInvFull();
      setInvEmpty();
      break;
    case 3:
      createLevel1(1, 1);
      createLevel2(1, 1, 50);
      createLevel3(2,1,50);
      openGateOne();
      openGateTwo();
      spawnPlayer(1, 1, '280px', '950px');
      createLevel2End();
      createAmmo('rgba(128,128,128,0.5)', level);
      createProjectile('rgba(0,0,0,0)', level);
      setInvFull();
      setInvEmpty();
      break;
    case 4:
      console.log('Level 4 not implemented yet');
      break;
    default:
      console.log("Unknown level: ", level);
  }
  createMouseEnterDetection();
}

