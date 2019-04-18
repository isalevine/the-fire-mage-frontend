document.addEventListener('DOMContentLoaded', () => {
  console.log("app.js is running!")

  window.gameWindow = document.getElementById('game-window')

  createStartMenu()



    // currently, unitContainer is the highest z-index
    // container that can handle map-wide click events
    //
    // THIS MAY MAKE SENSE - the only layer that players
    // interact with directly IS the unit-layer...
    // (interacting with the item-layer is really limited
    // to only clicking on items to assign a move-target,
    // or to bring up their text-box...)







// end of DOMContentLoaded eventlistener
})
