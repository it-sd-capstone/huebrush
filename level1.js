function createLevel1() {
  const level1 = document.createElement('div');
  level1.id = 'level1';
  level1.classList.add("box");
  level1.style.position = 'relative';
  level1.style.background = 'green';
  level1.style.width = '1000px';
  level1.style.height = '600px';
  level1.style.zIndex = '2';
  level1.style.margin = 0;

  const myBox = document.createElement('div');
  myBox.id = 'myBox';
  myBox.style.position = 'absolute';
  myBox.style.background = 'red';
  myBox.style.width = '30px';
  myBox.style.height = '30px';
  myBox.style.top = '0px';
  myBox.style.left = '0px';
  level1.style.zIndex = '3';

  const gate = document.createElement('div');
  gate.id = 'gate';
  gate.style.position = 'absolute';
  gate.style.background = 'purple';
  gate.style.width = '30px';
  gate.style.height = '30px';
  gate.style.top = '0px';
  gate.style.left = '390px';

  const key = document.createElement('div');
  key.id = 'key';
  key.style.position = 'absolute';
  key.style.background = 'blue';
  key.style.width = '30px';
  key.style.height = '30px';
  key.style.top = '390px';
  key.style.left = '390px';

  const walls = document.createElement('div');
  walls.id = 'walls';
  walls.style.position = 'absolute';
  walls.style.background = 'rgb(0, 0, 0)';
  walls.style.width = '40px';
  walls.style.height = '40px';
  walls.style.top = '100px';
  walls.style.left = '100px';

  level1.appendChild(myBox);
  level1.appendChild(gate);
  level1.appendChild(key);
  level1.appendChild(walls);

  document.querySelector('#game_canvas').appendChild(level1);
}

function getLevel1Objects() {
  return level1.childNodes;
}

window.createLevel1 = createLevel1;
window.getLevel1Objects = getLevel1Objects;
