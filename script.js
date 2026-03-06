let r = 30
let rows
let cols
let nextX = 0
let nextY = 0
let direction = 1

function setup() {
    windowWidth -= 30
    windowHeight -= 30
    createCanvas(windowWidth, windowHeight)
    background('#b44545')
    noStroke()
    frameRate(2)
    
    rows = (windowHeight - windowHeight % d) / d
    cols = (windowWidth - windowWidth % d) / d
}

function draw() {
    clear()
    background('#b44545')
    drawGrid(r)
    updatePosition()
}