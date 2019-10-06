const getSunriseTimeBuilder = (getNoonTimeUtc, getHourAngle) => {
  const getSunriseTime = (date, latitude, longitude) => {
    const solarNoonUtc = getNoonTimeUtc(date, longitude);
    const sunriseAngleOfSunOnHorizon = -0.833333333;
    const hourAngleAtSunrise = getHourAngle(
      date,
      latitude,
      sunriseAngleOfSunOnHorizon
    );
    const inversedHourAngle = hourAngleAtSunrise * -1;
    return addHours(solarNoonUtc, inversedHourAngle);
  };

  const addHours = (subject, scientificDecimalTime) => {
    const date = new Date();
    date.setTime(subject.getTime() + scientificDecimalTime * 60 * 60 * 1000);
    return date;
  };

  return Object.freeze({
    getSunriseDateTimeUtc: (date, latitude, longitude) =>
      getSunriseTime(date, latitude, longitude)
  });
};

export default getSunriseTimeBuilder;
