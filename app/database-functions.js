

// STILL NO FUNCTIONS TO CHECK AND DESTROY
// EXPIRED OR COMPLETED GAME SESSIONS!!


API_URL = "http://localhost:3000/api/v1/"
GAME_SESSION_URL = API_URL + "game_sessions/"



// SAVING NEW GAME DATA

function saveNewGameSession() {
  console.log("saveNewGameSession running...")

  // // BENCHMARK TESTING 
  // let timeStart = console.time()
  // console.log("timeStart: ", timeStart)

  // // test generating/saving tiles 10 times => use similar format for Loading function
  // for (let i = 0; i < 10; i++) {
    fetch(GAME_SESSION_URL, {method: "POST"})
    .then(res => res.json())
    .then(newGameSession => {
      console.log("newGameSession from saveNewGameSession()'s POST request: ", newGameSession)
      localStorage.setItem("browserGameSessionId", `${newGameSession.id}`)
      currentGameSession = newGameSession
      console.log("currentGameSession: ", currentGameSession)
      drawNewGame()
    })
  // }

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
  let config = {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({allTerrain})
  }

  // fetch(GAME_SESSION_URL + `${currentGameSession.id}` + "/terrains/", config)
  fetch(GAME_SESSION_URL + `${currentGameSession.id}` + "/all_terrains/", config)
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


      if (cell.name === "axe") {
        window.axeCell = new Item("axe", "item-container", cell.position, cell.on_map)
        axeCell.onMap = cell.on_map
        axeCell.id = cell.id
        axeCell.centerPosition.left += 36

      }

      // currently, MUST load axeCell first to update inventory-img_src...
      if (cell.name === "mage") {
        window.mageCell = new Unit("mage", "unit-container", cell.position, cell.on_map)
        mageCell.inventory = cell.inventory
        mageCell.id = cell.id

        if (mageCell.inventory.includes("axe")) {
          // copied from event-collider...refactor to be separate
          // sfx or inventory-rendering function??
          let itemBox = document.getElementById('inventory-container-box-axe')
          let div = document.createElement('div')
          itemBox.appendChild(div)
          // NAME THIS "item-box-div" or some shit...
          let img = document.createElement('img')
          img.style = "width: 100%; height: 100%;"
          img.src = axeCell.div.getElementsByTagName("img")[0].src
          div.appendChild(img)
        }

      }

      if (cell.name === "tree") {
        window.treeCell = new Item("tree", "item-container", cell.position, cell.on_map)
        // treeCell.onMap = cell.on_map
        treeCell.id = cell.id
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

  fetch(GAME_SESSION_URL + `${currentGameSession.id}` + "/all_terrains/")
  .then(res => res.json())
  .then(data => {
    console.log(data)
    allTerrain = data[0]["img_src_array"]

    
    let yCounter = 1
    let index = 0
    while (yCounter <= 12) {
      let xCounter = 1
      while (xCounter <= 20) {
        let img_src_num = allTerrain[index]
        // CONSIDER PUTTING THE IMG PATH IN A CONSTANTS FILE??
        let img_src = `./game-art/terrain/terrain-${img_src_num}.png`

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

        index += 1
        xCounter += 1
      }
      yCounter += 1
    }

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



function updateGameSession() {
  let config = {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      in_progress: `${currentGameSession.in_progress}`,
      complete: `${currentGameSession.complete}`,
    })
  }

  fetch(GAME_SESSION_URL + `${currentGameSession.id}`, config)
  .then(res => res.json())
  .then(data => {
    console.log("PATCH gameSession return data: ", data)

    checkExpiration()
  })
}


function checkExpiration() {
  // check ALL gameSessions for expiration date -
  // if past expiration, get ALL cells/terrain/inventory by
  // gameSession id, and DELETE them, then DELETE gameSession

  // CURRENT (first iteration): delete GameSession ONLY! => need to delete other cells too...
  if (currentGameSession.in_progress === "false" || currentGameSession.complete === "true") {
    let config = {
      method: "DELETE"
    }
  
    fetch(GAME_SESSION_URL + `${currentGameSession.id}`, config)
    .then(res => res.json())
    .then(data => {
      console.log("DELETE gameSession return data: ", data)
    })
  }
}