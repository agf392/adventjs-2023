function revealSabotage(store) {
  const rows = store.length;
  const cols = store[0].length;

  const directions = [
    [-1, -1], [-1, 0], [-1, 1],
    [0, -1], [0, 1],
    [1, -1], [1, 0], [1, 1]
  ];

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (store[i][j] === '*') {
        for (let k = 0; k < directions.length; k++) {
          const x = i + directions[k][0];
          const y = j + directions[k][1];
          if (x >= 0 && x < rows && y >= 0 && y < cols && store[x][y] !== '*') {
            store[x][y] = `${(parseInt(store[x][y]) || 0) + 1}`;
          }
        }
      }
    }
  }

  return store;
}