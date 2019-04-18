
function createEndgame() {
  window.endgame = {

    // case 1: mage collides with tree (with axe in inventory)
    case1: function() {
      console.log("INITIATE ENDGAME CASE #!: tree becomes campfire...")
      document.body.classList.add('unclickable')

      document.getElementsByClassName("click-pointer")[0].remove()
      document.getElementById("selected-frame").remove()
      displayTextMessage("")

      // remove event-listeners on all cells to stop selecting/movement??

      treeCell.div.classList.add('slow-fadeout')
      treeCell.div.classList.add('special-effect')
      treeCell.div.classList.remove('item')

      setTimeout(() => {
        treeCell.div.getElementsByTagName('img')[0].src = './game-art/item/item-campfire-1.png'
        treeCell.div.classList.remove('slow-fadeout')
        treeCell.div.classList.add('slow-fadein')
        setTimeout(() => {
          displayTextMessage("What?...I'm not called the <strong>axe</strong> mage...")
          setTimeout(() => {
            addTextMessage("<em>(Refresh your browser to play again!)</em>")
          }, 2000)
        }, 1600)
      }, 2000)

      // move ~20 pixels north, while fading tree into campfire
      mageCell.div.style.top = parseInt(getComputedStyle(treeCell.div).top.replace("px", "")) - 30 + "px"



    }

  }
}
