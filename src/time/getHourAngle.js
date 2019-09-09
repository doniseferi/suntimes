const getHourAngleBuilder = (
  sine,
  cosine,
  arccosine,
  getDeclinationOfTheSun
) => {
  const getHourAngleInTime = (date, latitude, angle) => {
    const declinationOfTheSun = getDeclinationOfTheSun(date);
    const top = sine(angle) - sine(latitude) * sine(declinationOfTheSun);
    const bottom = cosine(latitude) * cosine(declinationOfTheSun);

    return 0.06666666666666667 * arccosine(top / bottom);
  };

  return Object.freeze({
    getHourAngle: (date, latitude, angle) => getHourAngleInTime(date, latitude, angle)
  });
};

export default getHourAngleBuilder;
