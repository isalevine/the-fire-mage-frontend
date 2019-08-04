
function setGameSession() {
  console.log("setGameSession is running...")

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

  // is this return necessary to time the async/await in start-menu??
  // return "complete"
}
