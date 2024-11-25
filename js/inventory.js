var slot = ["x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x"];
var container = document.querySelector(".playArea");

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

const ammo = document.querySelector('#ammo');
const projectile = document.querySelector('#projectile');
const box = document.querySelector("#myBox");

// Select the target div
const level1 = document.getElementById('level1');

export function addToInventory(lake) {
  const ammo = document.querySelector('.ammo');
  console.log(ammo);
    if (!invFull) {
        for (let i = 0; i < slot.length; i++) { 
            if (slot[i] == 'x') {
                slot[i] = lake.background;

                displayItem(i, lake.background);
                setBackground(ammo, slot[i]);
                currentColor = i;
                setLastItem();
                break;
            }
        }
    } else {
        //TODO display <p> saying the inventory is full
    }
    
    invFull = !slot.includes('x');
    invEmpty = slot.every((item) => item === 'x');
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

function displayItem(slotIndex, color) {
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
    for (i = 0; i < slot.length; i++) {
        if (slot[i] != 'x') {
            lastItem = i;
        }
    }

    if (direction == 'q' && currentColor != 0) {
        currentColor--;
        ammo.style.background = `${slot[currentColor]}`;
    } else if (direction == 'q' && currentColor == 0) {
        currentColor = lastItem;
        ammo.style.background = `${slot[lastItem]}`;
    } else if (direction == 'e' && currentColor != lastItem) {
        currentColor++;
        ammo.style.background = `${slot[currentColor]}`;
    } else if (direction == 'e' && currentColor == lastItem) {
        currentColor = 0;
        ammo.style.background = `${slot[0]}`;
    }
}

document.addEventListener('keydown',  (e) => {
    if (e.key == " " && isCursorInside && !invEmpty && animation == false) {
        fire();
        shiftInventory();
        displayInventory();
        setLastItem();

        
    }

    if (invEmpty) {
        ammo.style.background = "rgba(0,0,0,0)";
        lastItem = -1;
    }
    
});



const playArea = document.querySelector('.playArea');
let isCursorInside = false;

// Add event listeners to playArea
if (playArea) {
  playArea.addEventListener('mouseenter', (e) => {
    if (e.target.id === 'level1') {
      isCursorInside = true;
    }
  });

  playArea.addEventListener('mouseleave', (e) => {
    if (e.target.id === 'level1') {
      isCursorInside = false;
    }
  });

  playArea.addEventListener('mousemove', (e) => {
    if (isCursorInside) {
      const rect = playArea.getBoundingClientRect();
      const cursorX = e.clientX - rect.left; // X-coordinate within playArea
      const cursorY = e.clientY - rect.top;  // Y-coordinate within playArea
      console.log(`Cursor position relative to playArea: (${cursorX}, ${cursorY})`);
    }
  });
} else {
  console.warn('playArea element not found. Event listeners were not added.');
}

function setLastItem() {
    for (let i = 0; i < slot.length; i++) {
        if (slot[i] !== 'x') {
            lastItem = i;
        }
    }
}

function setBackground(ele, color) {
    ele.style.background = color;
}

function shiftInventory() {
    //move all inventory items down one slot and fill in the last slot with an x.
    setLastItem();
    for (let i = currentColor; i < slot.length; i++) {
        if (i !== slot.length - 1) {
            slot[i] = slot[i + 1];
        } else if (i == slot.length - 1) {
            slot[i] = 'x';
        }
    }

    if (currentColor == lastItem) {
        currentColor--;
    }

    setLastItem();

    invFull = !slot.includes('x');
    invEmpty = slot.every((item) => item === 'x');

    //reset ammo color
    ammo.style.background = slot[currentColor];
}

function fire() {
    // Initialize projectile position and color
    const projectileRect = projectile.getBoundingClientRect();
    const parentRect = level1.getBoundingClientRect();
    
    projectile.style.top = `${ammo.offsetTop}px`;
    projectile.style.left = `${ammo.offsetLeft}px`;
    projectile.style.background = slot[currentColor];

    let lastTime = performance.now(); // Initialize time

    function moveProjectile(currentTime) {
        animation = true;
        setBackground(ammo, slot[currentColor]);
        const deltaTime = (currentTime - lastTime) / 1000; // Time elapsed in seconds
        lastTime = currentTime;

        const rect = projectile.getBoundingClientRect();
        const currentX = rect.left + rect.width / 2 - parentRect.left;
        const currentY = rect.top + rect.height / 2 - parentRect.top;

        const speed = 500; // Speed in pixels per second

        // Calculate the difference between current and target positions
        const dx = cursorX - currentX;
        const dy = cursorY - currentY;
        const distance = Math.sqrt(dx * dx + dy * dy);
        

        // Stop animation if the projectile is close enough to the target
        if (distance < 1) {
            projectile.style.background = "rgba(0,0,0,0)";
            animation = false;
            return;
        }

        // Normalize the direction and calculate velocity
        const velocityX = (dx / distance) * speed * deltaTime;
        const velocityY = (dy / distance) * speed * deltaTime;

        // Update projectile position
        projectile.style.left = `${parseFloat(projectile.style.left) + velocityX}px`;
        projectile.style.top = `${parseFloat(projectile.style.top) + velocityY}px`;

        // Continue the animation
        requestAnimationFrame(moveProjectile);
    }

    moveProjectile(lastTime); // Start moving the projectile
}

function printInventory() {
    for (let i = 0; i < slot.length; i++) {
        slotNumber = i + 1;
    }
}

window.createInventory = createInventory;
window.fire = fire;
window.shiftInventory = shiftInventory;
window.setLastItem = setLastItem;
window.setBackground = setBackground;
window.swapAmmo = swapAmmo;

