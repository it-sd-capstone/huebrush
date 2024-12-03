
# Change Log

## [Unreleased]

### Added
- Added inventory selection indicators that change the color of the player based on their selection (color mixing). [@ph4zers](https://github.com/ph4zers)

### Changed
- Updated how the ammo box is displayed during and after the trasition from level 1 to level 2. [@ph4zers](https://github.com/ph4zers)
- Updated setInvFull() and setInvEmpty() to be unparamterized. Added calls to these functions for level creation. [@ph4zers](https://github.com/ph4zers)
- Updated where the projectile div is stored while not in use. [@ph4zers](https://github.com/ph4zers)
- Updated how the projectile is handled after it is fired. 


### Added
- Created container function to hold enemy functions within controller, added fucntion to initializeController [@Yams650](https://github.com/Yams650)

### Changed
- Updated enemy health with new variable name: enemyHealth, and added call to enemyLife container function found in controller. [@Yams650](https://github.com/Yams650)
 
### Fixed
- Updated the enemy moving when a new tabe was over the current one. Now the enemy will only move if the window is current. ([Issue #20](https://github.com/it-sd-capstone/huebrush/issues/20)[@Yams650](https://github.com/Yams650))
 
## [v0.2.0]
 
### Added
- Created Local Save Data to spawn in correct level. [@SkylerGodfrey](https://github.com/sGodfreyCVTC)
- Created container function to hold enemy functions within controller, added fucntion to initializeController [@Yams650](https://github.com/Yams650)

### Changed
- Updated Inventories look and location to sit under the gamecanvas as a single line. [@SkylerGodfrey](https://github.com/sGodfreyCVTC)
- Moved myBox to player.js and enemy to enemy.js. [@SkylerGodfrey](https://github.com/sGodfreyCVTC)
- Moved some animations out of controller to animation.js ([Issue #3](https://github.com/it-sd-capstone/huebrush/issues/3)) [@SkylerGodfrey](https://github.com/sGodfreyCVTC)
- Updated enemy health with new variable name: enemyHealth, and added call to enemyLife container function found in controller. [@Yams650](https://github.com/Yams650)
 
### Fixed
- Updated Inventories creation to a createInventory function rather than hard coding the HTML. ([Issue #9](https://github.com/it-sd-capstone/huebrush/issues/9)) [@SkylerGodfrey](https://github.com/sGodfreyCVTC)
- Updated Level transition so new level and objects in existing levels properly scale horizontally. ([Issue #4](https://github.com/it-sd-capstone/huebrush/issues/4)) [@SkylerGodfrey](https://github.com/sGodfreyCVTC)
- Updated the enemy moving when a new tabe was over the current one. Now the enemy will only move if the window is current. ([Issue #20](https://github.com/it-sd-capstone/huebrush/issues/20)[@Yams650](https://github.com/Yams650))

## [v0.1.0] - 2024-11-17
 
### Added
- Created canvas bounds so player can not leave canvas when moving MyBox. [@SkylerGodfrey](https://github.com/sGodfreyCVTC)
- Created level transition feature, including proper scaling of objects. [@SkylerGodfrey](https://github.com/sGodfreyCVTC)
- Created level 1 objects and finished level 1 design. [@SkylerGodfrey](https://github.com/sGodfreyCVTC)
- Created collision system for objects with 'wallSolid' class. [@SkylerGodfrey](https://github.com/sGodfreyCVTC)
- Created inventory system [@ph4zers](https://github.com/ph4zers)
- Created ammo system [@ph4zers](https://github.com/ph4zers)
- Created enemy movement system and box targetting [@Yams650](https://github.com/Yams650)
- Created enemy design [@Yams650](https://github.com/Yams650)

### Changed
- Update website to dark mode. [@SkylerGodfrey](https://github.com/sGodfreyCVTC)
 
### Fixed
 
## [v0.0.0] - 2024-11-11
  
Created skeleton of project. 
 
### Added
  - Add files for tech stack.
  - Add ReadMe


 