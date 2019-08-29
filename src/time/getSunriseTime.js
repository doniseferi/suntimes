const getSunriseTimeBuilder = (getTimeSinceSolarNoon, getNoonTimeInDecimal) => {
  const getSunriseTimeInHours = (date, latitude, longitude) => {
    const solarNoon = getNoonTimeInDecimal(date, longitude);
    const t = getTimeSinceSolarNoon(date, latitude, -0.833);
    return solarNoon - t;
  };

  const toDate = (date, decimalTimeInHours) => {
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();

    const hour = decimalTimeInHours;
    const minutesInPercentage = decimalTimeInHours % 1;
    const minutes = minutesInPercentage * 60;
    const secondsInPercentage = minutes % 1;
    const seconds = secondsInPercentage * 60;
    const miliSecondsInPercentage = seconds % 1;
    const miliSeconds = miliSecondsInPercentage * 1000;

    return new Date(Date.UTC(year, month, day, hour, minutes, seconds, miliSeconds));
  };

  return Object.freeze({
    getSunriseTime: (date, latitude, longitude) => toDate(date, getSunriseTimeInHours(date, latitude, longitude))
  });
};

export default getSunriseTimeBuilder;
