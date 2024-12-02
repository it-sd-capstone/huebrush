import { createElement } from './level1.js'

export function createLevel3(widthModifier,heightModifier,offscreen) {
  let playArea = document.querySelector('.playArea');

  const level3 = createElement('div', 'level3', ['box'], {
    position: 'absolute',
    background: 'white',
    width: `${widthModifier * 500}px`,
    height: `${heightModifier * 300}px`,
    padding: '0px',
    border: '0px',
    left: `0%`,
    top: `${offscreen}%`,
    zIndex: '1',
    transition: 'top 1.75s ease, height 1.75s ease'
  });

  const gate3 = createElement('div', 'gate2', ['gate2'], {
    background: 'blue',
    width: `${widthModifier * 10}px`,
    height: `${heightModifier * 30}px`,
    top: `${heightModifier * 220}px`,
    left: `${widthModifier * 430}px`,
  });
  gate3.classList.add('wallSolid');

  level3.appendChild(gate3);

  playArea.appendChild(level3);

}
