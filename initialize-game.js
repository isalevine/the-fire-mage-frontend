
function initializeGame() {

  window.gameWindow = document.getElementById('game-window')

  // create containers
  window.boardContainer = new Container("board")
    addHitbox(boardContainer)
  window.itemContainer = new Container("item")
  window.unitContainer = new Container("unit")
    addContainerClickHandler(unitContainer)

  // createPlayerMenu()
  createTextContainer()
  createInventoryContainer()

  createCollider()
  createEndgame()
}


// function createPlayerMenu() {
//
// }


function createTextContainer() {
  let textContainer = document.createElement("div")
  textContainer.classList.add("player-menu")
  textContainer.id = "text-container"

  let textBox = document.createElement("div")
  textBox.classList.add("text-box")
  textBox.id = "text-container-box"
  textContainer.appendChild(textBox)

  gameWindow.appendChild(textContainer)
}



function createInventoryContainer() {
  let inventoryContainer = document.createElement("div")
  inventoryContainer.classList.add("player-menu")
  inventoryContainer.id = "inventory-container"

  let itemBox = document.createElement("div")
  itemBox.classList.add("item-box")
  itemBox.id = "inventory-container-box-axe"
  inventoryContainer.appendChild(itemBox)

  gameWindow.appendChild(inventoryContainer)
}
