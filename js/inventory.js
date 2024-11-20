document.addEventListener('DOMContentLoaded', () => {
var slot = ["x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x"];
var container = document.querySelector("#container");

function createInventory() {
  const Inventory = document.createElement('div');
  Inventory.id = 'Inventory';
  Inventory.classList.add("Inventory");
  Inventory.style.position = 'relative';
  Inventory.style.zIndex = 1

  leftCounter = 5

  for (let i = 1; i < 17; i++) {
    let invNumber = "inv" + i;
    invslot = document.createElement('div');
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

document.addEventListener('keydown',  (e) => {
    
    if (e.key == 'f') {
        var nearbyLake = Array.from(document.querySelectorAll('.lake'));
        console.log(nearbyLake);
        nearbyLake = document.querySelectorAll(".lake");
        checkProximity(nearbyLake);
    }
});


function checkProximity(object) {
  let box = document.querySelector("#myBox");
    for (i = 0; i < object.length; i++) {
        var lakeTop = parseFloat(object[i].style.top);
        var lakeLeft = parseFloat(object[i].style.left);
        var boxTop = parseFloat(box.style.top);
        var boxLeft = parseFloat(box.style.left);

        if (Math.abs(lakeTop - boxTop) <= 10 && Math.abs(lakeLeft - boxLeft) <= 10) {
            addToInventory(object[i]);
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
    const item = document.getElementById(`${id}`);
    item.style.background = `${color}`;
}

window.createInventory = createInventory;
});

