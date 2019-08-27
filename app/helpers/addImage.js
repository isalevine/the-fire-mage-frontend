// originally copied from ../classes.js

function addImage(cell, src) {
    let img = document.createElement('img')
    img.src = src
    img.style.width = "100%"
    img.style.height = "100%"
    cell.div.appendChild(img)
  }