function cyberReindeer(road, time) {
  const result = [road];
  let roadSteps = road.split('');
  let openedDoor = false;
  let reindeerIndex = 0;
  for (let t = time; t > 1; t--) {
    if (t === time - 4) {
      roadSteps = roadSteps.map(step => step === '|' ? '*' : '.');
    }
    if (roadSteps[reindeerIndex + 1] !== '|') {
      roadSteps[reindeerIndex] = openedDoor ? '*' : '.';
      reindeerIndex++;
      openedDoor = roadSteps[reindeerIndex] !== '.';
      roadSteps[reindeerIndex] = 'S';
    }
    result.push(roadSteps.join(''));
  }
  return result;
}

function cyberReindeerStrings(road, time) {
  const result = [road];
  let openedDoor = false;
  let reindeerIndex = 0;
  for (let t = time; t > 1; t--) {
    if (t === time - 4) {
      road = road.replaceAll("|", "*");
    }
    if (road.charAt(reindeerIndex + 1) !== "|") {
      const previousRoad = road;
      reindeerIndex++;
      road = `${road.slice(0, reindeerIndex - 1)}${
        openedDoor ? "*" : "."
      }S${road.slice(reindeerIndex + 1, road.length)}`;
      openedDoor = previousRoad.charAt(reindeerIndex) !== ".";
    }
    result.push(road);
  }
  return result;
}