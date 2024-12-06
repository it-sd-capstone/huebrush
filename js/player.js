import { createElement } from './level1.js';

export function updatePlayerHealth(myBox, currentHealth) {
  const healthBar = myBox.querySelector('#boxHealth');
  if (!healthBar) {
    console.error('Health bar not found');
    return;
  }
  const maxHealth = 100;
  const healthPercentage = (currentHealth / maxHealth) * 100;
  healthBar.style.width = `${Math.max(0, healthPercentage)}%`;
}


export function spawnPlayer(widthModifier,heightModifier,top,left) {
  const playArea = document.querySelector('.playArea');

  const myBox = createElement('div', 'myBox', ['myBox'], {
    position: 'absolute',
    background: 'grey',
    width: `${widthModifier * 10}px`,
    height: `${heightModifier * 10}px`,
    left: `${left}`,
    top: `${top}`,
    zIndex: '3',
  });

  const heartContainer = document.createElement('div');
  heartContainer.id = 'player-hearts';
  heartContainer.style.position = 'absolute';
  heartContainer.style.top = '105px';
  heartContainer.style.left = '10px';
  heartContainer.style.zIndex = '10';
  document.body.appendChild(heartContainer);
  
  
  for (let i = 0; i < 2; i++) {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.width = '30px';
    heart.style.height = '30px';
    heart.style.background = 'transparent';
    heart.style.borderRadius = '50%';
    heart.style.display = 'inline-block';
    heart.style.marginRight = '5px';
    heart.style.zIndex = '10';
    
    const heartImage = document.createElement('img');
    heartImage.src = '/images/lifeHeart.png';
    heartImage.alt = 'Heart';
    heartImage.style.width = '100%';
    heartImage.style.height = '100%';
    heartImage.style.objectFit = 'cover';
    
    heartContainer.appendChild(heart);
    heart.appendChild(heartImage);
  }
  playArea.appendChild(myBox);
}