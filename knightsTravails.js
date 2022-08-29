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
  const queue = [start]
  let pos = null

  while (queue.length) {
    pos = queue.shift()
    if (pos[0][0] === end[0][0] && pos[0][1] === end[0][1]) console.log(pos)
  }
}

const isValid = (x, y) => {
  return !(x < 0 || x >= 8 || y < 0 || y >= 8)
}

knightMoves([3, 3], [3, 3])
