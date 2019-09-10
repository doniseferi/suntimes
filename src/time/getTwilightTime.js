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

  const horizon = 0.57;
  const civilAngle = 6;
  const nauticalAngle = 12;
  const astronomicalAngle = 18;

  const getTime = (twilightAngle, date, latitude, longitude) =>
    getNoonTime(date, longitude) + getHourAngle(date, latitude, twilightAngle);

  const getTilightCivilEndTime = (date, latitude, longitude) =>
    getTime(horizon, date, latitude, longitude);

  const getTilightCivilStartTime = (date, latitude, longitude) =>
    getTime(civilAngle, date, latitude, longitude);

  const getTilightNauticalEndTime = (date, latitude, longitude) =>
    getTime(civilAngle, date, latitude, longitude);

  const getTilightNauticalStartTime = (date, latitude, longitude) =>
    getTime(nauticalAngle, date, latitude, longitude);

  const getTilightAstronomicalEndTime = (date, latitude, longitude) =>
    getTime(nauticalAngle, date, latitude, longitude);

  const getTilightAstronomicalStartTime = (date, latitude, longitude) =>
    getTime(astronomicalAngle, date, latitude, longitude);

  const astronomicalStartScientificDateTime = (date, latitude, longitude) =>
    toUtcDateTime(date, astronomicalStartScientificDecimalTime(date, latitude, longitude));

  const astronomicalEndScientificDateTime = (date, latitude, longitude) =>
    toUtcDateTime(date, astronomicalEndScientificDecimalTime(date, latitude, longitude));

  const nauticalStartScientificDateTime = (date, latitude, longitude) =>
    toUtcDateTime(date, nauticalStartScientificDecimalTime(date, latitude, longitude));

  const nauticalEndScientificDateTime = (date, latitude, longitude) =>
    toUtcDateTime(date, nauticalEndScientificDecimalTime(date, latitude, longitude));

  const civilStartScientificDateTime = (date, latitude, longitude) =>
    toUtcDateTime(date, civilStartScientificDecimalTime(date, latitude, longitude));

  const civilEndScientificDateTime = (date, latitude, longitude) =>
    toUtcDateTime(date, civilEndScientificDecimalTime(date, latitude, longitude));
};


return Object.freeze({

});
};

export default getTwilightTimeBuilder;
