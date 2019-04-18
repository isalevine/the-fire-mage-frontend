

// REMEMBER TO USE SQL CHECKS TO VERIFY IF DATA EXISTS
// BEFORE EXECUTING FETCH!!


API_URL = "http://localhost:3000/api/v1/"
GAME_SESSION_URL = API_URL + "game_sessions/"



// SAVING NEW GAME DATA

function saveNewGameSession() {
  console.log("saveNewGameSession running...")
  // create new gameSession
  fetch(GAME_SESSION_URL, {method: "POST"})
  .then(res => res.json())
  .then(newGameSession => {
    console.log("newGameSession from saveNewGameSession()'s POST request: ", newGameSession)
    localStorage.setItem("browserGameSessionId", `${newGameSession.id}`)
    currentGameSession = newGameSession
    console.log("currentGameSession: ", currentGameSession)
    drawNewGame()
  })
}



function saveNewCell(cell) {

  // TEMP for testing!
  // browserGameSessionId = "50"
  //

  let config = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      game_session_id: `${cell.gameSessionId}`,
      name: `${cell.name}`,
      cell_type: `${cell.cellType}`,
      on_map: `${cell.onMap}`,
      inventory: `${cell.inventory}`,
      position_left: `${cell.position.left}`,
      position_top: `${cell.position.top}`,
      position_width: `${cell.position.width}`,
      position_height: `${cell.position.height}`
    })
  }

  fetch(GAME_SESSION_URL + `${currentGameSession.id}` + "/cells/", config)
  .then(res => res.json())
  .then(data => {
    console.log("saveNewCell return data: ", data)
    cell.id = data.id
  })
}



function saveNewTerrain() {
  // create new terrain

  let terrainData = JSON.stringify(allTerrain)

  let config = {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({allTerrain})
  }

  fetch(GAME_SESSION_URL + `${currentGameSession.id}` + "/terrains/", config)
  .then(res => res.json())
  .then(data => {
    console.log(data)
  })

}





// LOADING CONTINUE GAME DATA

function loadCells() {
  fetch(GAME_SESSION_URL + `${currentGameSession.id}` + '/cells/')
  .then(res => res.json())
  .then(data => {
    loadedCells = Array.from(data)
    console.log(loadedCells)
    loadedCells.forEach(cell => {
      convertDbPosition(cell)
      console.log("cell: ", cell)

      if (cell.name === "mage") {
        window.mageCell = new Unit("mage", "unit-container", cell.position, cell.on_map)
        mageCell.inventory = cell.inventory
        mageCell.id = cell.id
      }

      else if (cell.name === "tree") {
        window.treeCell = new Item("tree", "item-container", cell.position, cell.on_map)
        // treeCell.onMap = cell.on_map
        treeCell.id = cell.id
      }

      else if (cell.name === "axe") {
        window.axeCell = new Item("axe", "item-container", cell.position, cell.on_map)
        axeCell.onMap = cell.on_map
        axeCell.id = cell.id
      }



    })
  })
}


// utility function for loadCells()
function convertDbPosition(cell) {
  cell.position = {
    left: cell.position_left,
    top: cell.position_top,
    width: cell.position_width,
    height: cell.position_height
  }
}




function loadTerrains() {

  fetch(GAME_SESSION_URL + `${currentGameSession.id}` + "/terrains/")
  .then(res => res.json())
  .then(data => {
    allTerrain = Array.from(data)

    allTerrain.forEach(tile => {
      let xCounter = tile.grid_x
      let yCounter = tile.grid_y
      let img_src = tile.img_src

      // create cells inside (currently) board-container
      let terrainTile = document.createElement('div')
      terrainTile.id = `terrain-${yCounter}x${xCounter}`
      terrainTile.classList.add('tile', 'terrain')
      terrainTile.style.gridColumnStart = `${xCounter}`
      terrainTile.style.gridColumnEnd = `${xCounter + 1}`
      boardContainer.div.appendChild(terrainTile)

      // fill cell with a terrain image (terrain 1-4)
      let terrainImg = document.createElement('img')
      terrainImg.src = img_src
      terrainImg.style.width = "100%"
      terrainImg.style.height = "100%"
      terrainTile.appendChild(terrainImg)
    })

  })
}




// UPDATING IN-PROGRESS GAME DATA



function updateCells() {
  // POST/PATCH requests to current cell - position, onMap

  let allCellDivs = Array.from(document.getElementsByClassName("cell"))

  allCellDivs.forEach(div => {
    console.log(div.cell)
    let config = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        game_session_id: `${div.cell.gameSessionId}`,
        name: `${div.cell.name}`,
        cell_type: `${div.cell.cellType}`,
        on_map: `${div.cell.onMap}`,
        inventory: div.cell.inventory,
        position_left: `${div.cell.position.left}`,
        position_top: `${div.cell.position.top}`,
        position_width: `${div.cell.position.width}`,
        position_height: `${div.cell.position.height}`
      })
    }

    fetch(GAME_SESSION_URL + `${currentGameSession.id}` + "/cells/" + `${div.cell.id}`, config)
    .then(res => res.json())
    .then(data => {
      console.log("saveNewCell return data: ", data)
    })

  })



}
