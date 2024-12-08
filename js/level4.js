import { createElement } from './level1.js'

export function createLevel4(widthModifier,heightModifier,offscreen, leftoffscreen) {
  let playArea = document.querySelector('.playArea');

  const level4 = createElement('div', 'level4', ['box'], {
    position: 'absolute',
    background: 'white',
    width: `${widthModifier * 500}px`,
    height: `${heightModifier * 300}px`,
    padding: '0px',
    border: '0px',
    left: `${leftoffscreen}%`,
    top: `${offscreen}%`,
    zIndex: '1',
    transition: 'top 1.75s ease, height 1.75s ease,left 1.75s ease, width 1.75s ease'
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

  const pillar2 = createElement('div', 'pillar2', ['wallSolid']);

    const pillar2Background = createElement('div', 'pillar2Background', ['wallSolid']);

    const pillar2BackgroundConfig = [
      { id: 'pillar2Background1', 
        width: `${widthModifier * 10}px`,
        height: `${heightModifier * 20}px`,
        top: `${heightModifier * 50}px`,
        left: `${widthModifier * 160}px`,
      }
    ];

    pillar2BackgroundConfig.forEach(({ id, width, height, top, left}) => {
      const pillar = createElement('div', id, ['wallSolid'], {
        background: 'grey',
        width,
        height,
        top,
        left,
      });
      pillar2Background.appendChild(pillar);
    });

    const pillar2Fill = createElement('div', 'pillar2Fill', ['wallSolid']);

    const pillar2FillConfig = [
      { id: 'pillar2Fill1', 
        width: `${widthModifier * 10}px`,
        height: `${heightModifier * 10}px`,
        top: `${heightModifier * 50}px`,
        left: `${widthModifier * 160}px`,
      },
      { id: 'pillar2Fill2', 
        width: `${widthModifier * 10}px`,
        height: `${heightModifier * 10}px`,
        top: `${heightModifier * 60}px`,
        left: `${widthModifier * 160}px`,
      }
    ];

    pillar2FillConfig.forEach(({ id, width, height, top, left}) => {
      const pillar = createElement('div', id, ['wallSolid'], {
        background: `red`,
        boxSizing: `border-box`,
        border: `1px solid pink`,
        width,
        height,
        top,
        left,
        opacity: `0%`,
      });
      pillar2Fill.appendChild(pillar);
    });

    const pillar2Border = createElement('div', 'pillar2Border', ['wallSolid']);

    const pillar2BorderConfig = [
      { id: 'pillar2Border1', 
        width: `${widthModifier * 10}px`,
        height: `${heightModifier * 20}px`,
        top: `${heightModifier * 50}px`,
        left: `${widthModifier * 160}px`,
      }
    ];

    pillar2BorderConfig.forEach(({ id, width, height, top, left}) => {
      const pillar = createElement('div', id, ['wallSolid'], {
        background: `rgba(0, 0, 0, 0)`,
        boxSizing: `border-box`,
        border: `2px solid black`,
        width,
        height,
        top,
        left,
      });
      pillar2Border.appendChild(pillar);
    });

  pillar2.appendChild(pillar2Background);
  pillar2.appendChild(pillar2Fill);
  pillar2.appendChild(pillar2Border);

  const pillar5 = createElement('div', 'pillar5', ['wallSolid']);

    const pillar5Background = createElement('div', 'pillar5Background', ['wallSolid']);

    const pillar5BackgroundConfig = [
      { id: 'pillar5Background1', 
        width: `${widthModifier * 10}px`,
        height: `${heightModifier * 30}px`,
        top: `${heightModifier * 50}px`,
        left: `${widthModifier * 430}px`,
      },
      { id: 'pillar5Background2', 
        width: `${widthModifier * 10}px`,
        height: `${heightModifier * 20}px`,
        top: `${heightModifier * 60}px`,
        left: `${widthModifier * 420}px`,
      }
    ];

    pillar5BackgroundConfig.forEach(({ id, width, height, top, left}) => {
      const pillar = createElement('div', id, ['wallSolid'], {
        background: 'grey',
        width,
        height,
        top,
        left,
      });
      pillar5Background.appendChild(pillar);
    });

    const pillar5Fill = createElement('div', 'pillar5Fill', ['wallSolid']);

    const pillar5FillConfig = [
      { id: 'pillar5Fill1', 
        width: `${widthModifier * 10}px`,
        height: `${heightModifier * 10}px`,
        top: `${heightModifier * 50}px`,
        left: `${widthModifier * 430}px`,
      },
      { id: 'pillar5Fill2', 
        width: `${widthModifier * 10}px`,
        height: `${heightModifier * 10}px`,
        top: `${heightModifier * 60}px`,
        left: `${widthModifier * 420}px`,
      },
      { id: 'pillar5Fill3', 
        width: `${widthModifier * 10}px`,
        height: `${heightModifier * 10}px`,
        top: `${heightModifier * 60}px`,
        left: `${widthModifier * 430}px`,
      },
      { id: 'pillar5Fill4', 
        width: `${widthModifier * 10}px`,
        height: `${heightModifier * 10}px`,
        top: `${heightModifier * 70}px`,
        left: `${widthModifier * 420}px`,
      },
      { id: 'pillar5Fill5', 
        width: `${widthModifier * 10}px`,
        height: `${heightModifier * 10}px`,
        top: `${heightModifier * 70}px`,
        left: `${widthModifier * 430}px`,
      },
    ];

    pillar5FillConfig.forEach(({ id, width, height, top, left}) => {
      const pillar = createElement('div', id, ['wallSolid'], {
        background: `red`,
        boxSizing: `border-box`,
        border: `1px solid pink`,
        width,
        height,
        top,
        left,
        opacity: `0%`,
      });
      pillar5Fill.appendChild(pillar);
    });

    const pillar5Border = createElement('div', 'pillar5Border', ['wallSolid']);

    const pillar5BorderConfig = [
      { id: 'pillar5Border1', 
        width: `${widthModifier * 10}px`,
        height: `${heightModifier * 12}px`,
        top: `${heightModifier * 50}px`,
        left: `${widthModifier * 430}px`,
        borderTop: `2px solid black`,
        borderLeft: `2px solid black`,
        borderRight: `2px solid black`,
        borderBottom: `none`,
      },
      { id: 'pillar5Border2', 
        width: `${widthModifier * 10}px`,
        height: `${heightModifier * 20}px`,
        top: `${heightModifier * 60}px`,
        left: `${widthModifier * 430}px`,
        borderTop: `none`,
        borderLeft: `none`,
        borderRight: `2px solid black`,
        borderBottom: `2px solid black`,
      },
      { id: 'pillar5Border3', 
        width: `${widthModifier * 10}px`,
        height: `${heightModifier * 20}px`,
        top: `${heightModifier * 60}px`,
        left: `${widthModifier * 420}px`,
        borderTop: `2px solid black`,
        borderLeft: `2px solid black`,
        borderRight: `none`,
        borderBottom: `2px solid black`,
      }
    ];

    pillar5BorderConfig.forEach(({ id, width, height, top, left, borderTop, borderLeft, borderRight, borderBottom}) => {
      const pillar = createElement('div', id, ['wallSolid'], {
        background: `rgba(0, 0, 0, 0)`,
        boxSizing: `border-box`,
        borderTop,
        borderBottom,
        borderLeft,
        borderRight,
        width,
        height,
        top,
        left,
      });
      pillar5Border.appendChild(pillar);
    });

  pillar5.appendChild(pillar5Background);
  pillar5.appendChild(pillar5Fill);
  pillar5.appendChild(pillar5Border);


  level4.appendChild(wallBlack4);
  level4.appendChild(pillar2);
  level4.appendChild(pillar5);

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