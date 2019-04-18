
function setGameSession() {
  console.log("setGameSession is running...")

  // window.browserGameSessionId = undefined;   // use this for "new game"
  window.browserGameSessionId = (localStorage.getItem("browserGameSessionId"))   // use this for "continue game"
  // console.log("browserGameSessionId: ", browserGameSessionId)


  window.currentGameSession = null;


  // if a browserGameSessionId IS FOUND (not undefined) from localStorage.getItem...
  if (browserGameSessionId) {
    fetch(GAME_SESSION_URL + browserGameSessionId)
    .then(res => res.json())
    .then(loadedGameSession => {
      currentGameSession = loadedGameSession;
      drawContinueGame()
    })
  }
  // if NO browserGameSessionId is found (new user)...
  else if (!browserGameSessionId) {
    saveNewGameSession()
  }

}
