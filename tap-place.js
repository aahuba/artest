
export const tapPlaceComponent = {

  init() {
    console.log(123)
    const ground = document.getElementById('ground')
    let timeBegin
    let timeCont
    ground.addEventListener('click', (event) => {
      
      // Create new entity for the new object
      const existingElement = document.getElementById('pan')
      let newElement
      const lyricsSound = document.getElementById('lyricsSound').components.sound

      if (existingElement) {
        newElement = existingElement
      } else {
        newElement = document.createElement('a-entity')
        newElement.setAttribute('id', 'pan')
        this.el.sceneEl.appendChild(newElement)
        // The raycaster gives a location of the touch in the scene
        const touchPoint = event.detail.intersection.point
        newElement.setAttribute('position', touchPoint)
        newElement.addEventListener('model-loaded', () => {
          // Once the model is loaded, we are ready to show it popping in using an animation
          newElement.setAttribute('visible', 'true')
          newElement.setAttribute('animation-mixer', {
            clip: '1',
          })
          lyricsSound.playSound()
        })
        newElement.setAttribute('scale', '0.03 0.03 0.03')
        newElement.setAttribute('xrextras-hold-drag', '')
        newElement.setAttribute('xrextras-two-finger-rotate', '')
        newElement.setAttribute('xrextras-pinch-scale', '')
        newElement.setAttribute('shadow', {
          receive: false,
        })

        newElement.setAttribute('gltf-model', '#pan')
      }
      // newElement.setAttribute('visible', 'false')
    })
  },

}