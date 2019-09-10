const declinationOfTheSunBuilder = (sine, cosine, arcsine, getDayOfTheYear) => {
  const errorMessage = (functionName) => `Please provide a function for ${functionName}.`;
  if (!sine) {
    throw new Error(errorMessage('sine'));
  }
  if (!cosine) {
    throw new Error(errorMessage('cosine'));
  }
  if (!arcsine) {
    throw new Error(errorMessage('arcsine'));
  }
  if (!getDayOfTheYear) {
    throw new Error(errorMessage('getDayOfTheYear'));
  }

  const getDeclinationOfTheSun = date => {
    if (!date) {
      throw new Error('Please provide a valid date');
    }
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
