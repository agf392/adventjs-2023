function getStaircasePaths(steps, maxJump) {
  const result = [];

  function generatePaths(currentPath) {
    const sum = currentPath.reduce((acc, val) => acc + val, 0);

    if (sum === steps) {
      result.push(currentPath);
      return;
    }

    for (let i = 1; i <= maxJump; i++) {
      if (sum + i <= steps) {
        generatePaths([...currentPath, i]);
      }
    }
  }

  generatePaths([]);

  return result;
}
