function createChristmasTree(ornaments, height) {
  let result = "";
  let index = 0;
  for (let i = 1; i <= height; i++) {
    result += " ".repeat(height - i);
    for (let j = 0; j < i; j++) {
      if (j != 0) result += " "
      result += ornaments[index];
      if (index < ornaments.length-1) index++;
      else index = 0;
    }
    result += "\n"
  }
  return (result += " ".repeat(height - 1) + "|\n");
}