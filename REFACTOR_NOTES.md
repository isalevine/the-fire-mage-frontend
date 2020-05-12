# Notes on Refactoring to Open Source

## Goals
  * Create vanilla JS components for cells (Units, Items, Terrain, Walls), Events, and Hitboxes
  * Create vanilla JS containers for the App, Game, Help, and other boxes
    * Create a container-wrapper HUD with game info, Help/Options/Info menus, save/load, and selected Cell readout/dialog?
    * Implement flexbox for game container, help menu/directions, etc.
  * Create an initializer that will load a script of custom components/events and render them
    * Use JSON files? ie:

    ```javascript
    {
        scenario: {
            maps: {},
            cells: {
                units: {},
                items: {},
            },
            events: {},
        }
    }
    ```
      
  * Create multiple maps
    * Try making 2 outside maps first?
    * Then move onto an outdoor & indoor map
  * Create different highlights for selectable objects (green for Player Units, blue for Items, red for Enemy Units, and icons for stairs/doors/warps?)
  * Create loading menu to handle async gracefully
  * Create documentation for making cells, events, etc. (in script form?)
  * Create open-source directions/documentation/credits list (+ invite cohort?)
  * Refactor to change over-use of window object to recognize cells (collider?)
  * Add in patrolling enemy, 2nd player unit, and impassible wall/item
  * TESTS!! Testing methods for vanilla JS? Or will packages like Mocha or Jest be needed??


## Stretch Goals
  * Character portraits!
  * Customize pixel art with different colors--reach out to artist directly?
  * Sound effects and music?
  * Implement multiple controls/inputs (keyboard, eventually game controller?)
