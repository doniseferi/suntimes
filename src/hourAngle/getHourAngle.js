const getHourAngleFactory = (
  sine,
  cosine,
  arccosine,
  getDeclinationOfTheSun
) => {
  const getHourAngleSinceNoon = (date, latitude, angle) => {
    const declinationOfTheSun = getDeclinationOfTheSun(date);
    const top = sine(angle) - sine(latitude) * sine(declinationOfTheSun);
    const bottom = cosine(latitude) * cosine(declinationOfTheSun);

    return 0.0666666666666667 * arccosine(top / bottom);
  };

  return Object.freeze({
    getHourAngleSinceNoon: (date, latitude, angle) => getHourAngleSinceNoon(date, latitude, angle)
  });
};

export default getHourAngleFactory;
