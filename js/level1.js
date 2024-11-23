import { spawnEnemy, updateHealth } from "./enemySpawn.js";

function createLevel1() {
  const level1 = document.createElement('div');
  level1.id = 'level1';
  level1.classList.add("box");
  level1.style.position = 'relative';
  level1.style.background = 'white';
  level1.style.width = '1000px';
  level1.style.height = '600px';
  level1.style.padding = '0';
  level1.style.border = '0';
  level1.style.zIndex = '2';
  level1.style.margin = 0;

  const lakeBlue = document.createElement('div');
  lakeBlue.id = 'lakeBlue';
  lakeBlue.classList.add("lake");
    const lakeBlue1 = document.createElement('div');
    lakeBlue1.id = 'lakeBlue1';
    lakeBlue1.classList.add("lakeBlue");
    lakeBlue1.style.position = 'absolute';
    lakeBlue1.style.background = 'blue';
    lakeBlue1.style.width = '120px';
    lakeBlue1.style.height = '80px';
    lakeBlue1.style.top = '0px';
    lakeBlue1.style.left = '0px';
    lakeBlue1.style.zIndex = '2';

    const lakeBlue2 = document.createElement('div');
    lakeBlue2.id = 'lakeBlue2';
    lakeBlue2.classList.add("lakeBlue");
    lakeBlue2.style.position = 'absolute';
    lakeBlue2.style.background = 'blue';
    lakeBlue2.style.width = '40px';
    lakeBlue2.style.height = '40px';
    lakeBlue2.style.top = '0px';
    lakeBlue2.style.left = '120px';
    lakeBlue2.style.zIndex = '2';

    const lakeBlue3 = document.createElement('div');
    lakeBlue3.id = 'lakeBlue3';
    lakeBlue3.classList.add("lakeBlue");
    lakeBlue3.style.position = 'absolute';
    lakeBlue3.style.background = 'blue';
    lakeBlue3.style.width = '20px';
    lakeBlue3.style.height = '20px';
    lakeBlue3.style.top = '40px';
    lakeBlue3.style.left = '120px';
    lakeBlue3.style.zIndex = '2';


    const lakeBlue4 = document.createElement('div');
    lakeBlue4.id = 'lakeBlue4';
    lakeBlue4.classList.add("lakeBlue");
    lakeBlue4.style.position = 'absolute';
    lakeBlue4.style.background = 'blue';
    lakeBlue4.style.width = '40px';
    lakeBlue4.style.height = '20px';
    lakeBlue4.style.top = '80px';
    lakeBlue4.style.left = '0px';
    lakeBlue4.style.zIndex = '2';

    const lakeBlue5 = document.createElement('div');
    lakeBlue5.id = 'lakeBlue5';
    lakeBlue5.classList.add("lakeBlue");
    lakeBlue5.style.position = 'absolute';
    lakeBlue5.style.background = 'blue';
    lakeBlue5.style.width = '20px';
    lakeBlue5.style.height = '20px';
    lakeBlue5.style.top = '100px';
    lakeBlue5.style.left = '0px';
    lakeBlue5.style.zIndex = '2';

  lakeBlue.appendChild(lakeBlue1);
  lakeBlue.appendChild(lakeBlue2);
  lakeBlue.appendChild(lakeBlue3);
  lakeBlue.appendChild(lakeBlue4);
  lakeBlue.appendChild(lakeBlue5);


  const lakeRed = document.createElement('div');
  lakeRed.id = 'lakeRed';
  lakeRed.classList.add("lake");
    const lakeRed1 = document.createElement('div');
    lakeRed1.id = 'lakeRed1';
    lakeRed1.classList.add("lakeRed");
    lakeRed1.style.position = 'absolute';
    lakeRed1.style.background = 'red';
    lakeRed1.style.width = '160px';
    lakeRed1.style.height = '80px';
    lakeRed1.style.top = '520px';
    lakeRed1.style.left = '60px';
    lakeRed1.style.zIndex = '2';

    const lakeRed2 = document.createElement('div');
    lakeRed2.id = 'lakeRed2';
    lakeRed2.classList.add("lakeRed");
    lakeRed2.style.position = 'absolute';
    lakeRed2.style.background = 'red';
    lakeRed2.style.width = '60px';
    lakeRed2.style.height = '20px';
    lakeRed2.style.top = '580px';
    lakeRed2.style.left = '0px';
    lakeRed2.style.zIndex = '2';

    const lakeRed3 = document.createElement('div');
    lakeRed3.id = 'lakeRed3';
    lakeRed3.classList.add("lakeRed");
    lakeRed3.style.position = 'absolute';
    lakeRed3.style.background = 'red';
    lakeRed3.style.width = '20px';
    lakeRed3.style.height = '20px';
    lakeRed3.style.top = '560px';
    lakeRed3.style.left = '40px';
    lakeRed3.style.zIndex = '2';

    const lakeRed4 = document.createElement('div');
    lakeRed4.id = 'lakeRed4';
    lakeRed4.classList.add("lakeRed");
    lakeRed4.style.position = 'absolute';
    lakeRed4.style.background = 'red';
    lakeRed4.style.width = '20px';
    lakeRed4.style.height = '20px';
    lakeRed4.style.top = '500px';
    lakeRed4.style.left = '80px';
    lakeRed4.style.zIndex = '2';

    const lakeRed5 = document.createElement('div');
    lakeRed5.id = 'lakeRed5';
    lakeRed5.classList.add("lakeRed");
    lakeRed5.style.position = 'absolute';
    lakeRed5.style.background = 'red';
    lakeRed5.style.width = '100px';
    lakeRed5.style.height = '40px';
    lakeRed5.style.top = '480px';
    lakeRed5.style.left = '100px';
    lakeRed5.style.zIndex = '2';

    const lakeRed6 = document.createElement('div');
    lakeRed6.id = 'lakeRed6';
    lakeRed6.classList.add("lakeRed");
    lakeRed6.style.position = 'absolute';
    lakeRed6.style.background = 'red';
    lakeRed6.style.width = '40px';
    lakeRed6.style.height = '20px';
    lakeRed6.style.top = '460px';
    lakeRed6.style.left = '140px';
    lakeRed6.style.zIndex = '2';

    const lakeRed7 = document.createElement('div');
    lakeRed7.id = 'lakeRed7';
    lakeRed7.classList.add("lakeRed");
    lakeRed7.style.position = 'absolute';
    lakeRed7.style.background = 'red';
    lakeRed7.style.width = '60px';
    lakeRed7.style.height = '40px';
    lakeRed7.style.top = '560px';
    lakeRed7.style.left = '220px';
    lakeRed7.style.zIndex = '2';


  lakeRed.appendChild(lakeRed1);
  lakeRed.appendChild(lakeRed2);
  lakeRed.appendChild(lakeRed3);
  lakeRed.appendChild(lakeRed4);
  lakeRed.appendChild(lakeRed5);
  lakeRed.appendChild(lakeRed6);
  lakeRed.appendChild(lakeRed7);

  const lakeGreen = document.createElement('div');
  lakeGreen.id = 'lakeGreen';
  lakeGreen.classList.add("lake");

    const lakeGreen1 = document.createElement('div');
    lakeGreen1.id = 'lakeGreen1';
    lakeGreen1.classList.add("lake");
    lakeGreen1.style.position = 'absolute';
    lakeGreen1.style.background = 'green';
    lakeGreen1.style.width = '100px';
    lakeGreen1.style.height = '140px';
    lakeGreen1.style.top = '280px';
    lakeGreen1.style.left = '0px';
    lakeGreen1.style.zIndex = '2';

    const lakeGreen2 = document.createElement('div');
    lakeGreen2.id = 'lakeGreen2';
    lakeGreen2.classList.add("lake");
    lakeGreen2.style.position = 'absolute';
    lakeGreen2.style.background = 'green';
    lakeGreen2.style.width = '80px';
    lakeGreen2.style.height = '20px';
    lakeGreen2.style.top = '260px';
    lakeGreen2.style.left = '20px';
    lakeGreen2.style.zIndex = '2';

    const lakeGreen3 = document.createElement('div');
    lakeGreen3.id = 'lakeGreen3';
    lakeGreen3.classList.add("lake");
    lakeGreen3.style.position = 'absolute';
    lakeGreen3.style.background = 'green';
    lakeGreen3.style.width = '40px';
    lakeGreen3.style.height = '20px';
    lakeGreen3.style.top = '240px';
    lakeGreen3.style.left = '40px';
    lakeGreen3.style.zIndex = '2';

    const lakeGreen4 = document.createElement('div');
    lakeGreen4.id = 'lakeGreen4';
    lakeGreen4.classList.add("lake");
    lakeGreen4.style.position = 'absolute';
    lakeGreen4.style.background = 'green';
    lakeGreen4.style.width = '20px';
    lakeGreen4.style.height = '80px';
    lakeGreen4.style.top = '320px';
    lakeGreen4.style.left = '100px';
    lakeGreen4.style.zIndex = '2';

    const lakeGreen5 = document.createElement('div');
    lakeGreen5.id = 'lakeGreen5';
    lakeGreen5.classList.add("lake");
    lakeGreen5.style.position = 'absolute';
    lakeGreen5.style.background = 'green';
    lakeGreen5.style.width = '40px';
    lakeGreen5.style.height = '20px';
    lakeGreen5.style.top = '420px';
    lakeGreen5.style.left = '40px';
    lakeGreen5.style.zIndex = '2';

    const lakeGreen6 = document.createElement('div');
    lakeGreen6.id = 'lakeGreen6';
    lakeGreen6.classList.add("lake");
    lakeGreen6.style.position = 'absolute';
    lakeGreen6.style.background = 'green';
    lakeGreen6.style.width = '40px';
    lakeGreen6.style.height = '40px';
    lakeGreen6.style.top = '420px';
    lakeGreen6.style.left = '0px';
    lakeGreen6.style.zIndex = '2';


  lakeGreen.appendChild(lakeGreen1);
  lakeGreen.appendChild(lakeGreen2);
  lakeGreen.appendChild(lakeGreen3);
  lakeGreen.appendChild(lakeGreen4);
  lakeGreen.appendChild(lakeGreen5);
  lakeGreen.appendChild(lakeGreen6);

  const wallMountainsB = document.createElement('div');
  wallMountainsB.id = 'wallMountainsB';
  wallMountainsB.classList.add("wallMountainsB");

    const wallMountainsB1 = document.createElement('div');
    wallMountainsB1.id = 'wallMountainsB1';
    wallMountainsB1.classList.add("wallSolid");
    wallMountainsB1.style.position = 'absolute';
    wallMountainsB1.style.background = 'brown';
    wallMountainsB1.style.width = '20px';
    wallMountainsB1.style.height = '20px';
    wallMountainsB1.style.top = '540px';
    wallMountainsB1.style.left = '220px';
    wallMountainsB1.style.zIndex = '2';

    const wallMountainsB2 = document.createElement('div');
    wallMountainsB2.id = 'wallMountainsB2';
    wallMountainsB2.classList.add("wallSolid");
    wallMountainsB2.style.position = 'absolute';
    wallMountainsB2.style.background = 'brown';
    wallMountainsB2.style.width = '20px';
    wallMountainsB2.style.height = '60px';
    wallMountainsB2.style.top = '500px';
    wallMountainsB2.style.left = '240px';
    wallMountainsB2.style.zIndex = '2';

    const wallMountainsB3 = document.createElement('div');
    wallMountainsB3.id = 'wallMountainsB3';
    wallMountainsB3.classList.add("wallSolid");
    wallMountainsB3.style.position = 'absolute';
    wallMountainsB3.style.background = 'brown';
    wallMountainsB3.style.width = '60px';
    wallMountainsB3.style.height = '80px';
    wallMountainsB3.style.top = '480px';
    wallMountainsB3.style.left = '260px';
    wallMountainsB3.style.zIndex = '2';

    const wallMountainsB4 = document.createElement('div');
    wallMountainsB4.id = 'wallMountainsB4';
    wallMountainsB4.classList.add("wallSolid");
    wallMountainsB4.style.position = 'absolute';
    wallMountainsB4.style.background = 'brown';
    wallMountainsB4.style.width = '40px';
    wallMountainsB4.style.height = '20px';
    wallMountainsB4.style.top = '460px';
    wallMountainsB4.style.left = '280px';
    wallMountainsB4.style.zIndex = '2';

    const wallMountainsB5 = document.createElement('div');
    wallMountainsB5.id = 'wallMountainsB5';
    wallMountainsB5.classList.add("wallSolid");
    wallMountainsB5.style.position = 'absolute';
    wallMountainsB5.style.background = 'brown';
    wallMountainsB5.style.width = '40px';
    wallMountainsB5.style.height = '20px';
    wallMountainsB5.style.top = '540px';
    wallMountainsB5.style.left = '320px';
    wallMountainsB5.style.zIndex = '2';

    const wallMountainsB6 = document.createElement('div');
    wallMountainsB6.id = 'wallMountainsB6';
    wallMountainsB6.classList.add("wallSolid");
    wallMountainsB6.style.position = 'absolute';
    wallMountainsB6.style.background = 'brown';
    wallMountainsB6.style.width = '180px';
    wallMountainsB6.style.height = '40px';
    wallMountainsB6.style.top = '560px';
    wallMountainsB6.style.left = '280px';
    wallMountainsB6.style.zIndex = '2';

    const wallMountainsB7 = document.createElement('div');
    wallMountainsB7.id = 'wallMountainsB7';
    wallMountainsB7.classList.add("wallSolid");
    wallMountainsB7.style.position = 'absolute';
    wallMountainsB7.style.background = 'brown';
    wallMountainsB7.style.width = '40px';
    wallMountainsB7.style.height = '20px';
    wallMountainsB7.style.top = '540px';
    wallMountainsB7.style.left = '420px';
    wallMountainsB7.style.zIndex = '2';

    const wallMountainsB8 = document.createElement('div');
    wallMountainsB8.id = 'wallMountainsB8';
    wallMountainsB8.classList.add("wallSolid");
    wallMountainsB8.style.position = 'absolute';
    wallMountainsB8.style.background = 'brown';
    wallMountainsB8.style.width = '340px';
    wallMountainsB8.style.height = '120px';
    wallMountainsB8.style.top = '480px';
    wallMountainsB8.style.left = '460px';
    wallMountainsB8.style.zIndex = '2';

    const wallMountainsB9 = document.createElement('div');
    wallMountainsB9.id = 'wallMountainsB9';
    wallMountainsB9.classList.add("wallSolid");
    wallMountainsB9.style.position = 'absolute';
    wallMountainsB9.style.background = 'brown';
    wallMountainsB9.style.width = '100px';
    wallMountainsB9.style.height = '60px';
    wallMountainsB9.style.top = '420px';
    wallMountainsB9.style.left = '460px';
    wallMountainsB9.style.zIndex = '2';

    const wallMountainsB10 = document.createElement('div');
    wallMountainsB10.id = 'wallMountainsB10';
    wallMountainsB10.classList.add("wallSolid");
    wallMountainsB10.style.position = 'absolute';
    wallMountainsB10.style.background = 'brown';
    wallMountainsB10.style.width = '60px';
    wallMountainsB10.style.height = '20px';
    wallMountainsB10.style.top = '400px';
    wallMountainsB10.style.left = '480px';
    wallMountainsB10.style.zIndex = '2';

    const wallMountainsB11 = document.createElement('div');
    wallMountainsB11.id = 'wallMountainsB11';
    wallMountainsB11.classList.add("wallSolid");
    wallMountainsB11.style.position = 'absolute';
    wallMountainsB11.style.background = 'brown';
    wallMountainsB11.style.width = '20px';
    wallMountainsB11.style.height = '20px';
    wallMountainsB11.style.top = '380px';
    wallMountainsB11.style.left = '500px';
    wallMountainsB11.style.zIndex = '2';

    const wallMountainsB12 = document.createElement('div');
    wallMountainsB12.id = 'wallMountainsB12';
    wallMountainsB12.classList.add("wallSolid");
    wallMountainsB12.style.position = 'absolute';
    wallMountainsB12.style.background = 'brown';
    wallMountainsB12.style.width = '80px';
    wallMountainsB12.style.height = '40px';
    wallMountainsB12.style.top = '440px';
    wallMountainsB12.style.left = '580px';
    wallMountainsB12.style.zIndex = '2';

    const wallMountainsB13 = document.createElement('div');
    wallMountainsB13.id = 'wallMountainsB13';
    wallMountainsB13.classList.add("wallSolid");
    wallMountainsB13.style.position = 'absolute';
    wallMountainsB13.style.background = 'brown';
    wallMountainsB13.style.width = '20px';
    wallMountainsB13.style.height = '20px';
    wallMountainsB13.style.top = '420px';
    wallMountainsB13.style.left = '600px';
    wallMountainsB13.style.zIndex = '2';

    const wallMountainsB14 = document.createElement('div');
    wallMountainsB14.id = 'wallMountainsB14';
    wallMountainsB14.classList.add("wallSolid");
    wallMountainsB14.style.position = 'absolute';
    wallMountainsB14.style.background = 'brown';
    wallMountainsB14.style.width = '40px';
    wallMountainsB14.style.height = '80px';
    wallMountainsB14.style.top = '400px';
    wallMountainsB14.style.left = '660px';
    wallMountainsB14.style.zIndex = '2';

    const wallMountainsB15 = document.createElement('div');
    wallMountainsB15.id = 'wallMountainsB15';
    wallMountainsB15.classList.add("wallSolid");
    wallMountainsB15.style.position = 'absolute';
    wallMountainsB15.style.background = 'brown';
    wallMountainsB15.style.width = '20px';
    wallMountainsB15.style.height = '20px';
    wallMountainsB15.style.top = '380px';
    wallMountainsB15.style.left = '680px';
    wallMountainsB15.style.zIndex = '2';

    const wallMountainsB16 = document.createElement('div');
    wallMountainsB16.id = 'wallMountainsB16';
    wallMountainsB16.classList.add("wallSolid");
    wallMountainsB16.style.position = 'absolute';
    wallMountainsB16.style.background = 'brown';
    wallMountainsB16.style.width = '100px';
    wallMountainsB16.style.height = '120px';
    wallMountainsB16.style.top = '360px';
    wallMountainsB16.style.left = '700px';
    wallMountainsB16.style.zIndex = '2';

    const wallMountainsB17 = document.createElement('div');
    wallMountainsB17.id = 'wallMountainsB17';
    wallMountainsB17.classList.add("wallSolid");
    wallMountainsB17.style.position = 'absolute';
    wallMountainsB17.style.background = 'brown';
    wallMountainsB17.style.width = '60px';
    wallMountainsB17.style.height = '40px';
    wallMountainsB17.style.top = '320px';
    wallMountainsB17.style.left = '740px';
    wallMountainsB17.style.zIndex = '2';

    const wallMountainsB18 = document.createElement('div');
    wallMountainsB18.id = 'wallMountainsB18';
    wallMountainsB18.classList.add("wallSolid");
    wallMountainsB18.style.position = 'absolute';
    wallMountainsB18.style.background = 'brown';
    wallMountainsB18.style.width = '20px';
    wallMountainsB18.style.height = '20px';
    wallMountainsB18.style.top = '300px';
    wallMountainsB18.style.left = '780px';
    wallMountainsB18.style.zIndex = '2';

  wallMountainsB.appendChild(wallMountainsB1);
  wallMountainsB.appendChild(wallMountainsB2);
  wallMountainsB.appendChild(wallMountainsB3);
  wallMountainsB.appendChild(wallMountainsB4);
  wallMountainsB.appendChild(wallMountainsB5);
  wallMountainsB.appendChild(wallMountainsB6);
  wallMountainsB.appendChild(wallMountainsB7);
  wallMountainsB.appendChild(wallMountainsB8);
  wallMountainsB.appendChild(wallMountainsB9);
  wallMountainsB.appendChild(wallMountainsB10);
  wallMountainsB.appendChild(wallMountainsB11);
  wallMountainsB.appendChild(wallMountainsB12);
  wallMountainsB.appendChild(wallMountainsB13);
  wallMountainsB.appendChild(wallMountainsB14);
  wallMountainsB.appendChild(wallMountainsB15);
  wallMountainsB.appendChild(wallMountainsB16);
  wallMountainsB.appendChild(wallMountainsB17);
  wallMountainsB.appendChild(wallMountainsB18);

  const wallMountainsA = document.createElement('div');
  wallMountainsA.id = 'wallMountainsA';
  wallMountainsA.classList.add("wallMountainsA");

    const wallMountainsAGroup1 = document.createElement('div');
    wallMountainsAGroup1.id = 'wallMountainsAGroup1';
    wallMountainsAGroup1.classList.add("wallMountainsAGroup1");

      const wallMountainsA1 = document.createElement('div');
      wallMountainsA1.id = 'wallMountainsA1';
      wallMountainsA1.classList.add("wallSolid");
      wallMountainsA1.style.position = 'absolute';
      wallMountainsA1.style.background = 'brown';
      wallMountainsA1.style.width = '20px';
      wallMountainsA1.style.height = '40px';
      wallMountainsA1.style.top = '0px';
      wallMountainsA1.style.left = '220px';
      wallMountainsA1.style.zIndex = '2';

      const wallMountainsA2 = document.createElement('div');
      wallMountainsA2.id = 'wallMountainsA2';
      wallMountainsA2.classList.add("wallSolid");
      wallMountainsA2.style.position = 'absolute';
      wallMountainsA2.style.background = 'brown';
      wallMountainsA2.style.width = '80px';
      wallMountainsA2.style.height = '20px';
      wallMountainsA2.style.top = '100px';
      wallMountainsA2.style.left = '300px';
      wallMountainsA2.style.zIndex = '2';

      const wallMountainsA3 = document.createElement('div');
      wallMountainsA3.id = 'wallMountainsA3';
      wallMountainsA3.classList.add("wallSolid");
      wallMountainsA3.style.position = 'absolute';
      wallMountainsA3.style.background = 'brown';
      wallMountainsA3.style.width = '120px';
      wallMountainsA3.style.height = '20px';
      wallMountainsA3.style.top = '80px';
      wallMountainsA3.style.left = '280px';
      wallMountainsA3.style.zIndex = '2';

      const wallMountainsA4 = document.createElement('div');
      wallMountainsA4.id = 'wallMountainsA4';
      wallMountainsA4.classList.add("wallSolid");
      wallMountainsA4.style.position = 'absolute';
      wallMountainsA4.style.background = 'brown';
      wallMountainsA4.style.width = '180px';
      wallMountainsA4.style.height = '80px';
      wallMountainsA4.style.top = '0px';
      wallMountainsA4.style.left = '240px';
      wallMountainsA4.style.zIndex = '2';

    const wallMountainsAGroup2 = document.createElement('div');
    wallMountainsAGroup2.id = 'wallMountainsAGroup2';
    wallMountainsAGroup2.classList.add("wallMountainsAGroup2");
  
      const wallMountainsA5 = document.createElement('div');
      wallMountainsA5.id = 'wallMountainsA5';
      wallMountainsA5.classList.add("wallSolid");
      wallMountainsA5.style.position = 'absolute';
      wallMountainsA5.style.background = 'brown';
      wallMountainsA5.style.width = '60px';
      wallMountainsA5.style.height = '20px';
      wallMountainsA5.style.top = '100px';
      wallMountainsA5.style.left = '460px';
      wallMountainsA5.style.zIndex = '2';

      const wallMountainsA6 = document.createElement('div');
      wallMountainsA6.id = 'wallMountainsA6';
      wallMountainsA6.classList.add("wallSolid");
      wallMountainsA6.style.position = 'absolute';
      wallMountainsA6.style.background = 'brown';
      wallMountainsA6.style.width = '100px';
      wallMountainsA6.style.height = '20px';
      wallMountainsA6.style.top = '80px';
      wallMountainsA6.style.left = '440px';
      wallMountainsA6.style.zIndex = '2';

      const wallMountainsA7 = document.createElement('div');
      wallMountainsA7.id = 'wallMountainsA7';
      wallMountainsA7.classList.add("wallSolid");
      wallMountainsA7.style.position = 'absolute';
      wallMountainsA7.style.background = 'brown';
      wallMountainsA7.style.width = '140px';
      wallMountainsA7.style.height = '20px';
      wallMountainsA7.style.top = '60px';
      wallMountainsA7.style.left = '420px';
      wallMountainsA7.style.zIndex = '2';

      const wallMountainsA8 = document.createElement('div');
      wallMountainsA8.id = 'wallMountainsA8';
      wallMountainsA8.classList.add("wallSolid");
      wallMountainsA8.style.position = 'absolute';
      wallMountainsA8.style.background = 'brown';
      wallMountainsA8.style.width = '160px';
      wallMountainsA8.style.height = '60px';
      wallMountainsA8.style.top = '0px';
      wallMountainsA8.style.left = '420px';
      wallMountainsA8.style.zIndex = '2';

    const wallMountainsAGroup3 = document.createElement('div');
    wallMountainsAGroup3.id = 'wallMountainsAGroup3';
    wallMountainsAGroup3.classList.add("wallMountainsAGroup3");
    
      const wallMountainsA9 = document.createElement('div');
      wallMountainsA9.id = 'wallMountainsA9';
      wallMountainsA9.classList.add("wallSolid");
      wallMountainsA9.style.position = 'absolute';
      wallMountainsA9.style.background = 'brown';
      wallMountainsA9.style.width = '40px';
      wallMountainsA9.style.height = '20px';
      wallMountainsA9.style.top = '100px';
      wallMountainsA9.style.left = '620px';
      wallMountainsA9.style.zIndex = '2';

      const wallMountainsA10 = document.createElement('div');
      wallMountainsA10.id = 'wallMountainsA10';
      wallMountainsA10.classList.add("wallSolid");
      wallMountainsA10.style.position = 'absolute';
      wallMountainsA10.style.background = 'brown';
      wallMountainsA10.style.width = '80px';
      wallMountainsA10.style.height = '20px';
      wallMountainsA10.style.top = '80px';
      wallMountainsA10.style.left = '600px';
      wallMountainsA10.style.zIndex = '2';

      const wallMountainsA11 = document.createElement('div');
      wallMountainsA11.id = 'wallMountainsA11';
      wallMountainsA11.classList.add("wallSolid");
      wallMountainsA11.style.position = 'absolute';
      wallMountainsA11.style.background = 'brown';
      wallMountainsA11.style.width = '120px';
      wallMountainsA11.style.height = '80px';
      wallMountainsA11.style.top = '0px';
      wallMountainsA11.style.left = '580px';
      wallMountainsA11.style.zIndex = '2';

    const wallMountainsA12 = document.createElement('div');
    wallMountainsA12.id = 'wallMountainsA12';
    wallMountainsA12.classList.add("wallSolid");
    wallMountainsA12.style.position = 'absolute';
    wallMountainsA12.style.background = 'brown';
    wallMountainsA12.style.width = '20px';
    wallMountainsA12.style.height = '140px';
    wallMountainsA12.style.top = '0px';
    wallMountainsA12.style.left = '700px';
    wallMountainsA12.style.zIndex = '2';

    const wallMountainsA13 = document.createElement('div');
    wallMountainsA13.id = 'wallMountainsA13';
    wallMountainsA13.classList.add("wallSolid");
    wallMountainsA13.style.position = 'absolute';
    wallMountainsA13.style.background = 'brown';
    wallMountainsA13.style.width = '80px';
    wallMountainsA13.style.height = '180px';
    wallMountainsA13.style.top = '0px';
    wallMountainsA13.style.left = '720px';
    wallMountainsA13.style.zIndex = '2';

    const wallMountainsA14 = document.createElement('div');
    wallMountainsA14.id = 'wallMountainsA14';
    wallMountainsA14.classList.add("wallSolid");
    wallMountainsA14.style.position = 'absolute';
    wallMountainsA14.style.background = 'brown';
    wallMountainsA14.style.width = '60px';
    wallMountainsA14.style.height = '20px';
    wallMountainsA14.style.top = '180px';
    wallMountainsA14.style.left = '740px';
    wallMountainsA14.style.zIndex = '2';

    const wallMountainsA15 = document.createElement('div');
    wallMountainsA15.id = 'wallMountainsA15';
    wallMountainsA15.classList.add("wallSolid");
    wallMountainsA15.style.position = 'absolute';
    wallMountainsA15.style.background = 'brown';
    wallMountainsA15.style.width = '20px';
    wallMountainsA15.style.height = '40px';
    wallMountainsA15.style.top = '200px';
    wallMountainsA15.style.left = '780px';
    wallMountainsA15.style.zIndex = '2';


  wallMountainsA.appendChild(wallMountainsAGroup1);
    wallMountainsAGroup1.appendChild(wallMountainsA1);
    wallMountainsAGroup1.appendChild(wallMountainsA2);
    wallMountainsAGroup1.appendChild(wallMountainsA3);
    wallMountainsAGroup1.appendChild(wallMountainsA4);
    wallMountainsAGroup1.appendChild(wallMountainsA5);
  wallMountainsA.appendChild(wallMountainsAGroup2);
    wallMountainsAGroup2.appendChild(wallMountainsA6);
    wallMountainsAGroup2.appendChild(wallMountainsA7);
    wallMountainsAGroup2.appendChild(wallMountainsA8);
    wallMountainsAGroup2.appendChild(wallMountainsA9);
    wallMountainsAGroup2.appendChild(wallMountainsA10);
  wallMountainsA.appendChild(wallMountainsAGroup3);
    wallMountainsAGroup3.appendChild(wallMountainsA11);
    wallMountainsAGroup3.appendChild(wallMountainsA12);
    wallMountainsAGroup3.appendChild(wallMountainsA13);
  wallMountainsA.appendChild(wallMountainsA14);
  wallMountainsA.appendChild(wallMountainsA15);

  const crates = document.createElement('div');
  crates.id = 'crates';
  crates.classList.add("crate");

    const crate1 = document.createElement('div');
    crate1.id = 'crate1';
    crate1.classList.add("wallSolid");
    crate1.style.position = 'absolute';
    crate1.style.background = 'orange';
    crate1.style.width = '20px';
    crate1.style.height = '20px';
    crate1.style.top = '460px';
    crate1.style.left = '340px';
    crate1.style.zIndex = '2';

    const crate2 = document.createElement('div');
    crate2.id = 'crate2';
    crate2.classList.add("wallSolid");
    crate2.style.position = 'absolute';
    crate2.style.background = 'orange';
    crate2.style.width = '20px';
    crate2.style.height = '20px';
    crate2.style.top = '460px';
    crate2.style.left = '380px';
    crate2.style.zIndex = '2';

    const crate3 = document.createElement('div');
    crate3.id = 'crate3';
    crate3.classList.add("wallSolid");
    crate3.style.position = 'absolute';
    crate3.style.background = 'orange';
    crate3.style.width = '20px';
    crate3.style.height = '20px';
    crate3.style.top = '460px';
    crate3.style.left = '420px';
    crate3.style.zIndex = '2';

    const crate4 = document.createElement('div');
    crate4.id = 'crate4';
    crate4.classList.add("wallSolid");
    crate4.style.position = 'absolute';
    crate4.style.background = 'orange';
    crate4.style.width = '20px';
    crate4.style.height = '20px';
    crate4.style.top = '500px';
    crate4.style.left = '340px';
    crate4.style.zIndex = '2';

    const crate5 = document.createElement('div');
    crate5.id = 'crate5';
    crate5.classList.add("wallSolid");
    crate5.style.position = 'absolute';
    crate5.style.background = 'orange';
    crate5.style.width = '20px';
    crate5.style.height = '20px';
    crate5.style.top = '500px';
    crate5.style.left = '380px';
    crate5.style.zIndex = '2';

    const crate6 = document.createElement('div');
    crate6.id = 'crate6';
    crate6.classList.add("wallSolid");
    crate6.style.position = 'absolute';
    crate6.style.background = 'orange';
    crate6.style.width = '20px';
    crate6.style.height = '20px';
    crate6.style.top = '500px';
    crate6.style.left = '420px';
    crate6.style.zIndex = '2';


  crates.appendChild(crate1);
  crates.appendChild(crate2);
  crates.appendChild(crate3);
  crates.appendChild(crate4);
  crates.appendChild(crate5);
  crates.appendChild(crate6);

  const myBox = document.createElement('div');
  myBox.id = 'myBox';
  myBox.classList.add("myBox"); //change in the future ngc
  myBox.style.position = 'absolute';
  myBox.style.background = 'grey';
  myBox.style.width = '20px';
  myBox.style.height = '20px';
  myBox.style.top = '300px';
  myBox.style.left = '300px';
  myBox.style.zIndex = '3';
/*
  const enemy = document.createElement('div');
  enemy.id = 'enemy';
  enemy.classList.add("enemy");
  enemy.style.position = 'absolute';
  enemy.style.background = 'orange';
  enemy.style.width = '30px';
  enemy.style.height = '30px';
  enemy.style.borderRadius = '50px';
  enemy.style.left = '1000px'; 
  enemy.style.top = '0px';
  enemy.style.zIndex = '3';
  enemy.style.position = 'absolute';
  enemy.style.left = '1000px'; 
  enemy.style.top = '0px';
*/
  const gate1 = document.createElement('div');
  gate1.id = 'gate1';
  gate1.classList.add("gate");
  gate1.style.position = 'absolute';
  gate1.style.background = 'purple';
  gate1.style.width = '20px';
  gate1.style.height = '60px';
  gate1.style.top = '240px';
  gate1.style.left = '800px';
  gate1.style.zIndex = '2';

  const wallSolid1 = document.createElement('div');
  wallSolid1.id = 'wallSolid1';
  wallSolid1.classList.add("wallSolid");
  wallSolid1.style.position = 'absolute';
  wallSolid1.style.background = 'rgb(0, 0, 0)';
  wallSolid1.style.width = '20px';
  wallSolid1.style.height = '240px';
  wallSolid1.style.top = '0px';
  wallSolid1.style.left = '800px';
  wallSolid1.style.zIndex = '2';

  const wallSolid2 = document.createElement('div');
  wallSolid2.id = 'wallSolid2';
  wallSolid2.classList.add("wallSolid");
  wallSolid2.style.position = 'absolute';
  wallSolid2.style.background = 'rgb(0, 0, 0)';
  wallSolid2.style.width = '20px';
  wallSolid2.style.height = '300px';
  wallSolid2.style.top = '300px';
  wallSolid2.style.left = '800px';
  wallSolid2.style.zIndex = '2';

  const levelEnd = document.createElement('div');
  levelEnd.id = 'levelEnd';
  levelEnd.classList.add("levelEnd");
  levelEnd.style.position = 'absolute';
  levelEnd.style.background = 'rgb(60, 199, 184)';
  levelEnd.style.width = '30px';
  levelEnd.style.height = '30px';
  levelEnd.style.top = '260px';
  levelEnd.style.left = '900px';
  levelEnd.style.zIndex = '2';

  level1.appendChild(myBox);
  level1.appendChild(lakeBlue);
  level1.appendChild(lakeRed);
  level1.appendChild(lakeGreen);
  level1.appendChild(gate1);
  level1.appendChild(crates);
  level1.appendChild(wallMountainsB);
  level1.appendChild(wallMountainsA);
  level1.appendChild(wallSolid1);
  level1.appendChild(wallSolid2);
  level1.appendChild(levelEnd);
  level1.appendChild(spawnEnemy());
  

  

  document.querySelector('#game_canvas').appendChild(level1);
}



function getLevel1Objects() {
  return document.getElementsByName('div');
}

window.createLevel1 = createLevel1;
window.getLevel1Objects = getLevel1Objects;
//window.createLevel1(spawnEnemy);