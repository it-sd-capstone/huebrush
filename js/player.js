import { createElement } from './level1.js';

export function spawnPlayer(widthModifier,heightModifier,top,left) {
  const playArea = document.querySelector('.playArea');

  const myBox = createElement('div', 'myBox', ['myBox'], {
    position: 'absolute',
    background: 'grey',
    width: `${widthModifier * 10}px`,
    height: `${heightModifier * 10}px`,
    left: `${left}`,
    top: `${top}`,
    zIndex: '3'
  });

  playArea.appendChild(myBox);
}