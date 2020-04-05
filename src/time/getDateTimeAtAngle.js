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

  const validate = (angle, date, latitude, longitude, methodName) => {
    if (angle == null) {
      throw new Error(`Please provide an angle for ${methodName}.`);
    }
    if (date == null) {
      throw new Error(`Please provide the desired date for ${methodName}.`);
    }
    if (latitude == null || isNaN(latitude)) {
      throw new Error(
        `Please provide the latitude of the location for ${methodName}.`
      );
    }
    if (longitude == null || isNaN(longitude)) {
      throw new Error(
        `Please provide the longitude of the location for ${methodName}.`
      );
    }
  };

  const getDateTimeUtcOfAngleBeforeNoon = (
    angle,
    date,
    latitude,
    longitude
  ) => {
    validate(
      angle,
      date,
      latitude,
      longitude,
      'getDateTimeUtcOfAngleBeforeNoon'
    );

    return toDateTimeUtc(
      date,
      longitude,
      getHourAngleSinceNoon(date, latitude, angle) * -1
    );
  };

  const getDateTimeUtcOfAngleAfterNoon = (angle, date, latitude, longitude) => {
    validate(
      angle,
      date,
      latitude,
      longitude,
      'getDateTimeUtcOfAngleAfterNoon'
    );

    return toDateTimeUtc(
      date,
      longitude,
      getHourAngleSinceNoon(date, latitude, angle)
    );
  };

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
