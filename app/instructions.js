

function createInstructions() {
  let instructionContainer = document.createElement('div')
  instructionContainer.id = "instruction-container"
  document.body.appendChild(instructionContainer)

  let instructionText = document.createElement('div')
  instructionText.classList.add('instruction-text')
  instructionContainer.appendChild(instructionText)

  instructionText.innerHTML = "<strong>LEFT CLICK</strong> to select your mage or an item. <br> <strong>RIGHT CLICK WITH YOUR MAGE SELECTED</strong> to move. <br> <strong>INTERACT WITH ITEMS</strong> by moving your mage on top of them. <br> <em><strong>It's cold tonight...better get a campfire going...</strong></em>"

}
