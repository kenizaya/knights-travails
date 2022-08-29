const knightMoves = (start, end) => {
  const knightOffsets = [
    [-2, -1],
    [-2, 1],
    [-1, -2],
    [-1, 2],
    [1, -2],
    [1, 2],
    [2, -1],
    [2, 1],
  ]
}

const isValid = (x, y) => {
  return !(x < 0 || x >= 8 || y < 0 || y >= 8)
}
