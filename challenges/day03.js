function findNaughtyStep(original, modified) {
  if (original === modified) return '';
  let shortestArray = [];
  let longestArray = [];
  if (original.length > modified.length) {
    longestArray = original;
    shortestArray = modified;
  } else {
    longestArray = modified;
    shortestArray = original;
  }
  for(let i = 0; i < longestArray.length; i++) {
    if (longestArray[i] !== shortestArray[i]) return longestArray[i]; 
  }
}

function findNaughtyStep2(original, modified) {
  for(let i = 0; i < Math.max(original.length, modified.length); i++) {
    if (original.charAt(i) !== modified.charAt(i)) {
      return (original.length > modified.length)
        ? original.charAt(i) : modified.charAt(i);
    }
  }
  return '';
}
