
function createCollider() {

  window.collider = {
    boardContainer: boardContainer,
    units: [],
    items: [],

    checkContainerUnitCollision: function(selectedUnit, container) {
      // NOTE: boardContainer collisions do NOT rely on the exact dimensions
      // of either the boardContainer Hitbox or the unit Hitbox--in this
      // iteration, the boardContainer Hitbox has EXTRA MARGIN built in
      // to provide padding (& a slight rebound) to prevent units from
      // getting stuck during a border-collision event.
      // (Also, visually, units cannot move their GREEN SELECTED FRAMES
      // past the edge of the boardContainer, so padding aims to prevent this.)

      let unitHitboxPosition = selectedUnit.cell.hitboxPosition
      let containerHitboxPosition = container.hitboxPosition
      // console.log('unitHitboxPosition: ', unitHitboxPosition)
      // console.log('containerHitboxPosition: ', containerHitboxPosition)

      // left side - extra-padding 8px, rebound 3px
      if (unitHitboxPosition.left <= containerHitboxPosition.left + 8) {
          console.log("BORDER COLLISION DETECTED!! (left)")
          selectedUnit.style.left = parseInt(getComputedStyle(selectedUnit).left.replace("px", "")) + 3 + "px"
        }
      // top side - extra-padding 10px, rebound 3px
      if (unitHitboxPosition.top <= containerHitboxPosition.top + 10) {
          console.log("BORDER COLLISION DETECTED!! (top)")
          selectedUnit.style.top = parseInt(getComputedStyle(selectedUnit).top.replace("px", "")) + 3 + "px"
        }
      // right side - extra-padding 7px, rebound -1px
      if (unitHitboxPosition.left + unitHitboxPosition.width >= containerHitboxPosition.left + containerHitboxPosition.width - 7) {
          console.log("BORDER COLLISION DETECTED!! (right)")
          selectedUnit.style.left = parseInt(getComputedStyle(selectedUnit).left.replace("px", "")) - 1 + "px"
        }
      // bottom side - extra-padding 10px, rebound -1px
      if (unitHitboxPosition.top + unitHitboxPosition.height >= containerHitboxPosition.top + containerHitboxPosition.height - 10) {
          console.log("BORDER COLLISION DETECTED!! (bottom)")
          // let bottomCollision = true
          selectedUnit.style.top = parseInt(getComputedStyle(selectedUnit).top.replace("px", "")) - 1 + "px"
        }
    },


    checkItemUnitCollision: function(selectedUnit) {
      let hasJustCollided = false;
      let itemCollided = null;
      let unitHitboxPosition = selectedUnit.cell.hitboxPosition
      for (i = 0; i < collider.items.length; i++) {
        if (collider.items[i].onMap) {
          let itemHitboxPosition = collider.items[i].hitboxPosition
          // console.log("itemHitboxPosition: ", itemHitboxPosition)
          // console.log("unitHitboxPosition: ", unitHitboxPosition)

          if (itemHitboxPosition.left < unitHitboxPosition.left + unitHitboxPosition.width &&
            itemHitboxPosition.left + itemHitboxPosition.width > unitHitboxPosition.left &&
            itemHitboxPosition.top < unitHitboxPosition.top + unitHitboxPosition.height &&
            itemHitboxPosition.top + itemHitboxPosition.height > unitHitboxPosition.top
          ) {
            console.log("ITEM-UNIT COLLISION DETECTED!!")
            hasJustCollided = true;
            itemCollided = collider.items[i]
          }
        }


      }
      // console.log("itemCollided: ", itemCollided)
      if (itemCollided != null) {
        itemCollisionEvent(selectedUnit.cell, itemCollided)
      }


    },


    // checkUnitUnitCollision: function() {}  // ADD FOR MULTIPLAYER!!


  }
}


// unsure whether the following functions should be global scope,
// or attached to the window.collider object...

// currently, arguments are not the same type of object:
// unit is a DIV (must use unit.cell), and item is a CELL
function itemCollisionEvent(unitCell, itemCell) {

  if (itemCell === axeCell && unitCell === mageCell) {
    console.log("itemCollisionEvent detected for axeCell and mageCell...")
    itemCell.onMap = false

    document.getElementsByClassName("click-pointer")[0].remove()

    itemCell.div.classList.remove('item')
    itemCell.div.classList.add('fadeout', 'special-effect')
    itemCell.div.style.top = parseInt(getComputedStyle(itemCell.div).top.replace("px", "")) - 30 + "px"



    setTimeout(() => {
      itemCell.div.remove()
      console.log(`${itemCell.name} gained to your inventory!`)
      addItemToInventory(unitCell, axeCell.name)

      let itemBox = document.getElementById('inventory-container-box-axe')
      let div = document.createElement('div')
      div.classList.add('zero-opacity')
      itemBox.appendChild(div)
      // NAME THIS "item-box-div" or some shit...

      let img = document.createElement('img')
      img.style = "width: 100%; height: 100%;"
      img.src = axeCell.div.getElementsByTagName("img")[0].src
      div.classList.remove('zero-opacity')
      // img.classList.add("slow-fadein")
      // fade-in not working...DEBUG AND REFACTOR!!
      div.appendChild(img)

    }, 1000)
  }

  if (itemCell === treeCell && unitCell === mageCell) {
    if (unitCell.inventory.includes(axeCell.name)) {
      // itemCell div is NOT removed -- .onMap is false to prevent
      // new collisions from being detected/executed!!
      itemCell.onMap = false
      endgame.case1()
    } else {
      console.log("This tree would make a good campfire...I just need to cut it down first...")
    }
  }

}


function addItemToInventory(unitCell, itemName) {
  unitCell.inventory.push(itemName)
  console.log("unitCell.inventory: ", unitCell.inventory)
}
