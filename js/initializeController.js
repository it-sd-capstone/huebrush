import { createLevel1, createLevel1End, createTealLake, openGateOne } from './level1.js';
import { createLevel2, createLevel2End, openGateTwo } from './level2.js';
import { createLevel3, createLevel3End } from './level3.js';
import { createLevel4, createLevel4End } from './level4.js';
import { spawnPlayer } from './player.js';
import { spawnEnemy } from './enemy.js';
import { setSlotArray, getSlotArray, setLastItem, setBoxColor, setAmmoColor } from './inventory.js';
import { setInvFull } from './inventory.js';
import { createAmmo } from './ammo.js';
import { createProjectile } from './ammo.js';
import { chaseBox, enemyLife } from './controller.js';
import { createMouseEnterDetection } from './inventory.js';
import { createSwitches, monitorSwitches, createRedLakes3, createYellowLakes3, createBlueLakes3, openGateThree } from './switches.js';
import { createMainMenu, createHintButton, createInfoButton } from './menu.js';

export let magicScoutAudio = new Audio('music/Magic Scout - Nothern Glade.mp3');
export let troubleTribalsAudio = new Audio('music/Trouble with Tribals.mp3');


document.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('Current Level') > 4) {
    localStorage.setItem('Current Level', 4);
  }
  
  createMainMenu();
  createHintButton();
  createInfoButton();
});

export function initializeGame() {
  // alert("Use 'w, a, s, d' keys to move around the level.\nPress 'f' near a color pool to collect the color.\n Press 'q' and 'e' to cycle through your inventory.\nPress 'spacebar' to shoot your currently selected color toward your cursor.\nLocal save states will trigger upon completing a level (touching the blue box on the right). \n")
  if (!localStorage.getItem('Current Level')) {
    localStorage.setItem('Current Level', 1);
  } else if (localStorage.getItem('Current Level') > 4) {
    localStorage.setItem('Current Level', 4);
  }

  if (!localStorage.getItem('muted')) {
    localStorage.setItem('muted', 1);
  }

  if (!localStorage.getItem('wasd')) {
    localStorage.setItem('wasd', 1);
  }

  if (!localStorage.getItem('f')) {
    localStorage.setItem('f', 0);
  }

  if (!localStorage.getItem('f2')) {
    localStorage.setItem('f2', 0);
  }

  if (!localStorage.getItem('warn')) {
    localStorage.setItem('warn', 0);
  }

  if (!localStorage.getItem('g')) {
    localStorage.setItem('g', 0);
  }

  if (!localStorage.getItem('space')) {
    localStorage.setItem('space', 0);
  }

  if (!localStorage.getItem('select')) {
    localStorage.setItem('select', 0);
  }

  setInvFull();

  if (!localStorage.getItem('inventory')) {
    localStorage.setItem('inventory', getSlotArray());
  } else {
    setSlotArray(localStorage.getItem('inventory'));
  }

  setLastItem();
}

export function loadLevel(level) {

  if (localStorage.getItem('muted') == '1') {
    magicScoutAudio.loop = true;
    magicScoutAudio.volume = 1.0;
    magicScoutAudio.play();
  }


  switch (level) {
    case 1:
      initializeGame();
      createLevel1(2, 2);
      createLevel1End();
      spawnPlayer(2, 2, '300px', '300px');
      createAmmo('rgba(128,128,128,0.35)', level);
      createProjectile('rgba(0,0,0,0)', level);
      setBoxColor();
      setAmmoColor();
      break;
    case 2:
      initializeGame();
      createLevel1(1, 2);
      createLevel2(1, 2, 50);
      openGateOne();
      spawnPlayer(1, 2, '260px', '440px');
      createAmmo('rgba(128,128,128,0.35)', level);
      createProjectile('rgba(0,0,0,0)', level);
      spawnEnemy();
      enemyLife();
      createLevel2End();
      chaseBox();
      setBoxColor();
      setAmmoColor();
      break;
    case 3:
      initializeGame();
      createLevel1(1, 1);
      createLevel2(1, 1, 50);
      createLevel3(2,1,50,0);
      openGateOne();
      openGateTwo();
      spawnPlayer(1, 1, '280px', '950px');
      createAmmo('rgba(128,128,128,0.35)', level);
      createProjectile('rgba(0,0,0,0)', level);
      spawnEnemy();
      enemyLife();
      createLevel3End();
      chaseBox();
      setBoxColor();
      setAmmoColor();
      if (localStorage.getItem('Red Lakes')) createRedLakes3(1, 1);
      if (localStorage.getItem('Yellow Lakes')) createYellowLakes3(1, 1);
      if (localStorage.getItem('Blue Lakes')) createBlueLakes3(1, 1);
      createSwitches(1, 2, 3);
      setInterval(function() {monitorSwitches(3); }, 100);
      break;
    case 4:
      initializeGame();
      createLevel1(1, 1);
      createLevel2(1, 1, 50);
      createLevel3(1,1,50,50);
      createLevel4(1,1,50);
      openGateOne();
      openGateTwo();
      openGateThree();
      spawnPlayer(1, 1, '440px', '500px');
      createAmmo('rgba(128,128,128,0.35)', level);
      createProjectile('rgba(0,0,0,0)', level);
      createLevel4End();
      spawnEnemy();
      enemyLife();
      chaseBox();
      setBoxColor();
      setAmmoColor();
      createSwitches(1, 1, 3);
      if (localStorage.getItem('Red Lakes')) createRedLakes3(1, 0.5);
      if (localStorage.getItem('Yellow Lakes')) createYellowLakes3(1, 0.5);
      if (localStorage.getItem('Blue Lakes')) createBlueLakes3(1, 0.5);
      createSwitches(1, 1, 4);
      setInterval(function() {monitorSwitches(4); }, 100);
      break;
    default:
      console.error("Unknown level: ", level);
  }
  if (localStorage.getItem('tealLake') == '1') {
    createTealLake();
  }
  
  createMouseEnterDetection();
}

