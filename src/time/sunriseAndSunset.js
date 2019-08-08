const sunriseAndSunsetBuilder = (
  sine,
  cosine,
  arccosine,
  getDeclinationOfTheSun,
  equationOfTime
) => {
  const sunrise = (date, latitude, longitude) => solarNoon(date, longitude) - timeBetweenAngle(-0.833, date, latitude);

  const sunset = (date, latitude, longitude) => solarNoon(date, longitude) + timeBetweenAngle(0.833, date, latitude);

  const solarNoon = (date, longitude) => 12 - (longitude / 15 + equationOfTime(date).hours);

  const timeBetweenAngle = (angle, date, latitude) => {
    const declinationOfTheSun = getDeclinationOfTheSun(date);
    const top = sine(angle) - sine(latitude) * sine(declinationOfTheSun);
    const bottom = cosine(latitude) * cosine(declinationOfTheSun);
    return 0.06666666666 * arccosine(top / bottom);
  };

  return Object.freeze({
    sunrise: (date, latitude, longitude) => sunrise(date, latitude, longitude),
    sunset: (date, latitude, longitude) => sunset(date, latitude, longitude),
    solarNoon: (date, longitude) => solarNoon(date, longitude)
  });
};

export default sunriseAndSunsetBuilder;
