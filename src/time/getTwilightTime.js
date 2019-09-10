const getTwilightTimeBuilder = (
  getNoonTime,
  getHourAngle,
  decimalTimeToUtcDateTime
) => {
  const raiseException = (dependency) => { throw new Error(`Please satisfy a dependecy for ${dependency}`); };

  if (!getNoonTime) {
    raiseException(getNoonTime);
  }
  if (!getHourAngle) {
    raiseException(getHourAngle);
  }
  if (!decimalTimeToUtcDateTime) {
    raiseException(decimalTimeToUtcDateTime);
  }

  const horizon = 0.57;
  const civilAngle = 6;
  const nauticalAngle = 12;
  const astronomicalAngle = 18;

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

  const getTwilightTime = (date, latitude, longitude) => {
    const astronomicalStartTime = getTilightAstronomicalStartTime(
      date,
      latitude,
      longitude
    );
    const getTilightAstronomicalEndTime = getTilightAstronomicalEndTime(
      date,
      latitude,
      longitude
    );
    const getTilightNauticalStartTime = getTilightNauticalStartTime(
      date,
      latitude,
      longitude
    );
    const getTilightNauticalStartTime = getTilightNauticalStartTime(
      date,
      latitude,
      longitude
    );
    const getTilightCivilStartTime = getTilightCivilStartTime(
      date,
      latitude,
      longitude
    );
        const getTilightCivilEndTime = getTilightCivilEndTime(
          date,
          latitude,
          longitude
        );

    return {
      twilightStartDateTime
    };
  };

  const getTime = (twilightAngle, date, latitude, longitude) =>
    getNoonTime(date, longitude) + getHourAngle(date, latitude, twilightAngle);

  return Object.freeze({
    getTwilightDecimalTime: (date, latitude, longitude) =>
      getTwilightTime(date, latitude, longitude),
    getTwilightDateTime: (date, latitude, longitude) =>
      getTwilightTime(date, latitude, longitude)
  });
};

export default getTwilightTimeBuilder;
