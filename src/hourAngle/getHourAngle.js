const getHourAngleFactory = (
  sine,
  cosine,
  arccosine,
  getDeclinationOfTheSun
) => {
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

  const getHourAngleSinceNoon = (date, latitude, angle) => {
    const declinationOfTheSun = getDeclinationOfTheSun(date);
    const top = sine(angle) - sine(latitude) * sine(declinationOfTheSun);
    const bottom = cosine(latitude) * cosine(declinationOfTheSun);
    const arc = top / bottom;
    return 0.0666666666666667 * arccosine(arc);
  };

  return Object.freeze({
    getHourAngleSinceNoon
  });
};

export default getHourAngleFactory;
