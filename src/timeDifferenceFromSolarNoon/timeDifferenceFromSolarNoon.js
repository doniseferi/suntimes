const timeDifferenceBetweenSolarNoonBuilder = (sine, cosine, arccosine, getDeclinationOfTheSun) => {
  const algorithm = (date, angle, latitude) => {
    const declinationOfTheSun = getDeclinationOfTheSun(date);
    const top = -sine(angle) - sine(latitude) * sine(declinationOfTheSun);
    const bottom = cosine(latitude) * cosine(declinationOfTheSun);
    return 1 / 15 * arccosine(top / bottom);
  };

  return Object.freeze({
    timeDifferenceBetweenSolarNoon: (angle, latitude, date) => algorithm(angle, latitude, date)
  });
};

export default timeDifferenceBetweenSolarNoonBuilder;
