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

  const visited = []
  const queue = [[start, end]]
  let pos = null

  while (queue.length) {
    pos = queue.shift()
    if (pos[0][0] === pos[1][0] && pos[0][1] === pos[1][1]) return
  }
}

const isValid = (x, y) => {
  return !(x < 0 || x >= 8 || y < 0 || y >= 8)
}

knightMoves([3, 3], [3, 3])
