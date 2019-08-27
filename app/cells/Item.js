// originally copied from ../classes.js

import Cell from 'Cell.js';

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