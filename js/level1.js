export function createElement(tag, id, classes = [], styles = {}) {
  const element = document.createElement(tag);
  if (id) element.id = id;
  if (classes.length) element.classList.add(...classes);
  Object.assign(element.style, styles);
  return element;
}

export function createLevel1(widthModifier,heightModifier) {
  const playArea = createElement('div', 'playArea', ['playArea'], {
    position: 'relative',
    width: `1000px`,
    height: `600px`,
    overflow: 'hidden',
    background: '#ccc',
  });

  const level1 = createElement('div', 'level1', ['box'], {
    position: 'absolute',
    background: 'white',
    width: `${widthModifier * 500}px`,
    height: `${heightModifier * 300}px`,
    padding: '0px',
    border: '0px',
    left: '0',
    top: '0',
  });

  const lakeBlue = createElement('div', 'lakeBlue', ['lake']);

    const lakeBlueConfig = [
      { id: 'lakeBlue1', 
        width: `${widthModifier * 50}px`, 
        height: `${heightModifier * 70}px`, 
        top: `${heightModifier * 0}px`, 
        left: `${widthModifier * 0}px`
      },
      { id: 'lakeBlue2', 
        width: `${widthModifier * 20}px`, 
        height: `${heightModifier * 30}px`, 
        top: `${heightModifier * 0}px`, 
        left: `${widthModifier * 50}px`
      },
      { id: 'lakeBlue3', 
        width: `${widthModifier * 20}px`, 
        height: `${heightModifier * 20}px`, 
        top: `${heightModifier * 0}px`, 
        left: `${widthModifier * 70}px`
      },
      { id: 'lakeBlue4', 
        width: `${widthModifier * 10}px`, 
        height: `${heightModifier * 20}px`, 
        top: `${heightModifier * 30}px`, 
        left: `${widthModifier * 50}px`
      },
      { id: 'lakeBlue5', 
        width: `${widthModifier * 20}px`, 
        height: `${heightModifier * 20}px`, 
        top: `${heightModifier * 70}px`, 
        left: `${widthModifier * 0}px`
      },
      { id: 'lakeBlue6', 
        width: `${widthModifier * 20}px`, 
        height: `${heightModifier * 10}px`, 
        top: `${heightModifier * 70}px`, 
        left: `${widthModifier * 20}px`
      },
      { id: 'lakeBlue7', 
        width: `${widthModifier * 10}px`, 
        height: `${heightModifier * 20}px`, 
        top: `${heightModifier * 90}px`, 
        left: `${widthModifier * 0}px`
      },
    ];

    lakeBlueConfig.forEach(({ id, width, height, top, left }) => {
      const lake = createElement('div', id, ['lake'], {
        background: 'blue',
        width,
        height,
        top,
        left,
      });
      lakeBlue.appendChild(lake);
    });

  const lakeRed = createElement('div', 'lakeRed', ['lake']);

    const lakeRedConfig = [
      { id: 'lakeRed1', 
        width: `${widthModifier * 90}px`, 
        height: `${heightModifier * 70}px`, 
        top: `${heightModifier * 230}px`, 
        left: `${widthModifier * 0}px` 
      },
      { id: 'lakeRed2', 
        width: `${widthModifier * 40}px`, 
        height: `${heightModifier * 40}px`, 
        top: `${heightModifier * 190}px`, 
        left: `${widthModifier * 0}px` 
      },
      { id: 'lakeRed3', 
        width: `${widthModifier * 10}px`, 
        height: `${heightModifier * 20}px`, 
        top: `${heightModifier * 170}px`, 
        left: `${widthModifier * 0}px` 
      },
      { id: 'lakeRed4', 
        width: `${widthModifier * 10}px`, 
        height: `${heightModifier * 10}px`, 
        top: `${heightModifier * 180}px`, 
        left: `${widthModifier * 10}px` 
      },
      { id: 'lakeRed5', 
        width: `${widthModifier * 10}px`, 
        height: `${heightModifier * 10}px`, 
        top: `${heightModifier * 210}px`, 
        left: `${widthModifier * 40}px` 
      },
      { id: 'lakeRed6', 
        width: `${widthModifier * 30}px`, 
        height: `${heightModifier * 10}px`, 
        top: `${heightModifier * 220}px` , 
        left: `${widthModifier * 40}px` 
      },
      { id: 'lakeRed7', 
        width: `${widthModifier * 20}px`, 
        height: `${heightModifier * 50}px`, 
        top: `${heightModifier * 250}px`, 
        left: `${widthModifier * 90}px` 
      },
      { id: 'lakeRed8', 
        width: `${widthModifier * 10}px`, 
        height: `${heightModifier * 10}px`, 
        top: `${heightModifier * 240}px`, 
        left: `${widthModifier * 90}px` 
      },
      { id: 'lakeRed9', 
        width: `${widthModifier * 10}px`, 
        height: `${heightModifier * 10}px`, 
        top: `${heightModifier * 260}px`, 
        left: `${widthModifier * 110}px` 
      },
      { id: 'lakeRed10', 
        width: `${widthModifier * 30}px`, 
        height: `${heightModifier * 20}px`, 
        top: `${heightModifier * 280}px`, 
        left: `${widthModifier * 110}px` 
      },
    ];

    lakeRedConfig.forEach(({ id, width, height, top, left }) => {
      const lake = createElement('div', id, ['lake'], {
        background: 'red',
        width,
        height,
        top,
        left,
      });
      lakeRed.appendChild(lake);
    });

  const lakeYellow = createElement('div', 'lakeYellow', ['lake']);

    const lakeYellowConfig = [
      { id: 'lakeYellow1', 
        width: `${widthModifier * 20}px`, 
        height: `${heightModifier * 80}px`, 
        top: `${heightModifier * 210}px`, 
        left: `${widthModifier * 480}px` 
      },
      { id: 'lakeYellow2', 
        width: `${widthModifier * 10}px`, 
        height: `${heightModifier * 10}px`, 
        top: `${heightModifier * 200}px`, 
        left: `${widthModifier * 490}px` 
      },
      { id: 'lakeYellow3', 
        width: `${widthModifier * 10}px`, 
        height: `${heightModifier * 20}px`, 
        top: `${heightModifier * 230}px`, 
        left: `${widthModifier * 470}px` 
      },
      { id: 'lakeYellow4', 
        width: `${widthModifier * 20}px`, 
        height: `${heightModifier * 10}px`, 
        top: `${heightModifier * 250}px`, 
        left: `${widthModifier * 460}px` 
      },
      { id: 'lakeYellow5', 
        width: `${widthModifier * 30}px`, 
        height: `${heightModifier * 30}px`, 
        top: `${heightModifier * 260}px`, 
        left: `${widthModifier * 450}px` 
      },
      { id: 'lakeYellow6', 
        width: `${widthModifier * 10}px`, 
        height: `${heightModifier * 20}px`, 
        top: `${heightModifier * 270}px`, 
        left: `${widthModifier * 440}px` 
      },
    ];

    lakeYellowConfig.forEach(({ id, width, height, top, left }) => {
      const lake = createElement('div', id, ['lake'], {
        background: 'yellow',
        width,
        height,
        top,
        left,
      });
      lakeYellow.appendChild(lake);
    });

  const wallMountainsB = createElement('div', 'wallMountainsB', ['wallMountainsB']);

    const wallMountainsBConfig = [
      { id: 'wallMountainsB1', 
        width: `${widthModifier * 10}px`, 
        height: `${heightModifier * 10}px`, 
        top: `${heightModifier * 270}px`, 
        left: `${widthModifier * 110}px` 
      },
      { id: 'wallMountainsB2', 
        width: `${widthModifier * 10}px`, 
        height: `${heightModifier * 30}px`, 
        top: `${heightModifier * 250}px`, 
        left: `${widthModifier * 120}px` 
      },
      { id: 'wallMountainsB3', 
        width: `${widthModifier * 30}px`,
        height: `${heightModifier * 40}px`, 
        top: `${heightModifier * 240}px`, 
        left: `${widthModifier * 130}px` 
        },
      { id: 'wallMountainsB4', 
        width: `${widthModifier * 20}px`, 
        height: `${heightModifier * 10}px`, 
        top: `${heightModifier * 230}px`, 
        left: `${widthModifier * 140}px` 
      },
      { id: 'wallMountainsB5', 
        width: `${widthModifier * 20}px`, 
        height: `${heightModifier * 10}px`, 
        top: `${heightModifier * 270}px`, 
        left: `${widthModifier * 160}px` 
      },
      { id: 'wallMountainsB6', 
        width: `${widthModifier * 90}px`, 
        height: `${heightModifier * 20}px`, 
        top: `${heightModifier * 280}px`, 
        left: `${widthModifier * 140}px` 
      },
      { id: 'wallMountainsB7', 
        width: `${widthModifier * 20}px`, 
        height: `${heightModifier * 10}px`, 
        top: `${heightModifier * 270}px`, 
        left: `${widthModifier * 210}px` 
      },
      { id: 'wallMountainsB8', 
        width: `${widthModifier * 170}px`, 
        height: `${heightModifier * 60}px`, 
        top: `${heightModifier * 240}px`, 
        left: `${widthModifier * 230}px` 
      },
      { id: 'wallMountainsB9', 
        width: `${widthModifier * 50}px`, 
        height: `${heightModifier * 30}px`, 
        top: `${heightModifier * 210}px`, 
        left: `${widthModifier * 230}px` 
      },
      { id: 'wallMountainsB10', 
        width: `${widthModifier * 30}px`, 
        height: `${heightModifier * 10}px`, 
        top: `${heightModifier * 200}px`, 
        left: `${widthModifier * 240}px` 
      },
      { id: 'wallMountainsB11', 
        width: `${widthModifier * 10}px`, 
        height: `${heightModifier * 10}px`, 
        top: `${heightModifier * 190}px`, 
        left: `${widthModifier * 250}px` 
      },
      { id: 'wallMountainsB12', 
        width: `${widthModifier * 40}px`, 
        height: `${heightModifier * 20}px`, 
        top: `${heightModifier * 220}px`, 
        left: `${widthModifier * 290}px` 
      },
      { id: 'wallMountainsB13', 
        width: `${widthModifier * 10}px`, 
        height: `${heightModifier * 10}px`, 
        top: `${heightModifier * 210}px`, 
        left: `${widthModifier * 300}px` 
      },
      { id: 'wallMountainsB14', 
        width: `${widthModifier * 20}px`, 
        height: `${heightModifier * 40}px`, 
        top: `${heightModifier * 200}px`, 
        left: `${widthModifier * 330}px` 
      },
      { id: 'wallMountainsB15', 
        width: `${widthModifier * 10}px`, 
        height: `${heightModifier * 10}px`, 
        top: `${heightModifier * 190}px`, 
        left: `${widthModifier * 340}px`
      },
      { id: 'wallMountainsB16', 
        width: `${widthModifier * 50}px`, 
        height: `${heightModifier * 60}px`, 
        top: `${heightModifier * 180}px`, 
        left: `${widthModifier * 350}px` 
      },
      { id: 'wallMountainsB17', 
        width: `${widthModifier * 30}px`, 
        height: `${heightModifier * 20}px`, 
        top: `${heightModifier * 160}px`, 
        left: `${widthModifier * 370}px` 
      },
      { id: 'wallMountainsB18', 
        width: `${widthModifier * 10}px`,
        height: `${heightModifier * 10}px`, 
        top: `${heightModifier * 150}px`, 
        left: `${widthModifier * 390}px` 
      },
    ];

    wallMountainsBConfig.forEach(({ id, width, height, top, left }) => {
      const mountain = createElement('div', id, ['wallSolid'], {
        background: 'brown',
        width,
        height,
        top,
        left,
      });
      wallMountainsB.appendChild(mountain);
    });

  const wallMountainsA = createElement('div', 'wallMountainsA', ['wallMountainsA']);
    const wallMountainsAGroup1 = createElement('div', 'wallMountainsAGroup1', ['wallMountainsAGroup']);
    const wallMountainsAGroup2 = createElement('div', 'wallMountainsAGroup2', ['wallMountainsAGroup']);
    const wallMountainsAGroup3 = createElement('div', 'wallMountainsAGroup3', ['wallMountainsAGroup']);

    const wallMountainsAConfig = [
      { id: 'wallMountainsA1', 
        width: `${widthModifier * 10}px`, 
        height: `${heightModifier * 20}px`, 
        top: `${heightModifier * 0}px`, 
        left: `${widthModifier * 110}px` 
      },
      { id: 'wallMountainsA2', 
        width: `${widthModifier * 40}px`, 
        height: `${heightModifier * 10}px`, 
        top: `${heightModifier * 50}px`, 
        left: `${widthModifier * 150}px` 
      },
      { id: 'wallMountainsA3', 
        width: `${widthModifier * 60}px`, 
        height: `${heightModifier * 10}px`, 
        top: `${heightModifier * 40}px`, 
        left: `${widthModifier * 140}px` 
      },
      { id: 'wallMountainsA4', 
        width: `${widthModifier * 90}px`, 
        height: `${heightModifier * 40}px`, 
        top: `${heightModifier * 0}px`, 
        left: `${widthModifier * 120}px` 
      },
      { id: 'wallMountainsA5', 
        width: `${widthModifier * 30}px`, 
        height: `${heightModifier * 10}px`, 
        top: `${heightModifier * 50}px`, 
        left: `${widthModifier * 230}px`
      },
      { id: 'wallMountainsA6', 
        width: `${widthModifier * 50}px`, 
        height: `${heightModifier * 10}px`, 
        top: `${heightModifier * 40}px`, 
        left: `${widthModifier * 220}px`
      },
      { id: 'wallMountainsA7', 
        width: `${widthModifier * 70}px`, 
        height: `${heightModifier * 10}px`, 
        top: `${heightModifier * 30}px`, 
        left: `${widthModifier * 210}px` 
      },
      { id: 'wallMountainsA8', 
        width: `${widthModifier * 80}px`, 
        height: `${heightModifier * 30}px`, 
        top: `${heightModifier * 0}px`, 
        left: `${widthModifier * 210}px` 
      },
      { id: 'wallMountainsA9', 
        width: `${widthModifier * 20}px`, 
        height: `${heightModifier * 10}px`, 
        top: `${heightModifier * 50}px`, 
        left: `${widthModifier * 310}px` 
      },
      { id: 'wallMountainsA10', 
        width: `${widthModifier * 40}px`, 
        height: `${heightModifier * 10}px`, 
        top: `${heightModifier * 40}px`, 
        left: `${widthModifier * 300}px` 
      },
      { id: 'wallMountainsA11', 
        width: `${widthModifier * 60}px`, 
        height: `${heightModifier * 40}px`, 
        top: `${heightModifier * 0}px`, 
        left: `${widthModifier * 290}px` 
      },
      { id: 'wallMountainsA12', 
        width: `${widthModifier * 10}px`, 
        height: `${heightModifier * 70}px`, 
        top: `${heightModifier * 0}px`, 
        left: `${widthModifier * 350}px` 
      },
      { id: 'wallMountainsA13', 
        width: `${widthModifier * 40}px`, 
        height: `${heightModifier * 90}px`, 
        top: `${heightModifier * 0}px`, 
        left: `${widthModifier * 360}px` 
      },
      { id: 'wallMountainsA14', 
        width: `${widthModifier * 30}px`, 
        height: `${heightModifier * 10}px`, 
        top: `${heightModifier * 90}px`, 
        left: `${widthModifier * 370}px` 
      },
      { id: 'wallMountainsA15', 
        width: `${widthModifier * 10}px`, 
        height: `${heightModifier * 20}px`, 
        top: `${heightModifier * 100}px`, 
        left: `${widthModifier * 390}px`
      },
    ];

    wallMountainsAConfig.forEach(({ id, width, height, top, left }, index) => {
      const mountain = createElement('div', id, ['wallSolid'], {
        background: 'brown',
        width,
        height,
        top,
        left,
      });

      if (index < 4) {
        wallMountainsAGroup1.appendChild(mountain);
      } else if (index < 8) {
        wallMountainsAGroup2.appendChild(mountain);
      } else if (index < 11) {
        wallMountainsAGroup3.appendChild(mountain);
      } else {
        wallMountainsA.appendChild(mountain);
      }
      //1-4 Group 1, 5-8 Group 2, 9-11, Group 3
    });

    wallMountainsA.appendChild(wallMountainsAGroup1);
    wallMountainsA.appendChild(wallMountainsAGroup2);
    wallMountainsA.appendChild(wallMountainsAGroup3);

  const crates = createElement('div', 'crates', ['crate']);

    const cratesConfig = [
      { id: 'crate1', top: `${heightModifier * 230}px`, left: `${widthModifier * 170}px` },
      { id: 'crate2', top: `${heightModifier * 230}px`, left: `${widthModifier * 190}px` },
      { id: 'crate3', top: `${heightModifier * 230}px`, left: `${widthModifier * 210}px` },
      { id: 'crate4', top: `${heightModifier * 250}px`, left: `${widthModifier * 170}px` },
      { id: 'crate5', top: `${heightModifier * 250}px`, left: `${widthModifier * 190}px` },
      { id: 'crate6', top: `${heightModifier * 250}px`, left: `${widthModifier * 210}px` },
    ];

    cratesConfig.forEach(({ id, top, left }) => {
      const crate = createElement('div', id, ['wallSolid', 'crate'], {
        background: 'orange',
        width: `${widthModifier * 10}px`,
        height: `${heightModifier * 10}px`,
        top,
        left,
      });
      crates.appendChild(crate);
    });

  const gate1 = createElement('div', 'gate1', ['gate1'], {
    background: 'purple',
    width: `${widthModifier * 10}px`,
    height: `${heightModifier * 30}px`,
    top: `${heightModifier * 120}px`,
    left: `${widthModifier * 400}px`,
  });
  gate1.classList.add('wallSolid');


  const wallBlack1 = createElement('div', 'wallBlack1', ['wallSolid']);

    const wallBlack1Config = [
      { id: 'wall1', 
        width: `${widthModifier * 10}px`,
        height: `${heightModifier * 120}px`,
        top: `${heightModifier * 0}px`,
        left: `${widthModifier * 400}px`,
      },
      { id: 'wall2', 
        width: `${widthModifier * 10}px`,
        height: `${heightModifier * 150}px`,
        top: `${heightModifier * 150}px`,
        left: `${widthModifier * 400}px`,
      },
      { id: 'wall3', 
        width: `${widthModifier * 90}px`, 
        height: `${heightModifier * 10}px`, 
        top: `${heightModifier * 290}px`, 
        left: `${widthModifier * 410}px` 
      },
    ];

    wallBlack1Config.forEach(({ id, width, height, top, left }) => {
      const wall = createElement('div', id, ['wallSolid'], {
        background: 'rgb(0, 0, 0)',
        width,
        height,
        top,
        left,
      });
      wallBlack1.appendChild(wall);
    });

    if (localStorage.getItem('wasd') == '1') {
      const tutorialWASD = createElement('div', 'tutorialWASD', ['tutorialfade'], {
        position: 'absolute',
        top: `${heightModifier * 140}px`,
        left: `${widthModifier * 175}px`,
        opacity: '1',
      });

      const svgObject = document.createElement('object');
      svgObject.data = './images/WASD.svg';
      svgObject.type = 'image/svg+xml';
      svgObject.alt = 'WASD Tutorial';
      svgObject.classList.add("tutorialfade");
      svgObject.style.height = `${heightModifier * 30}px`;
      tutorialWASD.appendChild(svgObject);
      
      level1.appendChild(tutorialWASD);
    }

    //Ouput the Bottom F overlay for tutorial
    if (localStorage.getItem('f') == '0') {
      const tutorialF = createElement('div', 'tutorialF', ['tutorialfade'], {
        position: 'absolute',
        top: `${heightModifier * 200}px`,
        left: `${widthModifier * 65}px`,
        opacity: '0',
      });

      const svgFObject = document.createElement('object');
      svgFObject.data = './images/F.svg';
      svgFObject.type = 'image/svg+xml';
      svgFObject.alt = 'F Tutorial';
      svgFObject.classList.add("tutorialfade");
      svgFObject.style.height = `${heightModifier * 30}px`;
      tutorialF.appendChild(svgFObject);
      
      level1.appendChild(tutorialF);
    }

    //Ouput the warning overlay for tutorial
    if (localStorage.getItem('warn') == '0') {
      const tutorialWarn = createElement('div', 'tutorialWarn', ['tutorialfade'], {
        position: 'absolute',
        top: `${heightModifier * 100}px`,
        left: `${widthModifier * 220}px`,
        opacity: '0',
      });

      const svgWarnObject = document.createElement('object');
      svgWarnObject.data = './images/Warning.svg';
      svgWarnObject.type = 'image/svg+xml';
      svgWarnObject.alt = 'Warn Tutorial';
      svgWarnObject.classList.add("tutorialfade");
      svgWarnObject.style.height = `${heightModifier * 30}px`;
      tutorialWarn.appendChild(svgWarnObject);
      
      level1.appendChild(tutorialWarn);
    }

    // Create the second Top F sign for the second lake
    if (localStorage.getItem('f2') == '0') {
      const tutorialF2 = createElement('div', 'tutorialF2', ['tutorialfade'], {
        position: 'absolute',
        top: `${heightModifier * 35}px`,
        left: `${widthModifier * 65}px`,
        opacity: '0',
      });

        const svgFObject2 = document.createElement('object');
        svgFObject2.data = './images/F.svg';
        svgFObject2.type = 'image/svg+xml';
        svgFObject2.alt = 'F Tutorial';
        svgFObject2.classList.add("tutorialfade");
        svgFObject2.style.height = `${heightModifier * 30}px`;
        tutorialF2.appendChild(svgFObject2);

      level1.appendChild(tutorialF2);
    }

    // Create the G sign for the gate
    if (localStorage.getItem('g') == '0') {
      const tutorialG = createElement('div', 'tutorialG', ['tutorialfade'], {
        position: 'absolute',
        top: `${heightModifier * 130}px`,
        left: `${widthModifier * 420}px`,
        opacity: '0',
      });

        const svgGObject = document.createElement('object');
        svgGObject.data = './images/Gate.svg';
        svgGObject.type = 'image/svg+xml';
        svgGObject.alt = 'F Tutorial';
        svgGObject.classList.add("tutorialfade");
        svgGObject.style.height = `${heightModifier * 30}px`;
        tutorialG.appendChild(svgGObject);

      level1.appendChild(tutorialG);
    }


  level1.appendChild(lakeBlue);
  level1.appendChild(lakeRed);
  level1.appendChild(lakeYellow);
  level1.appendChild(gate1);
  level1.appendChild(crates);
  level1.appendChild(wallMountainsB);
  level1.appendChild(wallMountainsA);
  level1.appendChild(wallBlack1);



  document.querySelector('#game_canvas').appendChild(playArea);
  playArea.appendChild(level1);

  let levelStack = getLevel1Objects();

  for (let object in levelStack) {
    levelStack[object].style.zIndex = '2';
    levelStack[object].style.position = 'absolute';
  }
}

