// originally copied from ../classes.js

function positionCreator(div) {
    return {
      left: div.getBoundingClientRect().left,
      top: div.getBoundingClientRect().top,
      width: div.getBoundingClientRect().width,
      height: div.getBoundingClientRect().height
    }
  }