let canvas = document.getElementById('canvas')
let context = canvas.getContext('2d')

let window_width = window.innerWidth
let window_height = window.innerHeight

context.canvas.width = window_width
context.canvas.height = window_height

let animFrame = window.requestAnimationFrame ||
                window.webkitRequestAnimationFrame ||
                window.mozRequestAnimationFrame ||
                window.oRequestAnimationFrame ||
                window.msRequestAnimationFrame ||
                function (callback) {
                  window.setTimeout(callback, 1000 / 60)
                }

function canvas_resize () {
  let rswd_width = window.innerWidth
  let rswd_height = window.innerHeight
  canvas.setAttribute('width', rswd_width)
  canvas.setAttribute('height', rswd_height)
}

window.addEventListener('resize', canvas_resize, false)
canvas_resize()

function getRandomInt (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

const snows = []

function snow () {
  this.position_x = getRandomInt(0, window_width)
  this.position_y = getRandomInt(0, window_height)
  this.snow_size = getRandomInt(1, 4)
  this.speed = getRandomInt(1, 3)
  this.wind = getRandomInt(0, 0.5)
}

snow.prototype.draw = function () {
  let snow_grad = context.createRadialGradient(
    this.position_x,
    this.position_y,
    this.snow_size * 0.6,
    this.position_x,
    this.position_y,
    this.snow_size
  )
  snow_grad.addColorStop(0, 'rgba(255, 255, 255, 0.8)')
  snow_grad.addColorStop(0.5, 'rgba(255, 255, 255, 0.2)')
  snow_grad.addCplorStop(1, 'rgba(255 ,255, 255, 0.1)')
  context.beginPath()
  context.fillStyle = snow_grad
  context.arc(this.position_x, this.position_y, this.snow_size, Math.PI * 2)
  context.closePath()
}

snow.prototype.move = function () {
  this.position_x += this.wind + Math.sin(this.position_y / 20) * 0.3
  this.position_y += this.speed
  if (this.position_y > context.canvas.height) {
    this.position_y = 0
    this.position_x = getRandomInt(0, window_width)
  }
}

function snow_density (snow_count) {
  for(let num = 0; num < snow_count; num++) {
    snows[num] = new snow()
  }
}

function snow_draw () {
  context.clearRect(0, 0, window_width, window_height)
  for (let num = 0; num < snows.length; num++) {
    snows[num].draw()
  }
}

function snow_move () {
  for (let num = 0; num < snows.length; num++) {
    snows[num].move()
  }
}

function snowy () {
  snow_draw()
  snow_move()
  animFrame(snowy)
}

snow_density(80)
snowy()
