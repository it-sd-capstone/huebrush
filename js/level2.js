import { createElement } from './level1.js'

export function createLevel2(widthModifier,heightModifier,offscreen) {
  let playArea = document.querySelector('.playArea');

  const level2 = createElement('div', 'level2', ['box'], {
    position: 'absolute',
    background: 'white',
    width: `${widthModifier * 500}px`,
    height: `${heightModifier * 300}px`,
    padding: '0px',
    border: '0px',
    left: `${offscreen}%`,
    top: '0',
    zIndex: '1',
    transition: 'left 1.75s ease, width 1.75s ease'
  });

  const maze = createElement('div', 'maze', ['maze']);
    const mazeConfig = [
      { id: 'mazeWall1', 
        width: `${widthModifier * 50}px`, 
        height: `${heightModifier * 10}px`, 
        top: `${heightModifier * 10}px`, 
        left: `${widthModifier * 40}px`
      },
      { id: 'mazeWall2', 
        width: `${widthModifier * 420}px`, 
        height: `${heightModifier * 10}px`, 
        top: `${heightModifier * 0}px`, 
        left: `${widthModifier * 80}px`
      },
      { id: 'mazeWall3', 
        width: `${widthModifier * 40}px`, 
        height: `${heightModifier * 10}px`, 
        top: `${heightModifier * 30}px`, 
        left: `${widthModifier * 50}px`
      },
      { id: 'mazeWall4', 
        width: `${widthModifier * 10}px`, 
        height: `${heightModifier * 290}px`, 
        top: `${heightModifier * 10}px`, 
        left: `${widthModifier * 490}px`
      },
      { id: 'mazeWall5', 
        width: `${widthModifier * 20}px`, 
        height: `${heightModifier * 10}px`, 
        top: `${heightModifier * 290}px`, 
        left: `${widthModifier * 470}px`
      },
      { id: 'mazeWall6', 
        width: `${widthModifier * 350}px`, 
        height: `${heightModifier * 10}px`, 
        top: `${heightModifier * 290}px`, 
        left: `${widthModifier * 90}px`
      },
      { id: 'mazeWall7', 
        width: `${widthModifier * 10}px`, 
        height: `${heightModifier * 260}px`, 
        top: `${heightModifier * 40}px`, 
        left: `${widthModifier * 80}px`
      },
      { id: 'mazeWall8', 
        width: `${widthModifier * 80}px`, 
        height: `${heightModifier * 10}px`, 
        top: `${heightModifier * 80}px`, 
        left: `${widthModifier * 90}px`
      },
      { id: 'mazeWall9', 
        width: `${widthModifier * 10}px`, 
        height: `${heightModifier * 60}px`, 
        top: `${heightModifier * 20}px`, 
        left: `${widthModifier * 160}px`
      },
      { id: 'mazeWall10', 
        width: `${widthModifier * 110}px`, 
        height: `${heightModifier * 10}px`, 
        top: `${heightModifier * 20}px`, 
        left: `${widthModifier * 170}px`
      },
      { id: 'mazeWall11', 
        width: `${widthModifier * 10}px`, 
        height: `${heightModifier * 30}px`, 
        top: `${heightModifier * 30}px`, 
        left: `${widthModifier * 270}px`
      },
      { id: 'mazeWall12', 
        width: `${widthModifier * 60}px`, 
        height: `${heightModifier * 10}px`, 
        top: `${heightModifier * 50}px`, 
        left: `${widthModifier * 280}px`
      },
      { id: 'mazeWall13', 
        width: `${widthModifier * 10}px`, 
        height: `${heightModifier * 30}px`, 
        top: `${heightModifier * 20}px`, 
        left: `${widthModifier * 330}px`
      },
      { id: 'mazeWall13', 
        width: `${widthModifier * 10}px`, 
        height: `${heightModifier * 30}px`, 
        top: `${heightModifier * 10}px`, 
        left: `${widthModifier * 310}px`
      },
      { id: 'mazeWall14', 
        width: `${widthModifier * 10}px`, 
        height: `${heightModifier * 70}px`, 
        top: `${heightModifier * 20}px`, 
        left: `${widthModifier * 350}px`
      },
      { id: 'mazeWall15', 
        width: `${widthModifier * 10}px`, 
        height: `${heightModifier * 20}px`, 
        top: `${heightModifier * 70}px`, 
        left: `${widthModifier * 340}px`
      },
      { id: 'mazeWall16', 
        width: `${widthModifier * 10}px`, 
        height: `${heightModifier * 70}px`, 
        top: `${heightModifier * 20}px`, 
        left: `${widthModifier * 370}px`
      },
      { id: 'mazeWall17', 
        width: `${widthModifier * 80}px`, 
        height: `${heightModifier * 10}px`, 
        top: `${heightModifier * 20}px`, 
        left: `${widthModifier * 380}px`
      },
      { id: 'mazeWall18', 
        width: `${widthModifier * 10}px`, 
        height: `${heightModifier * 30}px`, 
        top: `${heightModifier * 30}px`, 
        left: `${widthModifier * 450}px`
      },
      { id: 'mazeWall19', 
        width: `${widthModifier * 30}px`, 
        height: `${heightModifier * 10}px`, 
        top: `${heightModifier * 50}px`, 
        left: `${widthModifier * 460}px`
      },
      { id: 'mazeWall20', 
        width: `${widthModifier * 10}px`, 
        height: `${heightModifier * 20}px`, 
        top: `${heightModifier * 20}px`, 
        left: `${widthModifier * 470}px`
      },
      { id: 'mazeWall21', 
        width: `${widthModifier * 10}px`, 
        height: `${heightModifier * 120}px`, 
        top: `${heightModifier * 40}px`, 
        left: `${widthModifier * 50}px`
      },
      { id: 'mazeWall22', 
        width: `${widthModifier * 10}px`, 
        height: `${heightModifier * 50}px`, 
        top: `${heightModifier * 10}px`, 
        left: `${widthModifier * 30}px`
      },
      { id: 'mazeWall23', 
        width: `${widthModifier * 10}px`, 
        height: `${heightModifier * 40}px`, 
        top: `${heightModifier * 60}px`, 
        left: `${widthModifier * 320}px`
      },
      { id: 'mazeWall24', 
        width: `${widthModifier * 130}px`, 
        height: `${heightModifier * 10}px`, 
        top: `${heightModifier * 100}px`, 
        left: `${widthModifier * 320}px`
      },
      { id: 'mazeWall25', 
        width: `${widthModifier * 20}px`, 
        height: `${heightModifier * 40}px`, 
        top: `${heightModifier * 70}px`, 
        left: `${widthModifier * 450}px`
      },
      { id: 'mazeWall26', 
        width: `${widthModifier * 20}px`, 
        height: `${heightModifier * 40}px`, 
        top: `${heightModifier * 70}px`, 
        left: `${widthModifier * 450}px`
      },
      { id: 'mazeWall27', 
        width: `${widthModifier * 10}px`, 
        height: `${heightModifier * 20}px`, 
        top: `${heightModifier * 70}px`, 
        left: `${widthModifier * 470}px`
      },
      { id: 'mazeWall28', 
        width: `${widthModifier * 10}px`, 
        height: `${heightModifier * 10}px`, 
        top: `${heightModifier * 100}px`, 
        left: `${widthModifier * 480}px`
      },
      { id: 'mazeWall29', 
        width: `${widthModifier * 10}px`, 
        height: `${heightModifier * 10}px`, 
        top: `${heightModifier * 120}px`, 
        left: `${widthModifier * 480}px`
      },
      { id: 'mazeWall30', 
        width: `${widthModifier * 10}px`, 
        height: `${heightModifier * 10}px`, 
        top: `${heightModifier * 140}px`, 
        left: `${widthModifier * 480}px`
      },
      { id: 'mazeWall31', 
        width: `${widthModifier * 10}px`, 
        height: `${heightModifier * 10}px`, 
        top: `${heightModifier * 160}px`, 
        left: `${widthModifier * 480}px`
      },
      { id: 'mazeWall32', 
        width: `${widthModifier * 70}px`, 
        height: `${heightModifier * 10}px`, 
        top: `${heightModifier * 190}px`, 
        left: `${widthModifier * 420}px`
      },
      { id: 'mazeWall33', 
        width: `${widthModifier * 10}px`, 
        height: `${heightModifier * 40}px`, 
        top: `${heightModifier * 160}px`, 
        left: `${widthModifier * 410}px`
      },
      { id: 'mazeWall34', 
        width: `${widthModifier * 40}px`, 
        height: `${heightModifier * 10}px`, 
        top: `${heightModifier * 170}px`, 
        left: `${widthModifier * 430}px`
      },
      { id: 'mazeWall35', 
        width: `${widthModifier * 10}px`, 
        height: `${heightModifier * 40}px`, 
        top: `${heightModifier * 120}px`, 
        left: `${widthModifier * 460}px`
      },
      { id: 'mazeWall36', 
        width: `${widthModifier * 10}px`, 
        height: `${heightModifier * 20}px`, 
        top: `${heightModifier * 140}px`, 
        left: `${widthModifier * 450}px`
      },
      { id: 'mazeWall37', 
        width: `${widthModifier * 50}px`, 
        height: `${heightModifier * 10}px`, 
        top: `${heightModifier * 150}px`, 
        left: `${widthModifier * 400}px`
      },
      { id: 'mazeWall38', 
        width: `${widthModifier * 10}px`, 
        height: `${heightModifier * 30}px`, 
        top: `${heightModifier * 120}px`, 
        left: `${widthModifier * 400}px`
      },
      { id: 'mazeWall39', 
        width: `${widthModifier * 10}px`, 
        height: `${heightModifier * 10}px`, 
        top: `${heightModifier * 110}px`, 
        left: `${widthModifier * 430}px`
      },
      { id: 'mazeWall40', 
        width: `${widthModifier * 10}px`, 
        height: `${heightModifier * 30}px`, 
        top: `${heightModifier * 110}px`, 
        left: `${widthModifier * 420}px`
      },
      { id: 'mazeWall41', 
        width: `${widthModifier * 140}px`, 
        height: `${heightModifier * 10}px`, 
        top: `${heightModifier * 120}px`, 
        left: `${widthModifier * 260}px`
      },
      { id: 'mazeWall42', 
        width: `${widthModifier * 10}px`, 
        height: `${heightModifier * 120}px`, 
        top: `${heightModifier * 40}px`, 
        left: `${widthModifier * 250}px`
      },
      { id: 'mazeWall43', 
        width: `${widthModifier * 70}px`, 
        height: `${heightModifier * 10}px`, 
        top: `${heightModifier * 80}px`, 
        left: `${widthModifier * 180}px`
      },
      { id: 'mazeWall44', 
        width: `${widthModifier * 10}px`, 
        height: `${heightModifier * 30}px`, 
        top: `${heightModifier * 100}px`, 
        left: `${widthModifier * 230}px`
      },
      { id: 'mazeWall45', 
        width: `${widthModifier * 20}px`, 
        height: `${heightModifier * 10}px`, 
        top: `${heightModifier * 140}px`, 
        left: `${widthModifier * 220}px`
      },
      { id: 'mazeWall46', 
        width: `${widthModifier * 10}px`, 
        height: `${heightModifier * 40}px`, 
        top: `${heightModifier * 110}px`, 
        left: `${widthModifier * 210}px`
      },
      { id: 'mazeWall47', 
        width: `${widthModifier * 60}px`, 
        height: `${heightModifier * 10}px`, 
        top: `${heightModifier * 100}px`, 
        left: `${widthModifier * 160}px`
      },
      { id: 'mazeWall48', 
        width: `${widthModifier * 50}px`, 
        height: `${heightModifier * 10}px`, 
        top: `${heightModifier * 100}px`, 
        left: `${widthModifier * 100}px`
      },
      { id: 'mazeWall49', 
        width: `${widthModifier * 10}px`, 
        height: `${heightModifier * 50}px`, 
        top: `${heightModifier * 110}px`, 
        left: `${widthModifier * 140}px`
      },
      { id: 'mazeWall50', 
        width: `${widthModifier * 40}px`, 
        height: `${heightModifier * 10}px`, 
        top: `${heightModifier * 120}px`, 
        left: `${widthModifier * 90}px`
      },
      { id: 'mazeWall51', 
        width: `${widthModifier * 10}px`, 
        height: `${heightModifier * 30}px`, 
        top: `${heightModifier * 130}px`, 
        left: `${widthModifier * 120}px`
      },
      { id: 'mazeWall52', 
        width: `${widthModifier * 10}px`, 
        height: `${heightModifier * 60}px`, 
        top: `${heightModifier * 140}px`, 
        left: `${widthModifier * 100}px`
      },
      { id: 'mazeWall53', 
        width: `${widthModifier * 40}px`, 
        height: `${heightModifier * 10}px`, 
        top: `${heightModifier * 170}px`, 
        left: `${widthModifier * 110}px`
      },
      { id: 'mazeWall54', 
        width: `${widthModifier * 20}px`, 
        height: `${heightModifier * 10}px`, 
        top: `${heightModifier * 180}px`, 
        left: `${widthModifier * 140}px`
      },
      { id: 'mazeWall55', 
        width: `${widthModifier * 10}px`, 
        height: `${heightModifier * 30}px`, 
        top: `${heightModifier * 180}px`, 
        left: `${widthModifier * 170}px`
      },
      { id: 'mazeWall56', 
        width: `${widthModifier * 10}px`, 
        height: `${heightModifier * 50}px`, 
        top: `${heightModifier * 180}px`, 
        left: `${widthModifier * 190}px`
      },
      { id: 'mazeWall57', 
        width: `${widthModifier * 20}px`, 
        height: `${heightModifier * 10}px`, 
        top: `${heightModifier * 180}px`, 
        left: `${widthModifier * 200}px`
      },
      { id: 'mazeWall58', 
        width: `${widthModifier * 10}px`, 
        height: `${heightModifier * 20}px`, 
        top: `${heightModifier * 160}px`, 
        left: `${widthModifier * 210}px`
      },
      { id: 'mazeWall59', 
        width: `${widthModifier * 40}px`, 
        height: `${heightModifier * 10}px`, 
        top: `${heightModifier * 160}px`, 
        left: `${widthModifier * 220}px`
      },
      { id: 'mazeWall60', 
        width: `${widthModifier * 90}px`, 
        height: `${heightModifier * 10}px`, 
        top: `${heightModifier * 210}px`, 
        left: `${widthModifier * 90}px`
      },
      { id: 'mazeWall61', 
        width: `${widthModifier * 10}px`, 
        height: `${heightModifier * 20}px`, 
        top: `${heightModifier * 190}px`, 
        left: `${widthModifier * 120}px`
      },
      { id: 'mazeWall62', 
        width: `${widthModifier * 50}px`, 
        height: `${heightModifier * 10}px`, 
        top: `${heightModifier * 230}px`, 
        left: `${widthModifier * 150}px`
      },
      { id: 'mazeWall63', 
        width: `${widthModifier * 10}px`, 
        height: `${heightModifier * 50}px`, 
        top: `${heightModifier * 230}px`, 
        left: `${widthModifier * 140}px`
      },
      { id: 'mazeWall64', 
        width: `${widthModifier * 10}px`, 
        height: `${heightModifier * 30}px`, 
        top: `${heightModifier * 250}px`, 
        left: `${widthModifier * 160}px`
      },
      { id: 'mazeWall65', 
        width: `${widthModifier * 10}px`, 
        height: `${heightModifier * 30}px`, 
        top: `${heightModifier * 240}px`, 
        left: `${widthModifier * 180}px`
      },
      { id: 'mazeWall66', 
        width: `${widthModifier * 70}px`, 
        height: `${heightModifier * 10}px`, 
        top: `${heightModifier * 270}px`, 
        left: `${widthModifier * 180}px`
      },
      { id: 'mazeWall67', 
        width: `${widthModifier * 10}px`, 
        height: `${heightModifier * 40}px`, 
        top: `${heightModifier * 240}px`, 
        left: `${widthModifier * 250}px`
      },
      { id: 'mazeWall68', 
        width: `${widthModifier * 10}px`, 
        height: `${heightModifier * 40}px`, 
        top: `${heightModifier * 180}px`, 
        left: `${widthModifier * 250}px`
      },
      { id: 'mazeWall69', 
        width: `${widthModifier * 20}px`, 
        height: `${heightModifier * 10}px`, 
        top: `${heightModifier * 180}px`, 
        left: `${widthModifier * 230}px`
      },
      { id: 'mazeWall70', 
        width: `${widthModifier * 30}px`, 
        height: `${heightModifier * 10}px`, 
        top: `${heightModifier * 200}px`, 
        left: `${widthModifier * 210}px`
      },
      { id: 'mazeWall71', 
        width: `${widthModifier * 10}px`, 
        height: `${heightModifier * 50}px`, 
        top: `${heightModifier * 210}px`, 
        left: `${widthModifier * 230}px`
      },
      { id: 'mazeWall72', 
        width: `${widthModifier * 10}px`, 
        height: `${heightModifier * 30}px`, 
        top: `${heightModifier * 220}px`, 
        left: `${widthModifier * 210}px`
      },
      { id: 'mazeWall73', 
        width: `${widthModifier * 20}px`, 
        height: `${heightModifier * 10}px`, 
        top: `${heightModifier * 250}px`, 
        left: `${widthModifier * 200}px`
      },
      { id: 'mazeWall74', 
        width: `${widthModifier * 140}px`, 
        height: `${heightModifier * 10}px`, 
        top: `${heightModifier * 190}px`, 
        left: `${widthModifier * 260}px`
      },
      { id: 'mazeWall75', 
        width: `${widthModifier * 10}px`, 
        height: `${heightModifier * 90}px`, 
        top: `${heightModifier * 200}px`, 
        left: `${widthModifier * 350}px`
      },
      { id: 'mazeWall76', 
        width: `${widthModifier * 10}px`, 
        height: `${heightModifier * 20}px`, 
        top: `${heightModifier * 200}px`, 
        left: `${widthModifier * 430}px`
      },
      { id: 'mazeWall77', 
        width: `${widthModifier * 10}px`, 
        height: `${heightModifier * 40}px`, 
        top: `${heightModifier * 250}px`, 
        left: `${widthModifier * 430}px`
      },
      { id: 'mazeWall78', 
        width: `${widthModifier * 30}px`, 
        height: `${heightModifier * 10}px`, 
        top: `${heightModifier * 250}px`, 
        left: `${widthModifier * 440}px`
      },
      { id: 'mazeWall79', 
        width: `${widthModifier * 10}px`, 
        height: `${heightModifier * 10}px`, 
        top: `${heightModifier * 240}px`, 
        left: `${widthModifier * 460}px`
      },
      { id: 'mazeWall80', 
        width: `${widthModifier * 10}px`, 
        height: `${heightModifier * 10}px`, 
        top: `${heightModifier * 200}px`, 
        left: `${widthModifier * 440}px`
      },
      { id: 'mazeWall81', 
        width: `${widthModifier * 10}px`, 
        height: `${heightModifier * 70}px`, 
        top: `${heightModifier * 210}px`, 
        left: `${widthModifier * 470}px`
      },
      { id: 'mazeWall82', 
        width: `${widthModifier * 10}px`, 
        height: `${heightModifier * 10}px`, 
        top: `${heightModifier * 0}px`, 
        left: `${widthModifier * 50}px`
      }
    ];

    mazeConfig.forEach(({ id, width, height, top, left }) => {
      const wall = createElement('div', id, ['wallSolid'], {
        background: 'brown',
        width,
        height,
        top,
        left,
      });
      maze.appendChild(wall);
    });

    const columns = createElement('div', 'columns', ['wallSolid']);

    const columnsConfig = [
      { id: 'column1', 
        top: `${heightModifier * 60}px`,
        left: `${widthModifier * 100}px`,
      },
      { id: 'column2', 
        top: `${heightModifier * 20}px`,
        left: `${widthModifier * 140}px`,
      },
      { id: 'column3', 
        top: `${heightModifier * 40}px`,
        left: `${widthModifier * 390}px`,
      },
      { id: 'column4', 
        top: `${heightModifier * 40}px`,
        left: `${widthModifier * 430}px`,
      },
      { id: 'column5', 
        top: `${heightModifier * 60}px`,
        left: `${widthModifier * 410}px`,
      },
      { id: 'column6', 
        top: `${heightModifier * 80}px`,
        left: `${widthModifier * 390}px`,
      },
      { id: 'column7', 
        top: `${heightModifier * 80}px`,
        left: `${widthModifier * 430}px`,
      },
      { id: 'column8', 
        top: `${heightModifier * 70}px`,
        left: `${widthModifier * 300}px`,
      },
      { id: 'column9', 
        top: `${heightModifier * 100}px`,
        left: `${widthModifier * 300}px`,
      },
      { id: 'column10', 
        top: `${heightModifier * 70}px`,
        left: `${widthModifier * 270}px`,
      },
      { id: 'column11', 
        top: `${heightModifier * 100}px`,
        left: `${widthModifier * 270}px`,
      },
      { id: 'column12', 
        top: `${heightModifier * 120}px`,
        left: `${widthModifier * 160}px`,
      },
      { id: 'column13', 
        top: `${heightModifier * 120}px`,
        left: `${widthModifier * 190}px`,
      },
      { id: 'column14', 
        top: `${heightModifier * 140}px`,
        left: `${widthModifier * 160}px`,
      },
      { id: 'column15', 
        top: `${heightModifier * 140}px`,
        left: `${widthModifier * 190}px`,
      },
      { id: 'column16', 
        top: `${heightModifier * 160}px`,
        left: `${widthModifier * 160}px`,
      },
      { id: 'column17', 
        top: `${heightModifier * 160}px`,
        left: `${widthModifier * 190}px`,
      },
      { id: 'column18', 
        top: `${heightModifier * 250}px`,
        left: `${widthModifier * 110}px`,
      },
      { id: 'column19', 
        top: `${heightModifier * 270}px`,
        left: `${widthModifier * 370}px`,
      },
      { id: 'column20', 
        top: `${heightModifier * 240}px`,
        left: `${widthModifier * 390}px`,
      },
      { id: 'column21', 
        top: `${heightModifier * 210}px`,
        left: `${widthModifier * 410}px`,
      },
    ];

    columnsConfig.forEach(({ id, top, left }) => {
      const wall = createElement('div', id, ['wallSolid'], {
        background: 'brown',
        width: `${widthModifier * 10}px`,
        height: `${heightModifier * 10}px`,
        top,
        left,
      });
      columns.appendChild(wall);
    });

    const wallBlack2 = createElement('div', 'wallBlack2', ['wallSolid']);

    const wallBlack2Config = [
      { id: 'wall1', 
        width: `${widthModifier * 80}px`,
        height: `${heightModifier * 10}px`,
        top: `${heightModifier * 290}px`,
        left: `${widthModifier * 0}px`,
      },
    ];

    wallBlack2Config.forEach(({ id, width, height, top, left }) => {
      const wall = createElement('div', id, ['wallSolid'], {
        background: 'rgb(0, 0, 0)',
        width,
        height,
        top,
        left,
      });
      wallBlack2.appendChild(wall);
    });

    const lakeYellow = createElement('div', 'lakeYellow', ['lake']);

    const lakeYellowConfig = [
      { id: 'lakeYellow1', 
        width: `${widthModifier * 60}px`, 
        height: `${heightModifier * 80}px`, 
        top: `${heightModifier * 210}px`, 
        left: `${widthModifier * 0}px` 
      },
      { id: 'lakeYellow2', 
        width: `${widthModifier * 20}px`, 
        height: `${heightModifier * 10}px`, 
        top: `${heightModifier * 0}px`, 
        left: `${widthModifier * 60}px` 
      },
      { id: 'lakeYellow3', 
        width: `${widthModifier * 20}px`, 
        height: `${heightModifier * 250}px`, 
        top: `${heightModifier * 40}px`, 
        left: `${widthModifier * 60}px` 
      },
      { id: 'lakeYellow4', 
        width: `${widthModifier * 60}px`, 
        height: `${heightModifier * 20}px`, 
        top: `${heightModifier * 190}px`, 
        left: `${widthModifier * 0}px` 
      },
      { id: 'lakeYellow5', 
        width: `${widthModifier * 20}px`, 
        height: `${heightModifier * 20}px`, 
        top: `${heightModifier * 170}px`, 
        left: `${widthModifier * 40}px` 
      },
      { id: 'lakeYellow6', 
        width: `${widthModifier * 10}px`, 
        height: `${heightModifier * 10}px`, 
        top: `${heightModifier * 160}px`, 
        left: `${widthModifier * 50}px` 
      },
      { id: 'lakeYellow7', 
        width: `${widthModifier * 10}px`, 
        height: `${heightModifier * 10}px`, 
        top: `${heightModifier * 180}px`, 
        left: `${widthModifier * 30}px` 
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

    const gate2 = createElement('div', 'gate2', ['gate2'], {
      background: 'green',
      width: `${widthModifier * 10}px`,
      height: `${heightModifier * 30}px`,
      top: `${heightModifier * 220}px`,
      left: `${widthModifier * 430}px`,
    });
    gate2.classList.add('wallSolid');

    // TODOconst shadows = createElement('div', 'shadow', ['shadow']);

    // const shadowsConfig = [
    //   { id: 'shadow1', 
    //     width: `${widthModifier * 400}px`, 
    //     height: `${heightModifier * 280}px`, 
    //     top: `${heightModifier * 10}px`, 
    //     left: `${widthModifier * 90}px` 
    //   },
    //   { id: 'shadow2', 
    //     width: `${widthModifier * 50}px`, 
    //     height: `${heightModifier * 10}px`, 
    //     top: `${heightModifier * 20}px`, 
    //     left: `${widthModifier * 40}px` 
    //   }
    // ];

    // shadowsConfig.forEach(({ id, width, height, top, left }) => {
    //   const shadow = createElement('div', id, ['lake'], {
    //     background: 'gray',
    //     width,
    //     height,
    //     top,
    //     left,
    //     zIndex: '4',
    //   });
    //   shadows.appendChild(shadow);
    // });

  level2.appendChild(maze);
  level2.appendChild(columns);
  level2.appendChild(wallBlack2);
  level2.appendChild(lakeYellow);
  level2.appendChild(gate2);
  //TODO:level2.appendChild(shadows);

  playArea.appendChild(level2);

  let levelStack = getLevel2Objects();

  for (let object in levelStack) {
    levelStack[object].style.zIndex = '2';
    levelStack[object].style.position = 'absolute';
    levelStack[object].style.transition = `width ${1.75}s ease`;
  }
}

export function createLevel2End(){
  let level2 = document.querySelector('#level2')

  const level2End = createElement('div', 'level2End', ['levelEnd'], {
    position: 'absolute',
    background: 'rgb(60, 199, 184)',
    width: '15px',
    height: '30px',
    top: '565px',
    left: '448px',
    zIndex: '-2'
  });

  level2.appendChild(level2End);
}

export function getLevel2Objects() {
  let level2 = document.querySelector('#level2')
  let stack = Array.from(level2.children);
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

export function openGateTwo() {
  let gate2 = document.querySelector('#gate2');
  gate2.style.transform = 'rotate(-180deg)';
  gate2.style.transformOrigin = 'bottom left'; 
}