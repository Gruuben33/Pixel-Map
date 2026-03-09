let r = 20
let d = r * 2
let rows
let cols
let nextPos
let directionX = 1
let directionY = 1

function setup() {
    windowWidth -= 30
    windowHeight -= 30
    createCanvas(windowWidth, windowHeight)
    background('#b44545')
    noStroke()
    rectMode(CENTER)
    frameRate(30)

    rows = (windowHeight - windowHeight % d) / d
    cols = (windowWidth - windowWidth % d) / d
    nextPos = createVector(1, 1)
}

function draw() {
    clear()
    background('#b44545')
    drawGrid()
    updatePosition()
}