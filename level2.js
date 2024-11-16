function createLevel2() {
  const level2 = document.createElement('div');
  level2.id = 'level2';
  level2.classList.add("box");
  level2.style.position = 'relative';
  level2.style.background = 'blue';
  level2.style.width = '0px';
  level2.style.height = '0px';
  level2.style.zIndex = '2';
  level2.style.margin = 0;
  level2.style.transition = 'left 1.5s ease';

  document.querySelector('#game_canvas').appendChild(level2);

}

window.createLevel2 = createLevel2;