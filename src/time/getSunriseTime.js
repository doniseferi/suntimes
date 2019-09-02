const getSunriseTimeBuilder = (getNoonTime, getHourCircle) => {
  const getSunriseTime = (date, latitude, longitude) => {
    const solarNoon = getNoonTime(date, longitude);
    const angle = -0.833333333;
    const hourCircle = getHourCircle(date, latitude, angle);
    return solarNoon - hourCircle;
  };

  const toDate = (date, hourCircle) => {
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();

    const hour = hourCircle;
    const minutesInPercentage = hourCircle % 1;
    const minutes = minutesInPercentage * 60;
    const secondsInPercentage = minutes % 1;
    const seconds = secondsInPercentage * 60;
    const miliSecondsInPercentage = seconds % 1;
    const miliSeconds = miliSecondsInPercentage * 1000;

    return new Date(Date.UTC(year, month, day, hour, minutes, seconds, miliSeconds));
  };

  return Object.freeze({
    getSunriseDateTime: (date, latitude, longitude) =>
      toDate(
        date,
        getSunriseTime(date, latitude, longitude)
      )
  });
};

export default getSunriseTimeBuilder;
