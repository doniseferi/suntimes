const declinationOfTheSunFactory = (sine, cosine, arcsine, getDayOfTheYear) => {
  const throwUnsatisfiedDependencyError = (
    dependencyName,
    dependencyParams,
    dependencyReturnType
  ) => {
    throw new Error(
      `Unsatisfied Dependency Error:
      Please provide a function for ${dependencyName}.
      This dependency takes in ${dependencyParams}
      and returns ${dependencyReturnType}`
    );
  };

  if (!sine) {
    throwUnsatisfiedDependencyError('sine', 'x: Number', 'Number');
  }

  if (!cosine) {
    throwUnsatisfiedDependencyError('cosine', 'x: Number', 'Number');
  }

  if (!arcsine) {
    throwUnsatisfiedDependencyError('arcsine', 'x: Number', 'Number');
  }

  if (!getDayOfTheYear) {
    throwUnsatisfiedDependencyError('getDayOfTheYear', 'date: Date', 'Number');
  }

  const getDeclinationOfTheSun = date => {
    if (!date) {
      throw new Error('Please provide a valid date');
    }

    const approxDaysAfterDecemberSolstice = getDayOfTheYear(date) - 1;
    const declinationOfTheSunInRadians = declinationOfTheSunAlgorithm(
      approxDaysAfterDecemberSolstice
    );
    return arcsine(-0.39779 * declinationOfTheSunInRadians);
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
  /**
* The angular distance of the sun north or south of the earth's equator.
* @example <caption>Example usage of getDeclinationOfTheSun</caption>
* // returns -23.078780854838076
* getDeclinationOfTheSun(new Date(2019, 0, 1));
* @param {Date} date - A date instance
* @returns {number} The declination in degrees where north is a positive value and south is a negative value within a range of range of -23.45 and 23.45.
* @function
*/
    getDeclinationOfTheSun: (date) => getDeclinationOfTheSun(date)
  });
};

export { declinationOfTheSunFactory };
