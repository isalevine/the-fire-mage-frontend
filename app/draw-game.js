
function drawNewGame() {
  console.log("drawNewGame running...")

  initializeGame()

  // (ALL ORIGINALLY FROM app.js - CREATE RANDOMIZED TERRAIN + CELLS)

  // POSSIBLE?: refactor so that Terrain is a class, and (similarly to Cells)
  // build a hybrid of class instantiation + loading utility function??

  // (refactored to separate TILES (terrain) from CELLS (item,unit) )

  // create randomized Terrain
  window.allTerrain = []
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

      let saveableTerrain = {
        game_session_id: currentGameSession.id,
        grid_x: xCounter,
        grid_y: yCounter,
        img_src: terrainImg.src
      }

      allTerrain.push(saveableTerrain)

      // save layout to database
    }
  }
  saveNewTerrain()

  window.mageCell = new Unit("mage", "unit-container", randomCoordinates(0, 150, 60, 450))
    saveNewCell(mageCell)
  window.treeCell = new Item("tree", "item-container", randomCoordinates(200, 500, 70, 420))
    saveNewCell(treeCell)
  window.axeCell = new Item("axe", "item-container", randomCoordinates(600, 750, 0, 450))
    // NO IDEA why axeCell's centerPosition(also hitbox/div positions??) are
    // ~36 pixels too far to the left...no such issue with treeCell.
    // (Can check by commenting out the line below, and trying to right-click-move
    // the selectedUnit to the axeCell position vs. the treeCell position)
    axeCell.centerPosition.left += 36
    saveNewCell(axeCell)


  // toggleHitboxes(false)

}





function drawContinueGame() {
  initializeGame()

  loadCells()
  loadTerrains()


  // toggleHitboxes(false)
}





// // utility function to turn showHitboxes on(true) or off(false)
// function toggleHitboxes(boolean) {
//   window.showHitboxes = boolean
//   if (!showHitboxes) {
//     let hitboxes = Array.from(document.getElementsByClassName('hitbox'))
//     hitboxes.forEach(hitbox => {
//       hitbox.classList.add('showHitboxOff')
//     })
//   }
// }


// utility function for drawNewGame - randomize Terrain img numbers
function roll(rollRange, min=1) {
  return Math.floor(Math.random() * rollRange) + min
}
