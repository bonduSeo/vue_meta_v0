import { Map } from './map.js'
import { Character } from './character.js'

class App {
  constructor() {
    this.canvas = document.querySelector('#metaCanvas')

    this.ctx = this.canvas.getContext('2d')

    // this.canvas.width = window.innerWidth - 50;
    // this.canvas.height = window.innerHeight - 50;

    this.char = new Character(this.canvas.width, this.canvas.height)
    this.map = new Map(this.canvas.width, this.canvas.height)

    // window.onkeypress = (e) => { console.log(e); }
    document.onkeydown = this.keyDownEventHandler.bind(this)

    window.requestAnimationFrame(this.animate.bind(this))
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)

    this.map.draw(this.ctx)
    this.char.draw(this.ctx)
  }

  animate() {
    this.draw()
    window.requestAnimationFrame(this.animate.bind(this))
  }

  keyDownEventHandler(e) {
    if (e.keyCode === 38) {
      // up
      this.char.direction = 0
      this.char.count = 0
    } else if (e.keyCode === 40) {
      // down
      this.char.direction = 1
      this.char.count = 0
    } else if (e.keyCode === 37) {
      // left
      this.char.direction = 2
      this.char.count = 0
    } else if (e.keyCode === 39) {
      // right
      this.char.direction = 3
      this.char.count = 0
    }
  }
}

window.onload = () => {
  ;(() => {
    return new App()
  })()
}