export function createLevel1End(){
  let level1 = document.querySelector('#level1')

  const level1End = createElement('div', 'level1End', ['levelEnd'], {
    position: 'absolute',
    background: 'rgb(60, 199, 184)',
    width: '30px',
    height: '30px',
    top: '260px',
    left: '900px',
    zIndex: '2'
  });

  level1.appendChild(level1End);
}

export function getLevel1Objects() {
  let level1 = document.querySelector('#level1')

  let stack1 = Array.from(level1.children);
  let childStack1 = [];

  while (stack1.length > 0) {
    let child = stack1.pop();
    
    if (child.tagName === "DIV") {
      if (child.childElementCount > 0) {
        stack1.push(...child.children);
      } else {
        childStack1.push(child);
      }
    }
  }

  return childStack1;
}

export function openGateOne() {
  let gate1 = document.querySelector('#gate1');
    gate1.style.transform = 'rotate(-180deg)';
    gate1.style.transformOrigin = 'top right'; 
}

export function createTealLake() {
  let crates = document.querySelectorAll('.crate');

  crates.forEach((crate) => crate.remove());

  const lakeTeal = createElement('div', 'lakeTeal', ['lake']);

    const lakeTealConfig = [
      { id: 'lakeTeal1', 
        width: `70px`, 
        height: `40px`, 
        top: `230px`, 
        left: `160px` 
      },
      { id: 'lakeTeal2', 
        width: `30px`, 
        height: `10px`, 
        top: `270px`, 
        left: `180px` 
      },
    ];

    lakeTealConfig.forEach(({ id, width, height, top, left }) => {
      const lake = createElement('div', id, ['lake'], {
        background: 'teal',
        width,
        height,
        top,
        left,
        zIndex: '2',
        position: 'absolute'
      });
      lakeTeal.appendChild(lake);
    });

    let level1 = document.querySelector('#level1');
    level1.appendChild(lakeTeal);
}


