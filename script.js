let r = 30
let rows = 0
let cols = 0
let nextX = 0
let nextY = 0

function setup() {
    windowWidth -= 30
    windowHeight -= 30
    createCanvas(windowWidth, windowHeight)
    background('#b44545')
    noStroke()
    frameRate(2)
}

function draw() {
    clear()
    background('#b44545')
    drawGrid(r)
    updatePosition()
}