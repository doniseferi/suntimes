const sunriseAndSunsetBuilder = (
  sine,
  cosine,
  arccosine,
  getDeclinationOfTheSun,
  equationOfTime
) => {
  const sunrise = (date, latitude) => algorithm(-0.833, date, latitude);

  const sunset = (date, latitude) => algorithm(0.833, date, latitude);

  const solarNoon = 12 - (longitude / 15 + equationOfTime(date).hours);

  const algorithm = (angle, date, latitude) => {
    const declinationOfTheSun = getDeclinationOfTheSun(date);
    const top = sine(angle) - sine(latitude) * sine(declinationOfTheSun);
    const bottom = cosine(latitude) * cosine(declinationOfTheSun);
    return 0.06666666666 * arccosine(top / bottom);
  };

  return Object.freeze({
    sunrise: (date, latitude) => sunrise(date, latitude),
    sunset: (date, latitude) => sunset(date, latitude)
  });
};

export default sunriseAndSunsetBuilder;
