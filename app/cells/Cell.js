// originally copied from ../classes.js

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
  
  }