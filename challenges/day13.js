function calculateTimeFaster(deliveries) {
  const sevenHoursInSeconds = 25200;
  let totalSeconds = 0;

  for (let i = 0; i < deliveries.length; i++) {
    const [hours, minutes, seconds] = deliveries[i].split(":");
    totalSeconds +=
      Number(hours) * 3600 + Number(minutes) * 60 + Number(seconds);
  }

  let dif = totalSeconds - sevenHoursInSeconds;
  const sign = dif >= 0 ? "" : "-";
  dif = Math.abs(dif);
  const hours = Math.floor(dif / 3600).toString().padStart(2, "0");
  const minutes = Math.floor((dif % 3600) / 60).toString().padStart(2, "0");
  const seconds = (dif % 60).toString().padStart(2, "0");

  return `${sign}${hours}:${minutes}:${seconds}`;
}

function calculateTime(deliveries) {
  const sevenHoursInSeconds = 25200;
  let totalSeconds = 0;

  const hmsToSeven = (time) => {
    let dif = (time - sevenHoursInSeconds);
    const sign = dif >= 0 ? "+" : "-";
    dif = Math.abs(dif);
    const seconds = dif % 60;
    const minutes = Math.floor(dif / 60) % 60;
    const hours = Math.floor(dif / 60 / 60)
    return { sign, timeTo: [hours, minutes, seconds] };
  }

  const toString = (sign, time) => {
    let [hours, minutes, seconds] = time;
    let hour;
    if (sign === "+") {
      hour = (hours).toString().padStart(2, "0");
    } else {
      hour = `-${hours.toString().padStart(2, "0")}`;
    }
    const min = minutes.toString().padStart(2, "0");
    const sec = seconds.toString().padStart(2, "0");
    return `${hour}:${min}:${sec}`;
  }
  for (const deliverie of deliveries) {
    const [hours, minutes, seconds] = deliverie.split(":");
    totalSeconds +=
      Number(hours) * 3600 + Number(minutes) * 60 + Number(seconds);
  }
  const hhmmss = hmsToSeven(totalSeconds);
  const result = toString(hhmmss.sign, hhmmss.timeTo);
  return result;
}
