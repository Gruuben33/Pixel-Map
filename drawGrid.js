function drawGrid(r) {
    let alreadyDrawn = false
    d = r*2
    rows = (windowHeight - windowHeight % d) / d
    cols = (windowWidth - windowWidth % d) / d
    fill('#ff5555')
    for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
            if (x == 0 || y == 0 || x == cols-1 || y == rows-1) {
                fill('#5555ff')
            }
            else if (x == nextX && y == nextY && alreadyDrawn == false) {
                fill('#55ff55')
                alreadyDrawn = true
            }
            circle(x*d+r, y*d+r, d)
            fill('#ff5555')
        }
    }
}