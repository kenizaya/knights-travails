class Move {
  constructor(x, y, moves) {
    this.x = x
    this.y = y
    this.moves = moves
  }
}

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

  const visited = new Set()
  const queue = [new Move(start[0], start[1], 0)]
  let pos = null
  let xNew = null
  let yNew = null

  while (queue.length > 0) {
    pos = queue.shift()
    if (pos.x === end[0] && pos.y === end[1]) {
      console.log('You made it in ' + pos.moves + ' moves')
      return pos.moves
    }

    if (!visited.has(pos)) {
      visited.add(pos)

      for (let offset of knightOffsets) {
        xNew = pos.x + offset[0]
        yNew = pos.y + offset[1]

        if (isValid(xNew, yNew)) {
          queue.push(new Move(xNew, yNew, pos.moves + 1))
        }
      }
    }
  }
  return -1
}

const isValid = (x, y) => {
  return x >= 0 && x < 8 && y >= 0 && y < 8
}

console.log(knightMoves([3, 3], [4, 3]))
