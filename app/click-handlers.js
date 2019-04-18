

function addItemClickHandler(itemCell) {

  // left click: select item, display text-box
  itemCell.div.addEventListener('click', () => {
    resetSelectedCell()
    itemCell.div.classList.add('selected')
    addSelectedFrame(itemCell)

    if (itemCell.name === "axe") {
      displayTextMessage("This axe might come in handy...")
    }
    else if (itemCell.name === "tree") {
      displayTextMessage("This tree would make a good campfire...I just need to cut it down first...")
    }



  })

  // right click:
  itemCell.div.addEventListener('contextmenu', (ev) => {
    ev.preventDefault();
    console.log("right-click on item detected...")

    updateCells()

    let positionX = itemCell.centerPosition.left
    let positionY = itemCell.centerPosition.top
    console.log("positionX: ", positionX)
    console.log("positionY: ", positionY)
    executeSelectedUnitMovement(positionX, positionY)
  })

}



function addUnitClickHandler(unitCell) {

  // left click: select unit, display text-box
  unitCell.div.addEventListener('click', () => {
    console.log('click on unit.div detected...')
    resetSelectedCell()
    unitCell.div.classList.add('selected')
    addSelectedFrame(unitCell)

    displayTextMessage("It's a cold night...better get a fire going...")
  })
}



function addContainerClickHandler(container) {

  //
  // // left click: reset selectedCell to null
  // container.div.addEventListener('click', (ev) => {
  //   resetSelectedCell()
  // })
  //
  // WARNING: LEFT CLICK CAUSES MASSIVE ERRORS!!
  // the click handler on unitContainer seems to interfere with/
  // be executed simultaneously with click handler on the unit itself...
  //


  // right click:
  container.div.addEventListener('contextmenu', (ev) => {
    ev.preventDefault();

    // console.log('click registered on unitContainer!')
    console.log("ev.pageX click: ", ev.pageX)
    console.log("ev.pageY click: ", ev.pageY)
    //
    // position based on click location minus container's coordinates
    let containerX = container.div.getBoundingClientRect().x
    let containerY = container.div.getBoundingClientRect().y
    let positionX = ev.pageX - containerX - pageXOffset
    let positionY = ev.pageY - containerY - pageYOffset

    executeSelectedUnitMovement(positionX, positionY);
  })
}






// utility functions - reset selectedCell, add frame to selectedCell, etc.
//

function resetSelectedCell() {
  // check for a selected cell,
  // then remove class and selectedFrame div if present
  let selectedCell = document.querySelector('.selected')
  if (selectedCell) {
    selectedCell.classList.remove('selected')
    let selectedFrame = document.getElementById('selected-frame')
    if (selectedFrame) {
      selectedFrame.remove()
    }
  }
}



function addSelectedFrame(cell) {
  let frame = document.createElement('div')
  frame.id = 'selected-frame'
  cell.div.appendChild(frame)
}
