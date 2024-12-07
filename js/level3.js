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

  const wallBlack3 = createElement('div', 'wallBlack3', ['wallSolid']);

  const wallBlack3Config = [
    { id: 'wall1', 
      width: `${widthModifier * 10}px`,
      height: `${heightModifier * 50}px`,
      top: `${heightModifier * 10}px`,
      left: `${widthModifier * 60}px`,
    },
    { id: 'wall2', 
      width: `${widthModifier * 100}px`,
      height: `${heightModifier * 10}px`,
      top: `${heightModifier * 50}px`,
      left: `${widthModifier * 70}px`,
    },
    { id: 'wall3', 
      width: `${widthModifier * 10}px`,
      height: `${heightModifier * 20}px`,
      top: `${heightModifier * 60}px`,
      left: `${widthModifier * 160}px`,
    },
    { id: 'wall4', 
      width: `${widthModifier * 40}px`,
      height: `${heightModifier * 10}px`,
      top: `${heightModifier * 70}px`,
      left: `${widthModifier * 170}px`,
    },
    { id: 'wall5', 
      width: `${widthModifier * 10}px`,
      height: `${heightModifier * 120}px`,
      top: `${heightModifier * 10}px`,
      left: `${widthModifier * 30}px`,
    },
    { id: 'wall6', 
      width: `${widthModifier * 430}px`,
      height: `${heightModifier * 10}px`,
      top: `${heightModifier * 0}px`,
      left: `${widthModifier * 0}px`,
    },
    { id: 'wall7', 
      width: `${widthModifier * 10}px`,
      height: `${heightModifier * 140}px`,
      top: `${heightModifier * 160}px`,
      left: `${widthModifier * 30}px`,
    },
    { id: 'wall8', 
      width: `${widthModifier * 50}px`,
      height: `${heightModifier * 10}px`,
      top: `${heightModifier * 240}px`,
      left: `${widthModifier * 40}px`,
    },
    { id: 'wall9', 
      width: `${widthModifier * 460}px`,
      height: `${heightModifier * 10}px`,
      top: `${heightModifier * 290}px`,
      left: `${widthModifier * 40}px`,
    },
    { id: 'wall10', 
      width: `${widthModifier * 10}px`,
      height: `${heightModifier * 70}px`,
      top: `${heightModifier * 220}px`,
      left: `${widthModifier * 490}px`,
    },
    { id: 'wall11', 
      width: `${widthModifier * 40}px`,
      height: `${heightModifier * 10}px`,
      top: `${heightModifier * 220}px`,
      left: `${widthModifier * 450}px`,
    },
  ];

  wallBlack3Config.forEach(({ id, width, height, top, left}) => {
    const wall = createElement('div', id, ['wallSolid'], {
      background: 'rgb(0, 0, 0)',
      width,
      height,
      top,
      left,
    });
    wallBlack3.appendChild(wall);
  });

  createElement('div', 'wall12', ['blackswitch'], {
    background: 'rgb(0, 0, 0)',
    width: `${widthModifier * 70}px`,
    height: `${heightModifier * 10}px`,
    top: `${heightModifier * 0}px`,
    left: `${widthModifier * 430}px`,
    opacity: `0`
  })

  const factoryBase = createElement('div', 'factoryBase', ['wallSolid']);

  const factoryBaseConfig = [
    { id: 'base1', 
      top: `${heightModifier * 60}px`,
      left: `${widthModifier * 210}px`,
    },
    { id: 'base2', 
      top: `${heightModifier * 240}px`,
      left: `${widthModifier * 90}px`,
    },
    { id: 'base3', 
      top: `${heightModifier * 220}px`,
      left: `${widthModifier * 420}px`,
    }
  ];

  factoryBaseConfig.forEach(({ id, top, left }) => {
    const base = createElement('div', id, ['wallSolid'], {
      background: 'rgb(128, 128, 128)',
      width: `${widthModifier * 30}px`,
      height: `${heightModifier * 20}px`,
      top,
      left,
    });
    factoryBase.appendChild(base);
  });

  const factoryTop = createElement('div', 'factoryTop', ['wallSolid']);

  const factoryTopConfig = [
    { id: 'top1', 
      width: `${widthModifier * 20}px`,
      height: `${heightModifier * 20}px`,
      top: `${heightModifier * 40}px`,
      left: `${widthModifier * 220}px`,
    },
    { id: 'top2',
      width: `${widthModifier * 10}px`,
      height: `${heightModifier * 10}px`, 
      top: `${heightModifier * 20}px`,
      left: `${widthModifier * 220}px`,
    },
    { id: 'top3', 
      width: `${widthModifier * 20}px`,
      height: `${heightModifier * 20}px`,
      top: `${heightModifier * 220}px`,
      left: `${widthModifier * 100}px`,
    },
    { id: 'top4',
      width: `${widthModifier * 10}px`,
      height: `${heightModifier * 10}px`, 
      top: `${heightModifier * 200}px`,
      left: `${widthModifier * 100}px`,
    },
    { id: 'top5', 
      width: `${widthModifier * 20}px`,
      height: `${heightModifier * 20}px`,
      top: `${heightModifier * 200}px`,
      left: `${widthModifier * 430}px`,
    },
    { id: 'top6',
      width: `${widthModifier * 10}px`,
      height: `${heightModifier * 10}px`, 
      top: `${heightModifier * 180}px`,
      left: `${widthModifier * 430}px`,
    },
  ];

  factoryTopConfig.forEach(({ id, width, height, top, left }) => {
    const factory = createElement('div', id, ['wallSolid'], {
      background: 'rgb(208, 208, 208)',
      width,
      height,
      top,
      left,
    });
    factoryTop.appendChild(factory);
  });

  const beacon = createElement('div', 'beacon', ['wallSolid']);

  const beaconConfig = [
    { id: 'light1', 
      background: 'yellow',
      top: `${heightModifier * 30}px`,
      left: `${widthModifier * 220}px`,
    },
    { id: 'light2', 
      background: 'blue',
      top: `${heightModifier * 210}px`,
      left: `${widthModifier * 100}px`,
    },
    { id: 'light3', 
      background: 'red',
      top: `${heightModifier * 190}px`,
      left: `${widthModifier * 430}px`,
    }
  ];

  beaconConfig.forEach(({ id, background, top, left }) => {
    const light = createElement('div', id, ['wallSolid'], {
      background,
      width: `${widthModifier * 10}px`,
      height: `${heightModifier * 10}px`,
      top,
      left,
    });
    beacon.appendChild(light);
  });

  const gate3 = createElement('div', 'gate3', ['gate3'], {
    background: 'rgb(0,192,143)',
    width: `${widthModifier * 10}px`,
    height: `${heightModifier * 30}px`,
    top: `${heightModifier * 130}px`,
    left: `${widthModifier * 30}px`,
  });
  gate3.classList.add('wallSolid');

  

  level3.appendChild(wallBlack3);
  level3.appendChild(factoryBase);
  level3.appendChild(factoryTop);
  level3.appendChild(beacon);
  level3.appendChild(gate3);
 

  playArea.appendChild(level3);

  let levelStack = getLevel3Objects();

  for (let object in levelStack) {
    levelStack[object].style.zIndex = '2';
    levelStack[object].style.position = 'absolute';
    levelStack[object].style.transition = `width ${1.75}s ease`;
  }

}

export function createLevel3End(){
  let level3 = document.querySelector('#level3')

  const level3End = createElement('div', 'level3End', ['levelEnd'], {
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

export function getLevel3Objects() {
  let level3 = document.querySelector('#level3')
  let stack = Array.from(level3.children);
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

