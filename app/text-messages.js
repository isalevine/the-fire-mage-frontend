
function displayTextMessage(string, elementId) {
  elementId = elementId || "player-menu-text-box"

  let textBox = document.getElementById(`${elementId}`)
  if (textBox.firstChild) {
    textBox.firstChild.remove()
  }
  let textDiv = document.createElement("div")
  textDiv.classList.add("text-message")
  textDiv.innerHTML = string
  textBox.appendChild(textDiv)

}


function addTextMessage(string, elementId) {
  elementId = elementId || "player-menu-text-box"

  // build in: check for more than 3(?)
  // before clearing firstChild...

  let textBox = document.getElementById(`${elementId}`)
  let textDiv = document.createElement("div")
  textDiv.classList.add("text-message")
  textDiv.innerHTML = string
  textBox.appendChild(textDiv)

}
