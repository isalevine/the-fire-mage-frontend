document.addEventListener('DOMContentLoaded', () => {
  console.log("main.js is running!")



            // MUST SET UP RAILS API AND HAVE IT HOSTED ON HEROKU
            // BEFORE COOKIES CAN BE GENERATED!!

            let gameSession = {
              id: "1"
            }
            // CREATE COOKIE during GameSession create/load
            // document.cookie = `game_session_id=${gameSession.id}`
            // console.log(document.cookie)

            function createCookie (gameSession) {
              let date = new Date();
              minutes = 20;
              date.setTime(+ date + (minutes * 60000));
              document.cookie = `game_session_id=${gameSession.id}; expires=${date.toGMTString()}`
            }

            createCookie(gameSession)

            console.log("document.cookie: ", document.cookie)




  // current strategy: all containers and cells are
  // assigned to the window(dot)... global variable.
  // IN THIS CASE, ALL UNITS AND ITEMS MUST HAVE
  // UNIQUE VARIABLE NAMES IN THIS SCRIPT!!
  // (there's probably a better way than this...)

  window.gameWindow = document.getElementById('game-window')

  window.boardContainer = new Container("board")
    addHitbox(boardContainer)
  window.itemContainer = new Container("item")
  window.unitContainer = new Container("unit")
    addContainerClickHandler(unitContainer)
    // currently, unitContainer is the highest z-index
    // container that can handle map-wide click events
    //
    // THIS MAY MAKE SENSE - the only layer that players
    // interact with directly IS the unit-layer...
    // (interacting with the item-layer is really limited
    // to only clicking on items to assign a move-target,
    // or to bring up their text-box...)

  createCollider()
  createEndgame()




  // MOVE THIS TO SEPARATE JS FILE!!

  // NEED: build in check for whether tiles SHOULD BE loaded OR generated
  // (based on presence of game_session, or maybe a load_file check at
  // the same time as DOMContentLoaded???)

  // POSSIBLE?: refactor so that Terrain is a class, and (similarly to Cells)
  // build a hybrid of class instantiation + loading utility function??

  // (refactored to separate TILES (terrain) from CELLS (item,unit) )
  // refactor this to be part of creating a new GameSession (class instance)??
  for (yCounter = 1; yCounter <= 12; yCounter++) {
    for (xCounter = 1; xCounter <= 20; xCounter++) {

      // create cells inside (currently) board-container
      let terrainTile = document.createElement('div')
      terrainTile.id = `terrain-${yCounter}x${xCounter}`
      terrainTile.classList.add('tile', 'terrain')
      terrainTile.style.gridColumnStart = `${xCounter}`
      terrainTile.style.gridColumnEnd = `${xCounter + 1}`
      boardContainer.div.appendChild(terrainTile)

      // fill cell with a terrain image (terrain 1-4)
      let terrainImg = document.createElement('img')
      terrainImg.src = `./game-art/terrain/terrain-${roll(4)}.png`
      terrainImg.style.width = "100%"
      terrainImg.style.height = "100%"
      terrainTile.appendChild(terrainImg)

      // save layout to database
    }
  }

  // refactor to be less...stupid, especially rollRange...
  function roll(rollRange, min=1) {
    return Math.floor(Math.random() * rollRange) + min
  }




  // add characters and items - divide board roughly 6-8-6
  // (refactor to happen during initial board-generation?)


  // create mage
  window.mageCell = new Unit("mage", "unit-container", randomCoordinates(0, 150, 0, 450))

  // create tree
  window.treeCell = new Item("tree", "item-container", randomCoordinates(200, 500, 0, 450))

  // create axe
  window.axeCell = new Item("axe", "item-container", randomCoordinates(600, 750, 0, 450))
    // NO IDEA why axeCell's centerPosition(also hitbox/div positions??) are
    // ~36 pixels too far to the left...no such issue with treeCell.
    // (Can check by commenting out the line below, and trying to right-click-move
    // the selectedUnit to the axeCell position vs. the treeCell position)
    axeCell.centerPosition.left += 36



  // turn showHitboxes on(true) or off(false)
  window.showHitboxes = false
  if (!showHitboxes) {
    let hitboxes = Array.from(document.getElementsByClassName('hitbox'))
    hitboxes.forEach(hitbox => {
      hitbox.classList.add('showHitboxOff')
    })
  }















// functions to add event-listeners to containers




  function displayTextBox(cell) {

  }


// end of DOMContentLoaded eventlistener
})
