import { createElement } from "./level1.js";
import { magicScoutAudio, troubleTribalsAudio } from "./initializeController.js";


let slot = ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x'];
if (!localStorage.getItem('inventory')) {
    localStorage.setItem('inventory', "x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x");
}


let isCursorInside = false;

//should represent the current slot[] index of the last non-x in the array
let lastItem = -1;
//should reflect the current slot[] index being represented by the ammo div
let currentColorQ = 0;
let currentColorE = 0;

//for projectiles
let cursorX;
let cursorY;
let lastTime = 0;

//for animation
let animation = false;

//for inventory
let invEmpty = false;
let invFull = false;

export function createInventory() {
  const inventoryArea = createElement('div', 'inventoryArea', ['inventoryArea'], {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: `100%`,
    height: `60px`,
    padding: '0 20px',
    boxSizing: 'border-box',
  });

  const Inventory = document.createElement('div');
  Inventory.id = 'Inventory';
  Inventory.classList.add("Inventory");
  Inventory.style.position = 'relative';
  Inventory.style.left = '10%';
  Inventory.style.zIndex = 1
  let leftCounter = 5

  for (let i = 1; i < 17; i++) {
    let invNumber = "inv" + i;
    let invslot = document.createElement('div');
    invslot.id = invNumber;
    invslot.classList.add("Inventory");
    invslot.style.position = 'absolute';
    if (localStorage.getItem('inventory').split(',')[i-1] == 'x') {
    invslot.style.background = 'grey';
    } else {
    invslot.style.background = localStorage.getItem('inventory').split(',')[i-1];
    }
    
    invslot.style.width = '40px';
    invslot.style.height = '40px';
    invslot.style.top = '5px';
    invslot.style.left = leftCounter + 'px';
    invslot.style.padding = '0';
    invslot.style.border = '0';
    invslot.style.zIndex = 0
    Inventory.appendChild(invslot);
    leftCounter = leftCounter + 50
  }

  const blackTopMarker = document.createElement('img');
  blackTopMarker.src = './images/BlackTop.svg';
  blackTopMarker.id = 'blackTop';
  blackTopMarker.style.zIndex = 200;
  blackTopMarker.style.top = '5px';
  blackTopMarker.style.left = '5px';
  blackTopMarker.style.opacity = '1';
  blackTopMarker.style.padding = '0';
  blackTopMarker.style.border = '0';
  blackTopMarker.style.width = '40px';
  blackTopMarker.style.height = '40px';
  blackTopMarker.style.position = 'absolute';
  Inventory.appendChild(blackTopMarker);

  const whiteBottomMarker = document.createElement('img');
  whiteBottomMarker.src = './images/WhiteBottom.svg';
  whiteBottomMarker.id = 'whiteBottom';
  whiteBottomMarker.style.zIndex = 199;
  whiteBottomMarker.style.top = '5px';
  whiteBottomMarker.style.left = '5px';
  whiteBottomMarker.style.opacity = '1';
  whiteBottomMarker.style.padding = '0';
  whiteBottomMarker.style.border = '0';
  whiteBottomMarker.style.width = '40px';
  whiteBottomMarker.style.height = '40px';
  whiteBottomMarker.style.position = 'absolute';
  Inventory.appendChild(whiteBottomMarker);

  const blackBottomMarker = document.createElement('img');
  blackBottomMarker.src = './images/BlackBottom.svg';
  blackBottomMarker.id = 'blackBottom';
  blackBottomMarker.style.zIndex = 198;
  blackBottomMarker.style.top = '5px';
  blackBottomMarker.style.left = '5px';
  blackBottomMarker.style.opacity = '1';
  blackBottomMarker.style.padding = '0';
  blackBottomMarker.style.border = '0';
  blackBottomMarker.style.width = '40px';
  blackBottomMarker.style.height = '40px';
  blackBottomMarker.style.position = 'absolute';
  Inventory.appendChild(blackBottomMarker);
  
  fetch('./images/Inventory.svg')
    .then(response => response.text())
    .then(svgContent => {
      // Append the SVG content without overwriting `inv1`
      const svgContainer = document.createElement('div');
      svgContainer.innerHTML = svgContent;
      Inventory.appendChild(svgContainer);
    })
    .catch(error => console.error('Error loading SVG:', error));

  slot = localStorage.getItem('inventory').split(',');

  const muteButton = document.createElement('button');
  muteButton.id = 'muteButton';
  muteButton.style.width = '40px';
  muteButton.style.height = '40px';
  muteButton.style.border = 'none';
  muteButton.style.backgroundSize = 'contain';
  muteButton.style.backgroundColor = '#444';
  muteButton.style.backgroundPosition = 'center';
  muteButton.style.backgroundRepeat = 'no-repeat';
  muteButton.style.cursor = 'pointer';
  muteButton.style.borderRadius = '5px';
  muteButton.style.backgroundImage = localStorage.getItem('muted') === '1'
        ? `url('../images/musicOn.png')`
        : `url('../images/musicOff.png')`;

  let isMuted = false;

  muteButton.addEventListener('click', () => {
    isMuted = !isMuted;
    let newVolume;
    if (localStorage.getItem('muted') == '1') {
        newVolume = 0;
        localStorage.setItem('muted', 0);
    } else {
      newVolume = 1;
      localStorage.setItem('muted', 1);
      magicScoutAudio.loop = true;
      magicScoutAudio.volume = 1.0;
      magicScoutAudio.play();
    }
    magicScoutAudio.volume = newVolume;
    troubleTribalsAudio.volume = newVolume;
    muteButton.style.backgroundImage = localStorage.getItem('muted') == '0' ? `url('../images/musicOff.png')` : `url('../images/musicOn.png')`;
  });

  muteButton.addEventListener('mouseenter', () => {
    muteButton.style.backgroundColor = '#666';
  });
  muteButton.addEventListener('mouseleave', () => {
    muteButton.style.backgroundColor = '#444';
  });

  inventoryArea.appendChild(Inventory);
  inventoryArea.appendChild(muteButton);

  document.querySelector('#game_canvas').appendChild(inventoryArea);
}

