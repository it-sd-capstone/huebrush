export function createSwitches(heightModifier, widthModifier) {
    const level3 = document.querySelector(`#level3`);
    
    let switch1 = document.createElement(`div`);
    switch1.classList.add("switch");
    switch1.id = `switch1`;
    switch1.style.position = `absolute`;
    switch1.style.top = `${heightModifier * 20}px`;
    switch1.style.left = `${widthModifier * 970}px`;
    switch1.style.height = `${heightModifier * 15}px`;
    switch1.style.width = `${widthModifier * 15}px`;
    switch1.style.background = `rgba(230, 200, 120, 0.3)`;
    switch1.style.zIndex = 1;

    let switch2 = document.createElement(`div`);
    switch2.classList.add("switch");
    switch2.id = `switch2`;
    switch2.style.position = `absolute`;
    switch2.style.top = `${heightModifier * 250}px`;
    switch2.style.left = `${widthModifier * 860}px`;
    switch2.style.height = `${heightModifier * 15}px`;
    switch2.style.width = `${widthModifier * 15}px`;
    switch2.style.background = `rgba(255, 0, 0, 0.5)`;
    switch2.style.zIndex = 1;


    let switch3 = document.createElement(`div`);
    switch3.classList.add("switch");
    switch3.id = `switch3`;
    switch3.style.position = `absolute`;
    switch3.style.top = `${heightModifier * 60}px`;
    switch3.style.left = `${widthModifier * 500}px`;
    switch3.style.height = `${heightModifier * 15}px`;
    switch3.style.width = `${widthModifier * 10}px`;
    switch3.style.background = `rgba(255, 255, 0, 0.5)`;
    switch3.style.zIndex = 1;


    let switch4 = document.createElement(`div`);
    switch4.classList.add("switch");
    switch4.id = `switch4`;
    switch4.style.position = `absolute`;
    switch4.style.top = `${heightModifier * 270}px`;
    switch4.style.left = `${widthModifier * 205}px`;
    switch4.style.height = `${heightModifier * 15}px`;
    switch4.style.width = `${widthModifier * 15}px`;
    switch4.style.background = `rgba(0, 0, 255, 0.5)`;
    switch4.style.zIndex = 1;



    let switch5 = document.createElement(`div`);
    switch5.classList.add("switch");
    switch5.id = `switch5`;
    switch5.style.position = `absolute`;
    switch5.style.top = `${heightModifier * 115}px`;
    switch5.style.left = `${widthModifier * 80}px`;
    switch5.style.height = `${heightModifier * 15}px`;
    switch5.style.width = `${widthModifier * 15}px`;
    switch5.style.background = `rgba(0, 0, 255, 0.5`;
    switch5.style.zIndex = 1;


    let switch6 = document.createElement(`div`);
    switch6.classList.add("switch");
    switch6.id = `switch6`;
    switch6.style.position = `absolute`;
    switch6.style.top = `${heightModifier * 160}px`;
    switch6.style.left = `${widthModifier * 80}px`;
    switch6.style.height = `${heightModifier * 15}px`;
    switch6.style.width = `${widthModifier * 15}px`;
    switch6.style.background = `rgba(0, 255, 0, 0.5)`;
    switch6.style.zIndex = 1;

    level3.appendChild(switch1);
    level3.appendChild(switch2);
    level3.appendChild(switch3);
    level3.appendChild(switch4);
    level3.appendChild(switch5);
    level3.appendChild(switch6);


}