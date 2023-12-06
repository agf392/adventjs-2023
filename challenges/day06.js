function maxDistance(movements) {
  let distance = 0;
  let wildcard = 0;
  for(let i = 0; i < movements.length; i++) {
    if (movements[i] === "<") distance--;
    else if (movements[i] === ">") distance++;
    else wildcard++;
  }
  const sign = Math.sign(distance) || 1;
  return Math.abs(distance + (sign * wildcard))
}
