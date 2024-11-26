export function createAmmo(color) {
    const level1 = document.getElementById('level1');
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
    level1.appendChild(ammo);
}

export function createProjectile(color) {
    const level1 = document.getElementById('level1');
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
    level1.appendChild(projectile);
}
