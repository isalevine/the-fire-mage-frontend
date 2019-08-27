// originally copied from ../classes.js

import Cell from 'Cell.js';

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