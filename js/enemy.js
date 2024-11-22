function spawnEnemy() {
  const enemy = document.createElement('div');
  enemy.id = 'enemy';
  enemy.classList.add("enemy");
  enemy.style.position = 'absolute';
  enemy.style.background = 'orange';
  enemy.style.width = '30px';
  enemy.style.height = '30px';
  enemy.style.borderRadius = '50px';
  enemy.style.left = '1000px'; 
  enemy.style.top = '0px';
  enemy.style.zIndex = '3';
  enemy.style.position = 'absolute';
  enemy.style.left = '1000px'; 
  enemy.style.top = '0px';

  level1.appendChild(enemy);
}

window.spawnEnemy = spawnEnemy;