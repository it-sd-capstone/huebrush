document.addEventListener('DOMContentLoaded', () => {
let slot = ["x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x"];
let container = document.querySelector("#container");
let colorCount = 0;
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
    if (direction == 'q') {
        ammo.style.background = `${slot[colorCount - 2]}`;
    } else if (direction == 'e') {

    }
}

});