var slot = ["x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x"];
var everyLake = document.querySelectorAll('.lake');
var container = document.querySelector("#container");

for (i = 0; i < everyKey.length; i++) {
    console.log("key" + i + ": " + everyLake[i]);
}

document.addEventListener('keydown',  (e) => {
    console.log('Key pressed:', e.key);
    if (e.key == 'f') {
        checkProximity();
    }
});

function checkProximity() {
    for (i = 0; i < everyLake.length; i++) {
        var keyTop = parseFloat(everyLake[i].style.top);
        var keyLeft = parseFloat(everyLake[i].style.left);
        var boxTop = parseFloat(box.style.top);
        var boxLeft = parseFloat(box.style.left);

        if (Math.abs(keyTop - boxTop) <= 10 && Math.abs(keyLeft - boxLeft) <= 10) {
            addToInventory(everyLake[i]);
        }
    }
}

function addToInventory(lake) {
    //combineColors(key);

    for (i = 0; i < slot.length; i++) {
        if (slot[i] == "x") {
            slot[i] = lake.style.background;

            //spawnNewKey(key);
            //key.remove();
            displayItem(i, lake.style.background);

            //everyLake = document.querySelectorAll('.lake');
            ammo.style.background = `${slot[0]}`;
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
    console.log(item);
    item.style.background = `${color}`;
    console.log(item);
}