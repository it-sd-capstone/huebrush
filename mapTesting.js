let activeCanvasId = 'canvas1';

function changeActiveCanvas(newCanvasId) {
    const currentCanvas = document.getElementById(activeCanvasId);
    let newCanvas = document.getElementById(newCanvasId);
    let currentBlocker = document.getElementById('blocker' + newCanvasId.charAt(6));

    if(newCanvasId.charAt(0) == "b"){
      currentBlocker = newCanvas;
      newCanvas = document.getElementById('canvas' + newCanvasId.charAt(7));
      console.log(currentBlocker)
      currentBlocker.style.opacity = 0;
    }
    
    
    currentCanvas.style.opacity = 0.2;
    newCanvas.style.opacity = 1;

    activeCanvasId = newCanvasId;
}

const canvases = document.querySelectorAll('canvas');
canvases.forEach(canvas => {
    canvas.addEventListener('click', function () {
        changeActiveCanvas(canvas.id);
    });
});

const canvasesArray = ['canvas1', 'canvas2', 'canvas3', 'canvas4'];

canvasesArray.forEach(canvasId => {
    const canvas = document.getElementById(canvasId);
    const ctx = canvas.getContext('2d');
    
    canvas.width = 400;
    canvas.height = 200;


    ctx.fillStyle = 'skyblue';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = 'black';
    ctx.font = '20px Arial';
    ctx.fillText(`Canvas: ${canvasId}`, 10, 30);
});
