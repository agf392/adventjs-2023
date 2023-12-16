function transformTree(tree) {
  if (tree.length === 0) return null;

  const fillNode = (resultTree, n) => {
    return {
      value: tree[n],
      left: typeof tree[2 * n + 1] === "number"
        ? fillNode(resultTree, 2 * n + 1) : null,
      right: typeof tree[2 * n + 2] === "number"
        ? fillNode(resultTree, 2 * n + 2) : null,
    };
  };

  const resultTree = fillNode({}, 0);
  return resultTree;
}