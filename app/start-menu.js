

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

      fetch(GAME_SESSION_URL + `${browserGameSessionId}`)
      .then(response => {
        if (!response.ok) {
          displayContinueGameError()
        } else {
          response.json()
        }
      })
      // .then(res => res.json())
      .then(previousGameSession => {
        console.log("data from fetch: ", previousGameSession)
        if (previousGameSession.complete || !previousGameSession.in_progress) {

          // alert("Game already completed! Please start a new one.")
          displayContinueGameError()


        } else {
          setTimeout(() => {
            startMenu.classList.add('slow-fadeout')
            setTimeout(()=> {
              startMenu.remove()
            }, 1100)
          }, 250)

          setGameSession()
        }
      })




      // setTimeout(() => {
      //   startMenu.classList.add('slow-fadeout')
      //   setTimeout(()=> {
      //     startMenu.remove()
      //   }, 1100)
      // }, 250)
      //
      //
      //
      // setGameSession()
    })

  createInstructions()
}


function displayContinueGameError() {
  let startMenu = document.getElementById('start-menu')

  let errorContainer = document.createElement('div')
  errorContainer.id = "continue-game-error-container"
  startMenu.appendChild(errorContainer)

  let mageDiv = document.createElement('div')
  mageDiv.id = "continue-game-error-mage"
  errorContainer.appendChild(mageDiv)

  let mageImg = document.createElement('img')
  mageImg.classList.add('continue-game-error-img')
  mageImg.src = "./game-art/unit/unit-mage-1.png"
  mageDiv.appendChild(mageImg)

  let errorText = document.createElement('div')
  errorText.classList.add("continue-game-error-text")
  errorText.textContent = "Game already completed! Please start a new game."
  errorContainer.appendChild(errorText)
}
