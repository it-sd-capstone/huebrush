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

    //for inventory
    let invEmpty = false;
    let invFull = false;

    const ammo = document.querySelector('#ammo');
    const projectile = document.querySelector('#projectile');
    const box = document.querySelector("#myBox");

    document.addEventListener('keydown',  (e) => {
        
        if (e.key == 'f' || e.key == 'F') {
            console.log("Checking!");

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

            
            const isCloseHorizontally = Math.abs(lakeLeft - boxRight) <= 10 || Math.abs(lakeRight - boxLeft) <= 10;
            const isCloseVertically = Math.abs(lakeTop - boxBottom) <= 10 || Math.abs(lakeBottom - boxTop) <= 10;
            const isContained = boxTop >= lakeTop && boxBottom <= lakeBottom && boxLeft >= lakeLeft && boxRight <= lakeRight;

            if ((isCloseHorizontally && isCloseVertically) || isContained) {
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
        }
    }

    document.addEventListener('keydown',  (e) => {
        if (e.key == " " && isCursorInside && !invEmpty) {
            shiftInventory();
            displayInventory();
            fire();
            setBackground(ammo, currentColor);
            resetProjectile();
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
            if (slot[i] == 'x') {
                lastItem = i - 1;
            }
        }
    }

    function setBackground(ele, color) {
        ele.style.background = color;
    }

    function resetProjectile() {
        projectile.style.top = "0px";
        projectile.style.left = "0px";
        projectile.style.background = "rgba(0,0,0,0)";
    }

    function shiftInventory() {
        //move all inventory items down one slot and fill in the last slot with an x.
        for (let i = currentColor; i < slot.length; i++) {
            if (i !== slot.length - 1) {
                slot[i] = slot[i + 1];
            } else if (i == slot.length - 1) {
                slot[i] = 'x';
            }
        }
        setLastItem();
        console.log("currentColor:"+currentColor);

        invFull = !slot.includes('x');
        invEmpty = slot.every((item) => item === 'x');

        //reset ammo color
        setBackground(ammo, slot[currentColor]);
    }
    

    function fire() {
        // Initialize projectile position and color
        const projectileRect = projectile.getBoundingClientRect();
        const parentRect = level1.getBoundingClientRect();
        
        projectileRect.top = `${ammo.offsetTop}px`;
        projectileRect.left = `${ammo.offsetLeft}px`;
        const ammoBackground = ammo.style.background; // Store the current ammo background color
        setBackground(projectile, ammoBackground);


        let lastTime = performance.now(); // Initialize time

        function moveProjectile(currentTime) {
            const deltaTime = (currentTime - lastTime) / 1000; // Time elapsed in seconds
            lastTime = currentTime;

            const rect = projectile.getBoundingClientRect();
            const currentX = rect.left + rect.width / 2 - parentRect.left;
            const currentY = rect.top + rect.height / 2 - parentRect.top;

            const speed = 200; // Speed in pixels per second

            // Calculate the difference between current and target positions
            const dx = cursorX - currentX;
            const dy = cursorY - currentY;
            const distance = Math.sqrt(dx * dx + dy * dy);

            // Stop animation if the projectile is close enough to the target
            if (distance < 1) {
                console.log("Projectile reached the target!");
                projectile.style.background = "rgba(0,0,0,0)";
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
