export class Map {
  constructor(canvasWidth, canvasHeight) {
    this.canvasWidth = canvasWidth
    this.canvasHeight = canvasHeight

    this.strokeColor = '#fff'
    this.fillColor = '#008B8B'
  }

  draw(ctx) {
    this.grid(ctx)
  }

  grid(ctx) {
    ctx.strokeStyle = this.strokeColor
    ctx.fillStyle = this.fillColor
    ctx.fillRect(0, 0, this.canvasWidth, this.canvasHeight)

    // 가로줄
    for (let i = 0; i < this.canvasWidth; i += 40) {
      ctx.beginPath()
      ctx.moveTo(0, i - 38)
      ctx.lineTo(this.canvasWidth, i - 38)
      ctx.stroke()
      ctx.closePath()
    }
    // 세로줄
    for (let i = 0; i < this.canvasHeight; i += 40) {
      ctx.beginPath()
      ctx.moveTo(i - 25, 0)
      ctx.lineTo(i - 25, this.canvasHeight)
      ctx.stroke()
      ctx.closePath()
    }
  }
}
