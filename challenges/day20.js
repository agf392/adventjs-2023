function distributeGifts(weights) {
  const weightsCopy = weights.map(subArray => [...subArray]);

  function getAdjacentPositions(matrix, [row, col]) {
    const directions = [[-1, 0], [0, 1], [1, 0], [0, -1]];
    return directions
      .map(([dRow, dCol]) => [row + dRow, col + dCol])
      .filter(([r, c]) => r >= 0 && r < matrix.length && c >= 0
        && c < matrix[0].length && matrix[r][c] !== null);
  }

  for (let i = 0; i < weightsCopy.length; i++) {
    for (let j = 0; j < weightsCopy[i].length; j++) {
      const isNull = weights[i][j] === null ? 0 : 1;
      const adjacents = getAdjacentPositions(weightsCopy, [i, j]);
      adjacents.forEach(([row, col]) => {
        weights[i][j] += weightsCopy[row][col];
      });
      weights[i][j] = Math.round(weights[i][j] / (adjacents.length + isNull));
    }
  }
  return weights
}