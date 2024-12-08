import { initializeGame, loadLevel } from './initializeController.js';
import { createInventory} from './inventory.js';

export function createMainMenu() {
   // Create start menu container
   const startMenu = document.createElement('div');
   startMenu.id = 'startMenu';
   startMenu.style.display = 'flex';
   startMenu.style.flexDirection = 'column';
   startMenu.style.alignItems = 'center';
   startMenu.style.justifyContent = 'center';
   startMenu.style.height = '100vh';
   startMenu.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
   startMenu.style.color = 'white';
   startMenu.style.position = 'absolute';
   startMenu.style.width = '100%';
   startMenu.style.zIndex = '10';
 
   // Add title
   const title = document.createElement('h1');
   title.textContent = 'HueBrush';
   startMenu.appendChild(title);
 
   // Add continue button
   const continueButton = document.createElement('button');
   continueButton.textContent = 'continue';
   continueButton.style.padding = '10px 20px';
   continueButton.style.margin = '10px';
   continueButton.style.fontSize = '18px';
   continueButton.style.backgroundColor = '#444';
   continueButton.style.color = 'white';
   continueButton.style.border = 'none';
   continueButton.style.borderRadius = '5px';
   continueButton.style.cursor = 'pointer';
   startMenu.appendChild(continueButton);
 
   // Add New Game button
   const newGameButton = document.createElement('button');
   newGameButton.textContent = 'New Game';
   newGameButton.style.padding = '10px 20px';
   newGameButton.style.margin = '10px';
   newGameButton.style.fontSize = '18px';
   newGameButton.style.backgroundColor = '#444';
   newGameButton.style.color = 'white';
   newGameButton.style.border = 'none';
   newGameButton.style.borderRadius = '5px';
   newGameButton.style.cursor = 'pointer';
   startMenu.appendChild(newGameButton);
 
   // Append menu to the body
   document.querySelector('#game_canvas').appendChild(startMenu);
 
   // Hide continue button if no saved game exists
   if (!localStorage.getItem('Current Level')) {
     continueButton.style.display = 'none';
   }
 
   // Handle "continue" click
   continueButton.addEventListener('click', () => {
     startMenu.remove();
     const currentLevel = Number(localStorage.getItem('Current Level')) || 1;
     createInventory();
     loadLevel(currentLevel);
   });
 
   // Handle "New Game" click
   newGameButton.addEventListener('click', () => {
     startMenu.remove();
     localStorage.clear();
     localStorage.setItem('Current Level', 1);
     const currentLevel = Number(localStorage.getItem('Current Level'));
     initializeGame();
     createInventory();
     loadLevel(currentLevel);
   });
 
   // Add hover effects dynamically
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
  // Create end menu container
  const endMenu = document.createElement('div');
  endMenu.id = 'startMenu';
  endMenu.style.display = 'flex';
  endMenu.style.flexDirection = 'column';
  endMenu.style.alignItems = 'center';
  endMenu.style.justifyContent = 'center';
  endMenu.style.height = '100vh';
  endMenu.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
  endMenu.style.color = 'white';
  endMenu.style.position = 'absolute';
  endMenu.style.width = '100%';
  endMenu.style.zIndex = '10';

  // Add title
  const title = document.createElement('h1');
  title.textContent = 'Thank you for playing HueBrush!';
  endMenu.appendChild(title);

  // Add explore button
  const exploreButton = document.createElement('button');
  exploreButton.textContent = 'explore';
  exploreButton.style.padding = '10px 20px';
  exploreButton.style.margin = '10px';
  exploreButton.style.fontSize = '18px';
  exploreButton.style.backgroundColor = '#444';
  exploreButton.style.color = 'white';
  exploreButton.style.border = 'none';
  exploreButton.style.borderRadius = '5px';
  exploreButton.style.cursor = 'pointer';
  endMenu.appendChild(exploreButton);

  // Add New Game button
  const newGameButton = document.createElement('button');
  newGameButton.textContent = 'New Game';
  newGameButton.style.padding = '10px 20px';
  newGameButton.style.margin = '10px';
  newGameButton.style.fontSize = '18px';
  newGameButton.style.backgroundColor = '#444';
  newGameButton.style.color = 'white';
  newGameButton.style.border = 'none';
  newGameButton.style.borderRadius = '5px';
  newGameButton.style.cursor = 'pointer';
  endMenu.appendChild(newGameButton);

  // Append menu to the body
  document.querySelector('#game_canvas').appendChild(endMenu);

  // Hide explore button if no saved game exists
  if (!localStorage.getItem('Current Level')) {
    exploreButton.style.display = 'none';
  }

  // Handle "explore" click
  exploreButton.addEventListener('click', () => {
    endMenu.remove();
    const currentLevel = Number(localStorage.getItem('Current Level')) || 1;
    createInventory();
    loadLevel(currentLevel);
  });

  // Handle "New Game" click
  newGameButton.addEventListener('click', () => {
    endMenu.remove();
    localStorage.clear();
    localStorage.setItem('Current Level', 1);
    const currentLevel = Number(localStorage.getItem('Current Level'));
    initializeGame();
    createInventory();
    loadLevel(currentLevel);
  });

  // Add hover effects dynamically
  [exploreButton, newGameButton].forEach(button => {
    button.addEventListener('mouseenter', () => {
      button.style.backgroundColor = '#666';
    });
    button.addEventListener('mouseleave', () => {
      button.style.backgroundColor = '#444';
    });
  });
}