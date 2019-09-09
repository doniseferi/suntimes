const getSunsetTimeBuilder = (
  getNoonTime,
  getHourAngle,
  decimalTimeToUtcDateTime
) => {
  const getSunsetTime = (date, latitude, longitude) => {
    const solarNoon = getNoonTime(date, longitude);
    const sunsetAngleOfSunOnHorizon = -0.833333333;
    const hourAngle = getHourAngle(date, latitude, sunsetAngleOfSunOnHorizon);
    return solarNoon + hourAngle;
  };

  return Object.freeze({
    getSunsetDecimalTime: (date, latitude, longitude) => getSunsetTime(date, latitude, longitude),
    getSunsetDateTime: (date, latitude, longitude) => decimalTimeToUtcDateTime(date, getSunsetTime(date, latitude, longitude))
  });
};

export default getSunsetTimeBuilder;
