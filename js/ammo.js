export function createAmmo(color, levelNum) {
    const box = document.getElementById('myBox');
    const playArea = document.getElementById('playArea');
    let ammo = document.createElement('div');
    ammo.classList.add("ammo");
    ammo.id = 'ammo';
    ammo.style.position = 'absolute';
    ammo.style.zIndex = '4';
    ammo.style.background = color;


    if (levelNum == 2 || levelNum == 1) {
        ammo.style.width = '10px';
        ammo.style.height = '10px';
        ammo.style.top = parseInt(box.style.top) - 4 + 'px';
        ammo.style.left = parseInt(box.style.left) - 4 + 'px';
    } else if (levelNum == 3 || levelNum == 4) {
        ammo.style.width = '7px';
        ammo.style.height = '7px';
        ammo.style.top = parseInt(box.style.top) - 3 + 'px';
        ammo.style.left = parseInt(box.style.left) - 3 + 'px';
    }
    
    playArea.appendChild(ammo);
}

export function createProjectile(color, levelNum) {
    const playArea = document.getElementById('playArea');
    let projectile = document.createElement('div');
    projectile.classList.add("ammo");
    projectile.id = 'projectile';
    projectile.style.position = 'absolute';
    projectile.style.top = '-20px';
    projectile.style.left = '0px';
    projectile.style.zIndex = '100';
    projectile.style.background = color;
    
    if (levelNum == 2 || levelNum == 1) {
        projectile.style.width = '10px';
        projectile.style.height = '10px';
    } else if (levelNum == 3 || levelNum == 4) {
        projectile.style.width = '7px';
        projectile.style.height = '7px';
    }
    
    playArea.appendChild(projectile);

}
