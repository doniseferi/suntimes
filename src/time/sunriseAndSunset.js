const timeDifferenceBetweenSolarNoonBuilder = (
  sine,
  cosine,
  getDeclinationOfTheSun
) => {
  const sunrise = (date, latitude) => algorithm(-0.833, date, latitude);

  const sunset = (date, latitude) => algorithm(0.833, date, latitude);

  const algorithm = (angle, date, latitude) => {
    const declinationOfTheSun = getDeclinationOfTheSun(date);
    const top = sine(angle) - sine(latitude) * sine(declinationOfTheSun);
    const bottom = cosine(latitude) * cosine(declinationOfTheSun);
    const hourAngle = top / bottom;
    const result = cosine(hourAngle);
    return result;
  };

  return Object.freeze({
    sunrise: (date, latitude) => sunrise(date, latitude),
    sunset: (date, latitude) => sunset(date, latitude)
  });
};

export default timeDifferenceBetweenSolarNoonBuilder;
