const sunriseAndSunsetBuilder = (
  sine,
  cosine,
  arccosine,
  getDeclinationOfTheSun,
  equationOfTime
) => {
  const sunrise = (date, latitude, longitude) => solarNoon(date, longitude) - timeBetweenAngle(-0.833, date, latitude);

  const sunset = (date, latitude, longitude) => solarNoon(date, longitude) + timeBetweenAngle(0.833, date, latitude);

  const solarNoon = (date, longitude) => {
    const eot = equationOfTime(date);
    const hrs = eot.hours;

    return 12 - (longitude / 15 + hrs);
  };

  return Object.freeze({
    sunrise: (date, latitude, longitude) => sunrise(date, latitude, longitude),
    sunset: (date, latitude, longitude) => sunset(date, latitude, longitude),
    solarNoon: (date, longitude) => solarNoon(date, longitude)
  });
};

export default sunriseAndSunsetBuilder;
