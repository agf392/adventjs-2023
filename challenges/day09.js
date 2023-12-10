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

// Less complexity
function adjustLights2(lights) {
  let count = [0, 0];
  for(let i = 0; i < lights.length; i++) {
    const remainder = i % 2;
    if (lights[i] === lights[0]) {
      count[remainder] = count[remainder] + 1;
    } else {
      const remainder2 = (remainder - 1) * (remainder - 1);
      count[remainder2] = count[remainder2] + 1;
    }
  };
  return Math.min(...count);
}
