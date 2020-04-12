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

  const throwSunAltitudeBelowAngleError = () => {
    throw new RangeError('The sun altitude never elevates above the angle specified');
  };

  const throwSunAltitudeAboveAngleError = () => {
    throw new RangeError('The sun altitude never drops below the angle specified');
  };

  const getHourAngleSinceNoon = (date, latitude, angle) => {
    const declinationOfTheSun = getDeclinationOfTheSun(date);
    const top = sine(angle) - sine(latitude) * sine(declinationOfTheSun);
    const bottom = cosine(latitude) * cosine(declinationOfTheSun);
    const arc = top / bottom;

    return (arc < -1)
      ? throwSunAltitudeAboveAngleError()
      : (arc > 1)
        ? throwSunAltitudeBelowAngleError()
        : 0.0666666666666667 * arccosine(arc);
  };

  return Object.freeze({
  /**
* Gets the hour angle difference between noon and the angle value.
* @example <caption>Example usage of getHourAngleSinceNoon</caption>
* // returns 5.54554469317797
* getHourAngleSinceNoon(new Date(2025, 0, 18), 51.477730, -12);
* @param {Date} date - A date instance.
* @param {number} latitude - A latitude value in the range of -90 to 90.
* @param {number} angle - An angle value.
* @throws {RangeError} The sun altitude never elevates above the angle specified.
* @throws {RangeError} The sun altitude never drops below the angle specified.
* @returns {number} A number whose value represents the hour angle since noon for the date, latitude and angle value.
* @function
*/
    getHourAngleSinceNoon: (date, latitude, angle) => getHourAngleSinceNoon(date, latitude, angle)
  });
};

export default getHourAngleFactory;
