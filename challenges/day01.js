function findFirstRepeated(gifts) {
    let copyArray = [];
    for (let i = 0; i < gifts.length; i++) {
      if (copyArray.includes(gifts[i])) return gifts[i];
      copyArray.push(gifts[i]);
    }
    return -1;
  }
