function levelXTransition(levels = [], objects = [], newLevel) {
  const speed = 1.75;

  levels.forEach((level) => {
      const canvasToTransition = level;
      const canvasWidth = canvasToTransition.getBoundingClientRect().width;

      canvasToTransition.style.transition = `width ${speed}s ease, transform ${speed}s ease`;
      canvasToTransition.style.width = `${canvasWidth / 2}px`;
      canvasToTransition.style.zIndex = '2';
  });

  objects.forEach((object) => {
    const objectWidth = object.getBoundingClientRect().width;

    if (object.classList.contains('myBox')) {
      // Compute new position relative to the parent level
      const levelRect = levels[0].getBoundingClientRect();
      const boxRect = object.getBoundingClientRect();

      const relativeLeft = boxRect.left - levelRect.left;

      // Transition size and position to align with level shrinkage
      object.style.transition = `width ${speed}s ease, transform ${speed}s ease`;
      object.style.width = `${objectWidth / 2}px`;

      // Move left in proportion to the level's shrinkage
      const moveLeft = relativeLeft / 2; 

      object.style.transform = `translate(-${moveLeft}px)`;
  } else {
        const objectLeft = object.offsetLeft;
        const newLeft = objectLeft / 2;

        object.style.transition = `width ${speed}s ease, transform ${speed}s ease`;
        object.style.width = `${objectWidth / 2}px`;
        object.style.transform = `translateX(-${newLeft}px)`;
    }
});
}