function getBlackTop() {
    return document.querySelector('#blackTop');
}

function getBlackBottom() {
    return document.querySelector('#blackBottom');
}

function getWhiteBottom() {
    return document.querySelector('#whiteBottom');
}

function setImgCoordinate(img, top, left) {
    img.style.top = top + 'px';
    img.style.left = left + 'px';
}

export function setBoxColor() {
    let color1 = slot[getCurrentColorQ()];
    let color2 = slot[getCurrentColorE()];

    switch (color1 + '-' + color2) {
        case "x-x":
            getBox().style.background = 'rgba(128, 128, 128, 1)';
            break;
        case "x-red":
        case "red-x":
        case "red-red":
            getBox().style.background = 'rgba(255, 0, 0, 1)';
            break;
        case "x-blue":
        case "blue-x":
        case "blue-blue":
            getBox().style.background = 'rgba(0, 0, 255, 1)';
            break;
        case "x-yellow":
        case "yellow-x":
        case "yellow-yellow":
            getBox().style.background = 'rgba(255, 255, 0, 1)';
            break;
        case "red-blue":
        case "blue-red":
            getBox().style.background = 'rgba(128, 0, 128, 1)';
            break;
        case "red-yellow":
        case "yellow-red":
            getBox().style.background = 'rgba(255, 165, 0, 1)';
            break;
        case "blue-yellow":
        case "yellow-blue":
            getBox().style.background = 'rgba(0, 128, 0, 1)';
            break;
        default:
            break;
    }
}

export function setAmmoColor() {
    setLastItem();
    getAmmo().style.background = getSlot(getLastItem());

}

export function getSlotArray() {
    return slot;
}

export function setSlotArray(inventoryString) {
  console.log(inventoryString);
  let inventoryArray = inventoryString.split(",")
  let counter = 0
  
  inventoryArray.forEach(element => {
    console.log(element);
    setSlot(counter,element);
    counter++
  });
  
}

export function getAmmo() {
    return document.querySelector('#ammo');
}

export function getBox() {
    return document.querySelector('#myBox');
}

export function getPlayArea() {
    return document.querySelector('#playArea');    
}

function getProjectile() {
    return document.querySelector('#projectile');
}

function setCursorInside(boolean) {
    isCursorInside = boolean;
}

function getCurrentColorQ() {
    return currentColorQ;
}
function getCurrentColorE() {
    return currentColorE;
}

