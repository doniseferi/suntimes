const getTwilightTimeBuilder = (
  getNoonTime,
  getHourAngle,
  toUtcDateTime
) => {
  const raiseException = (dependency) => {
    throw new Error(`Please satisfy a dependecy for ${dependency}`);
  };

  if (!getNoonTime) {
    raiseException(getNoonTime);
  }
  if (!getHourAngle) {
    raiseException(getHourAngle);
  }
  if (!toUtcDateTime) {
    raiseException(toUtcDateTime);
  }

  const horizon = -0.57;
  const civilAngle = -6;
  const nauticalAngle = -12;
  const astronomicalAngle = -18;

  const getScientificDecimalTime = (angle, date, latitude, longitude) => {
    const solarNoon = getNoonTime(date, longitude);
    const hourAngleAtSunrise = getHourAngle(date, latitude, angle);
    return solarNoon - hourAngleAtSunrise;
  };

  const getTwilightCivilStartTime = (date, latitude, longitude) =>
    getScientificDecimalTime(civilAngle, date, latitude, longitude);

  const getTwilightCivilEndTime = (date, latitude, longitude) =>
    getScientificDecimalTime(horizon, date, latitude, longitude);

  const getTwilightNauticalEndTime = (date, latitude, longitude) =>
    getScientificDecimalTime(civilAngle, date, latitude, longitude);

  const getTwilightNauticalStartTime = (date, latitude, longitude) =>
    getScientificDecimalTime(nauticalAngle, date, latitude, longitude);

  const getTwilightAstronomicalEndTime = (date, latitude, longitude) =>
    getScientificDecimalTime(nauticalAngle, date, latitude, longitude);

  const getTwilightAstronomicalStartTime = (date, latitude, longitude) =>
    getScientificDecimalTime(astronomicalAngle, date, latitude, longitude);

  const getTwilightCivilStartDateTime = (date, latitude, longitude) =>
    toUtcDateTime(date, getTwilightCivilStartTime(civilAngle, date, latitude, longitude));

  const getTwilightCivilEndDateTime = (date, latitude, longitude) =>
    toUtcDateTime(date, getTwilightCivilEndTime(horizon, date, latitude, longitude));

  const getTwilightNauticalEndDateTime = (date, latitude, longitude) =>
    toUtcDateTime(date, getTwilightNauticalEndTime(civilAngle, date, latitude, longitude));

  const getTwilightNauticalStartDateTime = (date, latitude, longitude) =>
    toUtcDateTime(date, getTwilightNauticalStartTime(nauticalAngle, date, latitude, longitude));

  const getTwilightAstronomicalEndDateTime = (date, latitude, longitude) =>
    toUtcDateTime(date, getTwilightAstronomicalEndTime(date, latitude, longitude));

  const getTwilightAstronomicalStartDateTime = (date, latitude, longitude) =>
    toUtcDateTime(date, getTwilightAstronomicalStartTime(date, latitude, longitude));

  return Object.freeze({
    getTwilightCivilStartDateTime: (date, latitude, longitude) => getTwilightCivilStartDateTime(date, latitude, longitude),
    getTwilightCivilEndDateTime: (date, latitude, longitude) => getTwilightCivilEndDateTime(date, latitude, longitude),
    getTwilightCivilStartDecimalTime: (date, latitude, longitude) => getTwilightCivilStartTime(date, latitude, longitude),
    getTwilightCivilEndDecimalTime: (date, latitude, longitude) => getTwilightCivilEndTime(date, latitude, longitude),
    getTwilightNauticalStartDateTime: (date, latitude, longitude) => getTwilightNauticalStartDateTime(date, latitude, longitude),
    getTwilightNauticalEndDateTime: (date, latitude, longitude) => getTwilightNauticalEndDateTime(date, latitude, longitude),
    getTwilightNauticalStartDecimalTime: (date, latitude, longitude) => getTwilightNauticalStartTime(date, latitude, longitude),
    getTwilightNauticalEndDecimalTime: (date, latitude, longitude) => getTwilightNauticalEndTime(date, latitude, longitude),
    getTwilightAstronomicalStartDateTime: (date, latitude, longitude) => getTwilightAstronomicalStartDateTime(date, latitude, longitude),
    getTwilightAstronomicalEndDateTime: (date, latitude, longitude) => getTwilightAstronomicalEndDateTime(date, latitude, longitude),
    getTwilightAstronomicalStartDecimalTime: (date, latitude, longitude) => getTwilightAstronomicalStartTime(date, latitude, longitude),
    getTwilightAstronomicalEndDecimalTime: (date, latitude, longitude) => getTwilightAstronomicalEndTime(date, latitude, longitude)
  });
};

export default getTwilightTimeBuilder;
