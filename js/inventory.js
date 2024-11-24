document.addEventListener('DOMContentLoaded', () => {
    let slot = ["x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x"];
    let container = document.querySelector("#level1");
    
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

    var nearbyLake = Array.from(document.querySelectorAll('.lake'));
    nearbyLake = document.querySelectorAll(".lake");
   

    var redLakes = [];
    var greenLakes = [];
    var blueLakes = [];

    for (let i = 0; i < nearbyLake.length; i++) {
        if (nearbyLake[i].style.background == 'red') {
            redLakes.push(nearbyLake[i]);
        } else if (nearbyLake[i].style.background == 'green') {
            greenLakes.push(nearbyLake[i]);
        } else if (nearbyLake[i].style.background == 'blue') {
            blueLakes.push(nearbyLake[i]);
        }
    }

    document.addEventListener('keydown',  (e) => {
        if (e.key == 'f' || e.key == 'F') {
            console.log("scanning");
            let boxTop = parseFloat(box.style.top);
            let boxLeft = parseFloat(box.style.left);
            if (boxTop <= 130) {
                console.log("checking blue");
                checkProximity(blueLakes);
                return;
            } else if ((boxTop <= 460 && boxLeft <= 60) || (boxTop <= 450 && boxLeft <= 70) || (boxTop <= 440 && boxLeft <= 80) || (boxTop <= 430 && boxLeft <= 90) || (boxTop <= 420 && boxLeft <= 130)) {
                console.log("checking green");
                checkProximity(greenLakes);
                return;
            } else if ((boxTop >= 470 && boxLeft >= 50) || (boxTop >= 450 && boxLeft >= 90) || (boxTop >= 440 && boxLeft >= 120)) {
                console.log("checking red");
                checkProximity(redLakes);
                return;
            }
        }
    });

    //does not work if the box is perfectly in the middle of 2 lake segments
    function checkProximity(object) {
        for (i = 0; i < object.length; i++) {
            console.log(object[i]);
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

            console.log(`LT:${lakeTop} LL:${lakeLeft} LH:${lakeHeight} LW:${lakeWidth} BT:${boxTop} BL:${boxLeft}`);
            console.log(`LR:${lakeRight} LB:${lakeBottom} BR:${boxRight} BB:${boxBottom}`);

            // Check if box and lake are overlapping
            const isOverlapping = 
            lakeLeft < boxRight &&
            lakeRight > boxLeft &&
            lakeTop < boxBottom &&
            lakeBottom > boxTop;
            console.log("isOverlapping:" + isOverlapping);
            
            const isCloseHorizontally = Math.abs(lakeLeft - boxRight) <= 11 || Math.abs(lakeRight - boxLeft) <= 11;
            const isCloseVertically = Math.abs(lakeTop - boxBottom) <= 10 || Math.abs(lakeBottom - boxTop) <= 10;
            const isContained = boxTop >= lakeTop && boxBottom <= lakeBottom && boxLeft >= lakeLeft && boxRight <= lakeRight;
            console.log("isCloseHorizontally:" + isCloseHorizontally);
            console.log("isCloseVertically:" + isCloseVertically);
            console.log("isContained:" + isContained);

            if (isCloseHorizontally || isCloseVertically || isContained || isOverlapping) {
                addToInventory(object[i]);
                break;
            }
            
        }
    }

    function addToInventory(lake) {
        if (!invFull) {
            for (i = 0; i < slot.length; i++) { 
                if (slot[i] == 'x') {
                    slot[i] = lake.style.background;

                    displayItem(i, lake.style.background);
                    setBackground(ammo, slot[i]);
                    currentColor = i;
                    setLastItem();
                    break;
                }
            }
        } else {
            //display <p> saying the inventory is full
        }
        
        invFull = !slot.includes('x');
        invEmpty = slot.every((item) => item === 'x');
        setBackground(ammo, slot[currentColor]);

    }

    // function combineColors(key) {
    //     const keyString = key.getAttribute("color");
    //     const [rK, gK, bK, aK] = keyString.match(/[\d.]+/g).map((value, index) => (index < 3 ? parseInt(value, 10) : parseFloat(value)));
    //     const boxString = box.getAttribute("color");
    //     const [rB, gB, bB, aB] = boxString.match(/[\d.]+/g).map((value, index) => (index < 3 ? parseInt(value, 10) : parseFloat(value)));
    //     var r = rK + rB;
    //     var g = gK + gB;
    //     var b = bK + bB;
    //     var a = aK + aB;
    //     box.style.background = `rgba(${r}, ${g}, ${b}, ${a})`;
    // }

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
        const item = document.getElementById(`${id}`);
        setBackground(item, color);
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

    document.addEventListener('keydown',  (e) => {
        if (e.key.toLowerCase() == 'q') {
            swapAmmo('q');
        } else if (e.key.toLowerCase() == 'e') {
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
            console.log(currentColor);

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

    // Select the target div
    const level1 = document.getElementById('level1');

    // Add event listeners to the div
    let isCursorInside = false;

    level1.addEventListener('mouseenter', () => {
        isCursorInside = true;
    });

    level1.addEventListener('mouseleave', () => {
        isCursorInside = false;
    });

    level1.addEventListener('mousemove', (e) => {
        if (isCursorInside) {
            // Get the cursor coordinates relative to the div
            const rect = level1.getBoundingClientRect();
            cursorX = e.clientX - rect.left; // X-coordinate within the div
            cursorY = e.clientY - rect.top;  // Y-coordinate within the div

        }
    });

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
        console.log("currentColor:"+currentColor);
        console.log("lastItem:"+lastItem);
        if (currentColor == lastItem) {
            currentColor--;
        }

        setLastItem();
        console.log("currentColor:"+currentColor);

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
        console.log(slot[currentColor]);
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
                console.log("Projectile reached the target!");
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
            console.log("Inventory slot " + slotNumber + ": " + slot[i]);
        }
    }
});
