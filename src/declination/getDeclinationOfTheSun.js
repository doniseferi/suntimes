const declinationOfTheSunBuilder = (sine, cosine, arcsine, getDayOfTheYear) => {
  const getDeclinationOfTheSun = date => {
    const approxDaysAfterDecemberSolstice = getDayOfTheYear(date) - 1;
    const declinationOfTheSunInRadians = declinationOfTheSunAlgorithm(
      approxDaysAfterDecemberSolstice
    );
    return -arcsine(0.39779 * declinationOfTheSunInRadians);
  };

  const declinationOfTheSunAlgorithm = approxDaysAfterDecemberSolstice => {
    const zero360over365p24 = 0.98565;
    const eclipticLongitude = sine(
      zero360over365p24 * (approxDaysAfterDecemberSolstice - 2)
    );
    const formula =
      zero360over365p24 * (approxDaysAfterDecemberSolstice + 10) +
      1.914 * eclipticLongitude;
    return cosine(formula);
  };

  return Object.freeze({
    getDeclinationOfTheSun: date => getDeclinationOfTheSun(date)
  });
};

export default declinationOfTheSunBuilder;
