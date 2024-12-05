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
        createSwitch('switch1', heightModifier, widthModifier, 20, 970, 'rgba(230, 200, 120, 0.3)'),
        createSwitch('switch2', heightModifier, widthModifier, 250, 860, 'rgba(255, 0, 0, 0.5)'),
        createSwitch('switch3', heightModifier, widthModifier, 60, 500, 'rgba(255, 255, 0, 0.5)'),
        createSwitch('switch4', heightModifier, widthModifier, 270, 205, 'rgba(0, 0, 255, 0.5)'),
        createSwitch('switch5', heightModifier, widthModifier, 115, 80, 'rgba(0, 0, 255, 0.5)'),
        createSwitch('switch6', heightModifier, widthModifier, 160, 80, 'rgba(0, 255, 0, 0.5)')
    ];

    switches.forEach((sw) => level3.appendChild(sw));
}

// Create observer for overlap detection
export function createSwitchObserver() {
    console.log('Initializing Switch Observer');

    const switch1 = document.querySelector('#switch1');
    const switch2 = document.querySelector('#switch2');
    const switch3 = document.querySelector('#switch3');
    const switch4 = document.querySelector('#switch4');
    const switch5 = document.querySelector('#switch5');
    const switch6 = document.querySelector('#switch6');
    const box = document.querySelector('#myBox');

    // Observer callback to handle intersection changes
    const observerCallback = (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                console.log(`${entry.target.id} is intersecting!`);
            } else {
                console.log(`${entry.target.id} is NOT intersecting.`);
            }
        });
    };

    // Observer options
    const observerOptions = {
        root: null, // Use the viewport for intersection
        threshold: 0.1, // Trigger when at least 10% of the element is visible
        rootMargin: '5000px', // Add a margin of 5px around the viewport for early triggers
    };

    // Create the IntersectionObserver
    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe each switch element
    observer.observe(switch1);
    observer.observe(switch2);
    observer.observe(switch3);
    observer.observe(switch4);
    observer.observe(switch5);
    observer.observe(switch6);

    return observer;
}