function autonomousDrive(store, movements) {
  const floorLength = store[0].length;
  const storeLength = store.length;

  const getInitPosition = () => {
    let position = [0, 0];
    store.forEach((floor, index) => {
      if (floor.includes("!")) {
        position[0] = index;
      }
    });
    position[1] = store[position[0]].indexOf("!");
    return position;
  };

  const move = (position, direction) => {
    let newPosition = [...position];
    if (direction === "R") {
      newPosition[1] = position[1] + 1;
    } else if (direction === "L") {
      newPosition[1] = position[1] - 1;
    } else if (direction === "U") {
      newPosition[0] = position[0] - 1;
    } else if (direction === "D") {
      newPosition[0] = position[0] + 1;
    }
    return newPosition;
  };

  const validPosition = ([i, j]) => {
    if (j < 0 || j >= floorLength || i < 0 || i >= storeLength) return false;
    if (store[i][j] === "*") return false;
    return true;
  };

  const [initI, initJ] = getInitPosition();
  let lastPosition = [initI, initJ];
  let nextPosition = [initI, initJ];

  for (let i = 0; i < movements.length; i++) {
    const direction = movements[i];
    nextPosition = move(lastPosition, direction);
    if (validPosition(nextPosition)) lastPosition = nextPosition;
  }

  const [i, j] = lastPosition;
  store[initI] =
    store[initI].slice(0, initJ) +
    "." +
    store[initI].slice(initJ + 1, floorLength);
  store[i] = store[i].slice(0, j) + "!" + store[i].slice(j + 1, floorLength);
  return store;
}

function autonomousDriveChatGPTVersion(store, movements) {
  let initI = 0;
  let initJ = 0;
  let lastPosition = [0, 0];

  for (let i = 0; i < store.length; i++) {
    const index = store[i].indexOf("!");
    if (index !== -1) {
      initI = i;
      initJ = index;
      lastPosition = [initI, initJ];
      break;
    }
  }

  for (const direction of movements) {
    let [currentX, currentY] = lastPosition;
    let nextX = currentX;
    let nextY = currentY;

    if (direction === "R") nextY++;
    else if (direction === "L") nextY--;
    else if (direction === "U") nextX--;
    else if (direction === "D") nextX++;

    if (
      nextX >= 0 &&
      nextX < store.length &&
      nextY >= 0 &&
      nextY < store[0].length &&
      store[nextX][nextY] !== "*"
    ) {
      lastPosition = [nextX, nextY];
    }
  }

  const [i, j] = lastPosition;
  store[initI] = 
    store[initI].substring(0, initJ) + "." + store[initI].substring(initJ + 1);
  store[i] = store[i].substring(0, j) + "!" + store[i].substring(j + 1);
  
  return store;
}