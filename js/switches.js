export function createSwitches() {
    const playArea = document.querySelector('#playArea');
    let switch1 = document.createElement('div');
    switch1.classList.add("switch");
    switch1.id = 'switch1';
    switch1.style.position = 'absolute';
    switch1.style.top = '320px';
    switch1.style.left = '970px';
    switch1.style.height = '15px';
    switch1.style.width = '15px';
    switch1.style.background = 'rgba(230, 200, 120, 0.3)';
    switch1.style.zIndex = 1;

    let switch2 = document.createElement('div');
    switch2.classList.add("switch");
    switch2.id = 'switch2';
    switch2.style.position = 'absolute';
    switch2.style.top = '550px';
    switch2.style.left = '860px';
    switch2.style.height = '15px';
    switch2.style.width = '15px';
    switch2.style.background = 'rgba(255, 0, 0, 0.5)';
    switch2.style.zIndex = 1;


    let switch3 = document.createElement('div');
    switch3.classList.add("switch");
    switch3.id = 'switch3';
    switch3.style.position = 'absolute';
    switch3.style.top = '360px';
    switch3.style.left = '500px';
    switch3.style.height = '15px';
    switch3.style.width = '15px';
    switch3.style.background = 'rgba(255, 255, 0, 0.5)';
    switch3.style.zIndex = 1;


    let switch4 = document.createElement('div');
    switch4.classList.add("switch");
    switch4.id = 'switch4';
    switch4.style.position = 'absolute';
    switch4.style.top = '570px';
    switch4.style.left = '205px';
    switch4.style.height = '15px';
    switch4.style.width = '15px';
    switch4.style.background = 'rgba(0, 0, 255, 0.5)';
    switch4.style.zIndex = 1;



    let switch5 = document.createElement('div');
    switch5.classList.add("switch");
    switch5.id = 'switch5';
    switch5.style.position = 'absolute';
    switch5.style.top = '415px';
    switch5.style.left = '80px';
    switch5.style.height = '15px';
    switch5.style.width = '15px';
    switch5.style.background = 'rgba(0, 0, 255, 0.5';
    switch5.style.zIndex = 1;


    let switch6 = document.createElement('div');
    switch6.classList.add("switch");
    switch6.id = 'switch6';
    switch6.style.position = 'absolute';
    switch6.style.top = '460px';
    switch6.style.left = '80px';
    switch6.style.height = '15px';
    switch6.style.width = '15px';
    switch6.style.background = 'rgba(0, 255, 0, 0.5)';
    switch6.style.zIndex = 1;

    playArea.appendChild(switch1);
    playArea.appendChild(switch2);
    playArea.appendChild(switch3);
    playArea.appendChild(switch4);
    playArea.appendChild(switch5);
    playArea.appendChild(switch6);


}