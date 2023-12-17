function optimizeIntervals(intervals) {
  if (intervals.length <= 1) return intervals;

  intervals.sort((a, b) => a[0] - b[0]);

  const result = [intervals[0]];

  for (let i = 1; i < intervals.length; i++) {
    const interval = intervals[i];
    const lastInterval = result[result.length - 1];
    if (interval[0] <= lastInterval[1]) {
      lastInterval[1] = Math.max(lastInterval[1], interval[1]);
    } else {
      result.push(interval);
    }
  }

  return result;
}