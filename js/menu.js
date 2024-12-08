import { createElement } from './level1.js'
import { initializeGame, loadLevel, magicScoutAudio, troubleTribalsAudio } from './initializeController.js';
import { createInventory} from './inventory.js';

export function createMainMenu() {

  const startMenu = createElement('div', 'startMenu', ['startMenu'], {
    display: 'flex',
    flexDirection:'column',
    alignItems: 'center',
    justifyContent:'center',
    height:'100vh',
    backgroundColor:'rgba(0, 0, 0, 0.8)',
    color: 'white',
    position: 'absolute',
    width: '100%',
    zIndex: '10',
  });

   const title = createElement('div', 'title', ['title'], {
    fontSize: 'xx-large',
    fontWeight: '900',
    backgroundImage: 'linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet)',
    backgroundClip: 'text',
    webkitTextFillColor: 'transparent',
    webkitTextStrokeWidth: '0.2px',
    webkitTextStrokeColor: 'white',
  });
   title.textContent = 'HueBrush!';
   startMenu.appendChild(title);

   const continueButton = createElement('div', 'continueButton', ['continueButton'], {
    padding: '10px 20px',
    margin: '10px',
    fontSize: '18px',
    backgroundColor: '#444',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  });

   continueButton.textContent = 'continue';
   startMenu.appendChild(continueButton);

   const newGameButton = createElement('div', 'newGameButton', ['newGameButton'], {
    padding: '10px 20px',
    margin: '10px',
    fontSize: '18px',
    backgroundColor: '#444',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  });

   newGameButton.textContent = 'New Game';
   startMenu.appendChild(newGameButton);
 
   document.querySelector('#game_canvas').appendChild(startMenu);
 
   // Hide continue button if no saved game exists
   if (!localStorage.getItem('Current Level')) {
     continueButton.style.display = 'none';
   }
 
   continueButton.addEventListener('click', () => {
     startMenu.remove();
     const currentLevel = Number(localStorage.getItem('Current Level')) || 1;
     loadLevel(currentLevel);
     createInventory();
   });
 
   newGameButton.addEventListener('click', () => {
     startMenu.remove();
     localStorage.clear();
     localStorage.setItem('Current Level', 1);
     const currentLevel = Number(localStorage.getItem('Current Level'));
     initializeGame();
     loadLevel(currentLevel);
     createInventory();
   });
 
   [continueButton, newGameButton].forEach(button => {
     button.addEventListener('mouseenter', () => {
       button.style.backgroundColor = '#666';
     });
     button.addEventListener('mouseleave', () => {
       button.style.backgroundColor = '#444';
     });
   });
 }


 export function createEndMenu() {
  const endMenu = createElement('div', 'endMenu', ['endMenu'], {
    display: 'flex',
    flexDirection:'column',
    alignItems: 'center',
    justifyContent:'center',
    height:'100vh',
    backgroundColor:'rgba(0, 0, 0, 0.8)',
    color: 'white',
    position: 'absolute',
    width: '100%',
    zIndex: '10',
  });

  const title = createElement('div', 'title', ['title'], {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 'xx-large',
    fontWeight: '900',
    webkitTextStrokeColor: 'white',
  });

  const normalText = document.createElement('span');
  normalText.textContent = 'Thank you for playing';
  normalText.style.color = 'red';
  normalText.innerHTML += '&nbsp;'
  title.appendChild(normalText);

  const rainbowText = document.createElement('span');
  rainbowText.textContent = 'HueBrush!';
  rainbowText.style.backgroundImage = 'linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet)';
  rainbowText.style.backgroundClip = 'text';
  rainbowText.style.webkitTextFillColor = 'transparent';
  rainbowText.style.fontWeight = 'bold';
  title.appendChild(rainbowText);

  endMenu.appendChild(title);

  const exploreButton = createElement('div', 'exploreButton', ['exploreButton'], {
    padding: '10px 20px',
    margin: '10px',
    fontSize: '18px',
    backgroundColor: '#444',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  });

  exploreButton.textContent = 'Explore';
  endMenu.appendChild(exploreButton);

  const newGameButton = createElement('div', 'newGameButton', ['newGameButton'], {
    padding: '10px 20px',
    margin: '10px',
    fontSize: '18px',
    backgroundColor: '#444',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  });

   newGameButton.textContent = 'New Game';
   endMenu.appendChild(newGameButton);

  document.querySelector('#game_canvas').appendChild(endMenu);

  if (!localStorage.getItem('Current Level')) {
    exploreButton.style.display = 'none';
  }

  exploreButton.addEventListener('click', () => {
    endMenu.remove();
  });

  newGameButton.addEventListener('click', () => {
    endMenu.remove();
    let playArea = document.querySelector('.playArea');
    playArea.remove();
    let inventory = document.querySelector('.inventoryArea');
    inventory.remove();
    localStorage.clear();
    localStorage.setItem('Current Level', 1);
    const currentLevel = Number(localStorage.getItem('Current Level'));
    magicScoutAudio.pause()
    troubleTribalsAudio.pause()
    initializeGame();
    loadLevel(currentLevel);
    createInventory();
  });

  [exploreButton, newGameButton].forEach(button => {
    button.addEventListener('mouseenter', () => {
      button.style.backgroundColor = '#666';
    });
    button.addEventListener('mouseleave', () => {
      button.style.backgroundColor = '#444';
    });
  });
}

export function createGameOverMenu() {
  const GameOver = createElement('div', 'GameOver', ['GameOver'], {
    display: 'flex',
    flexDirection:'column',
    alignItems: 'center',
    justifyContent:'center',
    height:'100vh',
    backgroundColor:'rgba(0, 0, 0, 0.8)',
    color: 'white',
    position: 'absolute',
    width: '100%',
    zIndex: '10',
  });

  const title = createElement('div', 'title', ['title'], {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 'xx-large',
    fontWeight: '900',
    webkitTextStrokeColor: 'white',
  });

  const normalText = document.createElement('span');
  normalText.textContent = 'Game Over!';
  normalText.style.color = 'red';
  normalText.innerHTML += '&nbsp;'
  title.appendChild(normalText);

  GameOver.appendChild(title);

  const newGameButton = createElement('div', 'newGameButton', ['newGameButton'], {
    padding: '10px 20px',
    margin: '10px',
    fontSize: '18px',
    backgroundColor: '#444',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  });

   newGameButton.textContent = 'New Game';
   GameOver.appendChild(newGameButton);

  document.querySelector('#game_canvas').appendChild(GameOver);

  newGameButton.addEventListener('click', () => {
    GameOver.remove();
    let playArea = document.querySelector('.playArea');
    playArea.remove();
    let inventory = document.querySelector('.inventoryArea');
    inventory.remove();
    localStorage.clear();
    localStorage.setItem('Current Level', 1);
    magicScoutAudio.pause()
    troubleTribalsAudio.pause()
    const currentLevel = Number(localStorage.getItem('Current Level'));
    initializeGame();
    loadLevel(currentLevel);
    createInventory();
  });

  [newGameButton].forEach(button => {
    button.addEventListener('mouseenter', () => {
      button.style.backgroundColor = '#666';
    });
    button.addEventListener('mouseleave', () => {
      button.style.backgroundColor = '#444';
    });
  });
}