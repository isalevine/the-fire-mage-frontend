// originally copied from ../classes.js

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