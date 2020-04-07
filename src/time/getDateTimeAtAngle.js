const getDateTimeUtcFactory = (getNoonDateTimeUtc, getHourAngleSinceNoon) => {
  const throwUnsatisfiedDependencyError = (
    dependencyName,
    dependencyParams,
    dependencyReturnType
  ) => {
    throw new Error(
      `Unsatisfied Dependency Error:
      Please provide a function for ${dependencyName}.
      This dependency takes in params ${dependencyParams}
      and returns ${dependencyReturnType}`
    );
  };

  if (getNoonDateTimeUtc == null) {
    throwUnsatisfiedDependencyError(
      'getNoonDateTimeUtc',
      'date: Date, longitude: Number, angle: Number',
      'Date'
    );
  }

  if (getHourAngleSinceNoon == null) {
    throwUnsatisfiedDependencyError(
      'getHourAngleSinceNoon',
      'date: Date, latitude: Number, longitude: Number, hourAngle: Number',
      'Number'
    );
  }

  const throwError = (errorMessage) => {
    throw new Error(errorMessage);
  };

  const getDateTimeUtcOfAngleBeforeNoon = (
    angle,
    date,
    latitude,
    longitude
  ) =>
    isNaN(angle)
      ? throwError('Please provide a numeric value for angle param')
      : isNaN(Date.parse(date))
        ? throwError('Please provide a valid date')
        : isNaN(latitude)
          ? throwError('Please provide a numeric value for latitude param')
          : isNaN(longitude)
            ? throwError('Please provide a numeric value for longitude param')
            : toDateTimeUtc(
              date,
              longitude,
              getHourAngleSinceNoon(date, latitude, angle) * -1
            ).toISOString();

  const getDateTimeUtcOfAngleAfterNoon = (angle, date, latitude, longitude) =>
    isNaN(angle)
      ? throwError('Please provide a numeric value for angle param')
      : isNaN(Date.parse(date))
        ? throwError('Please provide a valid date')
        : isNaN(latitude)
          ? throwError('Please provide a numeric value for latitude param')
          : isNaN(longitude)
            ? throwError('Please provide a numeric value for longitude param')
            : toDateTimeUtc(
              date,
              longitude,
              getHourAngleSinceNoon(date, latitude, angle)
            ).toISOString();

  const toDateTimeUtc = (date, longitude, hourAngle) => {
    const solarNoonUtc = new Date(getNoonDateTimeUtc(date, longitude));
    return addHours(solarNoonUtc, hourAngle);
  };

  const addHours = (subject, scientificDecimalTime) => {
    const date = new Date();
    date.setTime(subject.getTime() + scientificDecimalTime * 60 * 60 * 1000);
    return date;
  };

  return Object.freeze({
    getDateTimeUtcOfAngleBeforeNoon,
    getDateTimeUtcOfAngleAfterNoon
  });
};

export default getDateTimeUtcFactory;
