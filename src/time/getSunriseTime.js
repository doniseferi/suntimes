const getSunriseTimeBuilder = (getNoonTime, getHourAngle, toUtcDateTime) => {
  const getSunriseTime = (
    date,
    latitude,
    longitude,
    utcOffset = getUtcOffset(longitude)
  ) => {
    const solarNoon = getNoonTime(date, longitude);
    const sunriseAngleOfSunOnHorizon = -0.833333333;
    const hourAngleAtSunrise = getHourAngle(
      date,
      latitude,
      sunriseAngleOfSunOnHorizon
    );
    const hour = solarNoon.hour - hourAngleAtSunrise;
    let offsetInDays = 0;
    const offset = hour + utcOffset;
    if (offset >= 23.99) offsetInDays = 1;
    else if (offset < 0) offsetInDays = -1;
    return {
      hour,
      offsetInDays
    };
  };

  const getUtcOffset = longitude => {
    console.log(longitude);
    return 0;
  };

  return Object.freeze({
    getSunriseDecimalTime: (date, latitude, longitude) =>
      getSunriseTime(date, latitude, longitude),
    getSunriseDateTime: (date, latitude, longitude) =>
      toUtcDateTime(date, getSunriseTime(date, latitude, longitude))
  });
};

export default getSunriseTimeBuilder;
