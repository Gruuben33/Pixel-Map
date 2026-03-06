function updatePosition() {
    changeDirection()
    move()
}

function changeDirection() {
    if (nextX == 0 || nextX == cols-1 || nextY == 0 || nextY == rows-1) {
        direction *= -1
    }
}

function move() {
    nextX += direction
    nextY += direction
}