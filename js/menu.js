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

   continueButton.textContent = 'Continue';
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

export function createInformationMenu() {
  const Information = createElement('div', 'Information', ['Information'], {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
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
  normalText.textContent = 'How to Play:';
  normalText.style.color = 'red';
  title.appendChild(normalText);

  Information.appendChild(title);

  // Add instructions
  const instructions = createElement('div', 'instructions', ['instructions'], {
    marginTop: '20px',
    textAlign: 'left',
    lineHeight: '1.5',
    fontSize: '18px',
    color: 'white',
  });

  instructions.innerHTML = `
    <p><b>W</b> or <b>↑</b> | Move Up</p>
    <p><b>A</b> or <b>←</b> | Move Left</p>
    <p><b>S</b> or <b>↓</b> | Move Down</p>
    <p><b>D</b> or <b>→</b> | Move Right</p>
    <p><b>F</b> | Collect colored Ammo</p>
    <p><b>Q</b> | Move Black inventory selector Left</p>
    <p><b>E</b> | Move White inventory selector Right</p>
    <p><b>G</b> | Open matching colored Gate</p>
    <p><b>Space</b> | Fire color Ammo towards Mouse</p>
  `;

  Information.appendChild(instructions);

  const closeButton = createElement('div', 'closeButton', ['closeButton'], {
    padding: '10px 20px',
    margin: '10px',
    fontSize: '18px',
    backgroundColor: '#444',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  });

  closeButton.textContent = 'Close';
  Information.appendChild(closeButton);

  document.querySelector('#game_canvas').appendChild(Information);

  closeButton.addEventListener('click', () => {
    Information.remove();
  });

  [closeButton].forEach(button => {
    button.addEventListener('mouseenter', () => {
      button.style.backgroundColor = '#666';
    });
    button.addEventListener('mouseleave', () => {
      button.style.backgroundColor = '#444';
    });
  });
}

export function createHintMenu() {
  const Hint = createElement('div', 'Hint', ['Hint'], {
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
  let currentLevel = localStorage.getItem('Current Level')
  normalText.textContent = 'Get hints for level ' + currentLevel;
  normalText.style.color = 'red';
  title.appendChild(normalText);

  Hint.appendChild(title);

  if (currentLevel == '1') {
    const Level1Hint1 = createElement('div', 'Level1Hint1', ['Level1Hint'], {
      padding: '10px 20px',
      margin: '10px',
      fontSize: '18px',
      backgroundColor: '#444',
      color: 'white',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
    });
  
    Level1Hint1 .textContent = 'Hint1';

    const Level1Hint2 = createElement('div', 'Level1Hint2', ['Level1Hint'], {
      padding: '10px 20px',
      margin: '10px',
      fontSize: '18px',
      backgroundColor: '#444',
      color: 'white',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
    });
  
    Level1Hint1 .textContent = 'Hint1';

    const Level1Hint3 = createElement('div', 'Level1Hint3', ['Level1Hint'], {
      padding: '10px 20px',
      margin: '10px',
      fontSize: '18px',
      backgroundColor: '#444',
      color: 'white',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
    });
  
    Level1Hint1.textContent = 'Hint1';
    Level1Hint2.textContent = 'Hint2';
    Level1Hint3.textContent = 'Hint3';

    Hint.appendChild(Level1Hint1);
    Hint.appendChild(Level1Hint2);
    Hint.appendChild(Level1Hint3);

    Level1Hint1.addEventListener('click', () => {
      Level1Hint1.textContent = 'Use the F key to pick up red and blue ammo.';
      Level1Hint1.style.cursor = 'default';
      Level1Hint1.removeEventListener('click', () => {});
    });

    Level1Hint2.addEventListener('click', () => {
      Level1Hint2.textContent = 'Use the E and Q key to change the white and black icons on a red and blue respectively to create purple.';
      Level1Hint2.style.cursor = 'default';
      Level1Hint2.removeEventListener('click', () => {});
    });

    Level1Hint3.addEventListener('click', () => {
      Level1Hint3.textContent = 'Move to the purple gate while you are also purple and press G.';
      Level1Hint3.style.cursor = 'default';
      Level1Hint3.removeEventListener('click', () => {});
    });

    [Level1Hint1, Level1Hint2, Level1Hint3].forEach(button => {
      button.addEventListener('mouseenter', () => {
        button.style.backgroundColor = '#666';
      });
      button.addEventListener('mouseleave', () => {
        button.style.backgroundColor = '#444';
      });
    });
  } else if (currentLevel == '2') {
    const Level2Hint1 = createElement('div', 'Level2Hint1', ['Level2Hint'], {
      padding: '10px 20px',
      margin: '10px',
      fontSize: '18px',
      backgroundColor: '#444',
      color: 'white',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
    });

    const Level2Hint2 = createElement('div', 'Level2Hint2', ['Level2Hint'], {
      padding: '10px 20px',
      margin: '10px',
      fontSize: '18px',
      backgroundColor: '#444',
      color: 'white',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
    });

    const Level2Hint3 = createElement('div', 'Level2Hint3', ['Level1Hint'], {
      padding: '10px 20px',
      margin: '10px',
      fontSize: '18px',
      backgroundColor: '#444',
      color: 'white',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
    });
  
    Level2Hint1 .textContent = 'Hint1';
    Level2Hint2 .textContent = 'Hint2';
    Level2Hint3 .textContent = 'Hint3';

    Hint.appendChild(Level2Hint1);
    Hint.appendChild(Level2Hint2);
    Hint.appendChild(Level2Hint3);

    Level2Hint1.addEventListener('click', () => {
      Level2Hint1.textContent = 'Make sure to grab lots of extra ammo to fight off enemies without wasting the color you need.';
      Level2Hint1.style.cursor = 'default';
      Level2Hint1.removeEventListener('click', () => {});
    });

    Level2Hint2.addEventListener('click', () => {
      Level2Hint2.textContent = 'Fire your ammo past the enemy to deal extra damage.';
      Level2Hint2.style.cursor = 'default';
      Level2Hint2.removeEventListener('click', () => {});
    });

    Level2Hint3.addEventListener('click', () => {
      Level2Hint3.textContent = 'Mix Blue and Yellow to make Green.';
      Level2Hint3.style.cursor = 'default';
      Level2Hint3.removeEventListener('click', () => {});
    });

    [Level2Hint1, Level2Hint2, Level2Hint3].forEach(button => {
      button.addEventListener('mouseenter', () => {
        button.style.backgroundColor = '#666';
      });
      button.addEventListener('mouseleave', () => {
        button.style.backgroundColor = '#444';
      });
    });

  } else if (currentLevel == '3') {
    const Level3Hint1 = createElement('div', 'Level3Hint1', ['Level3Hint'], {
      padding: '10px 20px',
      margin: '10px',
      fontSize: '18px',
      backgroundColor: '#444',
      color: 'white',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
    });

    const Level3Hint2 = createElement('div', 'Level3Hint2', ['Level3Hint'], {
      padding: '10px 20px',
      margin: '10px',
      fontSize: '18px',
      backgroundColor: '#444',
      color: 'white',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
    });

    const Level3Hint3 = createElement('div', 'Level3Hint3', ['Level3Hint'], {
      padding: '10px 20px',
      margin: '10px',
      fontSize: '18px',
      backgroundColor: '#444',
      color: 'white',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
    });
  
    Level3Hint1 .textContent = 'Hint1';
    Level3Hint2 .textContent = 'Hint2';
    Level3Hint3 .textContent = 'Hint3';

    Hint.appendChild(Level3Hint1);
    Hint.appendChild(Level3Hint2);
    Hint.appendChild(Level3Hint3);

    Level3Hint1.addEventListener('click', () => {
      Level3Hint1.textContent = 'Carry colors through the maze to match the color at the top of each factory to spawn a matching color lake.';
      Level3Hint1.style.cursor = 'default';
      Level3Hint1.removeEventListener('click', () => {});
    });

    Level3Hint2.addEventListener('click', () => {
      Level3Hint2.textContent = "We're blue, we're green, we're something in-between...";
      Level3Hint2.style.cursor = 'default';
      Level3Hint2.removeEventListener('click', () => {});
    });

    Level3Hint3.addEventListener('click', () => {
      Level3Hint3.textContent = 'Light the switches blue and green around the gate to unlock the inbetween teal.';
      Level3Hint3.style.cursor = 'default';
      Level3Hint3.removeEventListener('click', () => {});
    });

    [Level3Hint1, Level3Hint2, Level3Hint3].forEach(button => {
      button.addEventListener('mouseenter', () => {
        button.style.backgroundColor = '#666';
      });
      button.addEventListener('mouseleave', () => {
        button.style.backgroundColor = '#444';
      });
    });

  } else if (currentLevel == '4') {
    const Level4Hint1 = createElement('div', 'Level4Hint1', ['Level4Hint'], {
      padding: '10px 20px',
      margin: '10px',
      fontSize: '18px',
      backgroundColor: '#444',
      color: 'white',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
    });

    const Level4Hint2 = createElement('div', 'Level4Hint2', ['Level4Hint'], {
      padding: '10px 20px',
      margin: '10px',
      fontSize: '18px',
      backgroundColor: '#444',
      color: 'white',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
    });

    const Level4Hint3 = createElement('div', 'Level4Hint3', ['Level4Hint'], {
      padding: '10px 20px',
      margin: '10px',
      fontSize: '18px',
      backgroundColor: '#444',
      color: 'white',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
    });
  
    Level4Hint1 .textContent = 'Hint1';
    Level4Hint2 .textContent = 'Hint2';
    Level4Hint3 .textContent = 'Hint3';

    Hint.appendChild(Level4Hint1);
    Hint.appendChild(Level4Hint2);
    Hint.appendChild(Level4Hint3);

    Level4Hint1.addEventListener('click', () => {
      Level4Hint1.textContent = 'The maze holds the key.';
      Level4Hint1.style.cursor = 'default';
      Level4Hint1.removeEventListener('click', () => {});
    });

    Level4Hint2.addEventListener('click', () => {
      Level4Hint2.textContent = 'The order you light the switches matter, 1 is at the top and 6 is at the bottom.';
      Level4Hint2.style.cursor = 'default';
      Level4Hint2.removeEventListener('click', () => {});
    });

    Level4Hint3.addEventListener('click', () => {
      Level4Hint3.textContent = 'Light the switches in the order the number appears in the maze: 2,5,4,6,1,3.';
      Level4Hint3.style.cursor = 'default';
      Level4Hint3.removeEventListener('click', () => {});
    });

    [Level4Hint1, Level4Hint2, Level4Hint3].forEach(button => {
      button.addEventListener('mouseenter', () => {
        button.style.backgroundColor = '#666';
      });
      button.addEventListener('mouseleave', () => {
        button.style.backgroundColor = '#444';
      });
    });
  } else {
    console.error("Wrong level for Hints!")
  }

  const closeButton = createElement('div', 'closeButton', ['closeButton'], {
    padding: '10px 20px',
    margin: '10px',
    fontSize: '18px',
    backgroundColor: '#444',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  });

  closeButton.textContent = 'Close';
   Hint.appendChild(closeButton);

  document.querySelector('#game_canvas').appendChild(Hint);

  closeButton.addEventListener('click', () => {
    Hint.remove();
  });

  [closeButton].forEach(button => {
    button.addEventListener('mouseenter', () => {
      button.style.backgroundColor = '#666';
    });
    button.addEventListener('mouseleave', () => {
      button.style.backgroundColor = '#444';
    });
  });
}

export function createHintButton() {
  const hintButton = document.createElement('button');
  hintButton.id = 'hintButton';
  hintButton.style.width = '40px';
  hintButton.style.height = '40px';
  hintButton.style.border = 'none';
  hintButton.style.position = 'absolute';
  hintButton.style.right = '10px';
  hintButton.style.top = '50%';
  hintButton.style.backgroundSize = 'contain';
  hintButton.style.backgroundColor = '#444';
  hintButton.style.backgroundPosition = 'center';
  hintButton.style.backgroundRepeat = 'no-repeat';
  hintButton.style.cursor = 'pointer';
  hintButton.style.borderRadius = '5px';
  hintButton.style.backgroundImage = `url('../images/question.png')`

  hintButton.addEventListener('click', () => {
    createHintMenu();
  });

  hintButton.addEventListener('mouseenter', () => {
    hintButton.style.backgroundColor = '#666';
  });
  hintButton.addEventListener('mouseleave', () => {
    hintButton.style.backgroundColor = '#444';
  });

  let header = document.querySelector('.container');
  header.appendChild(hintButton);
}

export function createInfoButton() {
  const infoButton = document.createElement('button');
  infoButton.id = 'infoButton';
  infoButton.style.width = '40px';
  infoButton.style.height = '40px';
  infoButton.style.border = 'none';
  infoButton.style.position = 'absolute';
  infoButton.style.right = '60px';
  infoButton.style.top = '50%';
  infoButton.style.backgroundSize = 'contain';
  infoButton.style.backgroundColor = '#444';
  infoButton.style.backgroundPosition = 'center';
  infoButton.style.backgroundRepeat = 'no-repeat';
  infoButton.style.cursor = 'pointer';
  infoButton.style.borderRadius = '5px';
  infoButton.style.backgroundImage = `url('../images/information.png')`

  infoButton.addEventListener('click', () => {
    createInformationMenu();
  });

  infoButton.addEventListener('mouseenter', () => {
    infoButton.style.backgroundColor = '#666';
  });
  infoButton.addEventListener('mouseleave', () => {
    infoButton.style.backgroundColor = '#444';
  });

  let header = document.querySelector('.container');
  header.appendChild(infoButton);
}