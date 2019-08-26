# Notes on Refactoring to Open Source


## Goals

    * Create vanilla JS components for cells (Units, Items, Terrain, Walls), Events, and Hitboxes
    * Create an initializer that will load a script of custom components/events and render them
    * Create multiple maps--first 2x outdoor, then indoor/outdoor?
    * Create different highlights for selectable objects (green for Player Units, blue for Items, red for Enemy Units, and icons for stairs/doors/warps?)
    * Create HUD with game info, Help/Options/Info menus, save/load, and selected Cell readout?
    * Create loading menu to handle async gracefully
    * Create documentation for making cells, events, etc. (in script form?)
    * Create open-source directions/documentation/credits list (+ invite cohort?)
    * Refactor to change over-use of window object to recognize cells (collider?)