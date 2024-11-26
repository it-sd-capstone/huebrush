export function levelXTransition(objects = [], newLevel, newLevelObjects = [], myBox) {

  let speed = 1.75;

  for (let object in objects) {
    let newWidth = (parseInt(objects[object].style.width, 10) / 2)
    let newLeft = (parseInt(objects[object].style.left, 10) / 2)

    objects[object].style.transition = `left ${speed}s ease, width ${speed}s ease`;
    objects[object].style.left = `${newLeft}px`;
    objects[object].style.width = `${newWidth}px`;
  }

  newLevel.style.left = `50%`;

  console.log(myBox);

  // If we just device myBox's width by 2 myBox ends up on a 5 instead of a 10 resulting in collision errors. So we need to divide by 10 to get to a decimal that can be rounded to the tenths place then times by ten to restore tens. 
  let newLeft = (parseInt(myBox.style.left, 10) / 2);
  newLeft = Math.round(newLeft / 10) * 10;

  myBox.style.transition = `left ${speed}s ease, width ${speed}s ease`;
  myBox.style.left = `${newLeft}px`;
  myBox.style.width = `${parseInt(myBox.style.width, 10) / 2}px`;

  // If we do not wipe out transition then movements to the left and right are effected by ease. 
  setTimeout(() => {
    myBox.style.transition = ``;
  }, speed * 1000); 

}

export function fadeOut(object) {
  setTimeout(() => {
    object.style.transition = 'opacity 1s ease';
    object.style.opacity = '0';
}, 1000);
}

export function fadeIn(object) {
  setTimeout(() => {
    object.style.transition = 'opacity 1s ease';
    object.style.opacity = '1';
}, 1000);
}