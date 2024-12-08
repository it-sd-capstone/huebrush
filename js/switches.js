function createSwitch(id, heightModifier, widthModifier, topFactor, leftFactor, background) {
    const switchDiv = document.createElement('div');
    switchDiv.classList.add('switch');
    switchDiv.id = id;
    switchDiv.style.position = 'absolute';
    switchDiv.style.top = `${heightModifier * topFactor}px`;
    switchDiv.style.left = `${widthModifier * leftFactor}px`;
    switchDiv.style.height = `${heightModifier * 15}px`;
    switchDiv.style.width = `${widthModifier * 15}px`;
    switchDiv.style.background = background;
    switchDiv.style.zIndex = 1;
    return switchDiv;
}

// Create switches
export function createSwitches(heightModifier, widthModifier) {
    const level3 = document.querySelector('#level3');

    const switches = [
        createSwitch('switch1', heightModifier, widthModifier, 20, 485, 'rgba(230, 200, 120, 0.2)'),
        createSwitch('switch2', heightModifier, widthModifier, 250, 430, 'rgba(255, 0, 0, 0.2)'),
        createSwitch('switch3', heightModifier, widthModifier, 60, 250, 'rgba(255, 255, 0, 0.2)'),
        createSwitch('switch4', heightModifier, widthModifier, 270, 100, 'rgba(0, 0, 255, 0.2)'),
        createSwitch('switch5', heightModifier, widthModifier, 115, 40, 'rgba(0, 128, 0, 0.2)'),
        createSwitch('switch6', heightModifier, widthModifier, 160, 40, 'rgba(0, 0, 255, 0.2)')
    ];

    switches.forEach((sw) => level3.appendChild(sw));
}

export function monitorSwitches() {
    const box = document.querySelector('#myBox');
    const switches = document.querySelectorAll('.switch');
    

    for (let i = 0; i < switches.length; i++) {
        let id = i+1;
        let string = 'switch';
        let switchId = string+id;
        const switchX = document.querySelector(`#${switchId}`)
        if (isOverlapping(box, switchX ) && (colorMatches(box, switchX) || id == 1)) {
            switches[i].style.background = updateAlpha(switches[i].style.background, 1);
            console.log(i);
            switch (i) {
                case 0:
                    break;
                case 1:
                    createRedLakes3(1, 1);
                    break;
                case 2:
                    createYellowLakes3(1, 1);
                    break;
                case 3:
                    createBlueLakes3(1, 1);
                    break;
                case 4:
                    break;
                case 5:
                    break;
                deafault:
                    break;
            }
        }
    }

}

function isOverlapping(box, switchX) {
    const boxRect = box.getBoundingClientRect();
    const switchRect = switchX.getBoundingClientRect();

    return !(
        boxRect.right < switchRect.left ||
        boxRect.left > switchRect.right ||
        boxRect.bottom < switchRect.top ||
        boxRect.top > switchRect.bottom
    );
}

function updateAlpha(color, newAlpha) {
    // Match the rgba() format
    const rgbaRegex = /^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d*\.?\d+))?\)$/;
    const match = color.match(rgbaRegex);

    if (match) {
        const r = match[1];
        const g = match[2];
        const b = match[3];
        // Default alpha to 1 if not specified in the color string
        const a = match[4] !== undefined ? match[4] : 1;

        // Return the updated rgba() string with the new alpha
        return `rgba(${r}, ${g}, ${b}, ${newAlpha})`;
    } else {
        throw new Error('Invalid rgba() color format');
    }
}

function colorMatches(box, switchX) {

    let switchColor = switchX.style.background;
    let boxColor = box.style.background;
    const rgbaRegex = /^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d*\.?\d+))?\)$/;
    const switchMatch = switchColor.match(rgbaRegex);
    const boxMatch = boxColor.match(rgbaRegex);

    let sR = switchMatch[1];
    let sG = switchMatch[2];
    let sB = switchMatch[3];

    let bR = boxMatch[1];
    let bG = boxMatch[2];
    let bB = boxMatch[3];

    if (sR == bR && sG == bG && sB == bB) return true;
    return false;
}

