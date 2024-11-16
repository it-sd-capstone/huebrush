function createLevel4() {
  const level4 = document.createElement('div');
  level4.id = 'level4';
  level4.classList.add("box");
  level4.style.position = 'relative';
  level4.style.background = 'purple';
  level4.style.width = '0px';
  level4.style.height = '0px';
  level4.style.zIndex = '2';
  level4.style.margin = 0;
  level4.style.transition = 'left 1.5s ease';

  document.querySelector('#game_canvas').appendChild(level4);

}

window.createLevel4 = createLevel4;