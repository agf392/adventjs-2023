function travelDistance(map) {
  let totalDistance = 0;
  const mapArray = [...map];
  let coordMap = {};
  let row = 0;
  let column = 0;
  mapArray.forEach((el) => {
    column++;
    if (el === "\n") {
      row++;
      column = 0;
    } else if (el !== ".")
      coordMap = {
        ...coordMap,
        [el]: [row, column - 1]
      }
  })
  for (const key in coordMap) {
    const element = coordMap[key];
    totalDistance +=
      Math.abs(element[0] - coordMap["S"][0])
      + Math.abs(element[1] - coordMap["S"][1])
    coordMap["S"] = element;
  }
  return totalDistance;
}