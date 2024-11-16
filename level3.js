function createLevel3() {
  const level3 = document.createElement('div');
  level3.id = 'level3';
  level3.classList.add("box");
  level3.style.position = 'relative';
  level3.style.background = 'red';
  level3.style.width = '0px';
  level3.style.height = '0px';
  level3.style.zIndex = '2';
  level3.style.margin = 0;
  level3.style.transition = 'left 1.5s ease';

  document.querySelector('#game_canvas').appendChild(level3);

}

window.createLevel3 = createLevel3;