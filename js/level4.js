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

  const pillar1 = createElement('div', 'pillar1', ['wallSolid']);

  const pillar1Background = createElement('div', 'pillar1Background', ['wallSolid']);

  const pillar1BackgroundConfig = [
    { id: 'pillar1Background1', 
      width: `${widthModifier * 10}px`,
      height: `${heightModifier * 10}px`,
      top: `${heightModifier * 260}px`,
      left: `${widthModifier * 140}px`,
    }
  ];

  pillar1BackgroundConfig.forEach(({ id, width, height, top, left}) => {
    const pillar = createElement('div', id, ['wallSolid'], {
      background: 'grey',
      width,
      height,
      top,
      left,
    });
    pillar1Background.appendChild(pillar);
  });

  const pillar1Fill = createElement('div', 'pillar1Fill', ['wallSolid']);

    const pillar1FillConfig = [
      { id: 'pillar1Fill1', 
        width: `${widthModifier * 10}px`,
        height: `${heightModifier * 10}px`,
        top: `${heightModifier * 260}px`,
        left: `${widthModifier * 140}px`,
      }
    ];

    pillar1FillConfig.forEach(({ id, width, height, top, left}) => {
      const pillar = createElement('div', id, ['wallSolid'], {
        background: `red`,
        boxSizing: `border-box`,
        border: `1px solid white`,
        width,
        height,
        top,
        left,
        opacity: `0%`,
      });
      pillar1Fill.appendChild(pillar);
    });

    const pillar1Border = createElement('div', 'pillar1Border', ['wallSolid']);

    const pillar1BorderConfig = [
      { id: 'pillar1Border1', 
        width: `${widthModifier * 10}px`,
        height: `${heightModifier * 10}px`,
        top: `${heightModifier * 260}px`,
        left: `${widthModifier * 140}px`,
      }
    ];

    pillar1BorderConfig.forEach(({ id, width, height, top, left}) => {
      const pillar = createElement('div', id, ['wallSolid'], {
        background: `rgba(0, 0, 0, 0)`,
        boxSizing: `border-box`,
        border: `2px solid black`,
        width,
        height,
        top,
        left,
      });
      pillar1Border.appendChild(pillar);
    });

  pillar1.appendChild(pillar1Background);
  pillar1.appendChild(pillar1Fill);
  pillar1.appendChild(pillar1Border);

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
        border: `1px solid white`,
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

  const pillar3 = createElement('div', 'pillar3', ['wallSolid']);

    const pillar3Background = createElement('div', 'pillar3Background', ['wallSolid']);

    const pillar3BackgroundConfig = [
      { id: 'pillar3Background1', 
        width: `${widthModifier * 10}px`,
        height: `${heightModifier * 30}px`,
        top: `${heightModifier * 230}px`,
        left: `${widthModifier * 410}px`,
      }
    ];

    pillar3BackgroundConfig.forEach(({ id, width, height, top, left}) => {
      const pillar = createElement('div', id, ['wallSolid'], {
        background: 'grey',
        width,
        height,
        top,
        left,
      });
      pillar3Background.appendChild(pillar);
    });

    const pillar3Fill = createElement('div', 'pillar3Fill', ['wallSolid']);

    const pillar3FillConfig = [
      { id: 'pillar3Fill1', 
        width: `${widthModifier * 10}px`,
        height: `${heightModifier * 10}px`,
        top: `${heightModifier * 230}px`,
        left: `${widthModifier * 410}px`,
      },
      { id: 'pillar3Fill2', 
        width: `${widthModifier * 10}px`,
        height: `${heightModifier * 10}px`,
        top: `${heightModifier * 240}px`,
        left: `${widthModifier * 410}px`,
      },
      { id: 'pillar3Fill3', 
        width: `${widthModifier * 10}px`,
        height: `${heightModifier * 10}px`,
        top: `${heightModifier * 250}px`,
        left: `${widthModifier * 410}px`,
      }
    ];

    pillar3FillConfig.forEach(({ id, width, height, top, left}) => {
      const pillar = createElement('div', id, ['wallSolid'], {
        background: `red`,
        boxSizing: `border-box`,
        border: `1px solid white`,
        width,
        height,
        top,
        left,
        opacity: `0%`,
      });
      pillar3Fill.appendChild(pillar);
    });

    const pillar3Border = createElement('div', 'pillar3Border', ['wallSolid']);

    const pillar3BorderConfig = [
      { id: 'pillar3Border1', 
        width: `${widthModifier * 10}px`,
        height: `${heightModifier * 30}px`,
        top: `${heightModifier * 230}px`,
        left: `${widthModifier * 410}px`,
      }
    ];

    pillar3BorderConfig.forEach(({ id, width, height, top, left}) => {
      const pillar = createElement('div', id, ['wallSolid'], {
        background: `rgba(0, 0, 0, 0)`,
        boxSizing: `border-box`,
        border: `2px solid black`,
        width,
        height,
        top,
        left,
      });
      pillar3Border.appendChild(pillar);
    });

  pillar3.appendChild(pillar3Background);
  pillar3.appendChild(pillar3Fill);
  pillar3.appendChild(pillar3Border);

  const pillar4 = createElement('div', 'pillar4', ['wallSolid']);

    const pillar4Background = createElement('div', 'pillar4Background', ['wallSolid']);

    const pillar4BackgroundConfig = [
      { id: 'pillar4Background1', 
        width: `${widthModifier * 10}px`,
        height: `${heightModifier * 30}px`,
        top: `${heightModifier * 80}px`,
        left: `${widthModifier * 320}px`,
      },
      { id: 'pillar4Background2', 
        width: `${widthModifier * 10}px`,
        height: `${heightModifier * 10}px`,
        top: `${heightModifier * 100}px`,
        left: `${widthModifier * 310}px`,
      }
    ];

    pillar4BackgroundConfig.forEach(({ id, width, height, top, left}) => {
      const pillar = createElement('div', id, ['wallSolid'], {
        background: 'grey',
        width,
        height,
        top,
        left,
      });
      pillar4Background.appendChild(pillar);
    });

    const pillar4Fill = createElement('div', 'pillar4Fill', ['wallSolid']);

    const pillar4FillConfig = [
      { id: 'pillar4Fill1', 
        width: `${widthModifier * 10}px`,
        height: `${heightModifier * 10}px`,
        top: `${heightModifier * 80}px`,
        left: `${widthModifier * 320}px`,
      },
      { id: 'pillar4Fill2', 
        width: `${widthModifier * 10}px`,
        height: `${heightModifier * 10}px`,
        top: `${heightModifier * 90}px`,
        left: `${widthModifier * 320}px`,
      },
      { id: 'pillar5Fill3', 
        width: `${widthModifier * 10}px`,
        height: `${heightModifier * 10}px`,
        top: `${heightModifier * 100}px`,
        left: `${widthModifier * 320}px`,
      },
      { id: 'pillar4Fill4', 
        width: `${widthModifier * 10}px`,
        height: `${heightModifier * 10}px`,
        top: `${heightModifier * 100}px`,
        left: `${widthModifier * 310}px`,
      },
    ];

    pillar4FillConfig.forEach(({ id, width, height, top, left}) => {
      const pillar = createElement('div', id, ['wallSolid'], {
        background: `red`,
        boxSizing: `border-box`,
        border: `1px solid white`,
        width,
        height,
        top,
        left,
        opacity: `0%`,
      });
      pillar4Fill.appendChild(pillar);
    });

    const pillar4Border = createElement('div', 'pillar4Border', ['wallSolid']);

    const pillar4BorderConfig = [
      { id: 'pillar4Border1', 
        width: `${widthModifier * 10}px`,
        height: `${heightModifier * 22}px`,
        top: `${heightModifier * 80}px`,
        left: `${widthModifier * 320}px`,
        borderTop: `2px solid black`,
        borderLeft: `2px solid black`,
        borderRight: `2px solid black`,
        borderBottom: `none`,
      },
      { id: 'pillar4Border2', 
        width: `${widthModifier * 10}px`,
        height: `${heightModifier * 10}px`,
        top: `${heightModifier * 100}px`,
        left: `${widthModifier * 320}px`,
        borderTop: `none`,
        borderLeft: `none`,
        borderRight: `2px solid black`,
        borderBottom: `2px solid black`,
      },
      { id: 'pillar4Border3', 
        width: `${widthModifier * 10}px`,
        height: `${heightModifier * 10}px`,
        top: `${heightModifier * 100}px`,
        left: `${widthModifier * 310}px`,
        borderTop: `2px solid black`,
        borderLeft: `2px solid black`,
        borderRight: `none`,
        borderBottom: `2px solid black`,
      }
    ];

    pillar4BorderConfig.forEach(({ id, width, height, top, left, borderTop, borderLeft, borderRight, borderBottom}) => {
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
      pillar4Border.appendChild(pillar);
    });

  pillar4.appendChild(pillar4Background);
  pillar4.appendChild(pillar4Fill);
  pillar4.appendChild(pillar4Border);

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
        border: `1px solid white`,
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

  const pillar6 = createElement('div', 'pillar6', ['wallSolid']);

    const pillar6Background = createElement('div', 'pillar6Background', ['wallSolid']);

    const pillar6BackgroundConfig = [
      { id: 'pillar6Background1', 
        width: `${widthModifier * 20}px`,
        height: `${heightModifier * 30}px`,
        top: `${heightModifier * 130}px`,
        left: `${widthModifier * 200}px`,
      }
    ];

    pillar6BackgroundConfig.forEach(({ id, width, height, top, left}) => {
      const pillar = createElement('div', id, ['wallSolid'], {
        background: 'grey',
        width,
        height,
        top,
        left,
      });
      pillar6Background.appendChild(pillar);
    });

    const pillar6Fill = createElement('div', 'pillar6Fill', ['wallSolid']);

    const pillar6FillConfig = [
      { id: 'pillar6Fill1', 
        width: `${widthModifier * 10}px`,
        height: `${heightModifier * 10}px`,
        top: `${heightModifier * 130}px`,
        left: `${widthModifier * 210}px`,
      },
      { id: 'pillar6Fill2', 
        width: `${widthModifier * 10}px`,
        height: `${heightModifier * 10}px`,
        top: `${heightModifier * 140}px`,
        left: `${widthModifier * 210}px`,
      },
      { id: 'pillar6Fill3', 
        width: `${widthModifier * 10}px`,
        height: `${heightModifier * 10}px`,
        top: `${heightModifier * 150}px`,
        left: `${widthModifier * 210}px`,
      },
      { id: 'pillar6Fill4', 
        width: `${widthModifier * 10}px`,
        height: `${heightModifier * 10}px`,
        top: `${heightModifier * 130}px`,
        left: `${widthModifier * 200}px`,
      },
      { id: 'pillar6Fill5', 
        width: `${widthModifier * 10}px`,
        height: `${heightModifier * 10}px`,
        top: `${heightModifier * 140}px`,
        left: `${widthModifier * 200}px`,
      },
      { id: 'pillar6Fill6', 
        width: `${widthModifier * 10}px`,
        height: `${heightModifier * 10}px`,
        top: `${heightModifier * 150}px`,
        left: `${widthModifier * 200}px`,
      }
    ];

    pillar6FillConfig.forEach(({ id, width, height, top, left}) => {
      const pillar = createElement('div', id, ['wallSolid'], {
        background: `red`,
        boxSizing: `border-box`,
        border: `1px solid white`,
        width,
        height,
        top,
        left,
        opacity: `0%`,
      });
      pillar6Fill.appendChild(pillar);
    });

    const pillar6Border = createElement('div', 'pillar6Border', ['wallSolid']);

    const pillar6BorderConfig = [
      { id: 'pillar6Border1', 
        width: `${widthModifier * 20}px`,
        height: `${heightModifier * 30}px`,
        top: `${heightModifier * 130}px`,
        left: `${widthModifier * 200}px`,
      }
    ];

    pillar6BorderConfig.forEach(({ id, width, height, top, left}) => {
      const pillar = createElement('div', id, ['wallSolid'], {
        background: `rgba(0, 0, 0, 0)`,
        boxSizing: `border-box`,
        border: `2px solid black`,
        width,
        height,
        top,
        left,
      });
      pillar6Border.appendChild(pillar);
    });

  pillar6.appendChild(pillar6Background);
  pillar6.appendChild(pillar6Fill);
  pillar6.appendChild(pillar6Border);


  level4.appendChild(wallBlack4);
  level4.appendChild(pillar1);
  level4.appendChild(pillar2);
  level4.appendChild(pillar3);
  level4.appendChild(pillar4);
  level4.appendChild(pillar5);
  level4.appendChild(pillar6);


  playArea.appendChild(level4);

  let levelStack = getLevel4Objects();

  for (let object in levelStack) {
    levelStack[object].style.position = 'absolute';
    levelStack[object].style.transition = `width ${1.75}s ease`;
  }

}

export function createLevel4End(){
  let level4 = document.querySelector('#level4')

  const level4End = createElement('div', 'level4End', ['levelEnd'], {
    position: 'absolute',
    background: 'rgb(60, 199, 184)',
    width: '15px',
    height: '30px',
    top: '130px',
    left: '10px',
    zIndex: '-2'
  });

  level4.appendChild(level4End);
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