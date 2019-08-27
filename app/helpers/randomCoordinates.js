// originally copied from ../classes.js

function randomCoordinates(xMin, xMax, yMin, yMax) {
    let xRange = Math.abs(xMax - xMin)
    let yRange = Math.abs(yMax - yMin)
    return {
      left: (Math.random() * xRange) + xMin,
      top:(Math.random() * yRange) + yMin
    }
  }