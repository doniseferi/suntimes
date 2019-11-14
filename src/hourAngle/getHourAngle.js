const getHourAngleFactory = (
  sine,
  cosine,
  arccosine,
  getDeclinationOfTheSun
) => {
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

  if (sine == null) {
    throwUnsatisfiedDependencyError('sine', 'x: Number', 'Number');
  }
  if (cosine == null) {
    throwUnsatisfiedDependencyError('cosine', 'x: Number', 'Number');
  }
  if (arccosine == null) {
    throwUnsatisfiedDependencyError('arccosine', 'x: Number', 'Number');
  }
  if (getDeclinationOfTheSun == null) {
    throwUnsatisfiedDependencyError(
      'getDeclinationOfTheSun',
      'date: Date',
      'Number'
    );
  }

  /**
   * Gets the hour angle difference between noon and the angle value.
   *
   * @param {Date} date - A date instance.
   * @param {number} latitude - A latitude value in the range of -90 to 90.
   * @param {number} angle - An angle value.
   * @returns {number} A number whose value represents the hour angle since noon for the date instance, latitude and angle value.
   */
  const getHourAngleSinceNoon = (date, latitude, angle) => {
    const declinationOfTheSun = getDeclinationOfTheSun(date);
    const top = sine(angle) - sine(latitude) * sine(declinationOfTheSun);
    const bottom = cosine(latitude) * cosine(declinationOfTheSun);

    return 0.0666666666666667 * arccosine(top / bottom);
  };

  return Object.freeze({
    getHourAngleSinceNoon
  });
};

export default getHourAngleFactory;
