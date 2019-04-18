

function createStartMenu(){
  let startMenu = document.createElement('div')
  startMenu.id = "start-menu"
  gameWindow.appendChild(startMenu)

  let menuTextContainer = document.createElement('div')
  menuTextContainer.id = "menu-text-container"
  startMenu.appendChild(menuTextContainer)


  let menuText = document.createElement('p')
  menuText.classList.add("menu-text")
  menuText.textContent = "The Fire Mage"
  menuTextContainer.appendChild(menuText)


  let menuFormContainer = document.createElement('div')
  menuFormContainer.id = "menu-form-container"
  startMenu.appendChild(menuFormContainer)


  // let menuForm = document.createElement('div')
  // menuForm.id = "menu-form"


  let newGameButton = document.createElement('button')
  newGameButton.id = "new-game-button"
  newGameButton.classList.add("menu-button")
  menuFormContainer.appendChild(newGameButton)
  newGameButton.textContent = "New Game"

    newGameButton.addEventListener('click', () => {
      console.log("Start new game!")

      window.browserGameSessionId = undefined;   // use this for "new game"

      setTimeout(() => {
        startMenu.classList.add('slow-fadeout')
        setTimeout(()=> {
          startMenu.remove()
        }, 1100)
      }, 250)


      setGameSession()
    })


  let continueGameButton = document.createElement('button')
  continueGameButton.id = "continue-game-button"
  continueGameButton.classList.add("menu-button")
  menuFormContainer.appendChild(continueGameButton)
  continueGameButton.textContent = "Continue"

    continueGameButton.addEventListener('click', () => {
      console.log("Continue game!")

      window.browserGameSessionId = (localStorage.getItem("browserGameSessionId"))   // use this for "continue game"

      setTimeout(() => {
        startMenu.classList.add('slow-fadeout')
        setTimeout(()=> {
          startMenu.remove()
        }, 1100)
      }, 250)



      setGameSession()
    })

  createInstructions()
}
