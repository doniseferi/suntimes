const getSunriseTimeBuilder = (getTimeSinceSolarNoon, getNoonTimeInDecimal) => {
  const getSunriseTimeInHours = (date, latitude, longitude, elevationInMeters = 0) => {
    // https://kosherjava.com/zmanim/docs/api/src-html/net/sourceforge/zmanim/util/AstronomicalCalculator.html
    const correction = 0.0347 * Math.sqrt(elevationInMeters);
    const angle = -0.833 + correction;
    const solarNoon = getNoonTimeInDecimal(date, longitude);
    const t = getTimeSinceSolarNoon(date, latitude, angle);
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
    getSunriseTime: (date, latitude, longitude, elevationInMeters = 0) =>
      toDate(
        date,
        getSunriseTimeInHours(date, latitude, longitude, elevationInMeters)
      )
  });
};

export default getSunriseTimeBuilder;
