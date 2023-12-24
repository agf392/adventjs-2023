function compile(code) {
  code = [...code];
  let counter = 0;
  let returnPosition = -1;
  let index = 0;
  const operations = {
    "+": () => counter + 1,
    "-": () => counter - 1,
    "*": () => counter * 2,
    "%": (pos) => {
      returnPosition = pos;
      return counter;
    },
    "<": () => {
      if (returnPosition !== -1) {
        index = returnPosition;
        returnPosition = -1;
      }
      return counter;
    },
    "?": () => counter
  }
  while(index < code.length) {
    if (code[index] !== "¿") {
      counter = operations[code[index]](index);
    } else {
      if (counter <= 0) {
        index = code.indexOf("?");
        code[index] = ""
      }
    }
    index++;
  }
  return counter;
}