# Notes on Refactoring to Open Source


## Goals

    * Create vanilla JS components for cells (Units, Items, Terrain, Walls), Events, and Hitboxes
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
    * Create multiple maps--first 2x outdoor, then indoor/outdoor?
    * Create different highlights for selectable objects (green for Player Units, blue for Items, red for Enemy Units, and icons for stairs/doors/warps?)
    * Create HUD with game info, Help/Options/Info menus, save/load, and selected Cell readout?
    * Create loading menu to handle async gracefully
    * Create documentation for making cells, events, etc. (in script form?)
    * Create open-source directions/documentation/credits list (+ invite cohort?)
    * Refactor to change over-use of window object to recognize cells (collider?)
    * Add in patrolling enemy, 2nd player unit, and impassible wall/item
    * Implement flexbox for game container, help menu/directions, etc.
    * TESTS!! worth talking to other devs (Sailor, etc.) about WHAT is worth testing, and how to write them for vanilla JS!


## Stretch Goals

    * Character portraits! (bug Brian about making pixel art for them?)
    * Customize pixel art with different colors--reach out to artist and offer to pay?
    * Sound effects and music--compose both!
    * Implement multiple controls/inputs (keyboard, eventually game controller?)