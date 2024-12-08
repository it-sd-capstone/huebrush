export function levelXTransition(objects = [],currentLevel, newLevel, direction, myBox, ammo) {

  let speed = 1.75;

  if (direction == `right`) {
    console.log(newLevel);
    newLevel.style.left = `50%`;
    for (let object in objects) {
      let newWidth = (parseInt(objects[object].style.width, 10) / 2);
      let newLeft = (parseInt(objects[object].style.left, 10) / 2);
  
      objects[object].style.transition = `left ${speed}s ease, width ${speed}s ease`;
      objects[object].style.left = `${newLeft}px`;
      objects[object].style.width = `${newWidth}px`;
    }

    if(myBox) {
      // If we just divide myBox's width by 2, myBox ends up on a 5 instead of a 10 resulting in collision errors. So we need to divide by 10 to get to a decimal that can be rounded to the tenths place then times by ten to restore tens. 
      let newBoxLeft = (parseInt(myBox.style.left, 10) / 2);
      newBoxLeft = Math.round(newBoxLeft / 10) * 10;
  
      let newAmmoLeft = (parseInt(ammo.style.left, 10) / 2);
      newAmmoLeft = Math.round(newAmmoLeft / 10) * 10;
  
      myBox.style.transition = `left ${speed}s ease, width ${speed}s ease`;
      myBox.style.left = `${newBoxLeft}px`;
      myBox.style.width = `${parseInt(myBox.style.width, 10) / 2}px`;
  
      ammo.style.transition = `left ${speed}s ease, width ${speed}s ease`;
      ammo.style.left = `${newAmmoLeft+6}px`;
        // If we do not wipe out transition then movements to the left and right are effected by ease. 
      setTimeout(() => {
        myBox.style.transition = ``;
        ammo.style.transition = ``;
      }, speed * 1000); 
    }
  } else if (direction == 'left') {
    for (let object in objects) {
      let newWidth = (parseInt(objects[object].style.width, 10) / 2);
      let newLeft = (parseInt(objects[object].style.left, 10) / 2);
  
      objects[object].style.transition = `left ${speed}s ease, width ${speed}s ease`;
      objects[object].style.left = `${newLeft}px`;
      objects[object].style.width = `${newWidth}px`;
    }
    console.log("I am currentLevel ", currentLevel);
    console.log("I am newLevel ", newLevel);

    currentLevel.style.left = '50%';
    newLevel.style.left = `0%`;

    if(myBox) {
      console.log("here")
      // If we just divide myBox's width by 2, myBox ends up on a 5 instead of a 10 resulting in collision errors. So we need to divide by 10 to get to a decimal that can be rounded to the tenths place then times by ten to restore tens. 
      let newBoxLeft = (parseInt(myBox.style.left, 10) / 2);
      //Adding 9 to keep Ammo in the correct spot after transition. 
      newBoxLeft = Math.round(newBoxLeft / 10) * 10 + 500 + 9;
  
      let newAmmoLeft = (parseInt(ammo.style.left, 10) / 2);
      newAmmoLeft = Math.round(newAmmoLeft / 10) * 10 + 500;
  
      myBox.style.transition = `left ${speed}s ease, width ${speed}s ease`;
      myBox.style.left = `${newBoxLeft}px`;
  
      ammo.style.transition = `left ${speed}s ease, width ${speed}s ease`;
      ammo.style.left = `${newAmmoLeft+6}px`;
        // If we do not wipe out transition then movements to the left and right are effected by ease. 
      setTimeout(() => {
        myBox.style.transition = ``;
        ammo.style.transition = ``;
      }, speed * 1000); 
    }
  } else {
    console.error('Invalid direction')
  }
  
  
}

export function levelYTransition(objects = [], newLevel, myBox, ammo) {

  let speed = 1.75;

  const flattenedObjects = objects.flat();

  for (let object of flattenedObjects) {
    let newHeight = (parseInt(object.style.height, 10) / 2);
    let newTop = (parseInt(object.style.top, 10) / 2);

    object.style.transition = `top ${speed}s ease, height ${speed}s ease`;
    object.style.top = `${newTop}px`;
    object.style.height = `${newHeight}px`;
  }

  newLevel.style.top = `50%`;

  // If we just device myBox's height by 2 myBox ends up on a 5 instead of a 10 resulting in collision errors. So we need to divide by 10 to get to a decimal that can be rounded to the tenths place then times by ten to restore tens. 
  let newBoxTop = (parseInt(myBox.style.top, 10) / 2);
  newBoxTop = Math.round(newBoxTop / 10) * 10;

  let newAmmoTop = (parseInt(ammo.style.top, 10) / 2);
  newAmmoTop = (Math.round(newAmmoTop / 10) * 10);

  let newAmmoLeft = parseInt(ammo.style.left) + 1 + 'px';

  myBox.style.transition = `top ${speed}s ease, height ${speed}s ease`;
  myBox.style.top = `${newBoxTop}px`;
  myBox.style.height = `${parseInt(myBox.style.height, 10) / 2}px`;

  ammo.style.transition = `top ${speed}s ease, height ${speed}s ease`;
  ammo.style.top = `${newAmmoTop-3}px`;
  ammo.style.width = '7px';
  ammo.style.height = '7px';
  ammo.style.left = newAmmoLeft;
  

  // If we do not wipe out transition then movements to the up and down are effected by ease. 
  setTimeout(() => {
    myBox.style.transition = ``;
    ammo.style.transition = ``;
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