export function setCurrentColorQ(index) {
    currentColorQ = index;
}
export function setCurrentColorE(index) {
    currentColorE = index;
}

function setCursorX(x) {
    cursorX = x;
}

function setCursorY(y) {
    cursorY = y;
}

function getCursorX() {
    return cursorX;
}

function getCursorY() {
    return cursorY;
}

export function setLastItem() {
    for (let i = 0; i < getSlotArray().length; i++) {
        if (slot[i] !== 'x') {
            lastItem = i;
        }
    }
}

function getLastItem() {
    return lastItem;
}

export function setSlot(index, color) {
    slot[index] = color;
}

function getSlot(index) {
    return slot[index];
}

export function setInvEmpty() {
     invEmpty = slot.every((item) => item === 'x');
}

function getInvEmpty() {
    return invEmpty;
}

export function setInvFull() {
    invFull = !slot.includes('x');
}

function getInvFull() {
    return invFull;
}

function setAnimation(boolean) {
    animation = boolean;
}

function setIsCursorInside(boolean) {
    isCursorInside = boolean;
} 

function getIsCursorInside() {
    return isCursorInside;
}



export function addToInventory(lake) {
    if (!getInvFull()) {
        for (let i = 0; i < getSlotArray().length; i++) { 
            if (getSlot(i) == 'x') {
                setSlot(i, lake.background);

                displayItem(i, lake.background);
                setBackground(getAmmo(), slot[i]);
                setLastItem();
                setInvFull();
                setInvEmpty();
                setBackground(getAmmo(), getSlot(getLastItem()));
                setBoxColor();
                return;
            }
        }
    } else {
        //TODO display <p> saying the inventory is full
    }
    setBoxColor();
    setInvFull();
    setInvEmpty();
    setBackground(ammo, slot[getLastItem()]);

}

export function displayItem(slotIndex, color) {
    var idNum = slotIndex + 1;
    var id = "inv" + idNum;
    const item = document.getElementById(`${id}`);
    item.style.background = `${color}`;
}

function displayInventory() {
    for (let i = 0; i < slot.length; i++) {
        let divIdNum = i + 1;
        let divIdStr = 'inv';
        let id = divIdStr + divIdNum;
        let invSlot = document.getElementById(id);
        if (slot[i] !== 'x') {
            setBackground(invSlot, slot[i]);
        } else setBackground(invSlot, "grey");
    }
}

function swapAmmo(direction) {
    for (let i = 0; i < slot.length; i++) {
        if (slot[i] != 'x') {
            setLastItem(i);
        }
    }

    let blackTopTop = parseInt(getBlackTop().style.top);
    let blackTopLeft = parseInt(getBlackTop().style.left);
    let blackBottomTop = parseInt(getBlackBottom().style.top);
    let blackBottomLeft = parseInt(getBlackBottom().style.left);
    let whiteBottomTop = parseInt(getWhiteBottom().style.top);

    if (direction == 'q' && getCurrentColorQ() !== 0) {
        setCurrentColorQ((getCurrentColorQ() - 1));
        setImgCoordinate(getBlackTop(), blackTopTop, (blackTopLeft - 50));
        setImgCoordinate(getBlackBottom(), blackBottomTop, blackBottomLeft - 50);

    } else if (direction == 'q' && getCurrentColorQ() == 0) {
        setCurrentColorQ(15);

        let newLeft = 15;
        newLeft *= 50;
        newLeft += 5;

        if (newLeft == 0) newLeft = 5;
        setImgCoordinate(getBlackTop(), blackTopTop, newLeft);
        setImgCoordinate(getBlackBottom(), blackBottomTop, newLeft);
    } else if (direction == 'e' && getCurrentColorE() != 15) {
        setCurrentColorE((getCurrentColorE() + 1));
        let newLeft = 0;
        newLeft += getCurrentColorE();
        newLeft *= 50;
        newLeft += 5;
        if (newLeft == 0) newLeft = 5;
        setImgCoordinate(getWhiteBottom(), whiteBottomTop, newLeft);
    } else if (direction == 'e' && getCurrentColorE() == 15) {
        setCurrentColorE(0);
        setImgCoordinate(getWhiteBottom(), whiteBottomTop, 5);
    }
    setBoxColor();
}

