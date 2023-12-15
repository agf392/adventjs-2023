function maxGifts(houses) {
  let incl = 0;
  let excl = 0;
  for (let i = 0; i < houses.length; i++) {
      let newExcl = Math.max(incl, excl);
      incl = excl + houses[i];
      excl = newExcl;
  }
  return Math.max(incl, excl);
}