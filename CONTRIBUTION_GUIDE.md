# Thank you for supporting The Fire Mage!


## Setup
See READMME.md instructions (for now)

## File Structure Overview 

### Vanilla JS Component-Container Pattern
Currently, the code is being refactored into a component-container pattern, modeled off of React's components (but entirely in vanilla JS).

**Current Frontend Structure:**
```
the-fire-mage-frontend
    |-- app                 // "app" is an instance of a game scenario
    |-- game-art            // all game image files --> will be moved
    |-- stylesheets         // style.css --> will be moved
    |-- index.html
    |-- README.md
    |-- firemage-demo.gif   // for the Readme
    |-- CHANGELOG.md
    |-- CONTRIBUTION_GUIDE.md
    |-- index.php           // for Heroku
    |-- composer.json       // for Heroku
```

**Current /app Structure:**
```
the-fire-mage-frontend
    |-- app
        |-- cells           // Unit, Item...
        |-- containers      // AppContainer, GameContainer...
            |-- wrappers    // GameHUDWrapper...
        |-- games           // GameSession...
        |-- helpers         // helper methods...
        |-- app.js
        |-- classes.js      // modularize this and all following files
        |-- click-handlers.js
        |-- collider.js
        |-- database-functions.js
        |-- draw-game.js
        |-- endgame.js
        |-- FUTURE_DATABASE_FUNCTIONS   // obsolete --> delete?
        |-- initialize-game.js
        |-- instructions.js
        |-- set-game-session.js
        |-- start-menu.js
        |-- text-messages.js
        |-- unit-movement.js
```

#### Several goals with this structure:
1. More readable file structure for scaling, as well as having default classes (Cell, Container, etc.) ready for new games
1. Refactor all files from /app/classes.js down (which are all the original demo's frontend logic) into more maintainable, modularized files
1. Have a more clearly-defined set of terms (Cell, Container, etc.) to add documentation for creating games in the engine

## Pull Requests

## Adding Issues