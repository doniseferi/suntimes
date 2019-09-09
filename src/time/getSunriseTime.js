const getSunriseTimeBuilder = (getNoonTime, getHourAngle, decimalTimeToUtcDateTime) => {
  const getSunriseTime = (date, latitude, longitude) => {
    const solarNoon = getNoonTime(date, longitude);
    const sunriseAngleOfSunOnHorizon = -0.833333333;
    const hourAngleAtSunrise = getHourAngle(date, latitude, sunriseAngleOfSunOnHorizon);
    return solarNoon - hourAngleAtSunrise;
  };

  return Object.freeze({
    getSunriseDecimalTime: (date, latitude, longitude) => getSunriseTime(date, latitude, longitude),
    getSunriseDateTime: (date, latitude, longitude) => decimalTimeToUtcDateTime(date, getSunriseTime(date, latitude, longitude))
  });
};

export default getSunriseTimeBuilder;
