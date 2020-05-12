# Welcome to The Fire Mage!

**UPDATE 9/8/2019: The Fire Mage is now an open source project! (Or, at least I'm trying to make that happen!) To contribute, please see CONTRIBUTION_GUIDE.md for more information.**

![gif of demo for The Fire Mage](https://raw.githubusercontent.com/isalevine/the-fire-mage-frontend/master/firemage-demo.gif)

The Fire Mage a vanilla JavaScript engine, featuring the proof-of-concept game, "The Fire Mage"! (Original title, huh?) 

It is a top-down, mouse-based interface with controls and game logic based on Warcraft II, and an art style paying homage to The Legend of Zelda--special thanks to [Jerom on OpenGameArt.org for the art!](https://opengameart.org/content/16x16-fantasy-tileset)

  
## Highlights
### 1. [Playable demo on Heroku here!](https://the-fire-mage.herokuapp.com/)
May require a refresh to ensure that both the frontend and backend dynos on Heroku are active.

A mouse is recommended for ease of left- and right-clicking (as the controls are based on Starcraft / Warcraft unit selection), but is not required.

### 2. A collision-detector [written completely in vanilla JavaScript!](https://github.com/isalevine/the-fire-mage-frontend/blob/46797f43fc221b7ba6cf32e61b98cfd73aa37123/app/collider.js)
As part of the core game engine, the `collider` object listens for [collisions between different types of cells](https://github.com/isalevine/the-fire-mage-frontend/blob/46797f43fc221b7ba6cf32e61b98cfd73aa37123/app/collider.js#L47) (such as Units and Items), or [cells and the border of the map](https://github.com/isalevine/the-fire-mage-frontend/blob/46797f43fc221b7ba6cf32e61b98cfd73aa37123/app/collider.js#L9).

This is achieved by storing cell location data as state (and [in the database](https://github.com/isalevine/the-fire-mage-frontend/blob/46797f43fc221b7ba6cf32e61b98cfd73aa37123/app/database-functions.js#L235) to be persisted between browser reloads), and having each cell have a hitbox div within it. When the `collider` detects the hitboxes of two cells overlapping, it [triggers an event](https://github.com/isalevine/the-fire-mage-frontend/blob/46797f43fc221b7ba6cf32e61b98cfd73aa37123/app/collider.js#L91).

Additionally, to ensure that cells do not get "stuck" when colliding with the border of the map, there is a "bounce" implemented to [rebound moving units away from the map border by several pixels](https://github.com/isalevine/the-fire-mage-frontend/blob/46797f43fc221b7ba6cf32e61b98cfd73aa37123/app/collider.js#L23).

The game starts listening for collisions when cell movement is detected, and [listens for collisions every 50 milliseconds until all movement stops](https://github.com/isalevine/the-fire-mage-frontend/blob/46797f43fc221b7ba6cf32e61b98cfd73aa37123/app/unit-movement.js#L47).

### 3. Unit movements are [animated by vanilla JavaScript and CSS style manipulation](https://github.com/isalevine/the-fire-mage-frontend/blob/46797f43fc221b7ba6cf32e61b98cfd73aa37123/app/unit-movement.js#L13)!
The code uses [a dynamic CSS style to keep unit speed consistent](https://github.com/isalevine/the-fire-mage-frontend/blob/46797f43fc221b7ba6cf32e61b98cfd73aa37123/app/unit-movement.js#L27), regardless of how far they are moving.

### 4. Game sessions are [persisted between browser refreshes](https://github.com/isalevine/the-fire-mage-frontend/blob/8c5e93a0492592dc2e40fa6a9a00be24aa410aa0/app/database-functions.js#L12)!
Persisted data includes the [randomly-generated terrain](https://github.com/isalevine/the-fire-mage-frontend/blob/8c5e93a0492592dc2e40fa6a9a00be24aa410aa0/app/database-functions.js#L148), the [location of all cells](https://github.com/isalevine/the-fire-mage-frontend/blob/8c5e93a0492592dc2e40fa6a9a00be24aa410aa0/app/database-functions.js#L191), and [any items in your inventory](https://github.com/isalevine/the-fire-mage-frontend/blob/8c5e93a0492592dc2e40fa6a9a00be24aa410aa0/app/database-functions.js#L208).

### 5. Check out the WIP documents as part of my effort to open-source this engine: 
* [Contribution Guide](https://github.com/isalevine/the-fire-mage-frontend/blob/master/CONTRIBUTION_GUIDE.md)
* [Changelog](https://github.com/isalevine/the-fire-mage-frontend/blob/master/CHANGELOG.md)
* [Refactor Notes](https://github.com/isalevine/the-fire-mage-frontend/blob/master/REFACTOR_NOTES.md) as part of my effort to open-source this engine!
  

## Overview
The Fire Mage's code can be used and modified to create new games. Here's a quick rundown of how the models and logic are organized:

* **app/classes.js** -- Contains all classes used for building and populating games, including GameSession, Container, and Cell (which extend into Item and Unit). Also includes methods for formatting div positions for updating, randomizing starting coordinates, and adding Cell images and hitboxes. 
* **app/collider.js** -- Contains all logic for detecting hitbox collisions to trigger events.
* **app/database-functions.js** -- Contains all functions for interacting with the Rails backend API. Note that the API_URL global variable is set to "http://localhost:3000/api/v1/".
* **app/draw-game.js** -- Contains functions for rendering game board and cells for both new and continued games.
* **app/unit-movement.js** -- Contains all logic for moving and animating cells based on mouse clicks.
  
  
## Install
Clone this repo onto your machine. ```cd the-fire-mage-frontend``` to move into the folder.

Make sure you have the Rails backend cloned down, installed, and running on localhost:3000. [Directions can be found here.](https://github.com/isalevine/the-fire-mage-backend)

Use your browser (Chrome recommended) to open index.html. Enjoy!


## Release Notes

**UPDATE 9/8/2019: Changelog and notes on refactoring have been added! See CHANGELOG.MD and REFACTOR_NOTES.md for more information.**

I do not consider this project finished! Even though it was a one-week assignment, I have been encouraged by  [Brian Pak](https://dev.to/bouhm)  to clean up and open source this engine. Here are my goals and next step related to that:

#### TO BE READY FOR OPEN-SOURCE:

1.  Clean up the code, add comments for clarity, and restore console.logs that generate useful debugging information (such as click-event positions).
2.  Expand the Readme to describe how to create units, items, terrain, and collision events.
3.  Create a non-game-specific version of the engine—currently, the engine is inseparable from the proof-of-concept game I made for it, “The Fire Mage.”

#### TO EXPAND ON THE ENGINE:

1.  Add in the database pseudo-garbage-collection for completed and expired game sessions.
2.  Change how terrain data is saved into the database.
3.  Deploy a testable version on Heroku, and test in other browsers.
4.  (STRETCH GOAL) Use Rails’ Action Cable to enable multiplayer by allowing multiple browsers to access and update the same game session.
5.  (STRETCH GOAL) Add in basic attacking/combat functionality, in the style of the original Zelda (select item in inventory, trigger attack, render attack animation and collision events)

## Credits

I wrote a blog after completing this version that includes many of the wonderful resources used to help create this game engine: [https://dev.to/isalevine/how-i-accidentally-made-a-game-engine-from-scratch-with-vanilla-js-4m80](https://dev.to/isalevine/how-i-accidentally-made-a-game-engine-from-scratch-with-vanilla-js-4m80)

Special thanks to [this incredible code example by JR on JSFiddle](https://jsfiddle.net/jlr7245/217jrozd/3/) for inspiring, challenging, and guiding me to create the hitbox collision detection logic in vanilla JS.

And once again, [bravo to Jerom for the beautiful game art!](https://opengameart.org/content/16x16-fantasy-tileset)