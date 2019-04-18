
function initializeGame() {

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
  textContainer.id = "player-menu-text-container"

  let textBox = document.createElement("div")
  textBox.classList.add("text-box")
  textBox.id = "player-menu-text-box"
  textContainer.appendChild(textBox)

  gameWindow.appendChild(textContainer)

  displayTextMessage("It's a cold night...better get a fire going...")
}



function createInventoryContainer() {
  let inventoryContainer = document.createElement("div")
  inventoryContainer.classList.add("player-menu")
  inventoryContainer.id = "player-menu-inventory-container"

  let itemBox = document.createElement("div")
  itemBox.classList.add("item-box")
  itemBox.id = "inventory-container-box-axe" // refactor to be item-generic??
  inventoryContainer.appendChild(itemBox)

  gameWindow.appendChild(inventoryContainer)
}
