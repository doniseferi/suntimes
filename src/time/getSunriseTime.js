const getSunriseTimeBuilder = (getNoonTime, getHourCircle, decimalTimeToUtcDateTime = null) => {
  const getSunriseTime = (date, latitude, longitude) => {
    const solarNoon = getNoonTime(date, longitude);
    const angle = -0.833333333;
    const hourCircle = getHourCircle(date, latitude, angle);
    return solarNoon - hourCircle;
  };

  return Object.freeze({
    getSunriseDecimalTime: (date, latitude, longitude) => getSunriseTime(date, latitude, longitude),
    getSunriseDateTime: (date, latitude, longitude) =>
      decimalTimeToUtcDateTime(
        date,
        getSunriseTime(date, latitude, longitude)
      )
  });
};

export default getSunriseTimeBuilder;
