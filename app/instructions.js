

function createInstructions() {
  let instructionContainer = document.createElement('div')
  instructionContainer.id = "instruction-container"
  document.body.appendChild(instructionContainer)

  let instructionText = document.createElement('div')
  instructionText.classList.add('instruction-text')
  instructionContainer.appendChild(instructionText)

  instructionText.innerHTML = "<strong>LEFT CLICK</strong> to select a unit or item. <br> <strong>RIGHT CLICK</strong> to move your unit when selected. <br> <strong>INTERACT WITH ITEMS</strong> by moving your unit on top of them. <br> <em><strong>It's cold tonight...better get a campfire going...</strong></em>"

}
