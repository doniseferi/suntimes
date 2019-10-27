const getDateTimeUtcFactory = (getNoonDateTimeUtc, getHourAngleSinceNoon) => {
  const throwUnsatisfiedDependencyError = (dependencyName, dependencyParams, depedencyReturnType) => {
    throw new Error(
      `Unsatisfied Dependency Error:
      Please provide a function for ${dependencyName}.
      This dependency takes in params ${dependencyParams}
      and returns ${depedencyReturnType}`
    );
  };

  if (getNoonDateTimeUtc == null) {
    throwUnsatisfiedDependencyError(
      'getNoonDateTimeUtc',
      'date: Date, longitude: Number, angle: Number',
      'Date');
  }

  if (getHourAngleSinceNoon == null) {
    throwUnsatisfiedDependencyError(
      'getHourAngleSinceNoon',
      'date: Date, latitude: Number, longitude: Number, hourAngle: Number',
      'Number');
  }

  const getDateTimeUtcOfAngleBeforeNoon = (
    angle,
    date,
    latitude,
    longitude) =>
    toDateTimeUtc(
      date,
      longitude,
      getHourAngleSinceNoon(date, latitude, angle) * -1);

  const getDateTimeUtcOfAngleAfterNoon = (angle, date, latitude, longitude) =>
    toDateTimeUtc(
      date,
      longitude,
      getHourAngleSinceNoon(date, latitude, angle)
    );

  const toDateTimeUtc = (date, longitude, hourAngle) => {
    const solarNoonUtc = getNoonDateTimeUtc(date, longitude);
    return addHours(solarNoonUtc, hourAngle);
  };

  const addHours = (subject, scientificDecimalTime) => {
    const date = new Date();
    date.setTime(subject.getTime() + scientificDecimalTime * 60 * 60 * 1000);
    return date;
  };

  return Object.freeze({
    getDateTimeUtcOfAngleBeforeNoon: (angle, date, latitude, longitude) =>
      getDateTimeUtcOfAngleBeforeNoon(angle, date, latitude, longitude),
    getDateTimeUtcOfAngleAfterNoon: (angle, date, latitude, longitude) =>
      getDateTimeUtcOfAngleAfterNoon(angle, date, latitude, longitude)
  });
};

export default getDateTimeUtcFactory;
