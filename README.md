# Welcome to The Fire Mage!

![gif of demo for The Fire Mage](https://raw.githubusercontent.com/isalevine/the-fire-mage-frontend/master/firemage-demo.gif)

The Fire Mage is a proof-of-concept game for the underlying vanilla JavaScript engine, tentatively titled Real-Time Unit Mover (RTUM). 

It is a top-down, mouse-based interface with controls and game logic based on Warcraft II, and an art style paying homage to The Legend of Zelda--special thanks to [Jerom on OpenGameArt.org for the art!](https://opengameart.org/content/16x16-fantasy-tileset)

  
  

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