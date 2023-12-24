function organizeChristmasDinner(dishes) {
  let ingridients = {};
  let result = [];
  for (let i = 0; i < dishes.length; i++) {
    for (let j = 1; j < dishes[i].length; j++) {
      const ingridient = dishes[i][j];
      ingridients = {
        ...ingridients,
        [ingridient]: [dishes[i][0]],
        ...(ingridients[ingridient] && { [ingridient]: [...ingridients[ingridient], dishes[i][0]] }),
      }
    } 
  }

  const orderedIngridients = [...Object.keys(ingridients).sort((a, b) => a.localeCompare(b))];

  for (const iterator of orderedIngridients) {
    if (ingridients[iterator].length > 1) {
      result.push([iterator, ...ingridients[iterator].sort((a, b) => a.localeCompare(b))])
    }
  }
  return result;
}