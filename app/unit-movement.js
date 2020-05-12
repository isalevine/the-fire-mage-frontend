function executeSelectedUnitMovement(positionX, positionY) {
  let selectedUnit = document.getElementsByClassName("unit cell selected")[0]
  if (selectedUnit) {
    addClickPointer(positionX, positionY)

    // code (purportedly) stops mid-transition to change target coordinates??
    selectedUnit.style.left = getComputedStyle(selectedUnit).left
    selectedUnit.style.top = getComputedStyle(selectedUnit).top

    unitCurrentX = selectedUnit.style.left.replace("px", "") - 26
    unitCurrentY = selectedUnit.style.top.replace("px", "") - 26

    // worth adding to Cell:position: centerPoint:{left:, top:}
    unitFinalX = positionX - 26
    unitFinalY = positionY - 26

    let xDistance = Math.abs(unitFinalX - unitCurrentX)
    let yDistance = Math.abs(unitFinalY - unitCurrentY)

    let xChangeTime = Math.floor(xDistance / 100) + 1
    let yChangeTime = Math.floor(yDistance / 100) + 1


    let unitTransition = `left ${xChangeTime}s linear, top ${yChangeTime}s linear`
    selectedUnit.style.transition = null
    selectedUnit.style.transition = unitTransition
    selectedUnit.style.left = unitFinalX + "px"
    selectedUnit.style.top = unitFinalY + 'px'
    // console.log("selectedUnit style set, initiating checkCollisions...")


    // start while loop to check for collisions while unit is moving

    let transitionOn = true
    let transitionCounter = 0
    selectedUnit.addEventListener('transitionend', () => {
      transitionCounter++
      if (transitionCounter === 2) {
        transitionCounter = 0
        transitionOn = false
      }
    })

    while (transitionOn) {
      let hitboxUpdater = setInterval(()=>{

        if (transitionOn === false) {
          clearInterval(hitboxUpdater);
          updateCells()
          console.log('setInterval is off!')
        }

        selectedUnit.cell.hitboxPosition = positionCreator(selectedUnit.cell.hitbox())

        // container-correction needed for accurate unit placement
        let containerX = unitContainer.div.getBoundingClientRect().x
        let containerY = unitContainer.div.getBoundingClientRect().y
        selectedUnit.cell.position = positionCreator(selectedUnit)
        selectedUnit.cell.position.left -= containerX
        selectedUnit.cell.position.top -= containerY

        // console.log('selectedUnit.cell.hitboxPosition: ', selectedUnit.cell.hitboxPosition)
        collider.checkContainerUnitCollision(selectedUnit, boardContainer)
        collider.checkItemUnitCollision(selectedUnit)
      }, 50)
      break;
    }
  }
}

function addClickPointer(positionX, positionY) {
  // check and remove current click-pointer (arrow to set unit movement target)
  let currentPointer = document.getElementsByClassName('click-pointer')[0]
  if (currentPointer) {
    currentPointer.remove()
  }

  // create and append click-pointer div, with image
  let clickPointer = document.createElement('div')
  clickPointer.classList.add('click-pointer')

  clickPointer.style.left = (positionX - 42) + "px"
  clickPointer.style.top = (positionY) + "px"

  unitContainer.div.appendChild(clickPointer)

  let img = document.createElement('img')
  img.classList.add('click-image')
  img.src = "./game-art/misc/arrow-cursor-1.png"
  clickPointer.appendChild(img)
}
