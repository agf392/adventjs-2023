function findBalancedSegment(message) {
  let sum = 0;
  let longestSegment = [];
  let longestSegmentLength = 0;
  let sumMap = {0: -1};

  for (let i = 0; i < message.length; i++) {
    sum += message[i] === 0 ? -1 : 1;
    if (sumMap[sum] !== undefined) {
      let segmentLength = i - sumMap[sum];
      if (segmentLength > longestSegmentLength) {
        longestSegmentLength = segmentLength;
        longestSegment = [sumMap[sum] + 1, i];
      }
    } else {
      sumMap[sum] = i;
    }
  }

  return longestSegment;
}