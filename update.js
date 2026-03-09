function updatePosition() {
    changeDirection()
    move()
}

function changeDirection() {
    if (nextPos.x == 0 || nextPos.x == cols-1) {
        directionX *= -1
    }
    if (nextPos.y == 0 || nextPos.y == rows-1) {
        directionY *= -1
    }
}

function move() {
    nextPos.x += directionX
    nextPos.y += directionY
}