function cleanUp() {
  const frameOne = document.querySelector('.frame-1')
  if (frameOne && frameOne.parentNode) {
    frameOne.parentNode.removeChild(frameOne)
  }
}

export default cleanUp
