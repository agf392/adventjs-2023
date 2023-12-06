function cyberReindeer(road, time) {
  const result = [road];
  let roadSteps = road.split("");
  let openedDoor = false;
  let reindeerIndex = 0;
  for (let t = time; t > 1; t--) {
    if (t === time - 4) {
      roadSteps = roadSteps.map((step) => (step === "|" ? "*" : "."));
    }
    if (roadSteps[reindeerIndex + 1] !== "|") {
      roadSteps[reindeerIndex] = openedDoor ? "*" : ".";
      reindeerIndex++;
      openedDoor = roadSteps[reindeerIndex] !== ".";
      roadSteps[reindeerIndex] = "S";
    }
    result.push(roadSteps.join(""));
  }
  return result;
}

function cyberReindeerString(road, time) {
  const result = [road];
  let openRoad = road.replace("S", ".");
  let reindeerIndex = 0;
  for (let t = time; t > 1; t--) {
    if (t === time - 4) {
      openRoad = openRoad.replaceAll("|", "*");
    }
    if (openRoad.charAt(reindeerIndex + 1) !== "|") {
      reindeerIndex++;
      road = `${openRoad.slice(0, reindeerIndex)}S${openRoad.slice(
        reindeerIndex + 1,
        openRoad.length
      )}`;
    }
    result.push(road);
  }
  return result;
}