function createRedLakes3(heightModifier, widthModifier) {
    console.log("creating lake");
    const level3 = document.querySelector('#level3');
    const lake1 = document.createElement('div');
    const lake2 = document.createElement('div'); 
    const lake3 = document.createElement('div'); 
    const lake4 = document.createElement('div'); 
    const lake5 = document.createElement('div'); 
    const lake6 = document.createElement('div'); 

    lake1.id = 'lakeRed1';
    lake1.classList.add('lake');
    lake1.style.background = 'red';
    lake1.style.zIndex = 1;
    lake1.style.position = 'absolute';
    lake1.style.top = (heightModifier * 210)+'px';
    lake1.style.left = (widthModifier * 820)+'px';
    lake1.style.height = (heightModifier * 50)+'px';
    lake1.style.width = (widthModifier * 120)+'px';

    lake2.id = 'lakeRed2';
    lake2.classList.add('lake');
    lake2.style.background = 'red';
    lake2.style.zIndex = 1;
    lake2.style.position = 'absolute';
    lake2.style.top = (heightModifier * 200)+'px';
    lake2.style.left = (widthModifier * 840)+'px';
    lake2.style.height = (heightModifier * 10)+'px';
    lake2.style.width = (widthModifier * 80)+'px';

    lake3.id = 'lakeRed3';
    lake3.classList.add('lake');
    lake3.style.background = 'red';
    lake3.style.zIndex = 1;
    lake3.style.position = 'absolute';
    lake3.style.top = (heightModifier * 220)+'px';
    lake3.style.left = (widthModifier * 810)+'px';
    lake3.style.height = (heightModifier * 30)+'px';
    lake3.style.width = (widthModifier * 20)+'px';

    lake4.id = 'lakeRed4';
    lake4.classList.add('lake');
    lake4.style.background = 'red';
    lake4.style.zIndex = 1;
    lake4.style.position = 'absolute';
    lake4.style.top = (heightModifier * 260)+'px';
    lake4.style.left = (widthModifier * 840)+'px';
    lake4.style.height = (heightModifier * 10)+'px';
    lake4.style.width = (widthModifier * 80)+'px';

    lake5.id = 'lakeRed5';
    lake5.classList.add('lake');
    lake5.style.background = 'red';
    lake5.style.zIndex = 1;
    lake5.style.position = 'absolute';
    lake5.style.top = (heightModifier * 270)+'px';
    lake5.style.left = (widthModifier * 860)+'px';
    lake5.style.height = (heightModifier * 10)+'px';
    lake5.style.width = (widthModifier * 40)+'px';

    lake6.id = 'lakeRed6';
    lake6.classList.add('lake');
    lake6.style.background = 'red';
    lake6.style.zIndex = 1;
    lake6.style.position = 'absolute';
    lake6.style.top = (heightModifier * 230)+'px';
    lake6.style.left = (widthModifier * 940)+'px';
    lake6.style.height = (heightModifier * 20)+'px';
    lake6.style.width = (widthModifier * 20)+'px';
    
    level3.appendChild(lake1);
    level3.appendChild(lake2);
    level3.appendChild(lake3);
    level3.appendChild(lake4);
    level3.appendChild(lake5);
    level3.appendChild(lake6);

}

