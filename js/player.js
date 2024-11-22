function spawnPlayer(width,height,top,left) {

  const myBox = document.createElement('div');
  myBox.id = 'myBox';
  myBox.classList.add("myBox");
  myBox.style.position = 'absolute';
  myBox.style.background = 'grey';
  myBox.style.width = width;
  myBox.style.height = height;
  myBox.style.top = top;
  myBox.style.left = left;
  myBox.style.zIndex = '3';

  level1.appendChild(myBox);
}