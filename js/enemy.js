//let damage = 0;

function randomYSpawnPoint(){
  let negOrPos = Math.floor(Math.random() * 10);
  let minY = 850;
  let maxY = 880;
  if (negOrPos > 5){
    return Math.floor(Math.random() * (maxY - minY) + minY * -1);
  }else{
    return Math.floor(Math.random() * (maxY - minY) + minY)
  }
}

function randomXSpawnPoint(){
  let negOrPos = Math.floor(Math.random() * 10);
  let minX = 1900;
  let maxX = 1950;
  if (negOrPos > 5){
    return Math.floor(Math.random() * (maxX - minX) + minX * -1);
  }else{
    return Math.floor(Math.random() * (maxX - minX) + minX);
  }
}

export function updateHealth(enemy, newHealthPercentage) {
  const healthBar = enemy.querySelector('#damage'); // Get the health bar
  healthBar.style.width = `${Math.max(0, newHealthPercentage)}%`;
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
  enemy.style.left = '300px'; 
  enemy.style.top = '0px';

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
  healthBarContainer.style.width = '40px';
  healthBarContainer.style.height = '5px';
  healthBarContainer.style.background = '#65fe08';
  healthBarContainer.style.top = '-10px'; 
  healthBarContainer.style.left = '-5px';
  healthBarContainer.style.zIndex = '4';

  const healthBar = document.createElement('div');
  healthBar.id = 'damage'
  healthBar.classList.add('health-bar');
  healthBar.style.width = '0%'; // No damage, full health
  healthBar.style.height = '100%';
  healthBar.style.background = '#ff474c';
  healthBarContainer.style.zIndex = '5';
  healthBarContainer.appendChild(healthBar);
  enemy.appendChild(healthBarContainer);

  document.querySelector('#game_canvas').appendChild(enemy);

  function createExplosion() {
    const enemyElem = enemy.getBoundingClientRect();

    const explosion = document.createElement('div');
    explosion.style.position = 'absolute';
    explosion.style.width = '50px'; 
    explosion.style.height = '50px';
    explosion.style.background = 'radial-gradient(circle, rgba(0, 0, 0, 0) 0%, orange 100%)';
    explosion.style.borderRadius = '50%';
    explosion.style.opacity = '1';
    explosion.style.zIndex = '4'; 
    explosion.style.left = enemyElem.left + 'px';
    explosion.style.top = enemyElem.top + 'px';

    document.getElementById('#explosion').play();
    document.querySelector('#game_canvas').appendChild(explosion);
    enemy.remove(); 

    // Fade out the explosion 
    setTimeout(() => {
      explosion.style.transition = 'opacity 0.5s ease';
      explosion.style.opacity = '0';
  
      // Remove the explosion 
      setTimeout(() => explosion.remove(), 500);
    }, 200); // Explosion duration
  }
  
/************************TO BE MOVED TO CONTROLLER *******************************/
  //Apply damage
  /*const checkPosition = setInterval(() => {
    // Convert string to number
    let left = parseInt(enemy.style.left.replace('px', '')); 
    let top = parseInt(enemy.style.top.replace('px', ''));

    //Check for projectile to be in range for damage
    //Will need to add the correct element name, for now just coordinates 
    //To test to make sure it works
    if (left >= 300 && top >= 300) {
      damage += 15; // Increment damage
      updateHealth(enemy, damage); 

      if (damage >= 100) {
        createExplosion(); 
        clearInterval(checkPosition); // Stop checking position
      }

    }
  }, 100);*/
/*************************************************************************************/

  playArea.appendChild(enemy)

  return enemy
}