function createYellowLakes3(heightModifier, widthModifier) {
    console.log("creating lake");
    const level3 = document.querySelector('#level3');
    const lake1 = document.createElement('div');
    const lake2 = document.createElement('div'); 
    const lake3 = document.createElement('div'); 
    const lake4 = document.createElement('div'); 
    const lake5 = document.createElement('div'); 
    const lake6 = document.createElement('div'); 

    lake1.id = 'lakeYellow1';
    lake1.classList.add('lake');
    lake1.style.background = 'yellow';
    lake1.style.zIndex = 1;
    lake1.style.position = 'absolute';
    lake1.style.top = (heightModifier * 50)+'px';
    lake1.style.left = (widthModifier * 400)+'px';
    lake1.style.height = (heightModifier * 50)+'px';
    lake1.style.width = (widthModifier * 120)+'px';

    lake2.id = 'lakeYellow2';
    lake2.classList.add('lake');
    lake2.style.background = 'yellow';
    lake2.style.zIndex = 1;
    lake2.style.position = 'absolute';
    lake2.style.top = (heightModifier * 40)+'px';
    lake2.style.left = (widthModifier * 420)+'px';
    lake2.style.height = (heightModifier * 10)+'px';
    lake2.style.width = (widthModifier * 80)+'px';

    lake3.id = 'lakeYellow3';
    lake3.classList.add('lake');
    lake3.style.background = 'yellow';
    lake3.style.zIndex = 1;
    lake3.style.position = 'absolute';
    lake3.style.top = (heightModifier * 60)+'px';
    lake3.style.left = (widthModifier * 380)+'px';
    lake3.style.height = (heightModifier * 30)+'px';
    lake3.style.width = (widthModifier * 20)+'px';

    lake4.id = 'lakeYellow4';
    lake4.classList.add('lake');
    lake4.style.background = 'yellow';
    lake4.style.zIndex = 1;
    lake4.style.position = 'absolute';
    lake4.style.top = (heightModifier * 100)+'px';
    lake4.style.left = (widthModifier * 420)+'px';
    lake4.style.height = (heightModifier * 10)+'px';
    lake4.style.width = (widthModifier * 80)+'px';

    lake5.id = 'lakeYellow5';
    lake5.classList.add('lake');
    lake5.style.background = 'yellow';
    lake5.style.zIndex = 1;
    lake5.style.position = 'absolute';
    lake5.style.top = (heightModifier * 110)+'px';
    lake5.style.left = (widthModifier * 440)+'px';
    lake5.style.height = (heightModifier * 10)+'px';
    lake5.style.width = (widthModifier * 40)+'px';

    lake6.id = 'lakeYellow6';
    lake6.classList.add('lake');
    lake6.style.background = 'yellow';
    lake6.style.zIndex = 1;
    lake6.style.position = 'absolute';
    lake6.style.top = (heightModifier * 60)+'px';
    lake6.style.left = (widthModifier * 520)+'px';
    lake6.style.height = (heightModifier * 30)+'px';
    lake6.style.width = (widthModifier * 20)+'px';

    level3.appendChild(lake1);
    level3.appendChild(lake2);
    level3.appendChild(lake3);
    level3.appendChild(lake4);
    level3.appendChild(lake5);
    level3.appendChild(lake6);
}

function createBlueLakes3(heightModifier, widthModifier) {
    console.log("creating lake");
    const level3 = document.querySelector('#level3');
    const lake1 = document.createElement('div');
    const lake2 = document.createElement('div'); 
    const lake3 = document.createElement('div'); 
    const lake4 = document.createElement('div'); 
    const lake5 = document.createElement('div'); 
    const lake6 = document.createElement('div'); 

    lake1.id = 'lakeBlue1';
    lake1.classList.add('lake');
    lake1.style.background = 'blue';
    lake1.style.zIndex = 1;
    lake1.style.position = 'absolute';
    lake1.style.top = (heightModifier * 230)+'px';
    lake1.style.left = (widthModifier * 160)+'px';
    lake1.style.height = (heightModifier * 50)+'px';
    lake1.style.width = (widthModifier * 120)+'px';

    lake2.id = 'lakeBlue2';
    lake2.classList.add('lake');
    lake2.style.background = 'blue';
    lake2.style.zIndex = 1;
    lake2.style.position = 'absolute';
    lake2.style.top = (heightModifier * 220)+'px';
    lake2.style.left = (widthModifier * 180)+'px';
    lake2.style.height = (heightModifier * 10)+'px';
    lake2.style.width = (widthModifier * 80)+'px';

    lake3.id = 'lakeBlue3';
    lake3.classList.add('lake');
    lake3.style.background = 'blue';
    lake3.style.zIndex = 1;
    lake3.style.position = 'absolute';
    lake3.style.top = (heightModifier * 250)+'px';
    lake3.style.left = (widthModifier * 140)+'px';
    lake3.style.height = (heightModifier * 20)+'px';
    lake3.style.width = (widthModifier * 20)+'px';

    lake4.id = 'lakeBlue4';
    lake4.classList.add('lake');
    lake4.style.background = 'blue';
    lake4.style.zIndex = 1;
    lake4.style.position = 'absolute';
    lake4.style.top = (heightModifier * 280)+'px';
    lake4.style.left = (widthModifier * 180)+'px';
    lake4.style.height = (heightModifier * 10)+'px';
    lake4.style.width = (widthModifier * 80)+'px';

    lake5.id = 'lakeBlue5';
    lake5.classList.add('lake');
    lake5.style.background = 'blue';
    lake5.style.zIndex = 1;
    lake5.style.position = 'absolute';
    lake5.style.top = (heightModifier * 240)+'px';
    lake5.style.left = (widthModifier * 280)+'px';
    lake5.style.height = (heightModifier * 30)+'px';
    lake5.style.width = (widthModifier * 20)+'px';

    level3.appendChild(lake1);
    level3.appendChild(lake2);
    level3.appendChild(lake3);
    level3.appendChild(lake4);
    level3.appendChild(lake5);


}