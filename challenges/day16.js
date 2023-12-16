function transformTree(tree) {
  const fillNode = (n) => {
    const value = tree[n];
    if (typeof value !== "number") return null;
    return {
      value,
      left: fillNode(2 * n + 1),
      right: fillNode(2 * n + 2),
    };
  };
  const result = fillNode(0);
  return result;
}
