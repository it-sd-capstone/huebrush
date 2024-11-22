function createLevel2(container) {
  playArea = document.querySelector('.playArea');

  const level2 = document.createElement('div');
    level2.id = 'level2';
    level2.classList.add('box');
    level2.style.position = 'absolute'; // Absolute within Play Area
    level2.style.background = 'blue';
    level2.style.padding = '0px';
    level2.style.border = '0px';
    level2.style.width = '1000px'; // Full width of Play Area
    level2.style.height = '600px'; // Full height of Play Area
    level2.style.top = '0'; // Align to Play Area's top
    level2.style.left = '100%'; // Start off-screen to the right
    level2.style.zIndex = '1'; // Behind Level 1 initially
    level2.style.transition = 'left 1.75s ease'; // Smooth sliding animation

  playArea.appendChild(level2);
}

function createLevel2End(){
  level2 = document.querySelector('#level2')

  const level2End = document.createElement('div');
  level2End.id = 'level2End';
  level2End.classList.add("levelEnd");
  level2End.style.position = 'absolute';
  level2End.style.background = 'rgb(60, 199, 184)';
  level2End.style.width = '30px';
  level2End.style.height = '30px';
  level2End.style.top = '500px';
  level2End.style.left = '250px';
  level2End.style.zIndex = '2';

  level2.appendChild(level2End);
}

window.createLevel2 = createLevel2;