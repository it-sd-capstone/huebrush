import { enemyLife } from './controller.js';
import { troubleTribalsAudio } from './initializeController.js';

function randomYSpawnPoint(){
  let negOrPos = Math.floor(Math.random() * 10);
  let minY = 880;
  let maxY = 930;
  if (negOrPos > 5){
    return Math.floor(Math.random() * (maxY - minY) + minY * -1);
  }else{
    return Math.floor(Math.random() * (maxY - minY) + minY)
  }
}

function randomXSpawnPoint(){
  let negOrPos = Math.floor(Math.random() * 10);
  let minX = 1400;
  let maxX = 1450;
  if (negOrPos > 5){
    return Math.floor(Math.random() * (maxX - minX) + minX * -1);
  }else{
    return Math.floor(Math.random() * (maxX - minX) + minX);
  }
}

export function updateHealth(enemy, currentHealth) {
  const healthBar = enemy.querySelector('#enemyHealth');
  if (!healthBar) {
    console.error('Health bar not found');
    return;
  }
  const maxHealth = 100;
  const healthPercentage = (currentHealth / maxHealth) * 100;
  healthBar.style.width = `${Math.max(0, healthPercentage)}%`;
}


export function spawnEnemy() {
  let playArea = document.querySelector('.playArea');
    
  const enemy = document.createElement('div');
  enemy.id = 'enemy';
  enemy.classList.add("enemy");
  enemy.style.position = 'absolute';
  enemy.style.background = 'orange';
  enemy.style.width = '30px';
  enemy.style.height = '30px';
  enemy.style.borderRadius = '50px';
  enemy.style.left = randomXSpawnPoint()/*canvasWidth*/ + 'px'; 
  enemy.style.top = randomYSpawnPoint()/*canvasHeight*/ + 'px';
  console.log('True Left: ' + enemy.style.left)
  console.log('True Top: ' + enemy.style.top)
  enemy.style.zIndex = '3';
  enemy.style.position = 'absolute';
  //enemy.style.left = '300px'; 
  //enemy.style.top = '0px';
  enemy.enemyHealth = 100;

  // HitBox
  const hitbox = document.createElement('div');
  hitbox.id = 'enemy-hitbox';
  hitbox.classList.add('hitbox');
  hitbox.style.position = 'absolute';
  hitbox.style.width = '24px'; 
  hitbox.style.height = '24px';
  hitbox.style.border = '2px dashed red'; 
  hitbox.style.borderRadius = '50px';
  hitbox.style.pointerEvents = 'none'; 
  hitbox.style.left = '1px'; 
  hitbox.style.top = '1px';
  enemy.appendChild(hitbox);

  // Health bar 
  const healthBarContainer = document.createElement('div');
  healthBarContainer.style.position = 'absolute';
  healthBarContainer.style.width = '100%';
  healthBarContainer.style.height = '5px';
  healthBarContainer.style.background = '#ff474c';
  healthBarContainer.style.top = '-10px'; 
  healthBarContainer.style.left = '0px';
  healthBarContainer.style.zIndex = '4';

  const healthBar = document.createElement('div');
  healthBar.id = 'enemyHealth'
  healthBar.classList.add('health-bar');
  healthBar.style.width = '100%'; // No damage, full health
  healthBar.style.height = '100%';
  healthBar.style.background = '#65fe08';
  healthBarContainer.style.zIndex = '5';
  healthBarContainer.appendChild(healthBar);
  enemy.appendChild(healthBarContainer);

  document.querySelector('#game_canvas').appendChild(enemy);

  enemyLife();

  playArea.appendChild(enemy)

  troubleTribalsAudio.loop = true;
  troubleTribalsAudio.volume = 0.0;
  troubleTribalsAudio.play();

  return enemy
}

/*
⢀⣠⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⣠⣤⣶⣶
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⢰⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣧⣀⣀⣾⣿⣿⣿⣿
⣿⣿⣿⣿⣿⡏⠉⠛⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⣿
⣿⣿⣿⣿⣿⣿⠀⠀⠀⠈⠛⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠛⠉⠁⠀⣿
⣿⣿⣿⣿⣿⣿⣧⡀⠀⠀⠀⠀⠙⠿⠿⠿⠻⠿⠿⠟⠿⠛⠉⠀⠀⠀⠀⠀⣸⣿
⣿⣿⣿⣿⣿⣿⣿⣷⣄⠀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣴⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⠏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠠⣴⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⡟⠀⠀⢰⣹⡆⠀⠀⠀⠀⠀⠀⣭⣷⠀⠀⠀⠸⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⠃⠀⠀⠈⠉⠀⠀⠤⠄⠀⠀⠀⠉⠁⠀⠀⠀⠀⢿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⢾⣿⣷⠀⠀⠀⠀⡠⠤⢄⠀⠀⠀⠠⣿⣿⣷⠀⢸⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⡀⠉⠀⠀⠀⠀⠀⢄⠀⢀⠀⠀⠀⠀⠉⠉⠁⠀⠀⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣧⠀⠀⠀⠀⠀⠀⠀⠈⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢹⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿
*/


