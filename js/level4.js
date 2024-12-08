import { createElement } from './level1.js'

export function createLevel4(widthModifier,heightModifier,offscreen) {
  let playArea = document.querySelector('.playArea');

  const level4 = createElement('div', 'level4', ['box'], {
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

  const wallBlack4 = createElement('div', 'wallBlack4', ['wallSolid']);

  const wallBlack4Config = [
    { id: 'wall1', 
      width: `${widthModifier * 500}px`,
      height: `${heightModifier * 10}px`,
      top: `${heightModifier * 0}px`,
      left: `${widthModifier * 0}px`,
    },
    { id: 'wall2', 
      width: `${widthModifier * 10}px`,
      height: `${heightModifier * 120}px`,
      top: `${heightModifier * 10}px`,
      left: `${widthModifier * 60}px`,
    },
    { id: 'wall3', 
      width: `${widthModifier * 10}px`,
      height: `${heightModifier * 140}px`,
      top: `${heightModifier * 160}px`,
      left: `${widthModifier * 60}px`,
    }
  ];

  wallBlack4Config.forEach(({ id, width, height, top, left}) => {
    const wall = createElement('div', id, ['wallSolid'], {
      background: 'rgb(0, 0, 0)',
      width,
      height,
      top,
      left,
    });
    wallBlack4.appendChild(wall);
  });

  const pillar1Background = createElement('div', 'pillar1Background', ['wallSolid']);

  const pillar1BackgroundConfig = [
    { id: 'pillar1Background1', 
      width: `${widthModifier * 500}px`,
      height: `${heightModifier * 10}px`,
      top: `${heightModifier * 0}px`,
      left: `${widthModifier * 0}px`,
    }
  ];

  pillar1BackgroundConfig.forEach(({ id, width, height, top, left}) => {
    const wall = createElement('div', `pillar1Background1`, ['wallSolid'], {
      background: 'rgb(0, 0, 0)',
      width: `${widthModifier * 500}px`,
      height: `${heightModifier * 10}px`,
      top: `${heightModifier * 0}px`,
      left: `${widthModifier * 0}px`,
    });
    pillar1Background.appendChild(wall);
  });

  level4.appendChild(wallBlack4);

  playArea.appendChild(level4);

  let levelStack = getLevel4Objects();

  for (let object in levelStack) {
    levelStack[object].style.position = 'absolute';
    levelStack[object].style.transition = `width ${1.75}s ease`;
  }

}

export function createLevel4End(){
  let level3 = document.querySelector('#level4')

  const level3End = createElement('div', 'level4End', ['levelEnd'], {
    position: 'absolute',
    background: 'rgb(60, 199, 184)',
    width: '15px',
    height: '30px',
    top: '130px',
    left: '10px',
    zIndex: '-2'
  });

  level3.appendChild(level3End);
}

export function getLevel4Objects() {
  let level4 = document.querySelector('#level4')
  let stack = Array.from(level4.children);
  let childStack = [];

  while (stack.length > 0) {
    let child = stack.pop();
    
    if (child.tagName === "DIV") {
      if (child.childElementCount > 0) {
        stack.push(...child.children);
      } else {
        childStack.push(child);
      }
    }
  }

  return childStack;
}