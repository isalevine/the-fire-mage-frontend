//
// !!!! NEXT: !!!!
//
// Add an update to the hitboxPosition attribute
// on the Cell classes whenever they are moving!
//
// ~~~~~~~~~~~~~~~
//
//


class GameSession {
  constructor(gameSessionId) {
    this.id = gameSessionId
  }
}


class Container {
  constructor(name) {
   let div = document.createElement('div')
   div.id = `${name}-container`
   div.classList.add('container')
   this.div = div
   this.hitboxPosition = positionCreator(div)
   gameWindow.appendChild(div)
  }
}
// consider refactoring other classes to have
// their hitboxes as hitboxPosition: attributes?




class Cell {
  constructor(containerQuery, position, onMap = true) {
    this.position = position;
    this.onMap = onMap

    let container = document.getElementById(`${containerQuery}`)
    let div = document.createElement('div')
    div.classList.add('cell')


    if (this.onMap) {
      container.appendChild(div)
    }


    this.div = div
    div.cell = this

    this.div.setAttribute('style', `left: ${this.position.left}px; top: ${this.position.top}px`)
  }

  hitbox() {
    return this.div.getElementsByClassName('hitbox')[0]
  }

  // is this function needed anymore??
  // MORE IMPORTANT: make sure to add SaveToDatabase during moves/collisions...
  reDraw() {
    this.div.setAttribute('style', `left: ${this.position.left}px; top: ${this.position.top}px`)
    // collider.collisionCheck()
  }

}



class Unit extends Cell {
  constructor(name, container, position, onMap) {
    super(container, position, onMap)
    this.name = name
    this.cellType = "unit"
    this.gameSessionId = currentGameSession.id

    this.div.classList.add('unit', `${name}`)
    this.div.id = `unit-${name}`
    this.inventory = []

    collider.units.push(this)

    this.position.width = this.div.getBoundingClientRect().width
    this.position.height = this.div.getBoundingClientRect().height

    addImage(this, "./game-art/unit/unit-mage-1.png")
    addHitbox(this)
    addUnitClickHandler(this)
  }
}


class Item extends Cell {
  constructor(name, container, position, onMap) {
    super(container, position, onMap)
    this.name = name
    this.cellType = "item"
    this.div.classList.add('item', `${name}`)
    this.div.id = `item-${name}`

    collider.items.push(this)

    this.position.width = this.div.getBoundingClientRect().width
    this.position.height = this.div.getBoundingClientRect().height

    this.centerPosition = {
      left: (position.width / 2) + position.left,
      top: (position.width / 2) + position.top
    }

    addImage(this, `./game-art/item/item-${name}-1.png`)
    addHitbox(this)
    addItemClickHandler(this)
  }
}


function positionCreator(div) {
  return {
    left: div.getBoundingClientRect().left,
    top: div.getBoundingClientRect().top,
    width: div.getBoundingClientRect().width,
    height: div.getBoundingClientRect().height
  }
}


function randomCoordinates(xMin, xMax, yMin, yMax) {
  let xRange = Math.abs(xMax - xMin)
  let yRange = Math.abs(yMax - yMin)
  return {
    left: (Math.random() * xRange) + xMin,
    top:(Math.random() * yRange) + yMin
  }
}




// functions to add divs & event-listeners
// to unit & item cells

function addImage(cell, src) {
  let img = document.createElement('img')
  img.src = src
  img.style.width = "100%"
  img.style.height = "100%"
  cell.div.appendChild(img)
}


function addHitbox(element) {
  let hitbox = document.createElement('div')
  hitbox.id = `${element.name}-hitbox`
  hitbox.classList.add('hitbox')
  // console.log(element)
  element.div.appendChild(hitbox)
  element.hitboxPosition = positionCreator(hitbox)
}
