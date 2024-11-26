export function createAmmo(color) {
    const playArea = document.getElementById('playArea');
    let ammo = document.createElement('div');
    ammo.classList.add("ammo");
    ammo.id = 'ammo';
    ammo.style.position = 'absolute';
    ammo.style.width = '10px';
    ammo.style.height = '10px';
    ammo.style.top = '296px';
    ammo.style.left = '296px';
    ammo.style.zIndex = '4';
    ammo.style.background = color;
    playArea.appendChild(ammo);
}

export function createProjectile(color) {
    const playArea = document.getElementById('playArea');
    let projectile = document.createElement('div');
    projectile.classList.add("ammo");
    projectile.id = 'projectile';
    projectile.style.position = 'absolute';
    projectile.style.width = '10px';
    projectile.style.height = '10px';
    projectile.style.top = '0px';
    projectile.style.left = '0px';
    projectile.style.zIndex = '100';
    projectile.style.background = color;
    playArea.appendChild(projectile);
}