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