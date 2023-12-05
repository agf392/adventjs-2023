function decode(message) {
  let lastOpenPosition;
  let messageArray = message.split("");
  for (let i = 0; i < message.length; i++) {
    if (messageArray[i] === "(") lastOpenPosition = i;
    if (messageArray[i] === ")") {
      messageArray.splice(
        lastOpenPosition, i - lastOpenPosition + 1,
        messageArray.slice(lastOpenPosition + 1, i)
        .reverse());
      const decodedString = decode(messageArray.flat(Infinity).join(""));
      return decodedString;
    }
  }
  return message;
}

function decode2(message) {
  let lastOpenPosition;
  for (let i = 0; i < message.length; i++) {
    if (message[i] === "(") lastOpenPosition = i;
    if (message[i] === ")") {
      const decodedString = decode(
          message.slice(0, lastOpenPosition) +
          message.slice(lastOpenPosition + 1, i)
            .split("").reverse().join("") +
          message.slice(i + 1)
      );
      return decodedString;
    }
  }
  return message;
}