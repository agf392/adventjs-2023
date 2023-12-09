function adjustLights(lights) {
  let count1 = 0;
  let count2 = 0;
  const firstLight = lights[0];
  lights.forEach((light, index) => {
    if (index % 2 === 0) {
      if (light === firstLight) count1++;
      else count2++;
    } else {
      if (light === firstLight) count2++;
      else count1++;
    }
  });
  return Math.min(count1, count2);
}
