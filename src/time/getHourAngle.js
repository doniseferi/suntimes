const getHourCircleBuilder = (
  sine,
  cosine,
  arccosine,
  getDeclinationOfTheSun
) => {
  const getHourCircleInTime = (date, latitude, angle) => {
    const declinationOfTheSun = getDeclinationOfTheSun(date);
    const top = sine(angle) - ((sine(latitude) * sine(declinationOfTheSun)));
    const bottom = cosine(latitude) * cosine(declinationOfTheSun);

    return 0.06666666666666667 * arccosine(top / bottom);
  };

  return Object.freeze({
    getHourCircle: (date, latitude, angle) => getHourCircleInTime(date, latitude, angle)
  });
};

export default getHourCircleBuilder;
