document.addEventListener('DOMContentLoaded', () => {
let slot = ["x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x"];
let container = document.querySelector("#level1");
//should reflect the number of colors in the array. can probably be discarded to utilize
//the other two counters.
let colorCount = -1;
//should represent the current slot[] index of the last non-x in the array
let lastItem = -1;
//should reflect the current slot[] index being represented by the ammo div
let currentColor = 0;
let cursorX = window.innerWidth / 2;
let cursorY = window.innerHeight / 2;
const box = document.querySelector("#myBox");

document.addEventListener('keydown',  (e) => {
    
    if (e.key == 'f') {
        var nearbyLake = Array.from(document.querySelectorAll('.lake'));
        nearbyLake = document.querySelectorAll(".lake");
        checkProximity(nearbyLake);
    }
});

//does not work if the box is perfectly in the middle of 2 lake segments
function checkProximity(object) {
    for (i = 0; i < object.length; i++) {
        const lakeTop = parseFloat(object[i].style.top);
        const lakeLeft = parseFloat(object[i].style.left);
        const lakeHeight = parseFloat(object[i].style.height);
        const lakeWidth = parseFloat(object[i].style.width);
        const boxTop = parseFloat(box.style.top);
        const boxLeft = parseFloat(box.style.left);
        const boxHeight = parseFloat(box.style.height);
        const boxWidth = parseFloat(box.style.width);

        const lakeRight = lakeLeft + lakeWidth;
        const lakeBottom = lakeTop + lakeHeight;
        const boxRight = boxLeft + boxWidth;
        const boxBottom = boxTop + boxHeight;

        
        const isCloseHorizontally = Math.abs(lakeLeft - boxRight) <= 11 || Math.abs(lakeRight - boxLeft) <= 11;
        const isCloseVertically = Math.abs(lakeTop - boxBottom) <= 11 || Math.abs(lakeBottom - boxTop) <= 11;
        const isContained = boxTop >= lakeTop && boxBottom <= lakeBottom && boxLeft >= lakeLeft && boxRight <= lakeRight;

        if ((isCloseHorizontally && isCloseVertically) || isContained) {
            addToInventory(object[i]);
            break;
        }
        
    }
}

function addToInventory(lake) {

    for (i = 0; i < slot.length; i++) {
        if (slot[i] == "x") {
            slot[i] = lake.style.background;

            displayItem(i, lake.style.background);

            ammo.style.background = `${slot[i]}`;
            colorCount++;
            currentColor = i;
            lastItem = i;
            break;
        }
    }
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

// function spawnNewKey(key) {
//     const newKey = document.createElement("div");
    
//     newKey.id = "key";
//     newKey.style.background = key.style.background;
//     newKey.setAttribute("color", key.style.background);
//     newKey.setAttribute("count", `${keyCount}`);
//     newKey.style.left = `${Math.floor(Math.random() * 361)}px`;
//     newKey.style.top = `${Math.floor(Math.random() * 361)}px`;

//     document.getElementById("container").appendChild(newKey);
//     keyCount++;
// }

function displayItem(slotIndex, color) {
    var idNum = slotIndex + 1;
    var id = "inv" + idNum;
    console.log(id);
    const item = document.getElementById(`${id}`);
    item.style.background = `${color}`;
}

document.addEventListener('keydown',  (e) => {
    if (e.key == 'q') {
        swapAmmo('q');
    } else if (e.key == 'e') {
        swapAmmo('e');
    }
});

function swapAmmo(direction) {
    for (i = 0; i < slot.length; i++) {
        if (slot[i] != 'x') {
            lastItem = i;
        }
    }

    if (direction == 'q' && currentColor != 0) {
        currentColor--;
        ammo.style.background = `${slot[currentColor]}`;
        console.log(currentColor);
    } else if (direction == 'q' && currentColor == 0) {
        currentColor = lastItem;
        ammo.style.background = `${slot[lastItem]}`;
        console.log(lastItem);
    } else if (direction == 'e' && currentColor != lastItem) {
        currentColor++;
        ammo.style.background = `${slot[currentColor]}`;
        console.log(currentColor);
    } else if (direction == 'e' && currentColor == lastItem) {
        currentColor = 0;
        ammo.style.background = `${slot[0]}`;
    }
}

document.addEventListener('keydown',  (e) => {
    if (e.key == " ") {
        fire();
    }
});

// Select the target div
const level1 = document.getElementById('level1');

// Add event listeners to the div
let isCursorInside = false;

level1.addEventListener('mouseenter', () => {
    isCursorInside = true;
    console.log('Cursor entered the div');
});

level1.addEventListener('mouseleave', () => {
    isCursorInside = false;
    console.log('Cursor left the div');
});

level1.addEventListener('mousemove', (event) => {
    if (isCursorInside) {
        // Get the cursor coordinates relative to the div
        const rect = level1.getBoundingClientRect();
        const cursorX = event.clientX - rect.left; // X-coordinate within the div
        const cursorY = event.clientY - rect.top;  // Y-coordinate within the div

    }
});

function fire() {
    projectile.style.top = ammo.style.top;
    projectile.style.left = ammo.style.left;
    projectile.style.background = ammo.style.background;

    //move all inventory items down one slot and fill in the last slot with an x.
    for (let i = currentColor; i < slot.length; i++) {
        
        let id = i + 1
        let inv = 'inv' + id;
        let invItem = document.getElementById(`${inv}`);
        console.log(inv);

        if (i == slot.length - 1) {
            slot[i] = 'x';
        } else {
            slot[i] = slot[i + 1];
            invItem.style.background = slot[i];
        }
    }
    
    //reset ammo color
    ammo.style.background == slot[currentColor];

    const rect = projectile.getBoundingClientRect();
    const currentX = rect.left + rect.width / 2;
    const currentY = rect.top + rect.height / 2;
    const speed = 0.9;

    // Calculate the difference between current and target positions
    console.log(`Cursor coordinates within div: X=${cursorX}, Y=${cursorY}`);
    const dx = cursorX - currentX;
    const dy = cursorY - currentY;

    // Move the projectile a fraction of the distance to the cursor
    projectile.style.left = `${currentX + dx * speed}px`;
    projectile.style.top = `${currentY + dy * speed}px`;

    // Continue the animation
    requestAnimationFrame(fire);

}

});