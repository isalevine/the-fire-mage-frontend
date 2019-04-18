
function initializeGame() {

  window.gameWindow = document.getElementById('game-window')

  // create containers
  window.boardContainer = new Container("board")
    addHitbox(boardContainer)
  window.itemContainer = new Container("item")
  window.unitContainer = new Container("unit")
    addContainerClickHandler(unitContainer)

  createCollider()
  createEndgame()
}
