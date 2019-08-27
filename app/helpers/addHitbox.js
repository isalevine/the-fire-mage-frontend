// originally copied from ../classes.js

function addHitbox(element) {
    let hitbox = document.createElement('div')
    hitbox.id = `${element.name}-hitbox`
    hitbox.classList.add('hitbox')
    // console.log(element)
    element.div.appendChild(hitbox)
    element.hitboxPosition = positionCreator(hitbox)
  }