document.addEventListener('keydown',  (e) => {
    setInvEmpty();
    if (e.code == "Space" && !getInvEmpty() && isCursorInside && animation == false) {
        fire();
        shiftInventory();
        displayInventory();
        setLastItem(); 
    }

    if (getInvEmpty()) {
        getAmmo().style.background = "rgba(128, 128, 128, 0.35)";
        setLastItem(-1);
    }
    
});

document.addEventListener('keydown',  (e) => {
    if (e.code == 'KeyQ') {
        swapAmmo('q');
    } else if (e.code == 'KeyE') {
        swapAmmo('e');
    }
});

export function fire() {
    // Initialize projectile position and color
    const projectileRect = getProjectile().getBoundingClientRect();
    const parentRect = level1.getBoundingClientRect();
    let cursX = getCursorX();
    let cursY = getCursorY();

    getProjectile().style.top = `${getAmmo().offsetTop}px`;
    getProjectile().style.left = `${getAmmo().offsetLeft}px`;
    getProjectile().style.background = slot[getLastItem()];
    
    let lastTime = performance.now(); // Initialize time
    
    function moveProjectile(currentTime) {
        getProjectile().style.boxSizing = 'border-box';
        getProjectile().style.border = '0.025rem solid black';
        setAnimation(true);
        setBackground(ammo, slot[lastItem]);
        const deltaTime = (currentTime - lastTime) / 1000; // Time elapsed in seconds
        lastTime = currentTime;

        const rect = getProjectile().getBoundingClientRect();
        const currentX = rect.left + rect.width / 2 - parentRect.left;
        const currentY = rect.top + rect.height / 2 - parentRect.top;

        const speed = 500; // Speed in pixels per second

        // Calculate the difference between current and target positions
        const dx = cursX - currentX;
        const dy = cursY - currentY;
        const distance = Math.sqrt(dx * dx + dy * dy);
        

        // Stop animation if the projectile is close enough to the target.
        // distance should be left at 5 or higher to avoid projectile jumping
        // and not despawning.
        if (distance < 5) {
            getProjectile().style.background = "rgba(0, 0, 0, 0)";
            getProjectile().style.border = '0px';
            getProjectile().style.top = '-20px';
            setAnimation(false);
            return;
        }

        // Normalize the direction and calculate velocity
        const velocityX = (dx / distance) * speed * deltaTime;
        const velocityY = (dy / distance) * speed * deltaTime;

        // Update projectile position
        getProjectile().style.left = `${parseFloat(getProjectile().style.left) + velocityX}px`;
        getProjectile().style.top = `${parseFloat(getProjectile().style.top) + velocityY}px`;

        // Continue the animation
        requestAnimationFrame(moveProjectile);
    }

    moveProjectile(lastTime); // Start moving the projectile
}

export function setBackground(ele, color) {
  ele.style.background = color;
}

function shiftInventory() {
    //remove the last inventory item
    setLastItem();
    for (let i = 0; i < slot.length; i++) {
        if (slot[i] == 'x') {
            setSlot((i-1), 'x');
        } else if (i == slot.length - 1) {
            setSlot(i, 'x');
        }
    }
    setLastItem();
    
    setInvFull();
    setInvEmpty();

    //reset ammo color
    if (slot[lastItem] !== 'x') {
        setBackground(getAmmo(), slot[getLastItem()]);
    }
    setBoxColor();
}

export function createMouseEnterDetection() {
    // Add event listeners to playArea
    if (getPlayArea()) {
    getPlayArea().addEventListener('mouseenter', (e) => {
        if (e.target.id === 'playArea') {
        setIsCursorInside(true);
        }
    });
    
    playArea.addEventListener('mouseleave', (e) => {
        if (e.target.id === 'playArea') {
        setIsCursorInside(false);
        }
    });
    
    playArea.addEventListener('mousemove', (e) => {
        if (getIsCursorInside()) {
        const rect = getPlayArea().getBoundingClientRect();
        setCursorX(e.clientX - rect.left); // X-coordinate within playArea
        setCursorY(e.clientY - rect.top);  // Y-coordinate within playArea
        }
    });
    } else {
    console.warn('playArea element not found. Event listeners were not added.');
    }
    
}