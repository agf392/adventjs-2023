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

function organizeChristmasDinnerV2(dishes) {
  const ingredients = {};

  for (const dish of dishes) {
    const dishName = dish[0];
    for (let i = 1; i < dish.length; i++) {
      const ingredient = dish[i];
      ingredients[ingredient] = ingredients[ingredient]
        ? [...ingredients[ingredient], dishName]
        : [dishName];
    }
  }

  const orderedIngredients = Object.keys(ingredients).sort();

  const result = orderedIngredients
    .filter((ingredient) => ingredients[ingredient].length > 1)
    .map((ingredient) => [
      ingredient,
      ...ingredients[ingredient].sort(),
    ]);

  return result;
}