var slot = ["x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x"];
let isCursorInside = false;

//should represent the current slot[] index of the last non-x in the array
let lastItem = -1;
//should reflect the current slot[] index being represented by the ammo div
let currentColor = 0;

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
  const Inventory = document.createElement('div');
  Inventory.id = 'Inventory';
  Inventory.classList.add("Inventory");
  Inventory.style.position = 'relative';
  Inventory.style.zIndex = 1
  let leftCounter = 5
  for (let i = 1; i < 17; i++) {
    let invNumber = "inv" + i;
    let invslot = document.createElement('div');
    invslot.id = invNumber;
    invslot.classList.add("Inventory");
    invslot.style.position = 'absolute';
    invslot.style.background = 'grey';
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
  fetch('/images/inventory.svg')
    .then(response => response.text())
    .then(svgContent => {
      // Append the SVG content without overwriting `inv1`
      const svgContainer = document.createElement('div');
      svgContainer.innerHTML = svgContent;
      Inventory.appendChild(svgContainer);
      // Append the `Inventory` element to the DOM
      document.querySelector('#game_canvas').appendChild(Inventory);
    })
    .catch(error => console.error('Error loading SVG:', error));
}

function createPlayArea() {

}

export function getAmmo() {
    return document.querySelector('#ammo');
}

function getBox() {
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

function getCurrentColor() {
    return currentColor;
}

export function setCurrentColor(index) {
    currentColor = index;
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
    for (let i = 0; i < slot.length; i++) {
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

function setInvEmpty(boolean) {
    invEmpty = boolean;
}

function getInvEmpty() {
    return invEmpty;
}

function setInvFull(boolean) {
    invFull = boolean;
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
    if (!invFull) {
        for (let i = 0; i < slot.length; i++) { 
            if (getSlot(i) == 'x') {
                setSlot(i, lake.background);

                displayItem(i, lake.background);
                setBackground(getAmmo(), slot[i]);
                setCurrentColor(i);
                setLastItem();
                break;
            }
        }
    } else {
        //TODO display <p> saying the inventory is full
    }
    
    setInvFull(!slot.includes('x'));
    setInvEmpty(slot.every((item) => item === 'x'));
    setBackground(ammo, slot[currentColor]);

}

function combineColors(key) {
    const keyString = key.getAttribute("color");
    const [rK, gK, bK, aK] = keyString.match(/[\d.]+/g).map((value, index) => (index < 3 ? parseInt(value, 10) : parseFloat(value)));
    const boxString = box.getAttribute("color");
    const [rB, gB, bB, aB] = boxString.match(/[\d.]+/g).map((value, index) => (index < 3 ? parseInt(value, 10) : parseFloat(value)));
    var r = rK + rB;
    var g = gK + gB;
    var b = bK + bB;
    var a = aK + aB;
    box.style.background = `rgba(${r}, ${g}, ${b}, ${a})`;
}

function spawnNewKey(key) {
    const newKey = document.createElement("div");
    
    newKey.id = "key";
    newKey.style.background = key.style.background;
    newKey.setAttribute("color", key.style.background);
    newKey.setAttribute("count", `${keyCount}`);
    newKey.style.left = `${Math.floor(Math.random() * 361)}px`;
    newKey.style.top = `${Math.floor(Math.random() * 361)}px`;

    document.getElementById("container").appendChild(newKey);
    keyCount++;
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
        } else setBackground(invSlot, "rgba(0,0,0,0)");
    }
}

function swapAmmo(direction) {
    for (let i = 0; i < slot.length; i++) {
        if (slot[i] != 'x') {
            lastItem = i;
        }
    }

    if (direction == 'q' && currentColor != 0) {
        setCurrentColor(currentColor - 1);
        getAmmo().style.background = `${slot[getCurrentColor()]}`;
    } else if (direction == 'q' && getCurrentColor() == 0) {
        setCurrentColor(lastItem);
        getAmmo().style.background = `${slot[getLastItem()]}`;
    } else if (direction == 'e' && getCurrentColor() != lastItem) {
        setCurrentColor(parseInt(currentColor + 1));
        getAmmo().style.background = `${slot[getCurrentColor()]}`;
    } else if (direction == 'e' && getCurrentColor() == lastItem) {
        setCurrentColor(0);
        getAmmo().style.background = `${slot[0]}`;
    }
}

document.addEventListener('keydown',  (e) => {
    if (e.key == " " && !invEmpty && isCursorInside && animation == false) {
        console.log("firing");
        fire();
        console.log("done firing");
        shiftInventory();
        displayInventory();
        setLastItem(); 
    }

    const ammo = document.querySelector('#ammo');
    if (invEmpty) {
        getAmmo().style.background = "rgba(0,0,0,0)";
        setLastItem(-1);
    }
    
});

document.addEventListener('keydown',  (e) => {
    if (e.key.toLowerCase() == 'q') {
        swapAmmo('q');
    } else if (e.key.toLowerCase() == 'e') {
        swapAmmo('e');
    }
});

function fire() {
    // Initialize projectile position and color
    const projectileRect = getProjectile().getBoundingClientRect();
    const parentRect = level1.getBoundingClientRect();
    
    getProjectile().style.top = `${getAmmo().offsetTop}px`;
    getProjectile().style.left = `${getAmmo().offsetLeft}px`;
    getProjectile().style.background = slot[getCurrentColor()];

    let lastTime = performance.now(); // Initialize time
    
    function moveProjectile(currentTime) {
        
        console.log('firing repeatedly');
        setAnimation(true);
        setBackground(ammo, slot[currentColor]);
        const deltaTime = (currentTime - lastTime) / 1000; // Time elapsed in seconds
        lastTime = currentTime;

        const rect = projectile.getBoundingClientRect();
        const currentX = rect.left + rect.width / 2 - parentRect.left;
        const currentY = rect.top + rect.height / 2 - parentRect.top;

        const speed = 500; // Speed in pixels per second

        // Calculate the difference between current and target positions
        console.log("cursorx: "+getCursorX())
        const dx = getCursorX() - currentX;
        const dy = getCursorY() - currentY;
        const distance = Math.sqrt(dx * dx + dy * dy);
        

        // Stop animation if the projectile is close enough to the target
        if (distance < 1) {
            getProjectile().style.background = "rgba(0,0,0,0)";
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
    //move all inventory items down one slot and fill in the last slot with an x.
    setLastItem();
    for (let i = getCurrentColor(); i < slot.length; i++) {
        if (i !== slot.length - 1) {
            setSlot(i, getSlot(parseInt(i + 1)));
        } else if (i == slot.length - 1) {
            setSlot(i, 'x');
        }
    }

    if (getCurrentColor() == getLastItem()) {
        setCurrentColor(currentColor - 1);
    }

    setLastItem();

    setInvFull(!slot.includes('x'));
    setInvEmpty(slot.every((item) => item === 'x'));

    //reset ammo color
    getAmmo().style.background = slot[getCurrentColor()];
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


window.createInventory = createInventory;
window.fire = fire;
window.shiftInventory = shiftInventory;
window.setLastItem = setLastItem;
window.setBackground = setBackground;
window.swapAmmo = swapAmmo;
//window.getPlayArea = getPlayArea;

