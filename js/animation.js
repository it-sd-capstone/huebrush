function levelXTransition(levels = [], objects = [], newLevel) {
  const speed = 1.75;

  // Adjust Level 1
  levels.forEach((level) => {
      const canvasToTransition = level; // Use DOM element directly
      const canvasWidth = canvasToTransition.getBoundingClientRect().width;

      canvasToTransition.style.transition = `width ${speed}s ease, transform ${speed}s ease`;
      canvasToTransition.style.width = `${canvasWidth / 2}px`; // Shrink width
      canvasToTransition.style.zIndex = '2'; // Keep above new Level during transition
  });

  // Adjust Level 1 objects
  objects.forEach((object) => {
      const objectWidth = object.getBoundingClientRect().width;
      const objectLeft = object.offsetLeft; // Current position
      const newLeft = objectLeft / 2; // Move left by half

      object.style.transition = `width ${speed}s ease, transform ${speed}s ease`;
      object.style.width = `${objectWidth / 2}px`;
      object.style.transform = `translateX(-${newLeft}px)`;
  });

  // Slide Level 2 in
  levelIn(newLevel, 1000, 600); // Width/Height fixed for Play Area
}

function levelIn(level, width, height) {
  const canvasToSlideIn = level; // Use the DOM element directly
  const speed = 1.75;

  // Slide in and expand the new level
  canvasToSlideIn.style.transition = `left ${speed}s ease, width ${speed}s ease`;
  canvasToSlideIn.style.position = 'absolute';
  canvasToSlideIn.style.left = '50%'; // Move to the right half of the screen
  canvasToSlideIn.style.width = `${width / 2}px`; // Half screen
  canvasToSlideIn.style.height = `${height}px`;
}