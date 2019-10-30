const declinationOfTheSunFactory = (sine, cosine, arcsine, getDayOfTheYear) => {
  const throwUnsatisfiedDependencyError = (
    dependencyName,
    dependencyParams,
    depedencyReturnType
  ) => {
    throw new Error(
      `Unsatisfied Dependency Error:
      Please provide a function for ${dependencyName}.
      This dependency takes in ${dependencyParams}
      and returns ${depedencyReturnType}`
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
    const declinationOfTheSunInRadians = declinationOfTheSunAlgorithm(approxDaysAfterDecemberSolstice);
    return arcsine(-0.39779 * declinationOfTheSunInRadians);
  };

  const declinationOfTheSunAlgorithm = approxDaysAfterDecemberSolstice => {
    const zero360over365p24 = 0.98565;
    const eclipticLongitude = sine(zero360over365p24 * (approxDaysAfterDecemberSolstice - 2));
    const formula = zero360over365p24 * (approxDaysAfterDecemberSolstice + 10) + 1.914 * eclipticLongitude;
    return cosine(formula);
  };

  return Object.freeze({
    getDeclinationOfTheSun: date => getDeclinationOfTheSun(date)
  });
};

export default declinationOfTheSunFactory;
