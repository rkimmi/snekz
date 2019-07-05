let cvs
let ctx

let unit = 32

document.addEventListener('DOMContentLoaded', function() {
  cvs = document.getElementById('canvas')
  ctx = cvs.getContext('2d')
  let game = setInterval(draw, 100)
  // let audio = new Audio()
  // audio.src = 'snek.mp3'
})

let score = 0

function draw() {
  let ground = new Image()
  ground.src = 'ground.png'
  // ctx.drawImage(ground, 0, 0)

  let snake = []
  snake.push({ x: 9 * unit, y: 10 * unit })
  snake.push({ x: 8 * unit, y: 10 * unit })

  for (let i = 0; i < snake.length; i++) {
    ctx.fillStyle = i == 0 ? 'green' : 'white'
    ctx.fillRect(snake[i].x, snake[i].y, unit, unit)
    ctx.strokeStyle = 'red'
    ctx.strokeRect(snake[i].x, snake[i].y, unit, unit)
  }
  ctx.fillStyle = 'red'
  ctx.font = '45px Changa One'
  ctx.fillText(score, 2 * unit, 1.6 * unit)
  drawFood()
}

let food = {
  x: Math.floor(Math.random() * 17 + 1) * unit,
  y: Math.floor(Math.random() * 15 + 3) * unit
}

// up = 38
// left = 37
// right = 39
// down = 40
document.addEventListener('keydown', move)
let d

function move(e) {
  if (e.keyCode === 37 && d !== 'RIGHT') {
    d = 'LEFT'
  } else if (e.keyCode === 38 && d !== 'DOWN') {
    d = 'UP'
  } else if (e.keyCode === 39 && d !== 'LEFT') {
    d = 'RIGHT'
  } else if (e.keyCode === 40 && d !== 'UP') {
    d = 'DOWN'
  }
  console.log(d)
  // food = {
  //   x: Math.floor(Math.random() * 17 + 1) * unit,
  //   y: Math.floor(Math.random() * 15 + 3) * unit
  // }
  drawFood()
}

function drawFood() {
  let foodImg = new Image()
  foodImg.src = 'food.png'
  ctx.drawImage(foodImg, food.x, food.y)
}
